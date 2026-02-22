import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/portfolio/',
  build: {
    chunkSizeWarningLimit: 1000, // 💡 เพิ่ม limit เพื่อลบ warning สีเหลืองในรูปของคุณ
  }
})  