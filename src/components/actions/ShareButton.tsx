import { motion } from 'framer-motion';
import { FaShareNodes } from 'react-icons/fa6';
import { useShare } from '../../hooks/useShare';
import { useClipboard } from '../../hooks/useClipboard';

interface ShareButtonProps {
  onShared?: () => void;
}

/**
 * ShareButton — Uses the native Web Share API on supported devices.
 * Falls back to copy-to-clipboard on desktop browsers.
 */
export default function ShareButton({ onShared }: ShareButtonProps) {
  const { canShare, share } = useShare();
  const { copy } = useClipboard();

  const handleClick = async () => {
    if (canShare) {
      await share();
    } else {
      await copy(window.location.href);
    }
    onShared?.();
  };

  return (
    <motion.button
      onClick={handleClick}
      className="action-btn"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title="Share"
    >
      <span className="action-btn-icon">
        <FaShareNodes />
      </span>
      <span className="action-btn-label">Share</span>
    </motion.button>
  );
}
