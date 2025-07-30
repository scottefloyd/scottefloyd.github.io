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

## Recent Changes

### Latest Updates (July 30, 2025)
- **Updated hero description**: Changed to results-focused copy: "From catching bugs before they reach users to building AI solutions that streamline workflows - I help businesses deliver quality software with confidence."
- **Replaced skills section with narrative format**: Removed percentage-based skill bars and replaced with story-driven descriptions showing real work applications at companies like Illumina and BASF
- **Added creative font styling**: Applied Dancing Script font to name in navigation header for elegant modern cursive calligraphy aesthetic
- **Enhanced typography options**: Added multiple font choices including Montserrat, Raleway, Outfit, Plus Jakarta Sans, Quicksand for future customization
- **Navigation system improvements**:
  - Fixed JavaScript navigation to properly handle cross-page links from case study pages back to main portfolio
  - Modified handleNavClick to detect .html links and allow browser default navigation
  - Maintains smooth scrolling for same-page anchor links while enabling proper page-to-page navigation
- **Contact section redesign**:
  - Simplified contact section to streamlined layout with just heading, description, and contact form
  - Removed complex elements: contact methods cards, guarantee section, and two-column layout
  - Centered section header with clean, focused contact form in contained layout
  - Updated CSS to properly style the simplified contact area with proper spacing and alignment
- **Social media links update**:
  - Updated LinkedIn URL to correct format: https://www.linkedin.com/in/scottefloyd/
  - Maintained GitHub link: https://github.com/scottefloyd
- **Enhanced project portfolio with authentic content**:
  - Downloaded authentic images from Scott's repository: photobook.jpeg, a2.png, kiter.jpg, boogie-preview.jpg
  - Replaced all placeholder graphics with real project images
  - Successfully downloaded all PDF files: task analysis, usability reports, survey results
  - Fixed all PDF links to point to correctly downloaded assets in /assets folder
- **Improved project card interactions**:
  - Added distinct hover icons: eye icon for case studies, file-text icon for PDFs
  - Implemented tag-based filtering system supporting all project tags (UX Research, Figma, Prototyping, etc.)
  - Added subtle PDF badges positioned at bottom of project content with light styling
  - Enhanced filtering JavaScript to match both categories and individual tags
- **Updated cycling text**: Changed to "Human, Quality Engineer, Problem Solver, Bug Hunter, Gen-AI Tinkerer, Collaborator, Idea Guy" with "Hire a Creative" prefix
- **Removed tech stack from hero section**: Eliminated the tech stack list (Cypress, TypeScript, Agile, Playwright, GenAI) for cleaner hero design
- **Refined expertise cards**: Updated descriptions to be more accurate and professional:
  - Test Automation: "Ensuring quality with top automation frameworks"
  - Design & UX: "Foundational knowledge of best practices in design & UX" 
  - Development: "Experience collaborating with dev teams on complex projects"
  - Vibe Coding: "Jumping into the Brave New World of GenAI"
- **Replaced placeholder projects**: Added real projects from Scott's UX portfolio repository:
  - Rent-All Case Study (full HTML page created)
  - Cyclist Community Website (full HTML page created)
  - City Website Task Analysis (PDF link)
  - Photobook Usability Report (PDF link)
  - Boogie Battle Mobile App (PDF link)
  - Extreme Sports App Survey (PDF link)
- **Created dedicated case study pages**: Built comprehensive case study pages with proper navigation, styling, and detailed content
- **Removed all borders**: Eliminated border styling from expertise cards and "What Drives Me" box for clean, modern appearance

### Previous Updates
- Completed full redesign with modern dark/light theme system and cycling text animation
- Implemented comprehensive typography overhaul: all headings now use system font stack (ui-sans-serif, system-ui) with 400 font weight for modern, light appearance
- Added subtle corner gradients to hero section (teal top-right, yellow bottom-left) matching Figma reference
- Restructured "My Story" section with centered title, left-justified story text, "What Drives Me" gradient box on right, and expertise cards at bottom
- Applied custom oklab color scheme throughout (story, skills, footer sections) and removed all borders for clean, modern appearance
- **Enhanced project image styling**: Applied grayscale filters to all project images with cycling text-inspired gradient overlays (indigo, purple, cyan, emerald, amber) for cohesive visual branding