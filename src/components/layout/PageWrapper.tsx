import { cn } from '../../utils/cn';
import { profile } from '../../data/profile';
import { getWhatsAppUrl } from '../../utils/whatsapp';

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * PageWrapper — Mobile-first viewport container for QR landing page.
 */
export default function PageWrapper({ children, className }: PageWrapperProps) {
  const hasStickyCta = Boolean(getWhatsAppUrl(profile.whatsapp));

  return (
    <main
      className={cn(
        'relative flex min-h-dvh flex-col items-center justify-start px-4 pt-10 sm:px-5',
        hasStickyCta ? 'pb-32' : 'pb-10',
        className
      )}
    >
      {children}
    </main>
  );
}
