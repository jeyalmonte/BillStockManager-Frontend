import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      "routes": "/src/routes",
      "features": "/src/features",
      "components": "/src/components",
      "lib": "/src/lib",
      "constants": "/src/constants"
    }
  }
})
