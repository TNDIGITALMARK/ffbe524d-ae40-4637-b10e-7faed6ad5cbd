// ============================================
// GOULBURN GREYHOUND RACING CLUB FOOTER
// Professional club footer with contact information
// ============================================

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Phone, Mail, MapPin } from 'lucide-react';

export function RacingFooter() {
  return (
    <footer className="bg-[hsl(var(--racing-navy))] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Club Information */}
          <div>
            <h3 className="text-[hsl(var(--racing-gold))] font-bold text-sm uppercase tracking-wide mb-4">
              Goulburn Greyhound Racing Club
            </h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[hsl(var(--racing-gold))] mt-0.5 flex-shrink-0" />
                <div>
                  <p>Braidwood Road</p>
                  <p>Goulburn, NSW 2580</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[hsl(var(--racing-gold))] flex-shrink-0" />
                <a href="tel:0248212699" className="hover:text-[hsl(var(--racing-gold))] transition-colors">
                  (02) 4821 2699
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[hsl(var(--racing-gold))] flex-shrink-0" />
                <a href="mailto:info@goulburngreys.com.au" className="hover:text-[hsl(var(--racing-gold))] transition-colors">
                  info@goulburngreys.com.au
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[hsl(var(--racing-gold))] font-bold text-sm uppercase tracking-wide mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[hsl(var(--racing-gold))] text-sm transition-colors">
                  Race Schedule
                </Link>
              </li>
              <li>
                <Link href="/greyhounds" className="text-gray-300 hover:text-[hsl(var(--racing-gold))] text-sm transition-colors">
                  Greyhounds
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[hsl(var(--racing-gold))] text-sm transition-colors">
                  About the Club
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-300 hover:text-[hsl(var(--racing-gold))] text-sm transition-colors">
                  News & Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-[hsl(var(--racing-gold))] font-bold text-sm uppercase tracking-wide mb-4">
              Information
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/membership" className="text-gray-300 hover:text-[hsl(var(--racing-gold))] text-sm transition-colors">
                  Membership
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="text-gray-300 hover:text-[hsl(var(--racing-gold))] text-sm transition-colors">
                  Facilities
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[hsl(var(--racing-gold))] text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/responsible-gambling" className="text-gray-300 hover:text-[hsl(var(--racing-gold))] text-sm transition-colors">
                  Responsible Gambling
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Connect */}
          <div>
            <h3 className="text-[hsl(var(--racing-gold))] font-bold text-sm uppercase tracking-wide mb-4">
              Connect With Us
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Follow us on social media for the latest updates, race results, and club news.
            </p>
            <div className="flex space-x-4 mb-4">
              <Link
                href="https://facebook.com/goulburngreys"
                className="text-gray-300 hover:text-[hsl(var(--racing-gold))] transition-colors"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://twitter.com/goulburngreys"
                className="text-gray-300 hover:text-[hsl(var(--racing-gold))] transition-colors"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="https://instagram.com/goulburngreys"
                className="text-gray-300 hover:text-[hsl(var(--racing-gold))] transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
            <p className="text-gray-400 text-xs">
              Gamble responsibly. 18+ only.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Goulburn Greyhound Racing Club. All rights reserved.
            </p>
            <div className="flex gap-4 text-xs text-gray-400">
              <Link href="/privacy" className="hover:text-[hsl(var(--racing-gold))] transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-[hsl(var(--racing-gold))] transition-colors">
                Terms of Service
              </Link>
              <span>•</span>
              <Link href="/accessibility" className="hover:text-[hsl(var(--racing-gold))] transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
