import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import * as path from 'path'
import wrapWithAnonFunc from './rollup-plugin-wrap-func' // Prevent conflicts from other scripts

export default defineConfig({
  plugins: [
    vue({
      customElement: true
    }),
    quasar({
      sassVariables: 'src/quasar-variables.sass',
    }),
    wrapWithAnonFunc()
  ],
  base: './',
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, '/src') }
    ],
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: { drop_debugger: false, drop_console: false }
    },
    sourcemap: false,
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  },

})

