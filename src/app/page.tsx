// ============================================
// GOULBURN GREYHOUND RACING CLUB - HOME PAGE
// Professional racing club dashboard
// ============================================

import { RacingNavigation } from '@/components/racing/navigation';
import { RacingFooter } from '@/components/racing/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { mockRaces, mockGreyhounds, todaysSchedule } from '@/data/mock-racing-data';
import { Clock, TrendingUp, Trophy, MapPin } from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  // Get next 3 upcoming races
  const upcomingRaces = mockRaces.slice(0, 3);

  // Get featured greyhounds
  const featuredGreyhounds = mockGreyhounds.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-[hsl(var(--background))]">
      <RacingNavigation />

      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-br from-[hsl(var(--racing-navy))] to-[hsl(var(--racing-navy))]/80 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, hsl(var(--racing-gold)) 1px, transparent 1px),
                             linear-gradient(-45deg, hsl(var(--racing-gold)) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Hero Overlay Effect */}
        <div className="absolute inset-0 hero-overlay" />

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-[hsl(var(--racing-gold))]" />
              <span className="text-[hsl(var(--racing-gold))] font-bold text-lg uppercase tracking-wide">
                Goulburn, NSW
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 uppercase leading-tight">
              Goulburn Greyhound
              <br />
              <span className="text-[hsl(var(--racing-gold))]">Racing Club</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-200">
              Experience the thrill of greyhound racing at one of NSW's premier racing venues. 
              Join us for exciting race meets, community events, and world-class entertainment.
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-[hsl(var(--racing-green))] hover:bg-[hsl(var(--racing-green))]/90 text-white font-bold text-base uppercase tracking-wide shadow-button px-8 py-6"
              >
                View Races
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[hsl(var(--racing-navy))] font-bold text-base uppercase tracking-wide px-8 py-6"
              >
                About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Live Updates & Schedule */}
          <div className="lg:col-span-2 space-y-8">
            {/* Live Race Updates */}
            <Card className="bg-[hsl(var(--card))] shadow-md border-[hsl(var(--border))]">
              <CardHeader className="bg-[hsl(var(--racing-navy))] text-white rounded-t-lg">
                <CardTitle className="text-sm uppercase tracking-wide font-bold flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Live Race Updates
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {upcomingRaces.slice(0, 2).map((race) => (
                    <div key={race.id} className="border-b border-[hsl(var(--border))] pb-4 last:border-0">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-bold text-[hsl(var(--foreground))]">
                            Race {race.raceNumber} - {race.trackName}
                          </h4>
                          <p className="text-sm text-[hsl(var(--muted-foreground))]">
                            {race.distance}m • {new Date(race.postTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                        <span className="text-xs bg-[hsl(var(--racing-green))] text-white px-3 py-1 rounded-full font-semibold uppercase">
                          {race.status}
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        {race.participants.slice(0, 3).map((p) => (
                          <div key={p.trapNumber} className="bg-[hsl(var(--muted))] p-2 rounded">
                            <div className="font-semibold text-[hsl(var(--foreground))]">
                              Trap {p.trapNumber}
                            </div>
                            <div className="text-[hsl(var(--muted-foreground))] truncate">
                              {p.greyhoundName}
                            </div>
                            <div className="text-[hsl(var(--racing-gold))] font-bold">
                              {p.odds}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Live Race Results */}
            <Card className="bg-white shadow-md border-[hsl(var(--border))]">
              <CardHeader className="bg-[hsl(var(--racing-navy))] text-white rounded-t-lg">
                <CardTitle className="text-sm uppercase tracking-wide font-bold">
                  Recent Results
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[hsl(var(--border))]">
                        <th className="text-left py-2 font-bold text-[hsl(var(--foreground))] uppercase text-xs">Race</th>
                        <th className="text-left py-2 font-bold text-[hsl(var(--foreground))] uppercase text-xs">Track</th>
                        <th className="text-left py-2 font-bold text-[hsl(var(--foreground))] uppercase text-xs">Winner</th>
                        <th className="text-right py-2 font-bold text-[hsl(var(--foreground))] uppercase text-xs">Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {todaysSchedule.filter(s => s.status === 'completed').map((race, idx) => (
                        <tr key={idx} className="border-b border-[hsl(var(--border))] last:border-0">
                          <td className="py-3 text-[hsl(var(--foreground))]">{race.race}</td>
                          <td className="py-3 text-[hsl(var(--foreground))]">{race.track}</td>
                          <td className="py-3 text-[hsl(var(--foreground))]">Trap 3</td>
                          <td className="py-3 text-right text-[hsl(var(--racing-gold))] font-semibold">28.45s</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Today's Schedule */}
            <Card className="bg-white shadow-md border-[hsl(var(--border))]">
              <CardHeader>
                <CardTitle className="text-base font-bold text-[hsl(var(--foreground))] uppercase">
                  Today's Schedule at Goulburn
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {todaysSchedule.slice(0, 5).map((race, idx) => (
                    <div key={idx} className="flex items-center justify-between py-2 border-b border-[hsl(var(--border))] last:border-0">
                      <div className="flex items-center gap-3">
                        <Clock className="w-4 h-4 text-[hsl(var(--racing-gold))]" />
                        <div>
                          <div className="font-semibold text-[hsl(var(--foreground))]">{race.track}</div>
                          <div className="text-xs text-[hsl(var(--muted-foreground))]">Race {race.race} • {race.distance}m</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-[hsl(var(--foreground))]">{race.time}</div>
                        <div className={`text-xs font-semibold ${race.status === 'completed' ? 'text-[hsl(var(--muted-foreground))]' : 'text-[hsl(var(--racing-green))]'}`}>
                          {race.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Club Info & Featured Greyhounds */}
          <div className="space-y-6">
            {/* Club Information Card */}
            <Card className="bg-[hsl(var(--racing-navy))] text-white shadow-md">
              <CardHeader>
                <CardTitle className="text-sm uppercase tracking-wide font-bold flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[hsl(var(--racing-gold))]" />
                  Goulburn Racing Club
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[hsl(var(--racing-gold))] mb-2">Location</h4>
                  <p className="text-sm text-gray-200">
                    Braidwood Road<br />
                    Goulburn, NSW 2580
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[hsl(var(--racing-gold))] mb-2">Contact</h4>
                  <p className="text-sm text-gray-200">
                    Phone: (02) 4821 2699<br />
                    Email: info@goulburngreys.com.au
                  </p>
                </div>
                <Button
                  size="sm"
                  className="w-full bg-[hsl(var(--racing-green))] hover:bg-[hsl(var(--racing-green))]/90 text-white font-bold text-xs uppercase"
                >
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            {/* Featured Greyhound Profiles */}
            <Card className="bg-white shadow-md border-[hsl(var(--border))]">
              <CardHeader className="bg-[hsl(var(--racing-navy))] text-white rounded-t-lg">
                <CardTitle className="text-sm uppercase tracking-wide font-bold flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-[hsl(var(--racing-gold))]" />
                  Featured Greyhounds
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                {featuredGreyhounds.map((dog) => (
                  <div key={dog.id} className="border-b border-[hsl(var(--border))] pb-4 last:border-0">
                    <div className="w-full h-24 bg-gradient-to-br from-[hsl(var(--racing-gold))]/20 to-[hsl(var(--racing-navy))]/20 rounded-lg mb-3 flex items-center justify-center">
                      <Trophy className="w-10 h-10 text-[hsl(var(--racing-gold))]" />
                    </div>
                    <h4 className="font-bold text-[hsl(var(--foreground))] mb-1">{dog.name}</h4>
                    <p className="text-xs text-[hsl(var(--muted-foreground))] mb-2">
                      Trainer: {dog.trainer}
                    </p>
                    <div className="flex justify-between items-center text-xs mb-3">
                      <span className="text-[hsl(var(--muted-foreground))]">Career Stats</span>
                      <span className="font-bold text-[hsl(var(--foreground))]">{dog.careerWins}/{dog.careerStarts}</span>
                    </div>
                    <Link href={`/greyhounds/${dog.id}`}>
                      <Button
                        size="sm"
                        className="w-full bg-[hsl(var(--racing-gold))] hover:bg-[hsl(var(--racing-gold))]/90 text-[hsl(var(--racing-navy))] font-bold text-xs uppercase"
                      >
                        View Profile
                      </Button>
                    </Link>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <RacingFooter />
    </div>
  );
}
