import SocialButton from './SocialButton';
import { socialLinks } from '../../data/socialLinks';
import { motion } from 'framer-motion';

/**
 * SocialLinks — "Explore More" section with premium link cards.
 */
export default function SocialLinks() {
  return (
    <section aria-label="Explore more">
      <motion.div
        className="mb-5 text-center"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.32 }}
      >
        <p className="text-[0.6875rem] font-bold uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
          Connect With Us
        </p>
        <h3 className="mt-2 font-serif text-[1.375rem] font-bold text-[var(--color-forest)]">
          Explore More
        </h3>
      </motion.div>

      <div className="flex flex-col gap-3.5">
        {socialLinks.map((link, index) => (
          <SocialButton key={link.id} link={link} index={index} />
        ))}
      </div>
    </section>
  );
}
