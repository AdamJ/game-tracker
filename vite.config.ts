import { defineConfig } from 'vite';
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { VitePWA } from 'vite-plugin-pwa';
import Icons from 'unplugin-icons/vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = resolve()
const isProd = process.env.NODE_ENV === 'production';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  build: {
    sourcemap: true,
    assetsDir: "code",
    target: ["esnext"],
    outDir: "dist/",
    cssMinify: true,
    lib: false,
    minify: isProd,
    emptyOutDir: false,
  },
  plugins: [
    Icons({
      autoInstall: true,
    }),
    VitePWA({
      registerType: 'autoUpdate',
      strategies: "injectManifest",
      injectManifest: {
        swSrc: 'public/sw.js',
        swDest: 'dist/sw.js',
        globDirectory: 'dist',
        globPatterns: [
          '**/*.{html,js,css,json,png,jpg, svg}',
        ],
      },
      injectRegister: null,
      manifest: false,
      devOptions: {
        enabled: true
      },
      workbox: {
        cleanupOutdatedCaches: true,
        sourcemap: true
      }
    })
  ],
  server: {
    port: 7160,
    host: true,
  }
})
