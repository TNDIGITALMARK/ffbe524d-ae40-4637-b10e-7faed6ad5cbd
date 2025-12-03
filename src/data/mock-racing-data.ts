// ============================================
// GOULBURN GREYHOUND RACING CLUB - RACING DATA
// Data for Goulburn track, NSW Australia
// ============================================

import { Greyhound, Race, Track, RaceParticipant } from '@/types/racing';

// Featured Greyhounds racing at Goulburn
export const mockGreyhounds: Greyhound[] = [
  {
    id: '1',
    name: "Lightning Bolt Murphy",
    age: 3,
    trainer: "John Sullivan",
    careerWins: 23,
    careerStarts: 45,
    bestTime: 28.45,
    recentForm: "1-1-2-1-3",
    earnings: 18750,
    weight: 32,
    color: "Brindle",
    breeding: "Sprint Champion x Fast Lady"
  },
  {
    id: '2',
    name: "Midnight Express Sally",
    age: 4,
    trainer: "Sarah Mitchell",
    careerWins: 15,
    careerStarts: 38,
    bestTime: 29.12,
    recentForm: "2-1-3-1-2",
    earnings: 12450,
    weight: 28,
    color: "Black",
    breeding: "Night Runner x Express Queen"
  },
  {
    id: '3',
    name: "Rapid Fire Rex",
    age: 2,
    trainer: "Tom Bradley",
    careerWins: 8,
    careerStarts: 15,
    bestTime: 28.89,
    recentForm: "1-2-1-1-3",
    earnings: 9200,
    weight: 31,
    color: "Red Fawn",
    breeding: "Fire Storm x Quick Silver"
  },
  {
    id: '4',
    name: "Thunder Paws Pete",
    age: 3,
    trainer: "Michael O'Brien",
    careerWins: 12,
    careerStarts: 28,
    bestTime: 29.34,
    recentForm: "2-2-1-3-2",
    earnings: 10100,
    weight: 33,
    color: "Blue",
    breeding: "Thunder Bolt x Racing Rose"
  },
  {
    id: '5',
    name: "Silver Streak Sophie",
    age: 4,
    trainer: "Emma Davies",
    careerWins: 19,
    careerStarts: 42,
    bestTime: 28.67,
    recentForm: "1-3-2-1-1",
    earnings: 15300,
    weight: 29,
    color: "White & Brindle",
    breeding: "Silver Flash x Streak Lightning"
  },
  {
    id: '6',
    name: "Golden Arrow Max",
    age: 3,
    trainer: "David Wilson",
    careerWins: 14,
    careerStarts: 31,
    bestTime: 28.98,
    recentForm: "2-1-2-3-1",
    earnings: 11800,
    weight: 30,
    color: "Fawn",
    breeding: "Arrow Speed x Golden Girl"
  }
];

// Race participants at Goulburn Greyhound Racing Club
export const mockRaceParticipants: RaceParticipant[] = [
  {
    greyhoundId: '3',
    greyhoundName: "Rapid Fire Rex",
    trapNumber: 1,
    odds: "2/1",
    decimalOdds: 3.0,
    trainer: "Tom Bradley",
    recentForm: "1-2-1-1-3",
    weight: 31
  },
  {
    greyhoundId: '4',
    greyhoundName: "Thunder Paws Pete",
    trapNumber: 2,
    odds: "5/2",
    decimalOdds: 3.5,
    trainer: "Michael O'Brien",
    recentForm: "2-2-1-3-2",
    weight: 33
  },
  {
    greyhoundId: '5',
    greyhoundName: "Silver Streak Sophie",
    trapNumber: 3,
    odds: "3/1",
    decimalOdds: 4.0,
    trainer: "Emma Davies",
    recentForm: "1-3-2-1-1",
    weight: 29
  },
  {
    greyhoundId: '6',
    greyhoundName: "Golden Arrow Max",
    trapNumber: 4,
    odds: "7/2",
    decimalOdds: 4.5,
    trainer: "David Wilson",
    recentForm: "2-1-2-3-1",
    weight: 30
  },
  {
    greyhoundId: '1',
    greyhoundName: "Lightning Bolt Murphy",
    trapNumber: 5,
    odds: "4/1",
    decimalOdds: 5.0,
    trainer: "John Sullivan",
    recentForm: "1-1-2-1-3",
    weight: 32
  },
  {
    greyhoundId: '2',
    greyhoundName: "Midnight Express Sally",
    trapNumber: 6,
    odds: "9/2",
    decimalOdds: 5.5,
    trainer: "Sarah Mitchell",
    recentForm: "2-1-3-1-2",
    weight: 28
  }
];

// Featured races at Goulburn Greyhound Racing Club
// Friday, December 5th, 2025 - Evening Meeting
export const mockRaces: Race[] = [
  {
    id: 'goulburn-dec5-r1',
    raceNumber: 1,
    trackName: "Goulburn",
    distance: 520,
    grade: "Grade 5",
    prizeMoney: "$3,200",
    postTime: new Date('2025-12-05T19:30:00+11:00').toISOString(),
    status: 'upcoming',
    participants: mockRaceParticipants.slice(0, 8),
    trifectaPool: 2450,
    conditions: "Good track, clear evening, fast conditions"
  },
  {
    id: 'goulburn-dec5-r2',
    raceNumber: 2,
    trackName: "Goulburn",
    distance: 520,
    grade: "Grade 4/5",
    prizeMoney: "$3,500",
    postTime: new Date('2025-12-05T19:50:00+11:00').toISOString(),
    status: 'upcoming',
    participants: mockRaceParticipants.map(p => ({ ...p, odds: "5/2", decimalOdds: 3.5 })).slice(0, 8),
    trifectaPool: 2875
  },
  {
    id: 'goulburn-dec5-r3',
    raceNumber: 3,
    trackName: "Goulburn",
    distance: 350,
    grade: "Mixed 4/5",
    prizeMoney: "$3,200",
    postTime: new Date('2025-12-05T20:10:00+11:00').toISOString(),
    status: 'upcoming',
    participants: mockRaceParticipants.slice(0, 7),
    trifectaPool: 2210
  },
  {
    id: 'goulburn-dec5-r4',
    raceNumber: 4,
    trackName: "Goulburn",
    distance: 520,
    grade: "Grade 5",
    prizeMoney: "$3,200",
    postTime: new Date('2025-12-05T20:30:00+11:00').toISOString(),
    status: 'upcoming',
    participants: mockRaceParticipants.slice(0, 8),
    trifectaPool: 2560
  },
  {
    id: 'goulburn-dec5-r5',
    raceNumber: 5,
    trackName: "Goulburn",
    distance: 520,
    grade: "Grade 4",
    prizeMoney: "$3,800",
    postTime: new Date('2025-12-05T20:50:00+11:00').toISOString(),
    status: 'upcoming',
    participants: mockRaceParticipants,
    trifectaPool: 3340
  },
  {
    id: 'goulburn-dec5-r6',
    raceNumber: 6,
    trackName: "Goulburn",
    distance: 350,
    grade: "Grade 5",
    prizeMoney: "$3,200",
    postTime: new Date('2025-12-05T21:10:00+11:00').toISOString(),
    status: 'upcoming',
    participants: mockRaceParticipants.slice(0, 8),
    trifectaPool: 2680
  },
  {
    id: 'goulburn-dec5-r7',
    raceNumber: 7,
    trackName: "Goulburn",
    distance: 520,
    grade: "Grade 3/4",
    prizeMoney: "$4,200",
    postTime: new Date('2025-12-05T21:30:00+11:00').toISOString(),
    status: 'upcoming',
    participants: mockRaceParticipants,
    trifectaPool: 3920
  },
  {
    id: 'goulburn-dec5-r8',
    raceNumber: 8,
    trackName: "Goulburn",
    distance: 520,
    grade: "Grade 5",
    prizeMoney: "$3,200",
    postTime: new Date('2025-12-05T21:50:00+11:00').toISOString(),
    status: 'upcoming',
    participants: mockRaceParticipants.slice(0, 7),
    trifectaPool: 2490
  },
  {
    id: 'goulburn-dec5-r9',
    raceNumber: 9,
    trackName: "Goulburn",
    distance: 350,
    grade: "Grade 4/5",
    prizeMoney: "$3,500",
    postTime: new Date('2025-12-05T22:10:00+11:00').toISOString(),
    status: 'upcoming',
    participants: mockRaceParticipants.slice(0, 8),
    trifectaPool: 2785
  },
  {
    id: 'goulburn-dec5-r10',
    raceNumber: 10,
    trackName: "Goulburn",
    distance: 520,
    grade: "Grade 4",
    prizeMoney: "$3,800",
    postTime: new Date('2025-12-05T22:30:00+11:00').toISOString(),
    status: 'upcoming',
    participants: mockRaceParticipants,
    trifectaPool: 3180
  }
];

// Goulburn Greyhound Racing Club track information
// Updated for December 5th, 2025 Evening Meeting
export const mockTracks: Track[] = [
  {
    id: 'goulburn',
    name: "Goulburn Greyhound Racing Club",
    location: "Braidwood Road, Goulburn, NSW 2580, Australia",
    surfaceType: 'grass',
    distanceOptions: [350, 520],
    capacity: 3500,
    facilities: ["Restaurant", "Bar", "Betting Facilities", "Private Boxes", "TAB", "Function Rooms", "Parking"],
    weatherCondition: "Clear",
    trackCondition: 'fast',
    upcomingRaces: mockRaces.filter(r => r.trackName === "Goulburn"),
    schedule: [
      { day: "Monday", startTime: "19:30", numberOfRaces: 10 },
      { day: "Wednesday", startTime: "19:30", numberOfRaces: 10 },
      { day: "Friday", startTime: "19:30", numberOfRaces: 10, eventType: "Evening Meeting" },
      { day: "Saturday", startTime: "14:00", numberOfRaces: 12, eventType: "Weekend Feature" }
    ]
  }
];

// Live race updates (simulated)
export const mockLiveRaceUpdates = {
  currentPosition: [3, 1, 5, 2, 4, 6],
  timeElapsed: 18.5,
  estimatedFinish: 10.5
};

// Today's schedule at Goulburn Greyhound Racing Club
// Friday, December 5th, 2025 - Evening Meeting
export const todaysSchedule = [
  { time: "19:30", track: "Goulburn", race: 1, distance: 520, grade: "Grade 5", prizeMoney: "$3,200", runners: 8, status: "upcoming" },
  { time: "19:50", track: "Goulburn", race: 2, distance: 520, grade: "Grade 4/5", prizeMoney: "$3,500", runners: 8, status: "upcoming" },
  { time: "20:10", track: "Goulburn", race: 3, distance: 350, grade: "Mixed 4/5", prizeMoney: "$3,200", runners: 7, status: "upcoming" },
  { time: "20:30", track: "Goulburn", race: 4, distance: 520, grade: "Grade 5", prizeMoney: "$3,200", runners: 8, status: "upcoming" },
  { time: "20:50", track: "Goulburn", race: 5, distance: 520, grade: "Grade 4", prizeMoney: "$3,800", runners: 8, status: "upcoming" },
  { time: "21:10", track: "Goulburn", race: 6, distance: 350, grade: "Grade 5", prizeMoney: "$3,200", runners: 8, status: "upcoming" },
  { time: "21:30", track: "Goulburn", race: 7, distance: 520, grade: "Grade 3/4", prizeMoney: "$4,200", runners: 8, status: "upcoming" },
  { time: "21:50", track: "Goulburn", race: 8, distance: 520, grade: "Grade 5", prizeMoney: "$3,200", runners: 7, status: "upcoming" },
  { time: "22:10", track: "Goulburn", race: 9, distance: 350, grade: "Grade 4/5", prizeMoney: "$3,500", runners: 8, status: "upcoming" },
  { time: "22:30", track: "Goulburn", race: 10, distance: 520, grade: "Grade 4", prizeMoney: "$3,800", runners: 8, status: "upcoming" }
];
