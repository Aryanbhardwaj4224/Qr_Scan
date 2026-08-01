# Components — Seed Oasis QR Landing Page

## Component Tree

```
App
├── SEOHead
└── ThemeProvider
    └── PageWrapper
        ├── AnimatedBackground
        ├── ThemeToggle
        ├── Card
        │   ├── ProfileHeader
        │   │   ├── Avatar
        │   │   └── Bio
        │   ├── SocialLinks
        │   │   └── SocialButton (×4)
        │   └── ActionBar
        │       ├── ContactButton
        │       ├── CopyLinkButton
        │       ├── ShareButton
        │       ├── QRButton (Modal included)
        │       └── DownloadVCard
        └── Toast
```

## Component Reference

### Layout Components (`src/components/layout/`)

#### PageWrapper
- **Purpose**: Full-viewport container, applies theme, holds animated background
- **Props**: `children: React.ReactNode`
- **Status**: ✅ Complete

#### Card
- **Purpose**: Central glassmorphic card with blur, border, and shadow
- **Props**: `children: React.ReactNode`
- **Status**: ✅ Complete

### Profile Components (`src/components/profile/`)

#### Avatar
- **Purpose**: Circular profile image with animated glow ring
- **Props**: `src: string`, `alt: string`
- **Status**: ✅ Complete

#### Bio
- **Purpose**: Name, title/tagline, and short bio text
- **Props**: Reads from `data/profile.ts`
- **Status**: ✅ Complete

#### ProfileHeader
- **Purpose**: Composes Avatar + Bio vertically
- **Props**: None (reads from data)
- **Status**: ✅ Complete

### Link Components (`src/components/links/`)

#### SocialButton
- **Purpose**: Single social media link button with icon, label, and brand color
- **Props**: `link: SocialLink` (from socialLinks.ts)
- **Status**: ✅ Complete

#### SocialLinks
- **Purpose**: Renders list of SocialButton components with staggered animation
- **Props**: None (reads from data)
- **Status**: ✅ Complete

### Action Components (`src/components/actions/`)

#### ContactButton
- **Purpose**: Opens mailto: link
- **Props**: None (reads from profile data)
- **Status**: ✅ Complete

#### CopyLinkButton
- **Purpose**: Copies current page URL to clipboard, shows toast
- **Props**: `onCopied?: () => void`
- **Status**: ✅ Complete

#### ShareButton
- **Purpose**: Triggers native share dialog or falls back to copy
- **Props**: `onShared?: () => void`
- **Status**: ✅ Complete

#### DownloadVCard
- **Purpose**: Generates and downloads vCard file
- **Props**: None
- **Status**: ✅ Complete

#### QRButton
- **Purpose**: Action button that opens modal to display and download QR code
- **Props**: None
- **Status**: ✅ Complete

#### ActionBar
- **Purpose**: Horizontal row of circular action buttons (Contact, Copy Link, Share, QR Code, Save Contact)
- **Props**: `onToast?: (message: string) => void`
- **Status**: ✅ Complete

### UI Components (`src/components/ui/`)

#### ThemeToggle
- **Purpose**: Sun/Moon icon button for dark/light mode
- **Props**: None (uses useTheme hook)
- **Status**: ✅ Complete

#### Toast
- **Purpose**: Transient notification popup (e.g., "Link copied!")
- **Props**: `message: string`, `visible: boolean`
- **Status**: ✅ Complete

#### AnimatedBackground
- **Purpose**: Animated gradient blobs behind the card
- **Props**: None
- **Status**: ✅ Complete

### SEO Components (`src/components/seo/`)

#### SEOHead
- **Purpose**: Manages `<title>`, meta description, OG tags via react-helmet-async
- **Props**: None (reads from profile data)
- **Status**: ✅ Complete
