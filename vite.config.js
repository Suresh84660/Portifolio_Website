import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: '.',
  server: {
    fs: {
      // allow serving files from project root so /src/main.jsx resolves correctly
      allow: ['.']
    }
  },
  plugins: [react()],
  build: {
    // output to `dist` in project root when using root='.'
    outDir: 'dist',
    emptyOutDir: true,
  },
})
