export const useApi = () => {
  const nuxtApp = useNuxtApp()
  const axios = nuxtApp.$axios

  const getData = async (endpoint: string) => {
    try {
      const { data } = await axios.get(endpoint)
      return data
    } catch (error) {
      console.error('Erro na API:', error)
      throw error
    }
  }

  return { getData }
}