import { useApi } from '~/composables/useApi';

export const fetchUser = async (userId: string) => {
  const { getData } = useApi()
  return await getData(`/users/${userId}`)
}