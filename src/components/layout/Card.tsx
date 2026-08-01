import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Card — Central glassmorphic container.
 * Applies blur backdrop, subtle border, and entrance animation.
 */
export default function Card({ children, className }: CardProps) {
  return (
    <motion.div
      className={cn(
        'glass w-full',
        'rounded-[var(--card-border-radius)]',
        'p-[var(--card-padding)]',
        'max-w-[var(--card-max-width)]',
        'shadow-[var(--shadow-card)]',
        className
      )}
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
