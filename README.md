# Abhinav Sharma - Personal Portfolio

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features a beautiful UI with dark/light theme support, smooth animations, and contact form functionality.

## 🚀 Features

- **Modern Design**: Glassmorphism effects with gradient backgrounds
- **Responsive**: Mobile-first design with proper breakpoints
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Smooth Animations**: Framer Motion animations throughout
- **Contact Form**: EmailJS integration with validation
- **SEO Optimized**: Meta tags, sitemap, and structured data
- **Performance**: Optimized images, lazy loading, and bundle splitting
- **Accessibility**: ARIA labels and keyboard navigation

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React, React Icons
- **UI Components**: Radix UI, shadcn/ui
- **Email Service**: EmailJS
- **Deployment**: Vercel

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/myportfolio.git
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
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

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

## 📁 Project Structure

```
myportfolio/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── projects/          # Projects page
│   ├── my-story/          # About page
│   └── contact/           # Contact page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── navigation/       # Navigation components
│   ├── projects/         # Project-related components
│   └── contact/          # Contact form components
├── utils/                # Utility functions and data
├── helpers/              # Validation helpers
├── hooks/                # Custom React hooks
├── context/              # React context providers
└── public/               # Static assets
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run analyze` - Analyze bundle size

## 📝 Customization

### Colors and Themes
Edit `tailwind.config.ts` to customize colors and animations.

### Content
Update the following files to customize content:
- `utils/data/experience.js` - Experience timeline
- `utils/data/skills.js` - Skills data
- `components/Profile.tsx` - Personal information
- `components/projects/Projects.tsx` - Project data

### Styling
- Global styles: `app/globals.css`
- Component styles: Inline Tailwind classes
- Custom animations: `tailwind.config.ts`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: abhinavsharma486@gmail.com
- **LinkedIn**: [Abhinav Sharma](https://www.linkedin.com/in/abhinav-sharma-6254252a5/)
- **GitHub**: [@AbhinavSharma486](https://github.com/AbhinavSharma486)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
