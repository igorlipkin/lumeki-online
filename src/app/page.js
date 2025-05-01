import Link from 'next/link'
import Container from '@/components/ui/Container'
import PostCard from '@/components/PostCard'
import { getPosts } from '@/lib/mdx'

export default async function Home() {
  const posts = await getPosts(3) // Get 3 latest posts
  
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 border-b border-gray-200">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-5xl font-bold tracking-tight mb-6">
              AI Integration Made Simple
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Discover how to seamlessly integrate AI into your daily life and work.
              No technical jargon, just practical insights and straightforward guides.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/blog" className="button-primary no-underline">
                Read the Blog
              </Link>
              <Link href="/about" className="button-secondary no-underline">
                About Lumeki
              </Link>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Latest Posts Section */}
      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-bold mb-8 text-center">Latest Posts</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/blog" className="button-secondary">
              View All Posts
            </Link>
          </div>
        </Container>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold mb-12 text-center">
            Understanding AI, One Article at a Time
          </h2>
          <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
            <div>
              <h3 className="text-xl font-semibold mb-3">Practical AI Use Cases</h3>
              <p className="text-gray-700">
                Discover how AI tools can be applied to real-world scenarios to save time and increase productivity.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Simplified Explanations</h3>
              <p className="text-gray-700">
                Complex AI concepts translated into easy-to-understand language for non-technical readers.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Step-by-Step Guides</h3>
              <p className="text-gray-700">
                Follow along with detailed tutorials on implementing AI tools into your workflow.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">AI Tool Reviews</h3>
              <p className="text-gray-700">
                Honest assessments of the latest AI applications, highlighting strengths and limitations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Future Trends</h3>
              <p className="text-gray-700">
                Stay ahead of the curve with insights on emerging AI technologies and their potential impact.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Ethical Considerations</h3>
              <p className="text-gray-700">
                Thoughtful discussions on responsible AI usage and navigating potential ethical dilemmas.
              </p>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 border-t border-gray-200">
        <Container>
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-700 mb-6">
              Subscribe to receive the latest articles and updates on AI integration.
            </p>
            <form className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                required
              />
              <button type="submit" className="button-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </Container>
      </section>
    </>
  )
}
