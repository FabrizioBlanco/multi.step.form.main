import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/step-1/"
  // base: "https://FabrizioBlanco.github.io/multi.step.form.main"
})
