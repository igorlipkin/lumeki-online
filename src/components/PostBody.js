'use client'

import { MDXRemote } from 'next-mdx-remote'

// Custom components for MDX content
const components = {
  h1: (props) => <h1 {...props} className="text-3xl font-bold mt-8 mb-4" />,
  h2: (props) => <h2 {...props} className="text-2xl font-bold mt-6 mb-3" />,
  h3: (props) => <h3 {...props} className="text-xl font-semibold mt-5 mb-2" />,
  p: (props) => <p {...props} className="mb-4 leading-relaxed" />,
  ul: (props) => <ul {...props} className="mb-4 pl-6 list-disc" />,
  ol: (props) => <ol {...props} className="mb-4 pl-6 list-decimal" />,
  li: (props) => <li {...props} className="mb-1" />,
  code: (props) => (
    <code
      {...props}
      className="font-mono bg-gray-100 rounded px-1 py-0.5"
    />
  ),
  pre: (props) => (
    <pre
      {...props}
      className="font-mono bg-gray-100 p-4 rounded-md overflow-x-auto my-6"
    />
  ),
  blockquote: (props) => (
    <blockquote
      {...props}
      className="border-l-4 border-gray-200 pl-4 italic text-gray-700 my-6"
    />
  ),
  a: (props) => (
    <a
      {...props}
      className="text-black underline underline-offset-4 decoration-gray-300 hover:decoration-black transition-all duration-200"
    />
  ),
  img: (props) => (
    <img
      {...props}
      className="my-6 rounded-md max-w-full h-auto"
      loading="lazy"
    />
  ),
  table: (props) => (
    <div className="overflow-x-auto my-6">
      <table {...props} className="w-full border-collapse" />
    </div>
  ),
  th: (props) => (
    <th
      {...props}
      className="border border-gray-300 bg-gray-100 px-4 py-2 text-left font-semibold"
    />
  ),
  td: (props) => (
    <td {...props} className="border border-gray-300 px-4 py-2" />
  ),
}

export default function PostBody({ content, mdxSource }) {
  // If we have MDX source, render it with our custom components
  if (mdxSource) {
    return (
      <div className="prose prose-lg max-w-none">
        <MDXRemote {...mdxSource} components={components} />
      </div>
    )
  }
  
  // Fallback to HTML rendering if no MDX source
  return (
    <div 
      className="prose prose-lg max-w-none" 
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
