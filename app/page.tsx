import Link from 'next/link';
import PostCard from '@/components/post-card';
import Newsletter from '@/components/newsletter';
import { getPosts } from '@/lib/mdx';

export default async function Home() {
  const posts = await getPosts();
  const featuredPosts = posts.slice(0, 3);

  return (
    <div className="space-y-16">
      {/* Hero section */}
      <section className="py-12 md:py-20">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter">
              ИИ простыми словами для жизни и работы
            </h1>
            <p className="text-xl text-secondary">
              Узнайте, как искусственный интеллект может сделать вашу жизнь проще и эффективнее.
              Без сложных терминов, только практичные советы.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/articles" 
                className="button button-primary no-underline"
              >
                Читать статьи
              </Link>
              <Link 
                href="/about" 
                className="button button-secondary no-underline"
              >
                О проекте
              </Link>
            </div>
          </div>
          <div className="relative h-64 w-full md:h-96 bg-muted rounded-lg dot-pattern overflow-hidden flex items-center justify-center">
            <span className="text-5xl md:text-6xl font-bold text-accent">lumeki</span>
          </div>
        </div>
      </section>

      {/* Featured posts */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Свежие публикации</h2>
          <Link 
            href="/articles" 
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Все статьи →
          </Link>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.length > 0 ? (
            featuredPosts.map((post) => (
              <PostCard 
                key={post.slug} 
                post={post} 
              />
            ))
          ) : (
            <div className="col-span-full">
              <div className="card text-center py-12">
                <h3 className="font-medium mb-2">Скоро здесь появятся статьи</h3>
                <p className="text-secondary">Первые публикации уже готовятся</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Topics */}
      <section className="bg-muted py-12 -mx-4 sm:-mx-6 px-4 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Что вы найдете на Lumeki</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="card bg-background">
              <h3 className="text-xl font-semibold mb-2">Обзоры инструментов ИИ</h3>
              <p className="text-secondary">Исследуем и тестируем новейшие инструменты искусственного интеллекта</p>
            </div>
            <div className="card bg-background">
              <h3 className="text-xl font-semibold mb-2">Практические руководства</h3>
              <p className="text-secondary">Пошаговые инструкции по применению ИИ в повседневных задачах</p>
            </div>
            <div className="card bg-background">
              <h3 className="text-xl font-semibold mb-2">Автоматизация процессов</h3>
              <p className="text-secondary">Как автоматизировать рутинные задачи с помощью ИИ-инструментов</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
}
