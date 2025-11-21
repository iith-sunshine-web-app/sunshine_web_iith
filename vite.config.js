import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Enable WASM-based Rollup for Node 22+
// This avoids native binaries that break
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // ensure WASM fallback
      output: {
        format: 'es'
      }
    }
  },
  optimizeDeps: {
    force: true
  }
})
