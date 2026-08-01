import { motion } from 'framer-motion';

interface BioProps {
  name: string;
  title: string;
  bio: string;
}

/**
 * Bio — Displays the profile name, title/tagline, and short bio.
 * Each element animates in with a staggered slide-up effect.
 */
export default function Bio({ name, title, bio }: BioProps) {
  return (
    <div className="mt-5 text-center">
      {/* Name */}
      <motion.h1
        className="text-2xl font-bold tracking-tight sm:text-3xl"
        style={{ color: 'var(--color-text-primary)', letterSpacing: '-0.02em' }}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        {name}
      </motion.h1>

      {/* Title / Tagline */}
      <motion.p
        className="mt-1.5 text-sm font-medium uppercase tracking-widest sm:text-base"
        style={{ color: 'var(--color-accent-glow)' }}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {title}
      </motion.p>

      {/* Bio text */}
      <motion.p
        className="mx-auto mt-3 max-w-xs text-sm leading-relaxed sm:text-base"
        style={{ color: 'var(--color-text-secondary)' }}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        {bio}
      </motion.p>
    </div>
  );
}
