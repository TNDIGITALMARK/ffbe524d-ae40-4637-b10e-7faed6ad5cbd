// ============================================
// RACING FOOTER COMPONENT
// Matching design reference footer style
// ============================================

import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export function RacingFooter() {
  return (
    <footer className="bg-[hsl(var(--racing-navy))] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-[hsl(var(--racing-gold))] font-bold text-sm uppercase tracking-wide mb-4">
              About Us
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[hsl(var(--racing-gold))] text-sm transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-300 hover:text-[hsl(var(--racing-gold))] text-sm transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-[hsl(var(--racing-gold))] text-sm transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-[hsl(var(--racing-gold))] font-bold text-sm uppercase tracking-wide mb-4">
              Contact
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[hsl(var(--racing-gold))] text-sm transition-colors">
                  Get in Touch
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-300 hover:text-[hsl(var(--racing-gold))] text-sm transition-colors">
                  Support Center
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-[hsl(var(--racing-gold))] text-sm transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-[hsl(var(--racing-gold))] font-bold text-sm uppercase tracking-wide mb-4">
              Terms
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-[hsl(var(--racing-gold))] text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-[hsl(var(--racing-gold))] text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/responsible-gambling" className="text-gray-300 hover:text-[hsl(var(--racing-gold))] text-sm transition-colors">
                  Responsible Gambling
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Copyright */}
          <div>
            <h3 className="text-[hsl(var(--racing-gold))] font-bold text-sm uppercase tracking-wide mb-4">
              Privacy
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Gamble responsibly. 18+ only.
            </p>
            <div className="flex space-x-4 mb-4">
              <Link
                href="https://facebook.com"
                className="text-gray-300 hover:text-[hsl(var(--racing-gold))] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://twitter.com"
                className="text-gray-300 hover:text-[hsl(var(--racing-gold))] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="https://instagram.com"
                className="text-gray-300 hover:text-[hsl(var(--racing-gold))] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 GREYHOUND GOLD. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
