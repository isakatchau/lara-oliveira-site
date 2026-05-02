import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves at https://<user>.github.io/<repo>/ — only in production build.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/lara-oliveira-site/' : '/',
  plugins: [react(), tailwindcss()],
}))
