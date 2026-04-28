# Olive Landing Page — Frontend Assessment

A pixel-faithful recreation of the [Olive app](https://www.oliveapp.com/) hero / landing page, built with **React 18** and plain CSS Modules.

---

## Tech Stack

| Tool | Reason |
|---|---|
| React 18 | Component-based UI, required by assignment |
| CSS Modules | Scoped styles, no extra dependencies |
| Google Fonts | `Fraunces` (display) + `DM Sans` (body) — matching the original brand |
| React Scripts (CRA) | Zero-config dev server & build |

---

## Project Structure

```
olive-landing/
├── public/
│   └── index.html            # HTML shell with font links
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Sticky navigation with dropdown indicators & mobile menu
│   │   ├── Navbar.module.css
│   │   ├── OliveLogo.jsx     # Inline SVG logo (olive character + wordmark)
│   │   ├── Hero.jsx          # Hero section: social proof, headline, CTAs
│   │   ├── Hero.module.css
│   │   ├── PhoneMockup.jsx   # Realistic phone mockup with app UI
│   │   └── PhoneMockup.module.css
│   ├── App.jsx               # Root component
│   ├── App.css
│   ├── index.js              # ReactDOM entry
│   └── index.css             # CSS reset & global variables
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 16  
- **npm** ≥ 8 (comes with Node)

### Install & Run

```bash
# 1. Navigate into the project
cd olive-landing

# 2. Install dependencies
npm install

# 3. Start the dev server
npm start
```

The app opens at **http://localhost:3000** with hot reloading.

### Production Build

```bash
npm run build
```

Output is in the `build/` folder — ready to serve from any static host (Vercel, Netlify, GitHub Pages, etc.).

---

## Design Decisions

| Decision | Rationale |
|---|---|
| **Fraunces** serif for the headline | Matches the original's chunky, editorial display font |
| **DM Sans** for body/nav | Clean, modern grotesque matching Olive's brand |
| CSS custom properties | One place to tweak the olive-green palette |
| CSS Modules | Keeps every component's styles isolated without a CSS-in-JS runtime |
| Inline SVGs | No extra image assets needed; logo & phone icons are crisp at any DPI |
| Responsive hamburger menu | Collapses nav links on ≤ 768 px viewports |
| Subtle fade-up animations | Entrance animations match the polished feel of the original |

---

## Screenshots Reference

The design is based on a screenshot of `https://www.oliveapp.com/` provided as part of the Hire My Idea assessment. No affiliation with Olive or its owners.

---

## Author

Surya — submitted as part of the **Full Stack Developer Intern** assessment for Hire My Idea / Praxso.
