import { motion } from 'framer-motion';
import { FaLink, FaCheck } from 'react-icons/fa6';
import { useClipboard } from '../../hooks/useClipboard';

interface CopyLinkButtonProps {
  onCopied?: () => void;
}

/**
 * CopyLinkButton — Copies the current page URL to clipboard.
 */
export default function CopyLinkButton({ onCopied }: CopyLinkButtonProps) {
  const { copied, copy } = useClipboard();

  const handleClick = async () => {
    await copy(window.location.href);
    onCopied?.();
  };

  return (
    <motion.button
      onClick={handleClick}
      className="action-btn"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title="Copy Link"
    >
      <span
        className="action-btn-icon"
        style={
          copied
            ? { backgroundColor: 'rgba(16, 185, 129, 0.15)', color: 'var(--color-success)' }
            : undefined
        }
      >
        {copied ? <FaCheck /> : <FaLink />}
      </span>
      <span className="action-btn-label">{copied ? 'Copied!' : 'Copy Link'}</span>
    </motion.button>
  );
}
