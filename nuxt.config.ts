// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  $development: {
    runtimeConfig: {
      public: {
        apiBase: 'https://localhost:7229'
      }
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  plugins: [
    '@/plugins/vee-validate.js',
  ],

  build: {
    transpile: ['vee-validate']
  },
})