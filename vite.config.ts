import { resolve } from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.tsx'),
      name: 'Starter',
      fileName: 'assets/js/[name]',
    },
    rollupOptions: {
      output: {
        assetFileNames: ({name}) => {
          if (/\.css$/.test(name ?? '')) {
              return 'assets/css/[name][extname]';   
          }
        }
      }
    }
  },
  plugins: [
    react(),
    // Copy Game Index File To Dist
    viteStaticCopy({
      targets: [
        {
          src: 'src/index.html',
          dest: ''
        }
      ]
    })
  ],
  define: {
    'process.env': {}
  }
})
