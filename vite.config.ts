import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Allow scanning the dev QR from a phone on the same Wi-Fi network
    host: true,
    port: 5173,
  },
  preview: {
    host: true,
    port: 4173,
  },
})
