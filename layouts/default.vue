<template>
  <div>
    <header class="bg-gray-800 text-white p-4">
      <nav class="container mx-auto flex justify-between">
        <div>
          <NuxtLink to="/" class="mr-4 hover:underline">Home</NuxtLink>
          <NuxtLink to="/favorites" class="mr-4 hover:underline">Favoritos</NuxtLink>
        </div>
        <div>
          <!-- Exibe login ou logout conforme o estado do usuário -->
          <NuxtLink v-if="!user.isLoggedIn" to="/login" class="hover:underline"
            >Login</NuxtLink
          >
          <button v-else @click="logout" class="hover:underline">Logout</button>
        </div>
      </nav>
    </header>
    <main class="container mx-auto mt-4">
      <NuxtPage />
    </main>
    <footer class="bg-gray-200 text-center p-4 mt-4">
      &copy; 2025 Rick and Morty App
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "~/stores/user";
const user = useUserStore();
const logout = () => {
  user.logout();
};
</script>
