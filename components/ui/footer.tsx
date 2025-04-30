import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full border-t border-border bg-background py-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <Link href="/" className="flex items-center space-x-2 no-underline">
              <span className="text-lg font-bold tracking-tighter">
                lumeki<span className="text-secondary">.online</span>
              </span>
            </Link>
            <p className="text-center text-sm text-secondary md:text-left">
              Блог о том, как ИИ меняет нашу жизнь и упрощает работу
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-4 md:items-end">
            <nav className="flex gap-4 sm:gap-6">
              <Link 
                href="/" 
                className="text-sm font-medium text-secondary hover:text-foreground transition-colors no-underline"
              >
                Главная
              </Link>
              <Link 
                href="/articles" 
                className="text-sm font-medium text-secondary hover:text-foreground transition-colors no-underline"
              >
                Статьи
              </Link>
              <Link 
                href="/about" 
                className="text-sm font-medium text-secondary hover:text-foreground transition-colors no-underline"
              >
                О проекте
              </Link>
            </nav>
            <p className="text-center text-sm text-secondary md:text-right">
              &copy; {new Date().getFullYear()} Lumeki. Все права защищены.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
