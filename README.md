# Character Creations

The official website for **Character Creations** — a small, family-owned business specializing in handmade items and lovingly restored older pieces brought back to life.

**Live Site**: [character-creations.vercel.app](https://character-creations.vercel.app/)

## About

Character Creations is a family-run shop dedicated to craftsmanship. We design and create handmade items from scratch, and we breathe new life into older pieces through careful restoration. Every item carries its own story.

## Status

This site is currently in early setup. The full website is coming soon.

## Tech Stack

- **Next.js 16** (React 19) with App Router
- **Tailwind CSS v4**
- **TypeScript**
- **Vercel** for hosting (auto-deployed on push via Git integration)

## Getting Started

### Prerequisites
- Node.js 20+
- npm

### Installation
```bash
git clone https://github.com/DustinHannon/CharacterCreations.git
cd CharacterCreations
npm install
```

### Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build
```bash
npm run build
```

## Project Structure

```
src/
└── app/
    ├── globals.css    # Global styles
    ├── layout.tsx     # Root layout, fonts, SEO metadata
    └── page.tsx       # Home page
```

## Deployment

The site auto-deploys to Vercel on every push to `master` via Git integration. Preview deployments are created for pull requests automatically.
