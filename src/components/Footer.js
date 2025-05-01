import Link from 'next/link'
import Container from './ui/Container'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and tagline */}
          <div>
            <Link href="/" className="font-bold text-xl no-underline">
              LUMEKI
            </Link>
            <p className="mt-2 text-gray-600">
              AI integration made simple.
            </p>
            <p className="mt-6 text-gray-500 text-sm">
              &copy; {currentYear} Lumeki. All rights reserved.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 list-none pl-0">
              <li>
                <Link href="/" className="text-gray-600 hover:text-black transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-black transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-black transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-black transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Connect
            </h3>
            <ul className="space-y-2 list-none pl-0">
              <li>
                <a 
                  href="https://twitter.com/lumeki" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors duration-200"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/igorlipkin/lumeki-online" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors duration-200"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="mailto:yo@lumeki.online" 
                  className="text-gray-600 hover:text-black transition-colors duration-200"
                >
                  yo@lumeki.online
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  )
}
