import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import path from 'path';

// Emulate __dirname for ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Allows importing bootstrap-icons like: import 'bootstrap-icons/...' 
      'bootstrap-icons': path.resolve(__dirname, 'node_modules/bootstrap-icons/font'),
    },
  },
});
