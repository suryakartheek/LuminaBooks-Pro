

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/LuminaBooks-Pro/", // This must match your GitHub repository name
})
