# Scott Floyd - QA Automation Expert & AI Consultant Portfolio

## Overview

This is a personal portfolio website for Scott Floyd, showcasing his expertise in QA automation with Playwright and AI consulting services. The project is a modern, responsive single-page application (SPA) built with vanilla HTML, CSS, and JavaScript, featuring a clean design with dark/light theme support.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a simple client-side architecture with no backend dependencies:

- **Frontend**: Pure HTML/CSS/JavaScript SPA
- **Styling**: Custom CSS with CSS variables for theming
- **JavaScript**: Modular ES6 classes for functionality
- **External Dependencies**: Google Fonts (Inter) and Feather Icons CDN
- **State Management**: Browser localStorage for theme persistence

## Key Components

### 1. Theme Management System
- **Purpose**: Provides light/dark mode toggle functionality
- **Implementation**: CSS variables with data attributes for theme switching
- **Persistence**: Uses localStorage to remember user's theme preference
- **Rationale**: Enhances user experience and accessibility

### 2. Navigation System
- **Purpose**: Handles smooth scrolling navigation and mobile menu functionality
- **Implementation**: JavaScript class-based approach for menu management
- **Features**: Mobile-responsive hamburger menu, smooth scrolling, active section highlighting
- **Rationale**: Provides seamless navigation experience across devices

### 3. Responsive Design
- **Purpose**: Ensures optimal viewing experience across all device sizes
- **Implementation**: CSS Grid/Flexbox with mobile-first approach
- **Breakpoints**: Standard responsive breakpoints for mobile, tablet, and desktop
- **Rationale**: Modern web standards require mobile-responsive design

### 4. Typography and Spacing System
- **Purpose**: Maintains consistent visual hierarchy and spacing
- **Implementation**: CSS custom properties (variables) for standardized values
- **Font**: Inter font family from Google Fonts for modern readability
- **Rationale**: Creates professional, cohesive visual design

## Data Flow

1. **Page Load**: Theme preference retrieved from localStorage and applied
2. **User Interactions**: 
   - Theme toggle updates CSS variables and saves to localStorage
   - Navigation clicks trigger smooth scrolling to target sections
   - Mobile menu toggle shows/hides navigation on small screens
3. **No Server Communication**: All functionality is client-side only

## External Dependencies

1. **Google Fonts**: Inter font family for typography
2. **Feather Icons**: Icon library for UI elements (sun/moon, hamburger menu)
3. **CDN Delivery**: Both dependencies loaded via CDN for performance

**Rationale for CDN Usage**: 
- Reduces bundle size
- Leverages browser caching
- Improves load performance
- No build process required

## Deployment Strategy

### Current Architecture
- **Static Hosting**: Can be deployed to any static hosting service
- **No Build Process**: Direct file serving without compilation
- **No Backend Required**: Pure client-side application

### Deployment Options
1. **GitHub Pages**: Free hosting for static sites
2. **Netlify/Vercel**: Modern static hosting with CI/CD
3. **Traditional Web Hosting**: Any web server capable of serving static files

### Performance Considerations
- Minimal external dependencies
- Optimized CSS with efficient selectors
- Lightweight JavaScript with no frameworks
- Images should be optimized for web delivery

## Development Notes

- The project uses semantic HTML for accessibility
- CSS follows BEM-like naming conventions
- JavaScript uses ES6+ features (classes, arrow functions, template literals)
- No transpilation required - modern browser support assumed
- Mobile-first responsive design approach
- Progressive enhancement philosophy