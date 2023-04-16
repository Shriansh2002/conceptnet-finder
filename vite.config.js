import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'vite-plugin-tailwindcss';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.conceptnet.io',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
