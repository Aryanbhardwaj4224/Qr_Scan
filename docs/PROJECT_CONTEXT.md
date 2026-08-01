# Project Context — Seed Oasis QR Landing Page

## Overview

A premium QR-code-linked profile landing page for **Seed Oasis**. Users scan a QR code and are redirected to a beautifully designed page with social media links, contact actions, and profile information.

## Project Status

| Phase | Status |
|-------|--------|
| 1. Foundation | ✅ Complete |
| 2. Core UI | ✅ Complete |
| 3. Actions & Interactivity | ✅ Complete |
| 4. Theme & Polish | ✅ Complete |
| 5. Deployment | 🟡 In Progress (QR generated, hosting pending) |

## Architecture Decisions

| Decision | Rationale |
|----------|-----------|
| No routing | Single-page landing — zero overhead |
| No state library | Minimal state (theme + toast), React Context suffices |
| Static data files | No backend, instant load, easy to update |
| Tailwind v4 CSS-first | Theme switching via CSS custom properties |
| Framer Motion | Declarative, composable, gesture-ready animations |
| Client-side vCard | No server needed, pure JS blob download |

## Tech Stack

- **React 19** + **TypeScript 6** — UI & type safety
- **Vite 8** — Build tool
- **Tailwind CSS 4** — Styling (CSS-first config)
- **Framer Motion 12** — Animations
- **React Icons 5** — Tree-shakeable icons
- **React Helmet Async** — SEO meta tags

## Key Files

| File | Purpose |
|------|---------|
| `src/App.tsx` | Root composition of all components |
| `src/data/profile.ts` | Profile name, bio, contact info |
| `src/data/socialLinks.ts` | Social media links configuration |
| `src/data/theme.ts` | Theme types and constants |
| `src/hooks/useTheme.tsx` | Dark/light mode provider & hook |
| `src/hooks/useClipboard.ts` | Copy-to-clipboard hook |
| `src/hooks/useShare.ts` | Web Share API hook |
| `src/utils/cn.ts` | Tailwind class merge utility |
| `src/utils/vcard.ts` | vCard generation & download |
| `src/index.css` | Design system tokens & global styles |

## Components Built

All 15 components are implemented:
- **Layout**: `PageWrapper`, `Card`
- **Profile**: `Avatar`, `Bio`, `ProfileHeader`
- **Links**: `SocialButton`, `SocialLinks`
- **Actions**: `ContactButton`, `CopyLinkButton`, `ShareButton`, `DownloadVCard`, `ActionBar`
- **UI**: `AnimatedBackground`, `ThemeToggle`, `Toast`
- **SEO**: `SEOHead`

## Domain

- Production URL: `https://seed-oasis.com`
- QR code redirects to this URL

## Last Updated

2026-08-01 — Phases 1-4 complete, Phase 5 in progress (QR code generated).
