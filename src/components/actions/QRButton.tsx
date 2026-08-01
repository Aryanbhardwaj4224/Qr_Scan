import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import QRCode from 'qrcode';
import { FaQrcode, FaXmark, FaDownload } from 'react-icons/fa6';
import { getSiteUrl } from '../../config/site';

/**
 * QRButton — Opens a modal with a dynamically generated, scannable QR code.
 * The encoded URL comes from VITE_SITE_URL or the current origin in dev.
 */
export default function QRButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [qrDataUrl, setQrDataUrl] = useState<string | null>(null);
  const [siteUrl, setSiteUrl] = useState('');

  useEffect(() => {
    if (!isOpen) return;

    const url = getSiteUrl();
    setSiteUrl(url);

    QRCode.toDataURL(url, {
      width: 256,
      margin: 2,
      errorCorrectionLevel: 'M',
      color: { dark: '#355E3B', light: '#ffffff' },
    })
      .then(setQrDataUrl)
      .catch(() => setQrDataUrl(null));
  }, [isOpen]);

  const handleDownload = async () => {
    const url = getSiteUrl();
    const dataUrl = qrDataUrl ?? (await QRCode.toDataURL(url, { width: 512, margin: 2 }));

    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'seed_oasis_qr.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="action-btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        title="Show QR Code"
      >
        <span className="action-btn-icon">
          <FaQrcode />
        </span>
        <span className="action-btn-label">QR Code</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-5 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 12 }}
              transition={{ type: 'spring', damping: 26, stiffness: 340 }}
              className="relative z-10 w-full max-w-sm rounded-3xl bg-[var(--color-bg-card)] px-6 py-7 text-center shadow-[0_8px_40px_rgba(0,0,0,0.12)] sm:px-8 sm:py-8"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 rounded-full p-2 text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-text-primary)] sm:right-5 sm:top-5"
                aria-label="Close modal"
              >
                <FaXmark size={18} />
              </button>

              <div className="mb-6 pr-8 sm:pr-10">
                <h2 className="font-serif text-xl font-bold text-[var(--color-text-primary)] sm:text-2xl">
                  Scan or Share QR
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  Scan this code to open the landing page.
                </p>
              </div>

              <div className="mx-auto mb-6 flex h-56 w-56 max-w-full items-center justify-center rounded-2xl border border-[var(--color-border-card)] bg-white p-4 shadow-inner sm:h-60 sm:w-60">
                {qrDataUrl ? (
                  <img
                    src={qrDataUrl}
                    alt="QR code linking to Seed Oasis landing page"
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <div className="h-full w-full animate-pulse rounded-xl bg-[var(--color-surface-hover)]" />
                )}
              </div>

              <a
                href={siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-6 block break-all px-1 text-xs leading-relaxed text-[var(--color-forest)] underline decoration-[var(--color-accent-border)] underline-offset-2 transition-colors hover:text-[var(--color-accent)]"
              >
                {siteUrl}
              </a>

              <button
                onClick={handleDownload}
                disabled={!qrDataUrl}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FaDownload size={14} />
                Download QR Code
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
