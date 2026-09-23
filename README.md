# ITCoin (ITC) Landing Page

A one-page landing site for ITCoin (ITC), the utility token of the future ITHom ecosystem.

## Stack

- React 18
- Vite 5
- No UI libraries — custom CSS and a hand-built SVG tokenomics chart

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

The production build is output to `dist/`.

## Deploying

**Netlify**
- Build command: `npm run build`
- Publish directory: `dist`

**Vercel**
- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

## Structure

```
src/
  assets/logo.png       ITCoin logo (used as coin texture + brand mark)
  components/           One component per section
  App.jsx
  index.css             Design tokens + global styles
```

## Content notes

- Tokenomics figures are taken directly from the provided allocation chart (Total Supply: 100,000,000 ITC).
- ITHom is presented throughout as a project in development, not a released game.
- No investment or profit claims are made anywhere on the site.
