import { motion } from 'framer-motion';
import type { SocialLink } from '../../data/socialLinks';

interface SocialButtonProps {
  link: SocialLink;
  index: number;
}

/**
 * SocialButton — Premium tappable link card (min 68px touch target).
 */
export default function SocialButton({ link, index }: SocialButtonProps) {
  const { label, description, url, icon: Icon, color } = link;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="tap-card link-card group"
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.38,
        delay: 0.42 + index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="link-card-icon" style={{ backgroundColor: color }}>
        <Icon aria-hidden="true" />
      </span>

      <span className="min-w-0 flex-1">
        <span className="block text-base font-bold leading-snug text-[var(--color-text-primary)]">
          {label}
        </span>
        <span className="mt-1 block text-[0.8125rem] leading-relaxed text-[var(--color-text-muted)]">
          {description}
        </span>
      </span>

      <svg
        className="link-card-arrow h-[1.125rem] w-[1.125rem]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </motion.a>
  );
}
