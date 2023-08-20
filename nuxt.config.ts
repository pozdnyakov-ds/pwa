// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      viewport: 'width=device-width, initial-scale=1',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap'
        }
      ]
    }
  },
  css: ['vuetify/lib/styles/main.sass'],
  build: {
    transpile: ['vuetify'],
  },
  devtools: { enabled: true },
  modules: [
    '@vite-pwa/nuxt',
    '@vueuse/nuxt',
    '@intlify/nuxt3',
  ],
  pwa: {
    manifest: {
      name: 'PWA Full Name',
      short_name: 'PWA Short Name',
      description: 'PWA Description',
      display: "fullscreen",
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
      navigateFallbackDenylist: [],
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        },
        {
          urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'gstatic-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
            },
            cacheableResponse: {
              statuses: [0, 200]
            },
          }
        }
      ]
    },
    devOptions: {
      enabled: true,
      type: 'module'
    },
  },
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'ru'
    }
  },
})
