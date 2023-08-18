// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@vite-pwa/nuxt'
  ],
  pwa: {
    manifest: {
      name: 'PWA Full Name',
      short_name: 'PWA Short Name',
      description: 'PWA Description',
      icons: [
        {
          src: 'icons/logo_96x96.png',
          sizes: '96x96',
          type: 'image/png'
        },
        {
          src: 'icons/logo_144x144.png',
          sizes: '144x144',
          type: 'image/png'
        },
        {
          src: 'icons/logo_192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'icons/logo_512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    workbox: {
      navigateFallback: '/',
    },
    devOptions: {
      enabled: true,
      type: 'module'
    },
  }
})