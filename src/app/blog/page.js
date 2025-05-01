import Container from '@/components/ui/Container'
import PostCard from '@/components/PostCard'
import { getPosts } from '@/lib/mdx'

export const metadata = {
  title: 'Blog | Lumeki',
  description: 'Explore our articles on AI integration, tools, and practical applications.',
}

export default async function BlogPage() {
  const posts = await getPosts()
  
  return (
    <Container className="py-16">
      <header className="mb-12 max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">The Lumeki Blog</h1>
        <p className="text-xl text-gray-700">
          Practical insights on integrating AI into your daily life and work.
        </p>
      </header>
      
      {posts.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-500">
          <p>Coming soon! We're working on our first articles.</p>
        </div>
      )}
    </Container>
  )
}
