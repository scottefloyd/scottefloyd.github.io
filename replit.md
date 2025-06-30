# Portfolio Website - Scott Floyd UX/UI Designer

## Overview

This is a modern, responsive portfolio website for Scott Floyd, a UX/UI Designer and QA Automation Developer. The application showcases design work, case studies, and professional experience through an elegant React-based interface. The project uses a full-stack architecture with Express.js backend and React frontend, built with modern web technologies and design systems.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Styling**: Tailwind CSS with custom design tokens and CSS variables
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based session storage with connect-pg-simple

### Design System
- **Component Library**: Shadcn/ui with "new-york" style preset
- **Typography**: Inter font family with multiple weights
- **Color Scheme**: Custom neutral-based palette with accent colors
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Animations**: CSS transitions and intersection observer for scroll animations

## Key Components

### Frontend Components
- **Navigation**: Sticky header with smooth scrolling navigation
- **Hero Section**: Animated introduction with call-to-action buttons
- **Portfolio Grid**: Responsive showcase of case studies and projects
- **Contact Form**: Interactive form with toast notifications
- **Footer**: Social media links and professional information

### Backend Infrastructure
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Route Handler**: Centralized API route registration
- **Development Server**: Vite integration for hot module replacement
- **Static Serving**: Production-ready static file serving

### Database Schema
- **Users Table**: Basic user management with username/password authentication
- **Extensible Design**: Schema ready for additional portfolio-related entities

## Data Flow

1. **Client Requests**: Frontend makes API calls through TanStack Query
2. **API Processing**: Express server processes requests through registered routes
3. **Data Operations**: Storage interface handles CRUD operations via Drizzle ORM
4. **Database Interaction**: PostgreSQL database stores and retrieves data
5. **Response Handling**: JSON responses sent back to client with error handling
6. **UI Updates**: React components re-render based on query state changes

## External Dependencies

### Core Framework Dependencies
- React ecosystem (React, React DOM, React Query)
- Express.js with TypeScript support
- Drizzle ORM with PostgreSQL driver

### UI and Styling
- Radix UI primitives for accessible components
- Tailwind CSS for utility-first styling
- Lucide React for consistent iconography
- Class Variance Authority for component variants

### Development Tools
- Vite for build tooling and development server
- TypeScript for type safety
- PostCSS with Autoprefixer for CSS processing
- ESBuild for server bundling

### Database and Session
- Neon Database for serverless PostgreSQL
- Connect-pg-simple for session storage
- Drizzle Kit for database migrations

## Deployment Strategy

### Development Environment
- **Dev Server**: Vite development server with HMR
- **API Server**: Express server running with tsx for TypeScript execution
- **Database**: Neon serverless PostgreSQL instance
- **Environment**: NODE_ENV=development with development-specific middleware

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Database**: Drizzle migrations ensure schema consistency
- **Deployment**: Single process serving both API and static files

### Database Management
- **Migrations**: Drizzle Kit manages schema changes
- **Schema**: Located in `shared/schema.ts` for type sharing
- **Connection**: Environment variable `DATABASE_URL` for database connection

## Changelog

```
Changelog:
- June 30, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```