import { motion } from 'framer-motion';
import { profile } from '../../data/profile';

const productFallback =
  'data:image/svg+xml,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#FAF8F3"/><stop offset="100%" stop-color="#DCE8D4"/></linearGradient></defs><rect fill="url(#bg)" width="400" height="400" rx="32"/><ellipse cx="200" cy="230" rx="120" ry="45" fill="#355E3B" opacity="0.15"/><ellipse cx="200" cy="210" rx="95" ry="70" fill="#FAF8F3" stroke="#A8C3A0" stroke-width="3"/><circle cx="170" cy="200" r="8" fill="#E8892E"/><circle cx="195" cy="190" r="7" fill="#C4A035"/><circle cx="220" cy="205" r="8" fill="#E8892E"/><circle cx="240" cy="195" r="6" fill="#C4A035"/><circle cx="160" cy="215" r="6" fill="#C4A035"/><circle cx="210" cy="220" r="7" fill="#E8892E"/><text x="200" y="340" text-anchor="middle" font-family="Georgia,serif" font-size="22" fill="#355E3B">Premium Seeds</text></svg>`
  );

/**
 * HeroSection — Mobile-first hero with prominent product image.
 */
export default function HeroSection() {
  return (
    <motion.section
      className="relative rounded-[1.75rem] border border-[var(--color-accent-border)] bg-[var(--color-hero-bg)] px-7 py-9 shadow-[var(--shadow-hero)]"
      style={{
        backgroundImage:
          'linear-gradient(160deg, rgba(250, 248, 243, 0.98) 0%, rgba(220, 232, 212, 0.4) 100%)',
      }}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex flex-col items-center gap-7">
        {/* Product image — primary focal point */}
        <motion.div
          className="relative shrink-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="rounded-[2rem] bg-white p-3 shadow-[var(--shadow-soft)]">
            <div className="h-[11rem] w-[11rem] overflow-hidden rounded-[1.5rem] sm:h-[12rem] sm:w-[12rem]">
              <picture>
                <source srcSet="/product-seeds.webp" type="image/webp" />
                <img
                  src={profile.productImage}
                  alt="Premium pumpkin and chia seeds"
                  className="h-full w-full object-cover"
                  loading="eager"
                  width={480}
                  height={480}
                  onError={(e) => {
                    e.currentTarget.src = productFallback;
                  }}
                />
              </picture>
            </div>
          </div>
        </motion.div>

        {/* Text content */}
        <div className="flex w-full flex-col items-center gap-4 text-center">
          <h2 className="font-serif text-[2.5rem] font-bold leading-[1.06] tracking-tight text-[var(--color-forest)] dark:text-white">
            Pure Seeds.
            <br />
            <span className="text-[var(--color-accent)]">Better You.</span>
          </h2>

          <div className="h-1 w-12 rounded-full bg-[var(--color-accent)]" />

          <p className="max-w-[21rem] text-[0.9375rem] leading-[1.6] text-[var(--color-text-secondary)] px-2">
            {profile.bio}
          </p>
        </div>
      </div>
    </motion.section>
  );
}
