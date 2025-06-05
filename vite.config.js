import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/solarcheck-webapp/', // WICHTIG! Name deines Repos mit / am Anfang und Ende
  plugins: [react()],
})
