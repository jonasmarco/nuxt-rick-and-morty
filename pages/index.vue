<template>
  <div>
    <h1 class="text-3xl font-bold mb-4">Personagens de Rick and Morty</h1>
    <div v-if="pending" class="flex justify-center items-center">
      <LoadingSpinner />
    </div>
    <div v-else-if="error">
      <p class="text-red-500">Erro ao carregar os personagens.</p>
    </div>
    <div v-else>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="character in characters.results"
          :key="character.id"
          class="bg-white shadow rounded p-4 hover:shadow-lg transition"
        >
          <img
            :src="character.image"
            :alt="character.name"
            class="w-full h-48 object-cover rounded"
          />
          <h2 class="mt-2 font-bold">{{ character.name }}</h2>
          <NuxtLink
            :to="`/character/${character.id}`"
            class="text-blue-500 hover:underline"
          >
            Ver Detalhes
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LoadingSpinner from "~/components/LoadingSpinner.vue";
const { data: characters, pending, error } = await useFetch(
  "https://rickandmortyapi.com/api/character"
);
</script>
