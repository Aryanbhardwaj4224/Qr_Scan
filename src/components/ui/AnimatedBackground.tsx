import { motion } from 'framer-motion';

function LeafCorner({ className, flip }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      aria-hidden="true"
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
    >
      <path
        d="M10 100 C30 70, 55 40, 95 15 C70 35, 45 65, 25 105 Z"
        fill="currentColor"
        opacity="0.12"
      />
      <path
        d="M25 95 C40 75, 60 55, 85 35 C65 50, 48 72, 35 98 Z"
        fill="currentColor"
        opacity="0.08"
      />
    </svg>
  );
}

/**
 * AnimatedBackground — Warm cream canvas with organic accents and grain.
 */
export default function AnimatedBackground() {
  return (
    <div className="bg-grain fixed inset-0 -z-10 overflow-hidden bg-[var(--color-bg-primary)]">
      {/* Warm wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 10% 15%, rgba(168, 195, 160, 0.22) 0%, transparent 50%), radial-gradient(ellipse at 90% 80%, rgba(232, 137, 46, 0.05) 0%, transparent 45%), radial-gradient(ellipse at 50% 100%, rgba(220, 232, 212, 0.35) 0%, transparent 55%)',
        }}
      />

      {/* Corner leaf illustrations */}
      <LeafCorner className="pointer-events-none absolute -left-2 top-8 h-28 w-28 text-[var(--color-sage)] sm:h-36 sm:w-36" />
      <LeafCorner
        flip
        className="pointer-events-none absolute -right-2 top-24 h-24 w-24 text-[var(--color-sage)] sm:h-32 sm:w-32"
      />
      <LeafCorner className="pointer-events-none absolute bottom-16 left-4 h-20 w-20 text-[var(--color-sage)] opacity-80 sm:h-28 sm:w-28" />

      {/* Soft organic blobs */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '45vmax',
          height: '45vmax',
          top: '-12%',
          right: '-18%',
          background: 'radial-gradient(circle, rgba(168, 195, 160, 0.18) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }}
        animate={{ x: [0, 18, -8, 0], y: [0, -12, 8, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute rounded-full"
        style={{
          width: '32vmax',
          height: '32vmax',
          bottom: '-8%',
          left: '-12%',
          background: 'radial-gradient(circle, rgba(220, 232, 212, 0.4) 0%, transparent 65%)',
          filter: 'blur(50px)',
        }}
        animate={{ x: [0, -12, 16, 0], y: [0, 16, -8, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
