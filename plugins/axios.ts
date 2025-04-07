import { defineNuxtPlugin } from '#app';
import axios from 'axios';

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const api = axios.create({
    baseURL: config.public.apiBase,
    timeout: 10000
  })

  // Interceptador para tratamento de erros
  api.interceptors.response.use(
    (response) => response,
    (error) => {
      console.error('Erro na requisição:', error)
      return Promise.reject(error)
    }
  )

  return {
    provide: {
      axios: api
    }
  }
})