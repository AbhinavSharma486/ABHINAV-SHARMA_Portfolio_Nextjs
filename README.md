# Abhinav Sharma - Personal Portfolio

A modern, responsive, and feature-rich portfolio website built with Next.js 15, showcasing professional experience, projects, skills, education, and certifications. This portfolio demonstrates expertise in full-stack web development with a focus on the MERN stack, featuring smooth animations, dark/light theme support, and optimized performance.

## 🚀 Features

### Core Features
- **Modern Design**: Glassmorphism effects with gradient backgrounds and smooth transitions
- **Fully Responsive**: Mobile-first design with comprehensive breakpoints (xs, sm, md, lg, xl, 2xl)
- **Dark/Light Theme**: System-aware theme toggle with smooth transitions using `next-themes`
- **Smooth Animations**: Framer Motion animations throughout with optimized performance
- **Contact Form**: EmailJS integration with comprehensive validation, CSRF protection, and rate limiting
- **SEO Optimized**: Meta tags, dynamic sitemap generation, and structured data
- **Performance Optimized**: Image optimization, lazy loading, code splitting, and bundle analysis
- **Accessibility**: ARIA labels, keyboard navigation, skip links, and semantic HTML
- **PWA Ready**: Service worker, manifest.json, and offline support

### Sections
1. **Hero/Profile Section**: Animated profile with parallax effects, social links, and call-to-action buttons
2. **Skills/Expertise**: Interactive skill cards with icons, responsive grid layout, and progressive loading
3. **Certificates**: Showcase of certifications with modal views and verification links
4. **Education Timeline**: Animated vertical timeline displaying academic achievements
5. **Experience Timeline**: Professional experience with alternating left/right layout on desktop
6. **Projects**: Filterable project showcase (personal/internship) with detailed descriptions and tech stacks
7. **My Story**: Personal biography page with timeline-based narrative
8. **Contact**: Multi-channel contact section with form, social links, and contact information

## 🛠️ Tech Stack

### Framework & Core
- **Next.js**: `^15.3.3` (App Router)
- **React**: `^19.0.0`
- **TypeScript**: `^5`
- **Node.js**: Runtime environment

### Styling & UI
- **Tailwind CSS**: `^3.4.1` - Utility-first CSS framework
- **tailwindcss-animate**: `^1.0.7` - Animation utilities
- **Custom Fonts**: 
  - Orbitron (Variable font) - Headings
  - Edu NSW ACT Foundation - Body text
- **Radix UI**: 
  - `@radix-ui/react-accordion`
  - `@radix-ui/react-icons`
  - `@radix-ui/react-slot`
  - `@radix-ui/react-tooltip`
- **shadcn/ui**: Component library built on Radix UI
- **class-variance-authority**: `^0.7.1` - Component variants
- **clsx**: `^2.1.1` - Conditional classnames
- **tailwind-merge**: `^3.0.1` - Merge Tailwind classes

### Animations & Interactions
- **Framer Motion**: `^12.23.9` - Animation library
- **react-intersection-observer**: `^9.16.0` - Scroll-triggered animations
- **react-icon-cloud**: `^4.1.7` - Icon cloud visualization

### Icons
- **Lucide React**: `^0.475.0` - Modern icon library
- **React Icons**: `^5.4.0` - Comprehensive icon collection

### Forms & Communication
- **EmailJS**: `@emailjs/browser ^4.4.1` - Email service integration
- **Axios**: `^1.7.9` - HTTP client

### State Management & Utilities
- **next-themes**: `^0.4.4` - Theme management
- **cookies-next**: `^5.1.0` - Cookie handling
- **Notyf**: `^3.10.0` - Toast notifications

### Development Tools
- **ESLint**: `^9` with Next.js config
- **TypeScript**: Strict mode enabled
- **@next/bundle-analyzer**: `^15.3.3` - Bundle size analysis
- **Lighthouse**: `^12.8.0` - Performance auditing
- **cross-env**: `^7.0.3` - Cross-platform environment variables

### Build & Optimization
- **PostCSS**: `^8` - CSS processing
- **Critters**: `^0.0.23` - Critical CSS extraction
- **Turbopack**: Next.js bundler (experimental)

## 📁 Project Structure

```
myportfolio/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout with fonts, metadata, providers
│   ├── page.tsx                 # Home page (all sections)
│   ├── globals.css              # Global styles, animations, optimizations
│   ├── not-found.tsx            # 404 page
│   ├── sitemap.ts               # Dynamic sitemap generation
│   ├── projects/                # Projects page route
│   │   └── page.tsx
│   ├── my-story/                # Biography page route
│   │   └── page.tsx
│   ├── contact/                 # Contact page route
│   │   └── page.tsx
│   ├── skills/                  # Skills page route
│   │   └── page.tsx
│   └── loading-demo/            # Loading demo page
│       └── page.tsx
│
├── components/                  # React components
│   ├── Profile.tsx              # Hero/Profile section
│   ├── Footer.tsx                # Footer component
│   ├── FooterWrapper.tsx        # Footer wrapper
│   ├── ClientWrapper.tsx        # Client-side wrapper
│   │
│   ├── navigation/              # Navigation components
│   │   ├── Navigation.tsx       # Main navigation
│   │   └── SideBar.tsx          # Sidebar navigation
│   │
│   ├── skills/                  # Skills section
│   │   └── Skills.tsx           # Skills display component
│   │
│   ├── projects/                # Projects section
│   │   ├── Projects.tsx        # Projects container
│   │   └── Item.tsx            # Individual project card
│   │
│   ├── experience/              # Experience section
│   │   └── ExperienceTimeline.tsx  # Experience timeline
│   │
│   ├── education/               # Education section
│   │   └── educationTimeline.tsx   # Education timeline
│   │
│   ├── certificates/            # Certificates section
│   │   ├── Certificate.tsx     # Certificates container
│   │   └── CertificateItem.tsx # Individual certificate card
│   │
│   ├── contact/                 # Contact section
│   │   ├── ContactSection.tsx  # Contact container
│   │   └── Form.tsx            # Contact form with validation
│   │
│   ├── story/                   # Biography section
│   │   └── MyStory.tsx         # Personal story page
│   │
│   ├── ui/                      # Reusable UI components
│   │   ├── button.tsx          # Button component
│   │   ├── card.tsx            # Card component
│   │   ├── badge.tsx           # Badge component
│   │   ├── Alert.tsx           # Alert component
│   │   ├── AccessibleButton.tsx # Accessible button
│   │   ├── ErrorBoundary.tsx   # Error boundary
│   │   ├── LazyImage.tsx       # Lazy-loaded image
│   │   ├── LoadingBar.tsx      # Loading progress bar
│   │   ├── LoadingDemo.tsx     # Loading demo
│   │   ├── ScrollToTop.tsx     # Scroll to top button
│   │   ├── SkipLink.tsx        # Skip navigation link
│   │   ├── SmoothScroll.tsx    # Smooth scroll wrapper
│   │   ├── SvgIcon.tsx         # SVG icon component
│   │   └── theme-toggle.tsx    # Theme toggle button
│   │
│   ├── Analytics/               # Analytics components
│   │   └── GoogleAnalytics.tsx # Google Analytics integration
│   │
│   └── Performance/            # Performance monitoring
│       └── PerformanceMonitor.tsx
│
├── context/                     # React context providers
│   ├── theme-provider.tsx      # Theme context
│   └── loading-context.tsx     # Loading state context
│
├── utils/                       # Utility functions and data
│   ├── data/
│   │   ├── experience.js       # Experience data
│   │   ├── skills.js           # Skills data
│   │   └── education.js        # Education data
│   ├── skill-image.js          # Skill icon mapping
│   └── Notification.tsx         # Custom notification system
│
├── helpers/                     # Helper functions
│   ├── birthday.tsx            # Age calculation
│   ├── validateEmail.tsx      # Email validation
│   ├── validateTextarea.tsx   # Textarea validation
│   ├── validateUsername.tsx   # Username validation
│   └── index.tsx              # Helper exports
│
├── hooks/                       # Custom React hooks
│   └── useOptimizedAnimation.ts # Animation optimization hook
│
├── lib/                         # Library utilities
│   └── utils.ts                # Utility functions (cn, etc.)
│
├── fonts/                       # Local font files
│   ├── Orbitron/               # Orbitron font family
│   └── Edu_NSW_ACT_Foundation/ # Edu NSW font family
│
├── public/                      # Static assets
│   ├── assets/
│   │   ├── images/             # Project and profile images (WebP format)
│   │   └── svg/
│   │       └── skills/         # Skill icon SVGs
│   ├── favicon.ico             # Site favicon
│   ├── manifest.json           # PWA manifest
│   ├── robots.txt              # SEO robots file
│   ├── sw.js                    # Service worker
│   └── offline.html            # Offline fallback page
│
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── postcss.config.mjs         # PostCSS configuration
├── eslint.config.mjs          # ESLint configuration
├── package.json                # Dependencies and scripts
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites
- **Node.js**: 18.x or higher
- **npm**, **yarn**, or **pnpm** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AbhinavSharma486/ABHINAV-SHARMA_Portfolio_Nextjs.git
   cd myportfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   ```
   
   > **Note**: Get your EmailJS credentials from [EmailJS Dashboard](https://dashboard.emailjs.com/)

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

- `npm run dev` - Start development server on port 3000
- `npm run build` - Build production-ready application
- `npm run start` - Start production server (requires build first)

### Mobile Optimizations
- Reduced animations on mobile for better performance
- Simplified layouts for smaller screens
- Touch-optimized interactions
- Progressive loading (show more/less buttons)
- Disabled parallax effects on mobile


### Environment Variables

Ensure all environment variables are set in your deployment platform:
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

## 🔒 Security Features

- **CSRF Protection**: Token-based protection for forms
- **Rate Limiting**: Prevents form spam (3 attempts per minute)
- **Input Sanitization**: All user inputs are sanitized
- **XSS Protection**: Content Security Policy headers
- **Secure Headers**: X-Frame-Options, X-Content-Type-Options, X-XSS-Protection

## 📊 Performance Optimizations

- **Code Splitting**: Automatic route-based and component-based splitting
- **Image Optimization**: Next.js Image component with WebP/AVIF
- **Lazy Loading**: Components and images load on demand
- **Bundle Optimization**: Vendor chunks, common chunks, and tree shaking
- **CSS Optimization**: Critical CSS extraction
- **Font Optimization**: Local fonts with preloading
- **Caching**: Static asset caching headers
- **Mobile Optimizations**: Reduced animations and effects on mobile

## 📞 Contact

- **Email**: abhinavsharma486@gmail.com
- **LinkedIn**: [Abhinav Sharma](https://www.linkedin.com/in/abhinav-sharma-6254252a5/)
- **GitHub**: [@AbhinavSharma486](https://github.com/AbhinavSharma486)
---

**Built with ❤️ by Abhinav Sharma**