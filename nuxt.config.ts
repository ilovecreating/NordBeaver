// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-headlessui'],
  headlessui: {
    prefix: 'Headless',
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
  },
});
