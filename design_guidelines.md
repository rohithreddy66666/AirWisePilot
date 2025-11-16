# AirWise Design Guidelines

## Design Approach
**Futuristic Aviation Interface** - Inspired by modern cockpit HUD systems, sci-fi interfaces (like Iron Man's Jarvis UI), and minimalist dashboard aesthetics. The ElevenLabs widget is the absolute centerpiece - everything else supports and frames this core interaction.

## Core Design Principles
1. **Widget-Centric**: All design elements frame and enhance the voice chat widget
2. **Cockpit Minimalism**: Clean, uncluttered interface like a professional flight deck
3. **Futuristic Subtle**: Gentle animations and glows, not overwhelming effects
4. **Voice-First**: Visual design reinforces audio interaction

## Layout System

**Single-Page Centered Layout**
- Full viewport height (min-h-screen) with centered content
- Widget positioned at optical center of screen
- Supporting elements arranged symmetrically around widget
- Spacing: Use Tailwind units of 4, 6, 8, 12, 16, 24 for consistent rhythm

**Structure**:
```
- Header: Minimal top bar with AirWise branding
- Central Widget Area: ElevenLabs widget with glowing frame/container
- Bottom Info: Subtle status indicators or quick tips
```

## Typography

**Font Selection**: 
- Primary: Orbitron or Exo 2 (futuristic, aviation-appropriate) via Google Fonts
- Secondary: Inter or Work Sans (clean readability)

**Hierarchy**:
- Hero/Brand: text-4xl to text-6xl, font-bold, tracking-wide
- Widget Label: text-xl, font-semibold
- Supporting Text: text-sm to text-base, font-light
- Status/Hints: text-xs, uppercase, tracking-widest

## Component Design

**Header Component**:
- Logo/wordmark "AirWise" with subtle glow effect
- Tagline: "AI Aviation Assistant" 
- Minimal navigation if needed (About, Help)

**Widget Container**:
- Centered card/frame around ElevenLabs widget
- Subtle border with glow animation (pulsing effect)
- Backdrop blur with semi-transparent background
- Shadow for depth (shadow-2xl)
- Padding: p-8 to p-12

**Status Indicators**:
- Small badges showing: "Voice Ready", "AI Online"
- Icon + text combinations using Heroicons
- Position at bottom or flanking widget

**Background Elements**:
- Animated gradient background (dark blues, purples, subtle teals)
- Subtle grid pattern or HUD-style lines
- Optional: Particle effects or floating geometric shapes

## Animations

**Entry Animations**:
- Fade-in for all elements (duration-700 to duration-1000)
- Slide-up for widget container (translate-y)
- Stagger delays for sequential appearance

**Ambient Animations**:
- Gentle pulsing glow on widget border (animate-pulse custom)
- Slow gradient shift in background (animate with keyframes)
- Floating/breathing effect on decorative elements

**Interaction Feedback**:
- Smooth hover states on any clickable elements
- Active state: subtle scale or brightness change
- No distracting animations during voice interaction

## Visual Effects

**Glassmorphism**: 
- Widget container uses backdrop-blur-xl with bg-white/10 or bg-black/30
- Subtle border with border-white/20

**Glow Effects**:
- box-shadow with colored shadows (cyan, blue) for futuristic feel
- Apply to widget container and key UI elements
- Subtle, not overwhelming

**HUD Elements**:
- Corner brackets or scan lines as decorative elements
- Minimal line graphics suggesting cockpit interface
- Use SVG for crisp rendering

## Icon Usage
- **Heroicons** via CDN for all interface icons
- Outline style for primary actions
- Solid style for status indicators
- Size: w-5 h-5 to w-8 h-8

## Images
**No hero image required** - The widget IS the hero. Optional subtle background imagery:
- Abstract aviation elements (blurred cockpit view, sky gradient)
- Kept at very low opacity (10-20%) to not compete with widget
- Position: Fixed background, no parallax needed

## Accessibility
- High contrast text (white/cyan on dark backgrounds)
- Clear focus states for keyboard navigation
- ARIA labels for all interactive elements
- Widget wrapper has proper semantic HTML

## Responsive Behavior
- Desktop (primary): Widget at comfortable size, generous spacing
- Tablet: Slightly reduced spacing, widget scales appropriately
- Mobile: Stack elements vertically, widget remains prominent and usable

## Key Technical Notes
- Keep DOM simple - minimal nesting
- Use CSS transforms for animations (better performance)
- Lazy load any non-critical scripts
- Widget should load and initialize smoothly without layout shift

This design creates a professional, futuristic aviation interface that puts the voice AI interaction front and center while providing just enough visual interest to feel premium and purpose-built for pilots.