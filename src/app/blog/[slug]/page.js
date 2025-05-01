import { notFound } from 'next/navigation'
import { format } from 'date-fns'
import Container from '@/components/ui/Container'
import PostBody from '@/components/PostBody'
import { getPostBySlug, getPostSlugs } from '@/lib/mdx'

// Generate metadata for this page
export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found | Lumeki',
    }
  }
  
  return {
    title: `${post.frontMatter.title} | Lumeki`,
    description: post.frontMatter.excerpt,
    openGraph: {
      title: post.frontMatter.title,
      description: post.frontMatter.excerpt,
      type: 'article',
      publishedTime: post.frontMatter.date,
      authors: post.frontMatter.author,
    },
  }
}

// Generate static params for all posts
export async function generateStaticParams() {
  const slugs = getPostSlugs()
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ''),
  }))
}

export default async function PostPage({ params }) {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    notFound()
  }
  
  return (
    <Container className="py-16">
      <article className="max-w-3xl mx-auto">
        {/* Post Header */}
        <header className="mb-10">
          {/* Categories */}
          {post.frontMatter.categories && (
            <div className="mb-4 flex flex-wrap gap-2">
              {post.frontMatter.categories.map((category) => (
                <span 
                  key={category}
                  className="inline-block text-xs font-medium uppercase tracking-wider bg-gray-100 px-2 py-1"
                >
                  {category}
                </span>
              ))}
            </div>
          )}
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {post.frontMatter.title}
          </h1>
          
          {/* Meta */}
          <div className="flex items-center gap-4 text-gray-600 mb-4">
            {post.frontMatter.author && (
              <span className="font-medium">
                By {post.frontMatter.author}
              </span>
            )}
            
            {post.frontMatter.date && (
              <time dateTime={post.frontMatter.date} className="text-gray-500">
                {format(new Date(post.frontMatter.date), 'MMMM d, yyyy')}
              </time>
            )}
          </div>
          
          {/* Excerpt */}
          {post.frontMatter.excerpt && (
            <p className="text-xl text-gray-700 leading-relaxed">
              {post.frontMatter.excerpt}
            </p>
          )}
        </header>
        
        {/* Featured Image */}
        {post.frontMatter.featuredImage && (
          <div className="mb-10 rounded-lg overflow-hidden">
            <img
              src={post.frontMatter.featuredImage}
              alt={post.frontMatter.title}
              className="w-full h-auto"
            />
          </div>
        )}
        
        {/* Post Content */}
        <PostBody content={post.contentHtml} mdxSource={post.mdxSource} />
        
        {/* Article Footer */}
        <footer className="mt-12 pt-6 border-t border-gray-200">
          {/* Share Links */}
          <div className="flex flex-wrap gap-4">
            <span className="text-gray-600 font-medium">Share:</span>
            <a 
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.frontMatter.title)}&url=${encodeURIComponent(`https://lumeki.online/blog/${post.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black"
            >
              Twitter
            </a>
            <a 
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://lumeki.online/blog/${post.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black"
            >
              LinkedIn
            </a>
          </div>
        </footer>
      </article>
    </Container>
  )
}
