import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { getPostBySlug } from '@/lib/mdx';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Статья не найдена',
    };
  }
  
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author || 'Команда Lumeki'],
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }
  
  const formattedDate = format(new Date(post.date), 'd MMMM yyyy', { locale: ru });
  
  return (
    <article className="max-w-3xl mx-auto">
      <Link 
        href="/articles"
        className="text-sm font-medium text-secondary hover:text-primary transition-colors mb-8 inline-block"
      >
        ← Все статьи
      </Link>
      
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tighter mb-4">
          {post.title}
        </h1>
        
        {post.description && (
          <p className="text-xl text-secondary mb-4">
            {post.description}
          </p>
        )}
        
        <div className="flex items-center gap-3 text-sm text-secondary">
          <span>{post.author || 'Команда Lumeki'}</span>
          <span>•</span>
          <time dateTime={post.date}>{formattedDate}</time>
          {post.readingTime && (
            <>
              <span>•</span>
              <span>{post.readingTime}</span>
            </>
          )}
        </div>
      </header>
      
      {post.image && (
        <div className="mb-8 bg-muted rounded-lg overflow-hidden h-64 sm:h-96 flex items-center justify-center">
          {/* Здесь будет изображение */}
          <span className="text-secondary">Обложка статьи</span>
        </div>
      )}
      
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
      
      {post.tags && post.tags.length > 0 && (
        <div className="mt-8 pt-6 border-t border-border">
          <h3 className="text-lg font-medium mb-3">Теги</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <Link 
                key={tag}
                href={`/tags/${tag}`}
                className="bg-muted px-3 py-1 rounded-full text-sm text-secondary hover:bg-border transition-colors no-underline"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      )}
      
      <div className="mt-12 pt-6 border-t border-border">
        <h3 className="text-lg font-medium mb-4">Поделиться статьей</h3>
        <div className="flex gap-4">
          <a 
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://lumeki.online/${params.slug}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-primary transition-colors"
          >
            Twitter
          </a>
          <a 
            href={`https://t.me/share/url?url=${encodeURIComponent(`https://lumeki.online/${params.slug}`)}&text=${encodeURIComponent(post.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-primary transition-colors"
          >
            Telegram
          </a>
          <a 
            href={`https://vk.com/share.php?url=${encodeURIComponent(`https://lumeki.online/${params.slug}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-primary transition-colors"
          >
            VK
          </a>
        </div>
      </div>
    </article>
  );
}
