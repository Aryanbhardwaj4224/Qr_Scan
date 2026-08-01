import { FaLeaf, FaTruck, FaStar, FaHeart } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const features = [
  { icon: FaLeaf, label: 'Natural' },
  { icon: FaTruck, label: 'Fast Delivery' },
  { icon: FaStar, label: 'Premium Quality' },
  { icon: FaHeart, label: 'Healthy Living' },
] as const;

/**
 * FeatureBar — Static trust badges (not interactive).
 */
export default function FeatureBar() {
  return (
    <motion.div
      className="pointer-events-none select-none rounded-[1.75rem] border border-[var(--color-accent-border)] bg-[var(--color-olive)] px-5 py-7 shadow-[var(--shadow-soft)]"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden="true"
    >
      <div className="grid grid-cols-4 gap-4">
        {features.map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-2.5 px-1 text-center">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/75 text-[var(--color-forest)] shadow-[var(--shadow-button)]">
              <Icon size={17} />
            </span>
            <span className="text-[0.8125rem] font-semibold leading-snug text-[var(--color-forest)]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
