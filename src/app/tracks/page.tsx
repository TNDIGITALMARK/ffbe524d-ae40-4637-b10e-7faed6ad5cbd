// ============================================
// TRACK INFORMATION HUB PAGE
// Complete guide to participating racing tracks
// ============================================

import { RacingNavigation } from '@/components/racing/navigation';
import { RacingFooter } from '@/components/racing/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { mockTracks } from '@/data/mock-racing-data';
import { MapPin, Cloud, TrendingUp, Calendar, Users, Clock } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function TracksPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[hsl(var(--background))]">
      <RacingNavigation />

      {/* Page Header */}
      <section className="bg-[hsl(var(--racing-navy))] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 uppercase">
            Goulburn Racing <span className="text-[hsl(var(--racing-gold))]">Schedule</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Complete schedule, track conditions, and facility information for Goulburn Greyhound Racing Club, NSW Australia.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {mockTracks.map((track) => (
            <Card key={track.id} className="bg-white shadow-lg border-[hsl(var(--border))] overflow-hidden">
              {/* Track Header */}
              <CardHeader className="bg-gradient-to-r from-[hsl(var(--racing-navy))] to-[hsl(var(--racing-navy))]/90 text-white">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-2xl font-extrabold uppercase mb-2">
                      {track.name}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-gray-200">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{track.location}</span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-[hsl(var(--racing-gold))] text-2xl font-bold">
                        {track.upcomingRaces.length}
                      </div>
                      <div className="text-xs text-gray-300 uppercase">Races Today</div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Track Information */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Track Status Banner */}
                    <div className="bg-[hsl(var(--muted))] rounded-lg p-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-center gap-3">
                          <Cloud className="w-5 h-5 text-[hsl(var(--racing-navy))]" />
                          <div>
                            <div className="text-xs text-[hsl(var(--muted-foreground))] uppercase">Weather</div>
                            <div className="font-semibold text-[hsl(var(--foreground))]">
                              {track.weatherCondition}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <TrendingUp className="w-5 h-5 text-[hsl(var(--racing-green))]" />
                          <div>
                            <div className="text-xs text-[hsl(var(--muted-foreground))] uppercase">Track</div>
                            <div className="font-semibold text-[hsl(var(--foreground))] capitalize">
                              {track.trackCondition}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Users className="w-5 h-5 text-[hsl(var(--racing-gold))]" />
                          <div>
                            <div className="text-xs text-[hsl(var(--muted-foreground))] uppercase">Capacity</div>
                            <div className="font-semibold text-[hsl(var(--foreground))]">
                              {track.capacity.toLocaleString()}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Track Details */}
                    <div>
                      <h3 className="text-lg font-bold text-[hsl(var(--foreground))] mb-3 uppercase">
                        Track Details
                      </h3>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-[hsl(var(--muted-foreground))]">Surface Type</span>
                          <div className="font-semibold text-[hsl(var(--foreground))] capitalize">
                            {track.surfaceType}
                          </div>
                        </div>
                        <div>
                          <span className="text-[hsl(var(--muted-foreground))]">Distances Available</span>
                          <div className="font-semibold text-[hsl(var(--foreground))]">
                            {track.distanceOptions.join('m, ')}m
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Facilities */}
                    <div>
                      <h3 className="text-lg font-bold text-[hsl(var(--foreground))] mb-3 uppercase">
                        Facilities
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {track.facilities.map((facility, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-[hsl(var(--racing-navy))] text-white text-xs font-semibold rounded-full"
                          >
                            {facility}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Upcoming Races */}
                    {track.upcomingRaces.length > 0 && (
                      <div>
                        <h3 className="text-lg font-bold text-[hsl(var(--foreground))] mb-3 uppercase">
                          Upcoming Races
                        </h3>
                        <div className="space-y-2">
                          {track.upcomingRaces.map((race) => (
                            <div
                              key={race.id}
                              className="flex items-center justify-between p-3 bg-[hsl(var(--muted))] rounded-lg"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-[hsl(var(--racing-gold))] rounded-full flex items-center justify-center text-[hsl(var(--racing-navy))] font-bold">
                                  {race.raceNumber}
                                </div>
                                <div>
                                  <div className="font-semibold text-[hsl(var(--foreground))]">
                                    Race {race.raceNumber} - {race.distance}m
                                  </div>
                                  <div className="text-xs text-[hsl(var(--muted-foreground))]">
                                    {race.participants.length} runners
                                  </div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="font-bold text-[hsl(var(--racing-navy))]">
                                  {new Date(race.postTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </div>
                                <div className="text-xs text-[hsl(var(--racing-green))] font-semibold uppercase">
                                  {race.status}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Weekly Schedule Sidebar */}
                  <div>
                    <Card className="bg-[hsl(var(--racing-navy))] text-white border-0">
                      <CardHeader>
                        <CardTitle className="text-sm uppercase tracking-wide font-bold flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-[hsl(var(--racing-gold))]" />
                          Weekly Schedule
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        {track.schedule?.map((day, idx) => (
                          <div key={idx} className="border-b border-gray-600 pb-3 last:border-0">
                            <div className="font-bold text-[hsl(var(--racing-gold))] mb-1">
                              {day.day}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-200 mb-1">
                              <Clock className="w-3 h-3" />
                              <span>{day.startTime}</span>
                            </div>
                            <div className="text-xs text-gray-300">
                              {day.numberOfRaces} races
                              {day.eventType && (
                                <span className="ml-2 px-2 py-0.5 bg-[hsl(var(--racing-gold))] text-[hsl(var(--racing-navy))] rounded text-xs font-semibold">
                                  {day.eventType}
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>

                    <Button className="w-full mt-4 bg-[hsl(var(--racing-gold))] hover:bg-[hsl(var(--racing-gold))]/90 text-[hsl(var(--racing-navy))] font-bold uppercase">
                      View All Races
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <RacingFooter />
    </div>
  );
}
