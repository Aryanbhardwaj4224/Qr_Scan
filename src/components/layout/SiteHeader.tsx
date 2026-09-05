import { motion } from 'framer-motion';

/**
 * SiteHeader — Brand logo, name, and tagline (mobile-first horizontal layout).
 */
export default function SiteHeader() {
  return (
    <motion.header
      className="flex items-center justify-center gap-3.5 px-3 py-4 text-center"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* S-Leaf Logo Mark */}
      <div className="flex h-14 w-14 shrink-0 items-center justify-center">
        <svg viewBox="0 0 100 100" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Green Upper Loop */}
          <path
            d="M50 15C30.7 15 15 30.7 15 50C15 57.5 17.4 64.5 21.5 70C21.5 61 24.5 52 31.5 45C38.5 38 48 36.5 56.5 40C51.5 29 42 15 50 15Z"
            fill="#355E3B"
          />
          {/* Tan Lower Loop */}
          <path
            d="M50 85C69.3 85 85 69.3 85 50C85 42.5 82.6 35.5 78.5 30C78.5 39 75.5 48 68.5 55C61.5 62 52 63.5 43.5 60C48.5 71 58 85 50 85Z"
            fill="#C5A880"
          />
          {/* Inner Tan Leaf */}
          <path
            d="M38 52C32 40 40 28 52 30C52 42 44 54 38 52Z"
            fill="#C5A880"
          />
          {/* Inner Green Leaf */}
          <path
            d="M62 48C68 60 60 72 48 70C48 58 56 46 62 48Z"
            fill="#355E3B"
          />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col items-start text-left">
        <h1 className="font-sans text-[2rem] font-bold tracking-tight leading-[1.1]">
          <span className="text-[#355E3B]">Seed</span>
          <span className="text-[#C5A880] ml-1">Oasis</span>
        </h1>
        <p className="mt-1 font-sans text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-[#355E3B]">
          Your Daily Source of Life
        </p>
      </div>
    </motion.header>
  );
}
