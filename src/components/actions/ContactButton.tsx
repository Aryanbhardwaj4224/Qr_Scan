import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa6';
import { profile } from '../../data/profile';

/**
 * ContactButton — Opens an email compose window.
 */
export default function ContactButton() {
  if (!profile.email) return null;

  return (
    <motion.a
      href={`mailto:${profile.email}`}
      className="action-btn"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title="Send Email"
    >
      <span className="action-btn-icon">
        <FaEnvelope />
      </span>
      <span className="action-btn-label">Contact</span>
    </motion.a>
  );
}
