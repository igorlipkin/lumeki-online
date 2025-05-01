'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Container from './Container'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled ? 'bg-white shadow-sm py-3' : 'bg-white/90 backdrop-blur-sm py-5'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl no-underline">
            LUMEKI
          </Link>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="/" active={pathname === '/'}>
              Home
            </NavLink>
            <NavLink href="/blog" active={pathname === '/blog' || pathname.startsWith('/blog/')}>
              Blog
            </NavLink>
            <NavLink href="/about" active={pathname === '/about'}>
              About
            </NavLink>
            <Link 
              href="/contact" 
              className="button-primary no-underline"
            >
              Contact
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            type="button"
            className="md:hidden text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </Container>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 py-4">
          <Container>
            <nav className="flex flex-col space-y-4">
              <MobileNavLink href="/" active={pathname === '/'}>
                Home
              </MobileNavLink>
              <MobileNavLink href="/blog" active={pathname === '/blog' || pathname.startsWith('/blog/')}>
                Blog
              </MobileNavLink>
              <MobileNavLink href="/about" active={pathname === '/about'}>
                About
              </MobileNavLink>
              <Link 
                href="/contact"
                className="button-primary w-full text-center no-underline"
              >
                Contact
              </Link>
            </nav>
          </Container>
        </div>
      )}
    </header>
  )
}

function NavLink({ href, active, children }) {
  return (
    <Link 
      href={href}
      className={`text-sm font-medium transition-colors duration-200 no-underline
        ${active 
          ? 'text-black border-b-2 border-black' 
          : 'text-gray-700 hover:text-black hover:border-b-2 hover:border-gray-300'
        }`}
    >
      {children}
    </Link>
  )
}

function MobileNavLink({ href, active, children }) {
  return (
    <Link
      href={href}
      className={`block px-2 py-1 text-base font-medium transition-colors duration-200 no-underline
        ${active
          ? 'text-black bg-gray-100'
          : 'text-gray-700 hover:bg-gray-50 hover:text-black'
        }`}
    >
      {children}
    </Link>
  )
}
