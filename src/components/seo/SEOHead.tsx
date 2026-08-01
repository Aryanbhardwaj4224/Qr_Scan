import { Helmet } from 'react-helmet-async';
import { profile } from '../../data/profile';
import { getSiteUrl } from '../../config/site';

/**
 * SEOHead — Manages all meta tags for SEO and social sharing.
 * Injects title, description, Open Graph, and Twitter Card tags.
 */
export default function SEOHead() {
  const title = `${profile.name} — Connect With Us`;
  const description = profile.bio;
  const url = typeof window !== 'undefined' ? getSiteUrl() : profile.website;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={profile.name} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={profile.name} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Mobile */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    </Helmet>
  );
}
