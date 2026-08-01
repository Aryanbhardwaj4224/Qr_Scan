import { motion } from 'framer-motion';

/**
 * FooterMessage — Closing thank-you line at the bottom of the page.
 */
export default function FooterMessage() {
  return (
    <motion.footer
      className="px-3 pb-8 pt-4 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 1.1 }}
    >
      <p className="text-[0.9375rem] leading-relaxed text-[var(--color-text-secondary)]">
        Thank you for choosing{' '}
        <span className="font-bold text-[var(--color-accent)]">Seed Oasis</span>
      </p>
      <p className="mt-1.5 text-[0.8125rem] text-[var(--color-text-muted)]">
        Nourish your body. Live well.
      </p>
    </motion.footer>
  );
}
