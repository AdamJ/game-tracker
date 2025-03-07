import { defineConfig } from 'vite';
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { VitePWA } from 'vite-plugin-pwa';
import Unfonts from 'unplugin-fonts/vite'

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
  },
  plugins: [
    Unfonts({
      // Google Fonts API V2
      google: {
        /**
         * enable preconnect link injection
         *   <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
         * default: true
         */
        preconnect: true,

        /**
         * allow preconnect to be customized
         * default: 'https://fonts.gstatic.com'
         */
        preconnectUrl: 'https://fonts.gstatic.com',

        /**
         * customizes the base URL for the font request
         * default: 'https://fonts.googleapis.com/css2'
         */
        fontBaseUrl: 'https://fonts.googleapis.com',

        /**
         * values: auto, block, swap(default), fallback, optional
         * default: 'swap'
         */
        display: 'swap',

        /**
         * define which characters to load
         * default: undefined (load all characters)
         */
        text: '',

        /**
         * define where the font load tags should be inserted
         * default: 'head-prepend'
         *   values: 'head' | 'body' | 'head-prepend' | 'body-prepend'
         */
        injectTo: 'head-prepend',

        /**
         * Fonts families lists
         */
        families: [
          // families can be either strings (only regular 400 will be loaded)
          '"Oswald"',

          // or objects
          {
            /**
             * Family name (required)
             */
            name: '"Oswald"',

            /**
             * Family styles
             */
            styles: 'wght@0,400;1,200;2,500;3,700',

            /**
             * enable non-blocking renderer
             *   <link rel="preload" href="xxx" as="style" onload="this.rel='stylesheet'">
             * default: true
             */
            defer: true,
          },
        ],
      },
      custom: {
        /**
         * Fonts families lists
         */
        families: [{
          /**
           * Name of the font family.
           */
          name: 'MPlantin',
          /**
           * Local name of the font. Used to add `src: local()` to `@font-rule`.
           */
          local: 'MPlantin',
          /**
           * Regex(es) of font files to import. The names of the files will
           * predicate the `font-style` and `font-weight` values of the `@font-rule`'s.
           */
          src: './public/assets/fonts/*.ttf',

          /**
           * This function allow you to transform the font object before it is used
           * to generate the `@font-rule` and head tags.
           */
          transform(font) {
            if (font.basename === 'MPlantin') {
              // update the font weight
              font.weight = 700
            }

            // we can also return null to skip the font
            return font
          }
        }],

        /**
         * Defines the default `font-display` value used for the generated
         * `@font-rule` classes.
         */
        display: 'swap',

        /**
         * Using `<link rel="preload">` will trigger a request for the WebFont
         * early in the critical rendering path, without having to wait for the
         * CSSOM to be created.
         */
        preload: true,

        /**
         * Using `<link rel="prefetch">` is intended for prefetching resources
         * that will be used in the next navigation/page load
         * (e.g. when you go to the next page)
         *
         * Note: this can not be used with `preload`
         */
        prefetch: false,

        /**
         * define where the font load tags should be inserted
         * default: 'head-prepend'
         *   values: 'head' | 'body' | 'head-prepend' | 'body-prepend'
         */
        injectTo: 'head-prepend',
      },
    }),
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
      injectRegister: null,
      manifest: false,
      devOptions: {
        enabled: true
      },
      workbox: {
        cleanupOutdatedCaches: false,
        sourcemap: true
      }
    })
  ],
  server: {
    port: 7160,
    host: true,
  }
})
