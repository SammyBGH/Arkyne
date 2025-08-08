import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Use environment variables for API proxy target
const API_TARGET = process.env.VITE_API_URL || 'http://localhost:5001';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: API_TARGET,
        changeOrigin: true,
        secure: false
      }
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
});
