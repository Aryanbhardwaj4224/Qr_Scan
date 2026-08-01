import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface AvatarProps {
  src: string;
  alt: string;
  className?: string;
}

/**
 * Avatar — Circular profile image with animated glow ring.
 * Features a pulsing violet ring and scale-up entrance animation.
 */
export default function Avatar({ src, alt, className }: AvatarProps) {
  return (
    <motion.div
      className={cn('relative mx-auto', className)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.15,
      }}
    >
      {/* Glow ring */}
      <div
        className="absolute -inset-1 rounded-full opacity-75"
        style={{
          background:
            'linear-gradient(135deg, var(--color-accent), var(--color-accent-glow))',
          animation: 'pulse-glow 3s ease-in-out infinite',
          borderRadius: '9999px',
        }}
      />

      {/* Image container */}
      <div
        className="relative overflow-hidden rounded-full border-2"
        style={{
          width: 'var(--avatar-size)',
          height: 'var(--avatar-size)',
          borderColor: 'var(--color-bg-primary)',
        }}
      >
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          loading="eager"
          decoding="async"
        />
      </div>
    </motion.div>
  );
}
