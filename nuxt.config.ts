// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  // target: 'server',
  modules: ['nuxt-windicss', '@pinia/nuxt'],
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api',
    },
  },
  css: [
    'primevue/resources/themes/saga-blue/theme.css',
    'primevue/resources/primevue.min.css ',
    'primeicons/primeicons.css',
  ],
  build: {
    transpile: ['primevue'],
  },
});
