import QRCode from 'qrcode';
import { writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { loadEnv } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const publicDir = resolve(root, 'public');

const isProduction =
  process.argv.includes('--production') ||
  process.env.npm_lifecycle_event === 'prebuild' ||
  process.env.NODE_ENV === 'production';

const mode = isProduction ? 'production' : 'development';
const env = loadEnv(mode, root, '');
const envUrl = env.VITE_SITE_URL?.trim();
const fallback = 'https://seed-oasis.com';

function isLocalhostUrl(url) {
  try {
    const { hostname } = new URL(url);
    return hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '[::1]';
  } catch {
    return false;
  }
}

const url = (envUrl && !isLocalhostUrl(envUrl) ? envUrl : fallback).replace(/\/$/, '');

mkdirSync(publicDir, { recursive: true });

const png = await QRCode.toBuffer(url, {
  width: 512,
  margin: 2,
  errorCorrectionLevel: 'M',
  color: { dark: '#355E3B', light: '#ffffff' },
});

writeFileSync(resolve(publicDir, 'qrcode.png'), png);
console.log(`Generated public/qrcode.png → ${url} (${mode})`);
