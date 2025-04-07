<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Meus Favoritos</h1>
    <ClientOnly>
      <template #default>
        <div v-if="!favoriteCharacters.length">
          <p>Você ainda não adicionou nenhum favorito.</p>
        </div>
        <div v-else>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CharacterCard
              v-for="character in favoriteCharacters"
              :key="character.id"
              :character="character"
            />
          </div>
        </div>
      </template>
      <template #fallback>
        <p>Carregando favoritos...</p>
      </template>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});

useHead({
  title: "Favoritos",
});

import { useUserStore } from "~/stores/user";
import { computed, ref, onMounted } from "vue";
import { useRuntimeConfig } from "#app";
import { useFetch } from "#app";

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
