// ============================================
// RACING NAVIGATION COMPONENT
// Pixel-perfect header matching design reference
// ============================================

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function RacingNavigation() {
  return (
    <nav className="bg-[hsl(var(--racing-navy))] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[hsl(var(--racing-gold))] rounded flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7 text-[hsl(var(--racing-navy))]"
              >
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 2.18l8 4V17c0 4.52-3.03 8.73-8 9.93-4.97-1.2-8-5.41-8-9.93V8.18l8-4z"/>
                <path d="M9.5 11.5L11 10l1.5 1.5L14 10l-2.5 2.5L14 15l-1.5-1.5L11 15l-1.5-1.5L8 15l1.5-2.5z"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[hsl(var(--racing-gold))] font-extrabold text-lg tracking-wide uppercase leading-none">
                GREYHOUND
              </span>
              <span className="text-white font-extrabold text-lg tracking-wide uppercase leading-none">
                GOLD
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
              href="/betting"
              className="text-white hover:text-[hsl(var(--racing-gold))] font-semibold text-sm uppercase tracking-wide transition-colors"
            >
              Betting Slip
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
              className="bg-[hsl(var(--racing-gold))] text-[hsl(var(--racing-navy))] hover:bg-[hsl(var(--racing-gold))]/90 font-bold text-sm uppercase tracking-wide shadow-button"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
