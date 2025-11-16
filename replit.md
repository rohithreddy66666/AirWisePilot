# AirWise - AI Aviation Assistant

## Overview
AirWise is a futuristic voice-first aviation assistant that helps pilots with natural language queries about flight planning, weather briefings, regulations, and aviation guidance. The application wraps an ElevenLabs conversational AI widget in a sleek, cockpit-inspired interface.

## Current State
**Status:** MVP Complete ✅

The application is fully functional with:
- ElevenLabs voice AI widget integrated and operational
- Futuristic aviation-themed UI with animations
- Dark/light mode support with theme toggle
- Responsive design optimized for desktop and tablet use

## Project Architecture

### Frontend
- **Framework:** React 18 with Wouter for routing
- **Styling:** Tailwind CSS with custom aviation theme
- **Components:** Shadcn UI component library
- **Fonts:** Orbitron (headings), Inter (body text)

### Core Feature
The heart of the application is the ElevenLabs conversational AI widget (`agent_1901ka4yj7nrebjb4asprbhgfkkn`). This widget handles:
- Voice recognition and processing
- Natural language understanding
- AI-powered responses
- Text-to-speech output

### Design System

**Color Palette:**
- Primary: Cyan/Blue (hsl(195, 95%, 45-55%))
- Accent: Purple tones
- Background: Dark navy (dark mode) / Light gray-blue (light mode)

**Typography:**
- Headings: Orbitron (futuristic, aviation-appropriate)
- Body: Inter (clean, readable)

**Visual Effects:**
- Animated gradient backgrounds
- Pulsing glow on widget container
- Floating blob animations
- HUD-style corner brackets
- Subtle grid overlay

## Key Files

- `client/src/pages/home.tsx` - Main landing page with widget
- `client/src/components/theme-toggle.tsx` - Dark/light mode switcher
- `client/src/index.css` - Custom theme colors and animations
- `tailwind.config.ts` - Extended animations (glow-pulse, fade-in-up, float, gradient-shift)
- `client/index.html` - ElevenLabs widget script integration

## User Preferences
- **Design Philosophy:** Minimalist and futuristic, inspired by modern cockpit HUD systems
- **Core Principle:** Keep it simple - the widget is the app
- **Target Users:** Pilots and aviation professionals who need quick AI assistance

## Running the Application
The app runs on a single command:
```bash
npm run dev
```
Server starts on port 5000 with hot reload enabled.

## Recent Changes (November 16, 2025)
- ✅ Initial project setup with futuristic aviation theme
- ✅ ElevenLabs widget integration
- ✅ Home page with animated background and HUD elements
- ✅ Theme toggle for dark/light mode support
- ✅ Responsive design implementation
- ✅ E2E testing completed successfully

## Next Phase (Future Enhancements)
Potential features for future iterations:
- Additional pages (About, Features, Documentation)
- Flight data display panels around the chat widget
- Voice activity visualization
- Settings page for widget customization
- Flight logs or conversation history sidebar
- Integration with real-time aviation data APIs
