import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck } from 'react-icons/fa6';

interface ToastProps {
  message: string;
  visible: boolean;
}

/**
 * Toast — Minimal notification that slides up from the bottom.
 * Auto-dismisses via the parent's state management.
 */
export default function Toast({ message, visible }: ToastProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-6 left-1/2 z-50 flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium shadow-lg"
          style={{
            backgroundColor: 'var(--color-success)',
            color: '#fff',
          }}
          initial={{ opacity: 0, y: 30, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 20, x: '-50%' }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <FaCheck className="text-xs" />
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
