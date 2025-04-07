// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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