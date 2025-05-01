# Lumeki Online - AI Integration Blog

A minimal, elegant blog about AI integration built with Next.js and hosted on Vercel.

## Features

- Clean, minimalist black and white design inspired by Apple/Medium/Stripe
- Fast and SEO-friendly thanks to Next.js 13 App Router
- MDX content for rich, interactive blog posts
- Mobile-first responsive design
- Easy to edit from an iPhone with remote GitHub editing
- Fully customizable with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 16.8.0 or later
- Git

### Installation

1. Clone this repository:
```bash
git clone https://github.com/igorlipkin/lumeki-online.git
cd lumeki-online
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Content Management

### Adding Blog Posts

1. Create a new MDX file in the `content/posts` directory
2. Add frontmatter at the top of the file:
```mdx
---
title: 'Your Post Title'
excerpt: 'A brief summary of your post'
date: '2023-05-15'
author: 'Your Name'
categories: ['Category 1', 'Category 2']
---

Your content here...
```

3. Write your content using Markdown/MDX syntax
4. The post will automatically appear in the blog listing

### Editing from iPhone

You can edit your blog directly from your iPhone using:

1. **GitHub Mobile App** - Edit files directly from the GitHub mobile app
2. **Working Copy** - A Git client for iOS that allows you to clone, edit, and push changes
3. **iSH** - A Linux shell for iOS that can run Git

## Deployment

### Deploying to Vercel

1. Push your changes to your GitHub repository
2. Connect your repository to Vercel
3. Vercel will automatically deploy changes when you push to the main branch

### Custom Domain

1. Add your domain in the Vercel dashboard
2. Update DNS settings as directed by Vercel
3. Set up HTTPS (automatically handled by Vercel)

## Future Improvements

- Add a newsletter subscription system
- Implement a commenting system
- Add analytics
- Create a search function
- Set up social sharing previews

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or feedback, reach out to [yo@lumeki.online](mailto:yo@lumeki.online).
