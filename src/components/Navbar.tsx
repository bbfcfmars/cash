import Link from 'next/link'
import AnimatedLogo from './AnimatedLogo'

// Navbar component with updated logo and styling
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-mute-turtle/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <AnimatedLogo />
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/signup" className="bg-turtle text-white px-4 py-2 rounded-lg hover:bg-mute-turtle transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 