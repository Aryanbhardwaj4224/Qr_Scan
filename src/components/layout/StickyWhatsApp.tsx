import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa6';
import { profile } from '../../data/profile';
import { getWhatsAppUrl } from '../../utils/whatsapp';

/**
 * StickyWhatsApp — Fixed bottom CTA for mobile conversions.
 */
export default function StickyWhatsApp() {
  const url = getWhatsAppUrl(profile.whatsapp, profile.whatsappMessage);
  if (!url) return null;

  return (
    <motion.div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--color-accent-border)] bg-[var(--color-bg-primary)]/95 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="tap-card btn-primary max-w-md mx-auto !min-h-14 bg-[#25D366] shadow-[0_4px_20px_rgba(37,211,102,0.35)]"
        style={{ background: '#25D366' }}
      >
        <FaWhatsapp size={22} />
        Chat on WhatsApp
      </a>
    </motion.div>
  );
}
