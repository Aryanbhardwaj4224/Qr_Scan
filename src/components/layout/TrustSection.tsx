import {
  FaLeaf,
  FaShieldHalved,
  FaAward,
  FaHeartPulse,
  FaCertificate,
  FaTruck,
  FaUsers,
} from 'react-icons/fa6';
import { motion } from 'framer-motion';
import type { IconType } from 'react-icons';
import { cn } from '../../utils/cn';

interface TrustItem {
  icon: IconType;
  label: string;
  description?: string;
}

const trustItems: TrustItem[] = [
  { icon: FaLeaf, label: '100% Natural', description: 'Pure from source' },
  { icon: FaShieldHalved, label: 'No Additives', description: 'Clean ingredients' },
  { icon: FaAward, label: 'Premium Quality', description: 'Hand-selected' },
  { icon: FaHeartPulse, label: 'Healthy Lifestyle', description: 'Daily nutrition' },
  { icon: FaCertificate, label: 'FSSAI Certified', description: 'Quality assured' },
  { icon: FaTruck, label: 'Free Shipping', description: 'Across India' },
  { icon: FaUsers, label: '10,000+ Happy Customers', description: 'Trusted nationwide' },
];

/**
 * TrustSection — Premium trust signals in a card grid.
 */
export default function TrustSection() {
  return (
    <motion.section
      className="rounded-[1.75rem] border border-[var(--color-accent-border)] bg-[var(--color-olive)]/40 px-5 py-7 shadow-[var(--shadow-soft)]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Why choose Seed Oasis"
    >
      <div className="mb-6 text-center">
        <p className="text-[0.6875rem] font-bold uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
          Our Promise
        </p>
        <h3 className="mt-2 font-serif text-xl font-bold leading-snug text-[var(--color-forest)]">
          Trusted by health-conscious families
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {trustItems.map(({ icon: Icon, label, description }, index) => (
          <motion.div
            key={label}
            className={cn(
              'trust-card tap-card',
              index === trustItems.length - 1 && trustItems.length % 2 !== 0 && 'col-span-2'
            )}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.28 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="trust-card-icon">
              <Icon size={18} aria-hidden="true" />
            </span>
            <span className="trust-card-label">{label}</span>
            {description && <span className="trust-card-desc">{description}</span>}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
