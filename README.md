# 🚀 Navin Kumar - AI Engineer & Full Stack Developer Portfolio

> Building intelligent systems and elite solutions for the future

![Portfolio Banner](https://img.shields.io/badge/Portfolio-2024-ff006e?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-16.1.6-000000?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-Latest-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Node.js](https://img.shields.io/badge/Node.js-Latest-339933?style=for-the-badge&logo=node.js)

---

## 🎯 Why This Portfolio Was Built

This portfolio showcases modern web development practices combined with cutting-edge AI/ML capabilities. It demonstrates:

- **Full-Stack Expertise**: From beautiful frontend animations to robust backend services
- **Production-Ready Code**: Best practices in performance, accessibility, and user experience
- **AI Integration**: Real-world examples of LLMs, RAG systems, and intelligent automation
- **Professional Design**: Cyberpunk-inspired modern UI with smooth animations and interactions

---

## 🛠️ What We Serve

### **Services Offered**

#### 🤖 AI Product Development
Build AI-powered SaaS products with cutting-edge LLM technology, RAG systems, and intelligent automation
- Custom LLM Integration
- RAG Architecture
- AI Automation Systems

#### 🚀 Startup MVP Development
Turn your startup ideas into real, working products with rapid prototyping and full-stack development
- Quick Turnaround
- Scalable Stack
- Production Ready Solutions

#### ⚡ AI Automation Systems
Automate business workflows and processes using AI agents, LLMs, and intelligent automation
- Workflow Automation
- AI Agents
- Cost Optimization

#### 💻 Full Stack Web Apps
Build scalable, modern web applications with best practices, clean code, and excellent UX
- Modern Stack (React, TypeScript, Node.js)
- Responsive Design
- Performance Optimized

---

## 🌟 Key Features

### Frontend
✨ **Stunning UI/UX**
- Cyberpunk-inspired modern design
- Smooth Framer Motion animations
- Glassmorphism effects and neon glows
- Fully responsive mobile-first design

🎨 **Interactive Components**
- Animated hero section with typing effects
- 3D tech grid showcase
- Floating blobs background
- Glitch text effects
- Particle animations

📱 **Performance Optimized**
- Next.js 16 with App Router
- Server-side rendering for SEO
- Code splitting and lazy loading
- Image optimization
- CSS-in-JS with Tailwind

### Backend
🔒 **Secure API**
- Express.js with rate limiting
- CORS protection
- Input validation and HTML escaping
- Error handling
- Environment-based configuration

📧 **Email Service**
- Nodemailer integration with Gmail
- Admin notifications
- User confirmation emails
- Beautiful email templates

---

## 🚀 Tech Stack

### Frontend
```
- Next.js 16.1.6
- React 18+
- TypeScript
- Framer Motion (animations)
- Lucide React (icons)
- Tailwind CSS
- Shadcn/ui (components)
```

### Backend
```
- Node.js
- Express.js
- Nodemailer (email service)
- express-rate-limit (security)
- CORS middleware
```

### Tools & Services
```
- Google Calendar API (booking)
- GitHub (version control)
- Vercel (frontend deployment)
- Render.com (backend deployment)
- Gmail (email service)
```

---

## 📋 Project Structure

```
portfolio/
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles
│   └── services/                # Services page
│
├── components/                  # React components
│   ├── animations/              # Animated components
│   │   ├── animated-grid-background.tsx
│   │   ├── floating-blobs.tsx
│   │   ├── typing-text.tsx
│   │   ├── tech-grid-3d.tsx
│   │   └── ... more animations
│   │
│   ├── services/                # Service page components
│   │   ├── booking-section.tsx
│   │   ├── pricing-section.tsx
│   │   └── service-cards.tsx
│   │
│   ├── ui/                      # UI components (Shadcn)
│   ├── navbar.tsx               # Navigation
│   ├── hero-section.tsx         # Hero section
│   ├── contact-section.tsx      # Contact form
│   └── ... more sections
│
├── hooks/                        # Custom React hooks
│   ├── use-contact-form.ts
│   ├── use-toast.ts
│   └── use-scroll-animation.ts
│
├── lib/                         # Utility functions
│   ├── utils.ts
│   └── animation-variants.ts
│
├── backend/                     # Node.js backend
│   ├── server.js                # Express server
│   ├── .env                     # Environment variables
│   └── package.json
│
└── public/                      # Static assets
    ├── Resume/
    └── projects/
```

---

## 🏃 Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/NavinKumar8816/portfolio.git
cd portfolio
```

2. **Install frontend dependencies**
```bash
npm install
# or
pnpm install
```

3. **Setup environment variables**
```bash
# Create .env.local file
cp .env.example .env.local
```

4. **Install backend dependencies**
```bash
cd backend
npm install
```

5. **Configure backend .env**
```bash
# backend/.env
EMAIL=your-gmail@gmail.com
EMAIL_PASS=your-16-digit-app-password
PORT=5000
NODE_ENV=development
```

---

## 🎮 Running Locally

### Terminal 1 - Backend
```bash
cd backend
npm start
# Server runs on http://localhost:5000
```

### Terminal 2 - Frontend
```bash
npm run dev
# App runs on http://localhost:3000
```

### Available Commands
```bash
# Frontend
npm run dev          # Development server
npm run build        # Production build
npm run start        # Production server
npm run lint         # Run ESLint

# Backend
npm start            # Start server
npm run dev          # Dev mode with nodemon
```

---

## 📧 Contact Information

- **Email**: [Navinkumar.dev01@gmail.com](mailto:Navinkumar.dev01@gmail.com)
- **Location**: Mohali, Punjab | Available for remote projects worldwide
- **LinkedIn**: [linkedin.com/in/navin-kumar123](https://www.linkedin.com/in/navin-kumar123/)
- **GitHub**: [github.com/NavinKumar8816](https://github.com/NavinKumar8816)

---

## 🌐 Live Demo

- **Portfolio**: [https://navin-portfolio-gamma.vercel.app](https://navin-portfolio-gamma.vercel.app)
- **Services Page**: [https://navin-portfolio-gamma.vercel.app/services](https://navin-portfolio-gamma.vercel.app/services)

---

## 🚀 Deployment

### Frontend (Vercel)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import GitHub repository
4. Set environment variables:
   ```
   NEXT_PUBLIC_API_URL=https://your-backend.onrender.com
   ```
5. Deploy!

### Backend (Render.com)

1. Push backend folder to GitHub
2. Go to [render.com](https://render.com)
3. Create new Web Service
4. Connect GitHub repo
5. Set environment variables:
   ```
   EMAIL=your-gmail@gmail.com
   EMAIL_PASS=your-app-password
   PORT=5000
   NODE_ENV=production
   ```
6. Deploy!

---

## 🔒 Security Features

✅ **Rate Limiting**: 100 requests per 15 minutes per IP  
✅ **CORS Protection**: Restricted to authorized domains  
✅ **Input Validation**: Both frontend and backend validation  
✅ **XSS Prevention**: HTML escaping in email templates  
✅ **Error Handling**: Secure error messages without sensitive info  
✅ **Environment Variables**: Sensitive data protected  

---

## 📊 Performance Metrics

- ⚡ **Lighthouse Score**: 90+
- 🎯 **Core Web Vitals**: Optimized
- 📱 **Mobile Responsive**: 100%
- 🎨 **Accessibility**: WCAG 2.1 AA
- 🚀 **Load Time**: < 2 seconds

---

## 📈 Features Showcase

### Contact Form
- Real-time form validation
- Toast notifications
- Email notifications to admin
- User confirmation emails
- Auto-reply system

### Services Booking
- Project inquiry form with details
- Budget and timeline selection
- Google Calendar integration
- Direct call scheduling
- Professional inquiry pipeline

### Animations
- Smooth page transitions
- Scroll-triggered animations
- Interactive tech grid
- Glitch text effects
- Particle backgrounds
- Floating blobs

---

## 🛣️ Roadmap

### Upcoming Features
- [ ] Blog section with articles
- [ ] Client testimonials database
- [ ] Portfolio project case studies
- [ ] AI chatbot for instant support
- [ ] Dark/Light theme toggle
- [ ] Analytics dashboard
- [ ] Newsletter subscription
- [ ] Social media integration

---

## 🤝 Contributing

This is a personal portfolio project, but if you find improvements:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the MIT License - see the LICENSE file for details.

---

## 🙏 Acknowledgments

- **Next.js** - React framework for production
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Beautiful component library
- **Lucide React** - Icon library
- **Vercel** - Deployment platform
- **Render.com** - Backend hosting

---

## 📞 Let's Connect

Have a project in mind? Let's discuss!

- 📧 **Email**: Navinkumar.dev01@gmail.com
- 📅 **Book a Call**: [Google Calendar](https://calendar.app.google/jvPNkNqdgM67A8TTA)
- 🔗 **LinkedIn**: [@navin-kumar123](https://www.linkedin.com/in/navin-kumar123/)
- 🐙 **GitHub**: [@NavinKumar8816](https://github.com/NavinKumar8816)

---

## 📊 Project Stats

```
Lines of Code:    10,000+
Components:       50+
Animations:       20+
API Endpoints:    5+
Countries:        Worldwide
Happy Clients:    Growing 📈
```

---

<div align="center">

### Made with ❤️ by Navin Kumar

**Building the future, one line of code at a time.**

[⬆ Back to Top](#-navin-kumar---ai-engineer--full-stack-developer-portfolio)

</div>

---

**Last Updated**: April 2025  
**Version**: 1.0.0
