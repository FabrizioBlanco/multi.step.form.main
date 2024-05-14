import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://fabrizioblanco.github.io/step-1"
  // base: "https://FabrizioBlanco.github.io/multi.step.form.main"
})
