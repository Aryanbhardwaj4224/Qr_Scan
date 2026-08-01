import { profile } from '../data/profile';

/**
 * Generates a vCard (VCF) string from profile data.
 * Compatible with iOS, Android, and desktop contact apps.
 */
export function generateVCard(): string {
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${profile.name}`,
    `TITLE:${profile.title}`,
    `NOTE:${profile.bio}`,
    `URL:${profile.website}`,
  ];

  if (profile.email) {
    lines.push(`EMAIL;TYPE=INTERNET:${profile.email}`);
  }

  if (profile.phone) {
    lines.push(`TEL;TYPE=CELL:${profile.phone}`);
  }

  lines.push('END:VCARD');
  return lines.join('\r\n');
}

/**
 * Triggers a browser download of the vCard file.
 */
export function downloadVCard(): void {
  const vcardContent = generateVCard();
  const blob = new Blob([vcardContent], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = `${profile.name.replace(/\s+/g, '_')}.vcf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
