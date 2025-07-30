# Scott Floyd - QA Automation Expert & AI Consultant Portfolio

## Repository Description
A personal portfolio website for Scott Floyd, showcasing expertise in QA automation, test engineering, and AI consulting services. Features a modern, responsive design with interactive elements and comprehensive project showcases.

Stack:
- Vanilla HTML/CSS/JavaScript
- Modern responsive design
- Dark/light theme support
- Interactive animations and transitions
- Mobile-first approach

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
- **Added new "Current Work" section**: Created comprehensive section showcasing SPOTR app development with timeline phases, project status, and development progression
- **Restructured navigation**: Added "Current Work" and "Past Projects" navigation items to properly organize content
- **Updated hero CTA**: Changed primary button to link to Current Work section instead of projects
- **Renamed projects section**: Changed "Featured Projects" to "Past Projects" with updated tagline: "A collection of my past work spanning bootcamps, work deliverables, and personal projects"
- **SPOTR app showcase**: Detailed timeline showing UX Research → Wireframes → Hi-Fi Prototype → Gen-AI Development → Test Automation phases with current progress status
- **Updated SPOTR app description**: Changed from general river location discovery to specific Michigan river shuttling service focus
- **Refined Past Projects copy**: Updated subtitle to final version: "A collection of my past work spanning bootcamps, work deliverables, and personal projects"
- **Fixed Current Work layout**: Resolved HTML structure issue preventing proper 50/50 column layout for SPOTR app image
- **Enhanced status section alignment**: Added flexbox styling to properly align "IN PROGRESS" badge with phase indicator text
- **Redesigned My Story section**: Removed retro TV animation and restructured to two-column layout with updated narrative text on left and "What Drives Me" section on right
- **Updated story narrative**: Replaced content with revised text focusing on childhood inspiration from Popular Science/Engineering magazines, James Bond, Inspector Gadget, and MacGyver, emphasizing American innovation spirit
- **Updated "What Fuels Me" section**: Changed title from "What Drives Me" to "What Fuels Me 🚀" and updated bullet points to include Coffee with emoji, plus refined focus areas
- **Added testimonial section**: Created two-column contact layout with Burt Crismore testimonial on left and contact form on right for enhanced credibility
- **Updated past projects section**: Restored original image colors by removing grayscale filters; added specific project tags (UX Research, UX Design, Prototyping, User Testing, Task Analysis, Usability, Front-End Dev); updated filter tabs to match new tag categories
- **Redesigned project filtering to Apple-style pattern**: Created category tabs (UX Design, UX Research, Development, Usability) with subcategory filters that only show when parent category is selected; defaults to UX Design category; added smooth animations and improved space efficiency
- **Simplified project filters to single gray bar**: Removed hierarchical categories and placed all filter tags (UX Design, UX Research, Prototyping, User Testing, Task Analysis, Usability, Front-End Dev) in one full-width gray bar with white background for active selection
- **Updated project timeline status**: UX research, wireframes, and hi-fi prototypes marked as completed with visual "COMPLETE" badges; Gen-AI development currently in progress; test automation in planning stage
- **Redesigned Current Work layout**: Created two-column layout with project description on left and status/timeline on right; changed section description to be more generic about product development lifecycle
- **Enhanced completed phase indicators**: Added distinctive "✓ COMPLETE" badges to first three timeline phases for clear visual separation
- **Reorganized Current Work layout**: Moved timeline cards into right column under status indicator; changed "IN DEVELOPMENT" to "IN PROGRESS"
- **Enhanced Key Features & Tech Stack**: Added engaging descriptions with icons, stronger titles, and detailed explanations for better visual appeal
- **Restructured Current Work layout**: Added SPOTR app preview image to right column; moved Key Features/Tech Stack to left column below description; moved timeline and status to full-width section below both columns
- **Added authentic SPOTR app preview**: Integrated actual app screenshot showing the mobile interface with river spotting features
- **Redesigned Tech Stack section**: Removed Key Features card and created expandable Tech Stack card with comprehensive technical details
- **Implemented expandable card functionality**: Added plus/minus button toggle with smooth animations and gradient fade effect for collapsed content
- **Updated technical specifications**: Added detailed frontend (React 18, TypeScript, Vite), backend (Node.js, PostgreSQL), and development tools information
- **Integrated Figma links**: Added direct links to SPOTR wireframes and research board for authentic project documentation
- **Enhanced project status indicators**: Visual timeline with completed, in-progress, and upcoming phases with appropriate styling
- **Rewrote "My Story" section**: Expanded narrative around childhood inspiration from Popular Science magazines, James Bond, Inspector Gadget, and MacGyver, connecting ingenuity mindset to current work
- **Added retro TV reference graphic**: Created animated TV displaying cycling channels (Popular Science, 007, MacGyver) with authentic retro styling including wood grain finish and control knobs
- **Enhanced storytelling with personal connection**: Linked childhood wonder about future technology to current reality of AI and automation work
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
- **Added "Projects On Deck" section**: Created new horizontal two-column layout within Current Work section showcasing upcoming client projects in planning pipeline; features Eagle Video Solutions (website) and Meal Prep Service (web app) with "PLANNING STAGE" status badges, custom orange/amber styling, and responsive mobile design
- **Enhanced Skills & Expertise section**: Implemented collapsible skill categories with +/- toggle buttons; each category shows only skill titles by default with full descriptions appearing on expand; split Cucumber/Gherkin into separate tool items; all categories start collapsed for maximum compact layout
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
- **Enhanced project image styling**: Applied grayscale filters to all project images with clean hover effects that restore original colors for cohesive visual branding