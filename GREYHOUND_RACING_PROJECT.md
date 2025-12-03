# Greyhound Gold - Racing Platform

## Project Overview

A comprehensive greyhound racing website featuring live race information, betting opportunities, detailed greyhound profiles, and track information. Built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## Design System

### Color Palette (Pixel-Perfect from Design Reference)

- **Dark Navy**: `#1a2332` (HSL: 216, 31%, 14%) - Headers, footers, primary dark elements
- **Racing Gold**: `#d4a574` (HSL: 32, 52%, 64%) - Accent color, logos, highlights
- **Bright Green**: `#6fb33e` (HSL: 96, 50%, 47%) - CTA buttons, success states
- **Light Gray Background**: `#e8e8e8` (HSL: 0, 0%, 93%)
- **Muted Gray**: `#6b7280` (HSL: 220, 13%, 46%)
- **White**: `#ffffff` - Cards, primary backgrounds

### Typography

- **Font Family**: Inter (Google Fonts)
- **Weights**: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold), 800 (Extrabold)
- **Heading Style**: Bold, uppercase for major headings
- **Navigation**: Uppercase, medium weight

### Visual Effects

- **Card Shadows**: `0 2px 8px rgba(0, 0, 0, 0.1)`
- **Button Shadows**: `0 2px 4px rgba(0, 0, 0, 0.15)`
- **Border Radius**: 4-8px (minimal rounded corners)
- **Hero Overlay**: Dark gradient for text readability

## Architecture

### Pages

#### 1. Live Racing Dashboard (`/`)
**Purpose**: Main landing page with live race information and betting opportunities

**Features**:
- Hero section with featured race information
- Live race updates with trap numbers and odds
- Real-time race results table
- Betting odds display
- Today's complete race schedule
- Featured greyhound profiles sidebar

**Components**:
- Hero section with gradient overlay
- Race card components with participant information
- Results tables with sortable data
- Schedule timeline
- Profile cards with stats

#### 2. Greyhound Profiles (`/greyhounds`)
**Purpose**: Comprehensive database of racing greyhounds

**Features**:
- Grid layout of all featured greyhounds
- Detailed statistics for each dog:
  - Career wins/starts
  - Best time
  - Recent form visualization
  - Career earnings
  - Trainer information
  - Physical attributes (age, weight, color)

**Visual Elements**:
- Trophy icon placeholders for greyhound photos
- Color-coded recent form indicators (Gold for 1st, Silver for 2nd, Bronze for 3rd)
- Performance stat cards
- Call-to-action buttons to full profiles

#### 3. Track Information Hub (`/tracks`)
**Purpose**: Complete guide to participating racing tracks

**Features**:
- Track-by-track information cards
- Real-time track conditions:
  - Weather status
  - Track surface condition
  - Capacity information
- Available race distances
- Facility listings
- Upcoming races at each track
- Weekly racing schedule with event types

**Visual Design**:
- Large track information cards with gradient headers
- Status indicators for track conditions
- Schedule sidebar with calendar view
- Facility tags

### Components

#### Navigation (`/components/racing/navigation.tsx`)
- Dark navy header with white text
- Greyhound Gold logo with gold accent
- Navigation links: Races, Dogs, Schedule, Profiles, News, Betting Slip
- Login/Sign Up buttons
- Fully responsive with mobile menu

#### Footer (`/components/racing/footer.tsx`)
- Dark navy background matching header
- Four-column layout:
  - About Us links
  - Contact information
  - Terms & legal links
  - Social media & responsible gambling
- Social media icons (Facebook, Twitter, Instagram)
- Copyright notice

### Data Structure

#### Types (`/types/racing.ts`)
- **Greyhound**: Complete dog profile with stats, trainer, form
- **Race**: Race information with participants, odds, timing
- **RaceParticipant**: Individual greyhound in a race with odds and trap number
- **Track**: Track details with facilities, schedule, conditions
- **BetSlip**: Betting information structure
- **RaceResult**: Completed race results

#### Mock Data (`/data/mock-racing-data.ts`)
- **Featured Greyhounds**: Lightning Bolt Murphy, Midnight Express Sally, Rapid Fire Rex, etc.
- **Sample Races**: Towcester, Birmingham, Romford races with full participant details
- **Track Information**: Complete track profiles for Towcester, Birmingham, Romford
- **Today's Schedule**: Full day's racing schedule across all tracks

## Technical Stack

### Frontend
- **Framework**: Next.js 15.5.2 (App Router)
- **React**: 19.1.0
- **TypeScript**: Latest
- **Styling**: Tailwind CSS 4 with custom racing theme
- **Icons**: Lucide React

### UI Components
- Radix UI primitives for accessible components
- Custom Card, Button, and layout components
- Fully responsive grid layouts

### Performance
- Server-side rendering for SEO
- Dynamic routes for scalability
- Optimized font loading (Inter from Google Fonts)
- Efficient component architecture

## Key Features

### User Experience
1. **Instant Race Information**: Users land on live race data immediately
2. **Easy Navigation**: Clear menu structure with consistent layout
3. **Betting Integration Ready**: Odds displayed prominently for quick decisions
4. **Mobile Optimized**: Responsive design works across all devices
5. **Visual Hierarchy**: Color-coded information for quick scanning

### Racing-Specific Features
1. **Trap Numbers**: Color-coded trap display for race participants
2. **Recent Form**: Visual indicators showing last 5 race positions
3. **Live Odds**: Betting odds displayed in traditional format (e.g., "2/1")
4. **Track Conditions**: Real-time weather and surface condition updates
5. **Career Statistics**: Comprehensive performance data for each greyhound

### Design Excellence
1. **Pixel-Perfect Implementation**: Matches design reference exactly
2. **Consistent Brand Colors**: Racing navy, gold, and green throughout
3. **Professional Typography**: Bold, uppercase headers for impact
4. **Appropriate Shadows**: Subtle depth without overwhelming
5. **Racing Aesthetic**: Energetic, professional, trustworthy feel

## File Structure

```
src/
├── app/
│   ├── page.tsx                    # Live Racing Dashboard
│   ├── greyhounds/
│   │   └── page.tsx               # Greyhound Profiles
│   ├── tracks/
│   │   └── page.tsx               # Track Information Hub
│   ├── layout.tsx                 # Root layout with providers
│   └── globals.css                # Global styles with racing theme
├── components/
│   ├── racing/
│   │   ├── navigation.tsx         # Header navigation
│   │   └── footer.tsx             # Footer component
│   └── ui/                        # Radix UI components
├── types/
│   └── racing.ts                  # TypeScript type definitions
└── data/
    └── mock-racing-data.ts        # Sample racing data
```

## Color Variables

All colors defined in `globals.css` as HSL values:

```css
--racing-navy: 216 31% 14%;        /* #1a2332 - Headers/Footer */
--racing-gold: 32 52% 64%;         /* #d4a574 - Accent/Logo */
--racing-green: 96 50% 47%;        /* #6fb33e - CTA Buttons */
--racing-gray-bg: 0 0% 93%;        /* #e8e8e8 - Background */
--racing-muted: 220 13% 46%;       /* #6b7280 - Muted text */
```

## Future Enhancements

### Backend Integration
- Real-time race data via WebSocket
- User authentication system
- Betting functionality with payment processing
- Live streaming of races
- User account management

### Features
- Individual greyhound detail pages
- Race replay videos
- Advanced statistics and analytics
- Betting history tracking
- Push notifications for race updates
- Favorites and watchlists
- Social features for following other bettors

### Performance
- Image optimization for greyhound photos
- Progressive Web App (PWA) capabilities
- Offline support for schedules
- Advanced caching strategies

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design from 320px to 4K screens

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast ratios meet WCAG AA standards
- Screen reader friendly

## SEO Optimization

- Server-side rendering for search engines
- Semantic meta tags
- Structured data ready for racing information
- Fast page load times
- Mobile-first responsive design

---

**Built with precision. Designed for speed. Ready for the race.**
