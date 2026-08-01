/**
 * Builds a WhatsApp chat URL from a phone number (digits only, with country code).
 */
export function getWhatsAppUrl(phone: string, message?: string): string {
  const digits = phone.replace(/\D/g, '');
  if (!digits) return '';

  const base = `https://wa.me/${digits}`;
  if (!message) return base;

  return `${base}?text=${encodeURIComponent(message)}`;
}
