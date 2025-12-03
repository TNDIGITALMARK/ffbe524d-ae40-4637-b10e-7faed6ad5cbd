// ============================================
// MOCK RACING DATA
// Sample data matching the specification
// ============================================

import { Greyhound, Race, Track, RaceParticipant } from '@/types/racing';

// Featured Greyhounds from specification
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

// Race 3 at Towcester from specification
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

// Featured races from specification
export const mockRaces: Race[] = [
  {
    id: 'towcester-r3',
    raceNumber: 3,
    trackName: "Towcester",
    distance: 500,
    postTime: new Date(Date.now() + 45 * 60 * 1000).toISOString(), // 45 minutes from now
    status: 'upcoming',
    participants: mockRaceParticipants,
    trifectaPool: 2847,
    conditions: "Good track, clear evening"
  },
  {
    id: 'towcester-r4',
    raceNumber: 4,
    trackName: "Towcester",
    distance: 500,
    postTime: new Date(Date.now() + 65 * 60 * 1000).toISOString(),
    status: 'upcoming',
    participants: mockRaceParticipants.map(p => ({ ...p, odds: "3/1", decimalOdds: 4.0 })),
    trifectaPool: 1950
  },
  {
    id: 'birmingham-r2',
    raceNumber: 2,
    trackName: "Birmingham",
    distance: 480,
    postTime: new Date(Date.now() + 25 * 60 * 1000).toISOString(),
    status: 'upcoming',
    participants: mockRaceParticipants.slice(0, 5),
    trifectaPool: 1723
  },
  {
    id: 'romford-r5',
    raceNumber: 5,
    trackName: "Romford",
    distance: 525,
    postTime: new Date(Date.now() + 90 * 60 * 1000).toISOString(),
    status: 'upcoming',
    participants: mockRaceParticipants,
    trifectaPool: 3120
  }
];

// Track information from specification
export const mockTracks: Track[] = [
  {
    id: 'towcester',
    name: "Towcester",
    location: "Northamptonshire, England",
    surfaceType: 'sand',
    distanceOptions: [380, 450, 500, 640],
    capacity: 3500,
    facilities: ["Restaurant", "Bar", "Betting Facilities", "Private Boxes"],
    weatherCondition: "Clear",
    trackCondition: 'fast',
    upcomingRaces: mockRaces.filter(r => r.trackName === "Towcester"),
    schedule: [
      { day: "Monday", startTime: "19:30", numberOfRaces: 12 },
      { day: "Wednesday", startTime: "19:30", numberOfRaces: 12 },
      { day: "Friday", startTime: "19:30", numberOfRaces: 14, eventType: "Evening Meeting" },
      { day: "Saturday", startTime: "14:00", numberOfRaces: 16, eventType: "Featured Card" }
    ]
  },
  {
    id: 'birmingham',
    name: "Birmingham",
    location: "Birmingham, England",
    surfaceType: 'sand',
    distanceOptions: [280, 380, 480, 660],
    capacity: 2800,
    facilities: ["Restaurant", "Bar", "Betting Facilities"],
    weatherCondition: "Partly Cloudy",
    trackCondition: 'good',
    upcomingRaces: mockRaces.filter(r => r.trackName === "Birmingham"),
    schedule: [
      { day: "Tuesday", startTime: "14:15", numberOfRaces: 10, eventType: "Afternoon Card" },
      { day: "Thursday", startTime: "19:15", numberOfRaces: 12 },
      { day: "Saturday", startTime: "19:15", numberOfRaces: 14 }
    ]
  },
  {
    id: 'romford',
    name: "Romford",
    location: "London, England",
    surfaceType: 'sand',
    distanceOptions: [380, 525, 575],
    capacity: 4200,
    facilities: ["Restaurant", "Multiple Bars", "Betting Facilities", "Private Boxes", "VIP Lounge"],
    weatherCondition: "Clear",
    trackCondition: 'fast',
    upcomingRaces: mockRaces.filter(r => r.trackName === "Romford"),
    schedule: [
      { day: "Monday", startTime: "20:00", numberOfRaces: 12, eventType: "Night Racing" },
      { day: "Wednesday", startTime: "20:00", numberOfRaces: 12 },
      { day: "Friday", startTime: "20:00", numberOfRaces: 14, eventType: "Night Racing" },
      { day: "Saturday", startTime: "20:00", numberOfRaces: 16, eventType: "Featured Night" }
    ]
  }
];

// Live race updates (simulated)
export const mockLiveRaceUpdates = {
  currentPosition: [3, 1, 5, 2, 4, 6],
  timeElapsed: 18.5,
  estimatedFinish: 10.5
};

// Today's schedule summary
export const todaysSchedule = [
  { time: "14:15", track: "Birmingham", race: 1, distance: 480, status: "completed" },
  { time: "14:30", track: "Birmingham", race: 2, distance: 480, status: "upcoming" },
  { time: "19:30", track: "Towcester", race: 1, distance: 500, status: "upcoming" },
  { time: "19:50", track: "Towcester", race: 2, distance: 500, status: "upcoming" },
  { time: "20:00", track: "Romford", race: 1, distance: 525, status: "upcoming" },
  { time: "20:10", track: "Towcester", race: 3, distance: 500, status: "upcoming" },
  { time: "20:20", track: "Romford", race: 2, distance: 525, status: "upcoming" }
];
