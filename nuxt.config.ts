// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // app: {
  //   head: {
  //     title: 'Rick and Morty Characters',
  //     meta: [
  //       { name: 'description', content: 'Aplicação Nuxt que exibe personagens da série Rick and Morty.' },
  //       { 'http-equiv': 'Content-Security-Policy', content: "default-src 'self'; img-src 'self' https://rickandmortyapi.com; script-src 'self' 'unsafe-inline'" }
  //     ]
  //   }
  // },
  css: [
    '@/assets/css/tailwind.css'
  ],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: 'https://rickandmortyapi.com/api'
    }
  },
  modules: ['@nuxt/image', '@nuxtjs/tailwindcss', '@pinia/nuxt']
})