import { motion } from 'framer-motion';

/**
 * SiteHeader — Brand logo, name, and tagline (mobile-first).
 */
export default function SiteHeader() {
  return (
    <motion.header
      className="flex flex-col items-center px-3 pb-1 text-center"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mb-5 flex h-16 w-16 items-center justify-center">
        <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden="true">
          <ellipse cx="32" cy="38" rx="14" ry="16" fill="#E8892E" />
          <path
            d="M32 22 C28 14, 22 10, 18 12 C22 8, 28 8, 32 14 C36 8, 42 8, 46 12 C42 10, 36 14, 32 22Z"
            fill="#355E3B"
          />
          <path
            d="M26 18 C24 14, 20 12, 18 14"
            stroke="#2A4A30"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M38 18 C40 14, 44 12, 46 14"
            stroke="#2A4A30"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <h1 className="font-serif text-[2.625rem] font-bold leading-none tracking-tight text-[var(--color-forest)]">
        Seed Oasis
      </h1>
      <p className="mt-3 text-[0.75rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-text-muted)]">
        Natural · Healthy · Pure
      </p>
    </motion.header>
  );
}
