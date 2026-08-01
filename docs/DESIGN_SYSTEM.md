# Design System — Seed Oasis QR Landing Page

## Color Palette

### Dark Mode (Default)

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg-primary` | `#0a0a0f` | Page background |
| `--color-bg-card` | `rgba(20, 20, 35, 0.7)` | Card background (glass) |
| `--color-border-card` | `rgba(255, 255, 255, 0.08)` | Card border |
| `--color-text-primary` | `#f0f0f5` | Headings, name |
| `--color-text-secondary` | `#a0a0b8` | Bio, subtitles |
| `--color-text-muted` | `#6b6b85` | Hints, timestamps |
| `--color-accent` | `#7c3aed` | Primary accent (violet-600) |
| `--color-accent-glow` | `#8b5cf6` | Hover/glow states |
| `--color-accent-subtle` | `rgba(124, 58, 237, 0.15)` | Button backgrounds |
| `--color-success` | `#10b981` | Toast success |

### Light Mode

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg-primary` | `#fafafa` | Page background |
| `--color-bg-card` | `rgba(255, 255, 255, 0.8)` | Card (glass) |
| `--color-text-primary` | `#1a1a2e` | Headings |
| `--color-text-secondary` | `#64648c` | Bio text |
| `--color-accent` | `#7c3aed` | Same accent |

### Social Brand Colors

| Platform | Color | Usage |
|----------|-------|-------|
| Facebook | `#1877F2` | Icon/hover tint |
| Instagram | `#E4405F` | Icon/hover tint |
| YouTube | `#FF0000` | Icon/hover tint |
| Website | `#7c3aed` | Matches accent |

## Typography

**Font**: Inter (Google Fonts)  
**Loading**: `font-display: swap` for zero render-blocking

| Element | Size | Weight | Tracking |
|---------|------|--------|----------|
| Name | `text-2xl` → `text-3xl` | 700 | `-0.02em` |
| Title | `text-sm` → `text-base` | 500 | `0.02em` (uppercase) |
| Bio | `text-sm` → `text-base` | 400 | Normal |
| Button label | `text-sm` | 500 | `0.01em` |
| Action label | `text-xs` | 500 | `0.02em` |

## Spacing Scale

Uses Tailwind defaults. Key values:

| Token | Value | Usage |
|-------|-------|-------|
| `--card-max-width` | `28rem` | Card max width |
| `--card-padding` | `2rem` | Card inner padding |
| `--card-border-radius` | `1.5rem` | Card corners |
| `--button-border-radius` | `0.875rem` | Button corners |
| `--avatar-size` | `7rem` | Profile image size |

## Shadows

| Token | Value |
|-------|-------|
| `--shadow-card` | `0 25px 50px -12px rgba(0, 0, 0, 0.5)` |
| `--shadow-button` | `0 4px 15px -3px rgba(0, 0, 0, 0.3)` |
| `--shadow-glow` | `0 0 40px rgba(124, 58, 237, 0.3)` |

## Animations

| Name | Duration | Purpose |
|------|----------|---------|
| `float` | 6s loop | Floating effect for decorative elements |
| `pulse-glow` | 3s loop | Avatar glow ring pulse |
| `gradient-shift` | 15s loop | Background gradient movement |

## Glassmorphism

Applied via the `.glass` utility class:
```css
background: var(--color-bg-card);
backdrop-filter: blur(20px) saturate(180%);
border: 1px solid var(--color-border-card);
```

## Transition Tokens

| Token | Value |
|-------|-------|
| `--transition-fast` | `150ms cubic-bezier(0.4, 0, 0.2, 1)` |
| `--transition-base` | `250ms cubic-bezier(0.4, 0, 0.2, 1)` |
| `--transition-slow` | `400ms cubic-bezier(0.4, 0, 0.2, 1)` |
