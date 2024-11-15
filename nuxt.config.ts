// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-headlessui', '@pinia/nuxt'],
  headlessui: {
    prefix: 'Headless',
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
  },
  ssr: false,
  app: {
    baseURL: '/NordBeaver/', // baseURL: '/<repository>/'
    buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
  }
});
