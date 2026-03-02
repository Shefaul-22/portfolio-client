import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from "path";
import { fileURLToPath } from 'url';

// ES Modules এ __dirname ডিফাইন করার নিয়ম
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // এখন '@' আপনার 'src' ফোল্ডারকে নির্দেশ করবে
      "@": path.resolve(__dirname, "./src"),
    },
  },
})