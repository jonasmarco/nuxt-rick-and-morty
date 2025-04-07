import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    isLoggedIn: false,
    favorites: [] as number[]
  }),
  actions: {
    login() {
      this.isLoggedIn = true
    },
    logout() {
      this.isLoggedIn = false
      this.favorites = []
    },
    addFavorite(id: number) {
      if (!this.favorites.includes(id)) {
        this.favorites.push(id)
      }
    },
    removeFavorite(id: number) {
      this.favorites = this.favorites.filter(fav => fav !== id)
    }
  }
})