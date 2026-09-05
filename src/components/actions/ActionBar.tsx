import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaPhone,
  FaGlobe,
  FaWhatsapp,
  FaInstagram,
  FaShareNodes,
  FaAddressCard,
  FaQrcode,
  FaXmark,
  FaDownload,
} from 'react-icons/fa6';
import type { IconType } from 'react-icons';
import QRCode from 'qrcode';
import { profile } from '../../data/profile';
import { socialLinks } from '../../data/socialLinks';
import { useShare } from '../../hooks/useShare';
import { useClipboard } from '../../hooks/useClipboard';
import { downloadVCard } from '../../utils/vcard';
import { getWhatsAppUrl } from '../../utils/whatsapp';
import { getSiteUrl } from '../../config/site';

interface ActionBarProps {
  onToast?: (message: string) => void;
}

interface QuickAction {
  id: string;
  label: string;
  icon: IconType;
  href?: string;
  onClick?: () => void | Promise<void>;
  accent?: string;
}

/**
 * ActionBar — Mobile-first 2×3 quick-action grid.
 */
export default function ActionBar({ onToast }: ActionBarProps) {
  const { canShare, share } = useShare();
  const { copy } = useClipboard();
  const [qrOpen, setQrOpen] = useState(false);
  const [qrDataUrl, setQrDataUrl] = useState<string | null>(null);
  const [siteUrl, setSiteUrl] = useState('');

  useEffect(() => {
    if (!qrOpen) return;
    const url = getSiteUrl();
    setSiteUrl(url);
    QRCode.toDataURL(url, {
      width: 256, margin: 2, errorCorrectionLevel: 'M',
      color: { dark: '#355E3B', light: '#ffffff' },
    }).then(setQrDataUrl).catch(() => setQrDataUrl(null));
  }, [qrOpen]);

  const handleDownloadQR = async () => {
    const url = getSiteUrl();
    const dataUrl = qrDataUrl ?? (await QRCode.toDataURL(url, { width: 512, margin: 2 }));
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'seed_oasis_qr.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const instagramUrl =
    socialLinks.find((link) => link.id === 'instagram')?.url ?? 'https://www.instagram.com/seed_oasis';
  const whatsappUrl = getWhatsAppUrl(profile.whatsapp, profile.whatsappMessage);

  const actions: QuickAction[] = [
    {
      id: 'contact',
      label: 'Contact',
      icon: FaPhone,
      href: profile.phone ? `tel:${profile.phone}` : `mailto:${profile.email}`,
    },
    {
      id: 'website',
      label: 'Website',
      icon: FaGlobe,
      href: profile.website,
    },
    ...(whatsappUrl
      ? [
          {
            id: 'whatsapp',
            label: 'WhatsApp',
            icon: FaWhatsapp,
            href: whatsappUrl,
            accent: '#25D366',
          } satisfies QuickAction,
        ]
      : []),
    {
      id: 'instagram',
      label: 'Instagram',
      icon: FaInstagram,
      href: instagramUrl,
      accent: '#E4405F',
    },
    {
      id: 'share',
      label: 'Share',
      icon: FaShareNodes,
      onClick: async () => {
        if (canShare) {
          await share();
        } else {
          await copy(window.location.href);
        }
        onToast?.(canShare ? 'Shared!' : 'Link copied!');
      },
    },
    {
      id: 'save',
      label: 'Save Contact',
      icon: FaAddressCard,
      onClick: () => {
        downloadVCard();
        onToast?.('Contact saved!');
      },
    },
  ];

  return (
    <motion.div
      className="rounded-[1.75rem] border border-[var(--color-border-card)] bg-[var(--color-bg-card)] px-5 py-6 shadow-[var(--shadow-card)]"
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.42, delay: 0.72, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mb-5 text-center">
        <p className="text-[0.6875rem] font-bold uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
          Quick Actions
        </p>
        <h3 className="mt-2 font-serif text-[1.375rem] font-bold text-[var(--color-forest)]">
          Get in Touch
        </h3>
        <p className="mt-1.5 text-xs font-semibold text-[var(--color-text-secondary)]">
          Contact: 7014565584
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3.5">
        {actions.map((action, index) => {
          const { icon: Icon, label, href, onClick, accent, id } = action;
          const content = (
            <>
              <span
                className="quick-action-icon"
                style={accent ? { backgroundColor: `${accent}18`, color: accent } : undefined}
              >
                <Icon size={20} aria-hidden="true" />
              </span>
              <span className="quick-action-label">{label}</span>
            </>
          );

          const motionProps = {
            className: 'tap-card quick-action-tile',
            initial: { opacity: 0, y: 18 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.35, delay: 0.78 + index * 0.05, ease: [0.22, 1, 0.36, 1] },
            whileTap: { scale: 0.97 },
          } as const;

          if (href) {
            return (
              <motion.a
                key={id}
                href={href}
                target={id === 'contact' && profile.phone ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                {...motionProps}
              >
                {content}
              </motion.a>
            );
          }

          return (
            <motion.button key={id} type="button" onClick={onClick} aria-label={label} {...motionProps}>
              {content}
            </motion.button>
          );
        })}
      </div>

      <div className="mt-5 flex justify-center border-t border-[var(--color-border-card)] pt-4">
        <button
          onClick={() => setQrOpen(true)}
          className="inline-flex items-center gap-2 rounded-full bg-[var(--color-olive)]/35 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[var(--color-forest)] hover:bg-[var(--color-olive)]/60 transition-all duration-200"
        >
          <FaQrcode size={14} className="text-[var(--color-accent)]" />
          Show QR Code
        </button>
      </div>

      {/* QR Code Modal */}
      <AnimatePresence>
        {qrOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-5">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setQrOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 12 }}
              transition={{ type: 'spring', damping: 26, stiffness: 340 }}
              className="relative z-10 w-full max-w-sm rounded-3xl bg-[var(--color-bg-card)] px-6 py-7 text-center shadow-[0_8px_40px_rgba(0,0,0,0.12)]"
            >
              <button
                onClick={() => setQrOpen(false)}
                className="absolute right-4 top-4 rounded-full p-2 text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-text-primary)]"
                aria-label="Close modal"
              >
                <FaXmark size={18} />
              </button>

              <div className="mb-6 pr-8">
                <h2 className="font-serif text-xl font-bold text-[var(--color-text-primary)]">
                  Scan or Share QR
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  Scan this code to open the landing page.
                </p>
              </div>

              <div className="mx-auto mb-6 flex h-56 w-56 max-w-full items-center justify-center rounded-2xl border border-[var(--color-border-card)] bg-white p-4 shadow-inner">
                {qrDataUrl ? (
                  <img src={qrDataUrl} alt="QR code linking to Seed Oasis" className="h-full w-full object-contain" />
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
                onClick={handleDownloadQR}
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
    </motion.div>
  );
}
