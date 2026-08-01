import { motion } from 'framer-motion';
import { FaAddressCard } from 'react-icons/fa6';
import { downloadVCard } from '../../utils/vcard';

/**
 * DownloadVCard — Generates and downloads a .vcf contact card.
 */
export default function DownloadVCard() {
  return (
    <motion.button
      onClick={downloadVCard}
      className="action-btn"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title="Download Contact Card"
    >
      <span className="action-btn-icon">
        <FaAddressCard />
      </span>
      <span className="action-btn-label">Save Contact</span>
    </motion.button>
  );
}
