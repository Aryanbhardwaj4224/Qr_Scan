# Architecture — Seed Oasis QR Landing Page

## System Overview

```
┌─────────────────────────────────────────────────┐
│                   QR Code Scan                   │
│              → seed-oasis.com                    │
└─────────────────┬───────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────┐
│              Static Site (CDN)                   │
│                                                  │
│  ┌─────────────────────────────────────────┐    │
│  │            index.html                    │    │
│  │  ┌─────────────────────────────────┐    │    │
│  │  │          App.tsx                  │    │    │
│  │  │  ┌───────────────────────────┐  │    │    │
│  │  │  │  ThemeProvider (Context)   │  │    │    │
│  │  │  │  ┌─────────────────────┐  │  │    │    │
│  │  │  │  │    PageWrapper      │  │  │    │    │
│  │  │  │  │  ┌───────────────┐  │  │  │    │    │
│  │  │  │  │  │ AnimatedBg    │  │  │  │    │    │
│  │  │  │  │  │ ThemeToggle   │  │  │  │    │    │
│  │  │  │  │  │ Card          │  │  │  │    │    │
│  │  │  │  │  │  ├ Profile    │  │  │  │    │    │
│  │  │  │  │  │  ├ Social     │  │  │  │    │    │
│  │  │  │  │  │  └ Actions    │  │  │  │    │    │
│  │  │  │  │  │ Toast         │  │  │  │    │    │
│  │  │  │  │  └───────────────┘  │  │  │    │    │
│  │  │  │  └─────────────────────┘  │  │    │    │
│  │  │  └───────────────────────────┘  │    │    │
│  │  └─────────────────────────────────┘    │    │
│  └─────────────────────────────────────────┘    │
└─────────────────────────────────────────────────┘
```

## Data Flow

```
Static Config Files (src/data/)
        │
        ▼
  React Components ──→ Rendered UI
        │
        ├──→ useTheme (Context + localStorage)
        ├──→ useClipboard (Clipboard API)
        ├──→ useShare (Web Share API)
        └──→ vcard.ts (Blob download)
```

## Key Principles

1. **Zero Backend** — All data is static, baked into the bundle at build time
2. **Single Page** — No routing, no code splitting needed
3. **Mobile First** — Designed for phone screens (QR scan context), scales up
4. **Performance Budget** — Target <100kb gzipped JS, Lighthouse 95+
5. **Theme via CSS Variables** — Instant transitions, no React re-renders for color changes

## File Organization

| Directory | Contents |
|-----------|----------|
| `src/components/layout/` | Page structure (wrapper, card, background) |
| `src/components/profile/` | Profile display (avatar, bio, header) |
| `src/components/links/` | Social media link buttons |
| `src/components/actions/` | Contact, copy, share, vCard actions |
| `src/components/ui/` | Generic UI (theme toggle, toast) |
| `src/components/seo/` | Meta tags and SEO |
| `src/hooks/` | Custom React hooks |
| `src/data/` | Static configuration |
| `src/utils/` | Pure utility functions |

## Deployment Architecture

- **Build**: `vite build` → static HTML/CSS/JS
- **Host**: Any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages)
- **CDN**: Assets served from edge network
- **Domain**: `seed-oasis.com`
- **QR**: Encoded URL pointing to the domain
