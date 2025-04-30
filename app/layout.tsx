import './globals.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap'
});

export const metadata: Metadata = {
  title: {
    default: 'Lumeki.online — Блог об ИИ и его интеграции в жизнь',
    template: '%s | Lumeki.online'
  },
  description: 'Блог о том, как искусственный интеллект меняет нашу жизнь и как с его помощью упростить работу',
  keywords: ['ИИ', 'искусственный интеллект', 'AI', 'технологии', 'продуктивность'],
  authors: [{ name: 'Lumeki Team' }],
  creator: 'Lumeki.online',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://lumeki.online',
    title: 'Lumeki.online — Блог об ИИ и его интеграции в жизнь',
    description: 'Блог о том, как искусственный интеллект меняет нашу жизнь и как с его помощью упростить работу',
    siteName: 'Lumeki.online',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumeki.online — Блог об ИИ',
    description: 'Блог о том, как искусственный интеллект меняет нашу жизнь и как с его помощью упростить работу',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} font-sans min-h-screen flex flex-col bg-background text-foreground`}>
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6 py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
