import { motion } from 'framer-motion';
import { FaLeaf, FaSeedling, FaSun, FaHeart, FaStar } from 'react-icons/fa6';
import type { IconType } from 'react-icons';

interface ProductItem {
  icon: IconType;
  name: string;
  tagline: string;
  benefits: string[];
}

const products: ProductItem[] = [
  {
    icon: FaLeaf,
    name: 'Chia Seeds',
    tagline: 'High Omega-3 & Dietary Fiber',
    benefits: ['Supports digestion', 'Sustained energy release'],
  },
  {
    icon: FaSeedling,
    name: 'Pumpkin Seeds',
    tagline: 'Rich in Zinc, Magnesium & Protein',
    benefits: ['Supports immunity', 'Heart-healthy fats'],
  },
  {
    icon: FaSun,
    name: 'Sunflower Seeds',
    tagline: 'Loaded with Vitamin E & Antioxidants',
    benefits: ['Promotes glowing skin', 'Muscle recovery support'],
  },
  {
    icon: FaHeart,
    name: 'Flax Seeds',
    tagline: 'Omega-3 (ALA) & Lignans Powerhouse',
    benefits: ['Digestive wellness', 'Cardiovascular health'],
  },
  {
    icon: FaStar,
    name: 'Daily Super Seed Mix',
    tagline: 'Ultimate Nutrient-Dense Crunch',
    benefits: ['5-in-1 complete superfood mix', 'No added sugar or salt'],
  },
];

/**
 * ProductSection — Displays our premium natural seed range.
 */
export default function ProductSection() {
  return (
    <motion.section
      className="flex flex-col gap-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Our Products"
    >
      <div className="text-center">
        <p className="text-[0.6875rem] font-bold uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
          Our Collection
        </p>
        <h3 className="mt-2 font-serif text-2xl font-bold leading-snug text-[var(--color-forest)]">
          Premium Raw Seeds
        </h3>
      </div>

      <div className="flex flex-col gap-4">
        {products.map(({ icon: Icon, name, tagline, benefits }, index) => (
          <motion.div
            key={name}
            className="group relative flex flex-col gap-3 rounded-[1.75rem] border border-[var(--color-border-card)] bg-[var(--color-bg-card)] p-5.5 shadow-[var(--shadow-card)] transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[var(--shadow-card-hover)]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.2 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Top row: Icon and Product Title */}
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-olive)] text-[var(--color-forest)] group-hover:scale-105 transition-transform duration-300">
                <Icon size={18} aria-hidden="true" />
              </span>
              <div className="flex-1">
                <h4 className="font-sans text-base font-bold text-[var(--color-text-primary)]">
                  {name}
                </h4>
                <p className="text-[0.78rem] font-medium text-[var(--color-accent)] leading-tight mt-0.5">
                  {tagline}
                </p>
              </div>
            </div>

            {/* Benefits tags */}
            <div className="flex flex-wrap gap-2 mt-1">
              {benefits.map((benefit) => (
                <span
                  key={benefit}
                  className="inline-flex items-center rounded-full bg-[var(--color-olive)]/30 px-2.5 py-0.75 text-[0.6875rem] font-semibold text-[var(--color-text-secondary)]"
                >
                  {benefit}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
