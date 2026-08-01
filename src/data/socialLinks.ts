import { FaFacebookF, FaInstagram, FaYoutube, FaGlobe } from 'react-icons/fa6';
import type { IconType } from 'react-icons';

export interface SocialLink {
  id: string;
  label: string;
  description: string;
  url: string;
  icon: IconType;
  color: string;
  hoverBg: string;
}

/**
 * Social media links configuration.
 * Each entry renders as a styled button on the landing page.
 */
export const socialLinks: SocialLink[] = [
  {
    id: 'facebook',
    label: 'Facebook',
    description: 'Follow our community & updates',
    url: 'https://www.facebook.com/share/1M6Sx3jry6/',
    icon: FaFacebookF,
    color: '#1877F2',
    hoverBg: 'rgba(24, 119, 242, 0.12)',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    description: 'See our latest harvests & stories',
    url: 'https://www.instagram.com/seed_oasis',
    icon: FaInstagram,
    color: '#E4405F',
    hoverBg: 'rgba(228, 64, 95, 0.12)',
  },
  {
    id: 'youtube',
    label: 'YouTube',
    description: 'Watch farming tips & tutorials',
    url: 'https://www.youtube.com/@sahajbaheti5244',
    icon: FaYoutube,
    color: '#FF0000',
    hoverBg: 'rgba(255, 0, 0, 0.12)',
  },
  {
    id: 'website',
    label: 'Visit Website',
    description: 'Explore our full story online',
    url: 'https://seed-oasis.com',
    icon: FaGlobe,
    color: '#355E3B',
    hoverBg: 'rgba(53, 94, 59, 0.12)',
  },
];
