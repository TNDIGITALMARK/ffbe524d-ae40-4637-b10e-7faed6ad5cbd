// ============================================
// GREYHOUND RACING TYPE DEFINITIONS
// Core data structures for the racing platform
// ============================================

export interface Greyhound {
  id: string;
  name: string;
  age: number;
  trainer: string;
  careerWins: number;
  careerStarts: number;
  bestTime: number; // in seconds
  recentForm: string; // e.g., "2-1-3-1-2"
  earnings: number; // in pounds
  photo?: string;
  weight: number; // in kg
  color: string;
  breeding?: string;
}

export interface Race {
  id: string;
  raceNumber: number;
  trackName: string;
  distance: number; // in meters
  postTime: string; // ISO date string
  status: 'upcoming' | 'live' | 'completed';
  participants: RaceParticipant[];
  trifectaPool?: number;
  conditions?: string;
}

export interface RaceParticipant {
  greyhoundId: string;
  greyhoundName: string;
  trapNumber: number;
  odds: string; // e.g., "2/1", "5/2"
  decimalOdds: number;
  trainer: string;
  recentForm: string;
  weight: number;
  finishPosition?: number; // Only for completed races
  finishTime?: number; // in seconds
}

export interface Track {
  id: string;
  name: string;
  location: string;
  surfaceType: 'sand' | 'grass';
  distanceOptions: number[]; // Available race distances
  capacity: number;
  facilities: string[];
  weatherCondition?: string;
  trackCondition?: 'fast' | 'good' | 'soft' | 'heavy';
  upcomingRaces: Race[];
  schedule?: TrackSchedule[];
}

export interface TrackSchedule {
  day: string;
  startTime: string;
  numberOfRaces: number;
  eventType?: string;
}

export interface BetSlip {
  id: string;
  raceId: string;
  betType: 'win' | 'place' | 'show' | 'exacta' | 'trifecta' | 'superfecta';
  selections: number[]; // Trap numbers
  stake: number;
  potentialPayout: number;
}

export interface RaceResult {
  raceId: string;
  trackName: string;
  raceNumber: number;
  date: string;
  results: {
    position: number;
    trapNumber: number;
    greyhoundName: string;
    time: number;
  }[];
}
