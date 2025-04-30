import { Metadata } from 'next';
import PostCard from '@/components/post-card';
import { getPosts } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'Статьи | Lumeki.online',
  description: 'Статьи и руководства о практическом применении искусственного интеллекта в повседневной жизни и работе',
};

export default async function ArticlesPage() {
  const posts = await getPosts();
  
  return (
    <div>
      <header className="mb-12">
        <h1 className="text-4xl font-bold leading-tight tracking-tighter mb-4">
          Статьи
        </h1>
        <p className="text-xl text-secondary">
          Полезные материалы о том, как применять ИИ в жизни и работе
        </p>
      </header>
      
      {posts.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-2">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="border border-border rounded-lg p-12 text-center">
          <h2 className="text-2xl font-medium mb-2">Скоро здесь появятся статьи</h2>
          <p className="text-secondary">
            Мы уже работаем над первыми публикациями. Заходите чуть позже!
          </p>
        </div>
      )}
    </div>
  );
}
