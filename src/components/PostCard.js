import Link from 'next/link'
import { format } from 'date-fns'

export default function PostCard({ post }) {
  return (
    <article className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200">
      {/* Optional featured image */}
      {post.featuredImage && (
        <div className="aspect-w-16 aspect-h-9 overflow-hidden">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        {/* Post categories */}
        {post.categories && post.categories.length > 0 && (
          <div className="mb-2 flex flex-wrap gap-2">
            {post.categories.map((category) => (
              <span 
                key={category}
                className="inline-block text-xs font-medium uppercase tracking-wider bg-gray-100 px-2 py-1"
              >
                {category}
              </span>
            ))}
          </div>
        )}
        
        {/* Post title */}
        <h2 className="text-xl font-semibold mb-2">
          <Link href={`/blog/${post.slug}`} className="hover:underline no-underline">
            {post.title}
          </Link>
        </h2>
        
        {/* Post excerpt */}
        <p className="text-gray-700 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        {/* Post metadata */}
        <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
          <div className="flex items-center">
            {post.author && (
              <>
                <span>By {post.author}</span>
              </>
            )}
          </div>
          
          {post.date && (
            <time dateTime={post.date}>
              {format(new Date(post.date), 'MMMM d, yyyy')}
            </time>
          )}
        </div>
      </div>
    </article>
  )
}
