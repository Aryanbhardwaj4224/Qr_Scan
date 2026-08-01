# Changelog — Seed Oasis QR Landing Page

All notable changes to this project will be documented in this file.

## [0.5.0] — 2026-08-01

### Phase 5: Deployment (partial)

#### Added
- Generated high-contrast, scannable black & white QR code encoding `https://seed-oasis.com`.
- Placed QR code asset in `public/qrcode.png` to be included in site distribution.
- Created `qrcode_display.md` artifact to present the scannable QR code directly.

---

## [0.4.0] — 2026-08-01

### Phase 4: Theme & Polish (complete)

#### Added
- `src/components/ui/ThemeToggle.tsx` — Floating dark/light mode toggle with rotating icon animation
- `src/components/seo/SEOHead.tsx` — Full SEO meta tags (OG, Twitter Card, mobile web app)
- Updated `index.html` with Inter font preloading, theme-color meta, proper title

#### Verified
- Mobile responsiveness on simulated viewport (390x844 iPhone profile)
- Perfect scaling and centration of glassmorphic card
- Smooth theme toggle transition between light/dark modes
- Error-free production build of the Vite React bundle (383 kB JS bundle)

---

## [0.2.0] — 2026-08-01

### Phase 2 & 3: Core UI + Actions

#### Added
- `src/components/ui/AnimatedBackground.tsx` — 3 floating gradient blobs with Framer Motion + noise texture
- `src/components/layout/PageWrapper.tsx` — Full-viewport flex container with responsive padding
- `src/components/layout/Card.tsx` — Glassmorphic card with entrance animation
- `src/components/profile/Avatar.tsx` — Profile image with animated glow ring
- `src/components/profile/Bio.tsx` — Name, tagline, bio with staggered slide-up animations
- `src/components/profile/ProfileHeader.tsx` — Composes Avatar + Bio
- `src/components/links/SocialButton.tsx` — Social link button with brand-color hover effects
- `src/components/links/SocialLinks.tsx` — Renders all social buttons from config
- `src/components/actions/ContactButton.tsx` — Email contact button
- `src/components/actions/CopyLinkButton.tsx` — Copy URL with visual feedback
- `src/components/actions/ShareButton.tsx` — Web Share API with clipboard fallback
- `src/components/actions/DownloadVCard.tsx` — Client-side vCard download
- `src/components/actions/ActionBar.tsx` — Horizontal action button row
- `src/components/ui/Toast.tsx` — Animated toast notifications
- Generated and added Seed Oasis profile logo image

#### Modified
- `src/App.tsx` — Composed all components into final landing page

---

## [0.1.0] — 2026-08-01

### Phase 1: Foundation

#### Added
- Scaffolded Vite 8 + React 19 + TypeScript 6 project
- Installed and configured Tailwind CSS v4 with `@tailwindcss/vite` plugin
- Installed project dependencies: `framer-motion`, `react-icons`, `react-helmet-async`, `clsx`, `tailwind-merge`
- Created design system in `src/index.css` with dark/light theme tokens, animations, glassmorphism
- Created data layer: `profile.ts`, `socialLinks.ts`, `theme.ts`
- Created custom hooks: `useTheme`, `useClipboard`, `useShare`
- Created utilities: `cn.ts`, `vcard.ts`
- Created all documentation files
- Removed `src/App.css` (Vite default)
