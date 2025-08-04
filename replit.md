# Scott Floyd - QA Automation Expert & AI Consultant Portfolio

## Overview
This is a personal portfolio website for Scott Floyd, showcasing his expertise in QA automation, test engineering, and AI consulting services. The project aims to present a modern, responsive single-page application (SPA) that highlights Scott's capabilities, past projects, and current work in an engaging and accessible manner. Key capabilities include comprehensive project showcases, interactive elements, and a clean user experience with dark/light theme support. The project's business vision is to serve as a primary contact point for potential clients seeking QA automation and AI consulting services, establishing Scott Floyd as a leading expert in the field.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture
The application follows a client-side architecture built with vanilla HTML, CSS, and JavaScript, with no backend dependencies.

### Design Principles
-   **Modern Responsive Design**: Utilizes CSS Grid and Flexbox with a mobile-first approach, ensuring optimal viewing across all device sizes. Standard breakpoints are used for mobile, tablet, and desktop.
-   **Dark/Light Theme Support**: Implemented via CSS variables and data attributes, with user preference persistence using localStorage.
-   **Typography and Spacing**: Employs CSS custom properties for consistent visual hierarchy and spacing. The Inter font family from Google Fonts is used for readability.
-   **UI/UX Decisions**: Clean, modern aesthetic with subtle animations and transitions. Semantic HTML is used for accessibility. Color schemes utilize a custom oklab palette. Project image styling uses grayscale filters with hover effects to restore original colors. Navigation is smooth-scrolling with active section highlighting.

### Technical Implementation
-   **Frontend**: Pure HTML/CSS/JavaScript SPA.
-   **Styling**: Custom CSS with CSS variables for theming. BEM-like naming conventions are followed.
-   **JavaScript**: Modular ES6 classes for functionality, including theme management, navigation, and interactive elements like expandable cards and project filtering. No transpilation is required.
-   **Data Flow**: All functionality is client-side. Theme preference is retrieved from localStorage on page load. User interactions (theme toggle, navigation clicks) update CSS variables and trigger smooth scrolling.
-   **Performance Considerations**: Minimal external dependencies, optimized CSS, and lightweight JavaScript contribute to fast load times. Images are optimized for web delivery.

### Feature Specifications
-   **Theme Management System**: Provides light/dark mode toggle functionality with persistence.
-   **Navigation System**: Handles smooth scrolling navigation, mobile menu functionality, and active section highlighting.
-   **Project Portfolio**: Features detailed project showcases, including case studies with dedicated HTML pages, and links to PDF reports. Projects are filterable by tags (e.g., UX Research, Figma, Prototyping, Development).
-   **"Current Work" Section**: Showcases ongoing projects with timelines, status indicators, and detailed descriptions, including technical specifications and authentic project previews.
-   **"My Story" Section**: Presents a narrative about Scott's background and inspiration.
-   **"Skills & Expertise" Section**: Provides an overview of technical capabilities, with an expandable/collapsible interface.
-   **Contact Form**: Integrated with Formspree for submissions, including validation and status messages.
-   **Social Media Integration**: Links to professional profiles (LinkedIn, GitHub) and includes Open Graph/Twitter Card meta tags for professional link previews.

## External Dependencies
1.  **Google Fonts**: Inter font family for typography.
2.  **Feather Icons**: Icon library for UI elements (e.g., sun/moon, hamburger menu).
3.  **Google Analytics (GA4)**: For user behavior analytics and insights, tracking page views, form submissions, and various interactions.
4.  **Formspree**: For handling contact form submissions.
5.  **CDN Delivery**: Google Fonts and Feather Icons are loaded via CDN for performance benefits, leveraging browser caching and reducing bundle size.