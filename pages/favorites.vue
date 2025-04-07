<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});

import { useUserStore } from "~/stores/user";
import { computed, ref, onMounted } from "vue";
import { useRuntimeConfig } from "#app";
import { useFetch } from "#app";
import LoadingSpinner from "~/components/LoadingSpinner.vue";

const user = useUserStore();
const favorites = computed(() => user.favorites);
const favoriteCharacters = ref<any[]>([]);
const config = useRuntimeConfig();

const fetchFavoriteCharacter = async (id: number) => {
  const { data } = await useFetch(`${config.public.apiBase}/character/${id}`);
  return data.value;
};

onMounted(async () => {
  if (favorites.value.length) {
    favoriteCharacters.value = await Promise.all(
      favorites.value.map((id) => fetchFavoriteCharacter(id))
    );
  }
});
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Meus Favoritos</h1>
    <div v-if="!favoriteCharacters.length">
      <p>Você ainda não adicionou nenhum favorito.</p>
    </div>
    <div v-else>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="character in favoriteCharacters"
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
