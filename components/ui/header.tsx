import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Header = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 no-underline">
          <span className="text-xl font-bold tracking-tighter">
            lumeki<span className="text-secondary">.online</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-8">
          <Link 
            href="/" 
            className={`no-underline text-sm font-medium transition-colors ${
              pathname === '/' ? 'text-foreground font-semibold' : 'text-secondary hover:text-foreground'
            }`}
          >
            Главная
          </Link>
          <Link 
            href="/articles" 
            className={`no-underline text-sm font-medium transition-colors ${
              pathname === '/articles' || pathname.startsWith('/articles/') 
                ? 'text-foreground font-semibold' 
                : 'text-secondary hover:text-foreground'
            }`}
          >
            Статьи
          </Link>
          <Link 
            href="/about" 
            className={`no-underline text-sm font-medium transition-colors ${
              pathname === '/about' ? 'text-foreground font-semibold' : 'text-secondary hover:text-foreground'
            }`}
          >
            О проекте
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button 
          type="button"
          className="md:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-secondary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Открыть меню</span>
          {mobileMenuOpen ? (
            <svg 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border">
          <div className="container mx-auto px-4 py-3 sm:px-6">
            <Link 
              href="/" 
              className={`block py-2 text-base font-medium ${
                pathname === '/' ? 'text-foreground font-semibold' : 'text-secondary'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Главная
            </Link>
            <Link 
              href="/articles" 
              className={`block py-2 text-base font-medium ${
                pathname === '/articles' || pathname.startsWith('/articles/') 
                  ? 'text-foreground font-semibold' 
                  : 'text-secondary'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Статьи
            </Link>
            <Link 
              href="/about" 
              className={`block py-2 text-base font-medium ${
                pathname === '/about' ? 'text-foreground font-semibold' : 'text-secondary'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              О проекте
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
