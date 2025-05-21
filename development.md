# Development Guide for instantWebsiteAi

## Tech Stack

### Frontend
- **Framework**: Next.js 15.3.2+
- **Styling**: Tailwind CSS
- **Animations**: 
  - GSAP (for Home Page animations)
  - Framer Motion (for UI animations)
  - Three.js (for 3D effects on Demo Page)
- **Icons**: React Icons

### Data Storage
- LocalStorage for user preferences and settings
- JSON files for template data and dummy content

## Project Structure
- `/src/app`: Main application code
  - `/page.js`: Home page
  - `/demo/page.js`: Demo page
  - `/pitch-deck/page.js`: Pitch deck page
  - `/why-us/page.js`: Why us page
  - `/showcase/page.js`: Showcase page
  - `/roadmap/page.js`: Roadmap page
- `/src/components`: Reusable UI components
- `/src/lib`: Utility functions and hooks
- `/public`: Static assets (images, fonts, etc.)
- `/src/data`: JSON data files for templates and dummy content

## Development Roadmap

### Phase 1 (MVP)
- Template preview
- Hosting with subdomain
- Admin panel for editing
- Template library on GitHub
- 7-day request system

### Phase 2
- Multi-site user dashboard
- Basic analytics (visits, edits)
- Access control (public/private)

### Phase 3
- Drag-and-drop editor (optional, for advanced users)
- Team collaboration support

### Phase 4
- Full CMS integration
- Marketplace of premium templates

### Phase 5
- Plugin ecosystem (forms, chat, analytics)
- AI-powered content population
- White-label plans for resellers & agencies

## Usage Guide

### Running the Development Server
```bash
npm run dev
```

### Building for Production
```bash
npm run build
```

### Starting the Production Server
```bash
npm start
```

## Key Features Implementation

### Template Preview System
The template preview system uses client-side rendering to dynamically update the preview based on user input (business name and logo). Templates are stored as JSON configurations with corresponding React components.

### Admin Panel
The admin panel is a simple interface that allows users to edit text, images, fonts, and colors. Changes are stored in localStorage and can be exported as a JSON configuration.

### Hosting System
The hosting system is simulated in the MVP using subdomain routing in Next.js. In a production environment, this would be implemented using a proper hosting service with DNS configuration.

### 7-Day Edit Request System
The edit request system is simulated in the MVP using a form that sends an email to the admin. In a production environment, this would be implemented using a proper ticketing system.
