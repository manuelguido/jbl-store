import ViteGLTF from 'vite-plugin-glsl';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      script: [{ type: "module", src: "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js" }]
    }
  },

  // CSS
  css: [
    '~/assets/scss/index.scss',
  ],

  // Modules
  modules: [
    // ...
    '@pinia/nuxt',
  ],

  vite: {
    plugins: [
      ViteGLTF(),
      // ...other plugins
    ],
  },

})
