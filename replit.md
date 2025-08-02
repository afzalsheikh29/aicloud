# AiCloud Mania - AI & Cloud Solutions Website

## Overview

AiCloud Mania is a modern, interactive website for a company specializing in AI and cloud technology solutions. The project is built as a full-stack application with a React frontend and Express backend, featuring cutting-edge design elements including glassmorphism effects, animated backgrounds, and responsive layouts. The website showcases services ranging from AI solutions and cloud infrastructure to e-commerce development and digital marketing.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack**: React 18 with TypeScript, utilizing modern development patterns
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system featuring glassmorphism and neon color themes
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible design
- **Animations**: Framer Motion for smooth transitions, scroll animations, and interactive effects
- **State Management**: TanStack React Query for server state management and caching

**Design System**:
- Custom color palette with electric blue, cyber violet, and neon cyan themes
- Glassmorphism effects using CSS custom properties for modern aesthetic
- Responsive design with mobile-first approach
- Animated backgrounds with floating particles and parallax effects

**Component Structure**:
- Page-based routing with dedicated components for Home, About, Services, Products, Blog, and Contact
- Reusable UI components with consistent styling patterns
- Section-based layout components for modular content organization
- Custom hooks for scroll animations and responsive behavior

### Backend Architecture

**Server Framework**: Express.js with TypeScript for type safety
- **Development Setup**: Vite integration for hot module replacement and development server
- **API Structure**: RESTful API design with `/api` prefix for all backend routes
- **Error Handling**: Centralized error middleware with proper status codes and JSON responses
- **Logging**: Custom request logging middleware for API monitoring

**Storage Layer**:
- **Database ORM**: Drizzle ORM configured for PostgreSQL with type-safe queries
- **Schema Management**: Centralized schema definitions in shared directory
- **Data Validation**: Zod integration for runtime type validation
- **Development Storage**: In-memory storage implementation for development with interface-based design for easy production swapping

### Data Storage Solutions

**Database Configuration**:
- PostgreSQL as primary database with Neon serverless integration
- Drizzle Kit for database migrations and schema management
- Environment-based database URL configuration
- Type-safe database operations with full TypeScript integration

**Schema Design**:
- User management system with username/password authentication
- Extensible schema structure for future feature additions
- UUID-based primary keys for scalability

### Authentication and Authorization

**Current Implementation**:
- Basic user schema with username and password fields
- Interface-based storage pattern allowing for multiple authentication strategies
- Session management preparation with connect-pg-simple integration

**Security Features**:
- Input validation using Zod schemas
- Type-safe user operations
- Prepared for session-based authentication

## External Dependencies

### Cloud Infrastructure
- **Neon Database**: Serverless PostgreSQL for production database hosting
- **Environment Configuration**: DATABASE_URL for flexible deployment

### Development Tools
- **Vite**: Build tool and development server with React plugin
- **TypeScript**: Full type safety across frontend and backend
- **ESBuild**: Fast bundling for production builds
- **Replit Integration**: Development environment optimization with cartographer plugin

### UI and Animation Libraries
- **Radix UI**: Comprehensive primitive components for accessibility
- **Framer Motion**: Advanced animation library for smooth interactions
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Lucide React**: Icon library for consistent iconography

### Data Management
- **TanStack React Query**: Server state management and caching
- **Drizzle ORM**: Type-safe database operations
- **Zod**: Runtime type validation and schema definition

### Styling and Design
- **Class Variance Authority**: Type-safe component variants
- **clsx**: Conditional className utility
- **date-fns**: Date manipulation and formatting
- **Embla Carousel**: Touch-enabled carousel components