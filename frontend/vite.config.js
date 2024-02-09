/* eslint-disable */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: { outDir: path.join(__dirname, '..', 'public') },
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://leetnotes-c0xc.onrender.com/',
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
});
