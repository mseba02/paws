import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import viteTsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteTsconfigPaths(),
    checker({
      overlay: {
        initialIsOpen: 'error',
        position: 'br',
      },
      typescript: true,
      eslint: {
        lintCommand: 'eslint "src/**/*.{js,ts,tsx}"',
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    // this ensures that the browser opens upon server start
    open: true,
  },
});
