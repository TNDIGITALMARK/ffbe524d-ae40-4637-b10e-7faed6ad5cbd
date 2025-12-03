// ============================================
// GOULBURN GREYHOUND RACING CLUB NAVIGATION
// Professional club branding and navigation
// ============================================

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function RacingNavigation() {
  return (
    <nav className="bg-[hsl(var(--racing-navy))] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-[hsl(var(--racing-green))] rounded-full flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-white"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-extrabold text-base tracking-wide uppercase leading-none">
                GOULBURN
              </span>
              <span className="text-[hsl(var(--racing-gold))] font-extrabold text-base tracking-wide uppercase leading-none">
                GREYHOUND RACING CLUB
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white hover:text-[hsl(var(--racing-gold))] font-semibold text-sm uppercase tracking-wide transition-colors"
            >
              Races
            </Link>
            <Link
              href="/greyhounds"
              className="text-white hover:text-[hsl(var(--racing-gold))] font-semibold text-sm uppercase tracking-wide transition-colors"
            >
              Dogs
            </Link>
            <Link
              href="/tracks"
              className="text-white hover:text-[hsl(var(--racing-gold))] font-semibold text-sm uppercase tracking-wide transition-colors"
            >
              Schedule
            </Link>
            <Link
              href="/profiles"
              className="text-white hover:text-[hsl(var(--racing-gold))] font-semibold text-sm uppercase tracking-wide transition-colors"
            >
              Profiles
            </Link>
            <Link
              href="/news"
              className="text-white hover:text-[hsl(var(--racing-gold))] font-semibold text-sm uppercase tracking-wide transition-colors"
            >
              News
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-[hsl(var(--racing-gold))] font-semibold text-sm uppercase tracking-wide transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="hidden md:inline-flex text-white hover:text-[hsl(var(--racing-gold))] hover:bg-[hsl(var(--racing-navy))]/80 font-semibold text-sm uppercase"
            >
              Login
            </Button>
            <Button
              size="sm"
              className="bg-[hsl(var(--racing-green))] text-white hover:bg-[hsl(var(--racing-green))]/90 font-bold text-sm uppercase tracking-wide shadow-button"
            >
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
