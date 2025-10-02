## My Portfolio (React + Vite + Tailwind)

Personal portfolio showcasing projects, skills, and contact information. Built with React, Vite, and Tailwind CSS.

### Tech Stack
- React + Vite
- Tailwind CSS
- Font Awesome (icons)

### Features
- Responsive layout for mobile and desktop
- Projects grid with images
- Skills section with tech icons
- Smooth scrolling navigation
- Contact section


### Project Structure
```
.
├─ src/
│  ├─ App.jsx                  # Root component composing sections
│  ├─ main.jsx                 # Vite entry; mounts <App />
│  ├─ index.css                # Global Tailwind styles
│  ├─ App.css                  # Component-level styles (if any)
│  ├─ assets/
│  │  └─ react.svg             # Example asset
│  ├─ hooks/
│  │  └─ useTypewriter.js      # Typing effect for hero text
│  └─ components/
│     ├─ Header.jsx            # Hero, nav, CTA
│     ├─ MobileMenu.jsx        # Mobile navigation drawer
│     ├─ About.jsx             # About + tabs (Problem-Solving, Education)
│     ├─ Skills.jsx            # Skills icons grid
│     ├─ Portfolio.jsx         # Projects showcase
│     ├─ Contact.jsx           # Contact form/links
│     └─ Footer.jsx            # Footer links & copyright
├─ public/
│  ├─ images/                  # Static assets served as-is
│  │  ├─ skills/               # Tech icons (png)
│  │  ├─ coding/               # Profile badges (lc, cf)
│  │  ├─ myProjects/           # Project thumbnails
│  │  ├─ my-cv.pdf             # Resume download
│  │  └─ *.png                 # Logos, backgrounds
│  └─ favicon.png
├─ index.html                  # Vite HTML template
├─ vite.config.js              # Vite config
├─ package.json                # Scripts and deps
├─ eslint.config.js            # ESLint config
├─ .gitignore                  # Git ignores
└─ README.md                   # This file
```

# THANK YOU 🙂