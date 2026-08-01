/**
 * App.tsx — Root component for Seed Oasis QR Landing Page
 */
import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import SEOHead from './components/seo/SEOHead';
import AnimatedBackground from './components/ui/AnimatedBackground';
import ThemeToggle from './components/ui/ThemeToggle';
import Toast from './components/ui/Toast';
import PageWrapper from './components/layout/PageWrapper';
import SiteHeader from './components/layout/SiteHeader';
import HeroSection from './components/profile/HeroSection';
import SocialLinks from './components/links/SocialLinks';
import ActionBar from './components/actions/ActionBar';
import TrustSection from './components/layout/TrustSection';
import StickyWhatsApp from './components/layout/StickyWhatsApp';
import FooterMessage from './components/layout/FooterMessage';

function App() {
  const [toast, setToast] = useState({ visible: false, message: '' });

  const showToast = useCallback((message: string) => {
    setToast({ visible: true, message });
    setTimeout(() => setToast({ visible: false, message: '' }), 2500);
  }, []);

  return (
    <>
      <SEOHead />
      <AnimatedBackground />
      <ThemeToggle />

      <PageWrapper>
        <motion.div
          className="flex w-full max-w-[26rem] flex-col gap-7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <SiteHeader />
          <HeroSection />
          <TrustSection />
          <SocialLinks />
          <ActionBar onToast={showToast} />
          <FooterMessage />
        </motion.div>
      </PageWrapper>

      <StickyWhatsApp />

      <Toast message={toast.message} visible={toast.visible} />
    </>
  );
}

export default App;
