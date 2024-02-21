import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({ resolvers: [ElementPlusResolver()] }),
    Components({ resolvers: [ElementPlusResolver()] }),
  ],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler.js",
      "@": "./src",
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/styles/element/index.scss" as *; \
          @use "@/styles/variable.scss" as *;
        `,
      },
    },
  },
})
