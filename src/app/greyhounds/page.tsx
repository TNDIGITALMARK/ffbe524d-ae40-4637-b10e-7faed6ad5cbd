// ============================================
// GREYHOUND PROFILES PAGE
// Comprehensive database of racing greyhounds
// ============================================

import { RacingNavigation } from '@/components/racing/navigation';
import { RacingFooter } from '@/components/racing/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { mockGreyhounds } from '@/data/mock-racing-data';
import { Trophy, TrendingUp, DollarSign, Calendar } from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function GreyhoundsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[hsl(var(--background))]">
      <RacingNavigation />

      {/* Page Header */}
      <section className="bg-[hsl(var(--racing-navy))] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 uppercase">
            Greyhound <span className="text-[hsl(var(--racing-gold))]">Profiles</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Explore detailed statistics, racing history, and performance analytics for our featured racing greyhounds.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockGreyhounds.map((dog) => (
            <Card key={dog.id} className="bg-white shadow-md hover:shadow-lg transition-shadow border-[hsl(var(--border))]">
              <CardContent className="p-6">
                {/* Greyhound Photo Placeholder */}
                <div className="w-full h-48 bg-gradient-to-br from-[hsl(var(--racing-gold))]/20 to-[hsl(var(--racing-navy))]/20 rounded-lg mb-4 flex items-center justify-center">
                  <Trophy className="w-16 h-16 text-[hsl(var(--racing-gold))]" />
                </div>

                {/* Greyhound Info */}
                <h3 className="text-xl font-bold text-[hsl(var(--foreground))] mb-2">
                  {dog.name}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[hsl(var(--muted-foreground))]">Trainer</span>
                    <span className="font-semibold text-[hsl(var(--foreground))]">{dog.trainer}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[hsl(var(--muted-foreground))]">Age</span>
                    <span className="font-semibold text-[hsl(var(--foreground))]">{dog.age} years</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[hsl(var(--muted-foreground))]">Color</span>
                    <span className="font-semibold text-[hsl(var(--foreground))]">{dog.color}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[hsl(var(--muted-foreground))]">Weight</span>
                    <span className="font-semibold text-[hsl(var(--foreground))]">{dog.weight}kg</span>
                  </div>
                </div>

                {/* Performance Stats */}
                <div className="border-t border-[hsl(var(--border))] pt-4 mb-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Trophy className="w-4 h-4 text-[hsl(var(--racing-gold))]" />
                        <span className="text-xs text-[hsl(var(--muted-foreground))] uppercase">Wins</span>
                      </div>
                      <div className="text-2xl font-bold text-[hsl(var(--racing-navy))]">
                        {dog.careerWins}
                      </div>
                      <div className="text-xs text-[hsl(var(--muted-foreground))]">
                        / {dog.careerStarts} starts
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <TrendingUp className="w-4 h-4 text-[hsl(var(--racing-green))]" />
                        <span className="text-xs text-[hsl(var(--muted-foreground))] uppercase">Best</span>
                      </div>
                      <div className="text-2xl font-bold text-[hsl(var(--racing-navy))]">
                        {dog.bestTime}s
                      </div>
                      <div className="text-xs text-[hsl(var(--muted-foreground))]">
                        500m
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Form */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-[hsl(var(--muted-foreground))]" />
                    <span className="text-xs text-[hsl(var(--muted-foreground))] uppercase font-semibold">
                      Recent Form
                    </span>
                  </div>
                  <div className="flex gap-1">
                    {dog.recentForm.split('-').map((pos, idx) => (
                      <div
                        key={idx}
                        className={`w-8 h-8 flex items-center justify-center rounded text-sm font-bold ${
                          pos === '1'
                            ? 'bg-[hsl(var(--racing-gold))] text-white'
                            : pos === '2'
                            ? 'bg-gray-300 text-[hsl(var(--foreground))]'
                            : pos === '3'
                            ? 'bg-amber-600 text-white'
                            : 'bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))]'
                        }`}
                      >
                        {pos}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Earnings */}
                <div className="flex items-center justify-between mb-4 p-3 bg-[hsl(var(--muted))] rounded">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[hsl(var(--racing-green))]" />
                    <span className="text-sm font-semibold text-[hsl(var(--foreground))]">Career Earnings</span>
                  </div>
                  <span className="text-lg font-bold text-[hsl(var(--racing-green))]">
                    £{dog.earnings.toLocaleString()}
                  </span>
                </div>

                {/* View Profile Button */}
                <Link href={`/greyhounds/${dog.id}`}>
                  <Button className="w-full bg-[hsl(var(--racing-navy))] hover:bg-[hsl(var(--racing-navy))]/90 text-white font-bold uppercase tracking-wide">
                    View Full Profile
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <RacingFooter />
    </div>
  );
}
