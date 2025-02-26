import { defineConfig } from 'vite';
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { VitePWA } from 'vite-plugin-pwa';

const __filename = fileURLToPath(import.meta.url)
const __dirname = resolve()

// https://vitejs.dev/config/
export default defineConfig({
  base: "/task-it/",
  build: {
    sourcemap: true,
    assetsDir: "code",
    target: ["esnext"],
    outDir: "dist/",
    cssMinify: true,
    lib: false
  },
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      strategies: "injectManifest",
      injectManifest: {
        swSrc: 'public/sw.js',
        swDest: 'dist/sw.js',
        globDirectory: 'dist',
        globPatterns: [
          '**/*.{html,js,css,json,png}',
        ],
      },
      injectRegister: false,
      manifest: false,
      devOptions: {
        enabled: true
      }
    })
  ],
  server: {
    port: 7160,
    host: true,
  }
})
