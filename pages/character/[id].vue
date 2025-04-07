<template>
  <div>
    <div v-if="pending" class="flex justify-center items-center">
      <LoadingSpinner />
    </div>
    <div v-else-if="error">
      <p class="text-red-500">Erro ao carregar os detalhes do personagem.</p>
    </div>
    <div v-else>
      <div class="flex flex-col md:flex-row bg-white shadow rounded overflow-hidden">
        <img
          :src="character.image"
          :alt="character.name"
          class="w-full md:w-1/3 object-cover"
        />
        <div class="p-4">
          <h1 class="text-2xl font-bold">{{ character.name }}</h1>
          <p>Status: {{ character.status }}</p>
          <p>Espécie: {{ character.species }}</p>
          <p>Gênero: {{ character.gender }}</p>
          <p>Origem: {{ character.origin.name }}</p>
          <p>Localização: {{ character.location.name }}</p>
          <button
            @click="toggleFavorite(character.id)"
            class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            {{ isFavorite ? "Remover dos Favoritos" : "Adicionar aos Favoritos" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();

const route = useRoute();
const { data: character, pending, error } = await useFetch(
  `${config.public.apiBase}/character/${route.params.id}`
);

const user = useUserStore();
const isFavorite = computed(() => user.favorites.includes(Number(route.params.id)));
const toggleFavorite = (id: number) => {
  if (isFavorite.value) {
    user.removeFavorite(id);
  } else {
    user.addFavorite(id);
  }
};

if (character.value) {
  useHead({
    title: `${character.value.name} - Detalhes`,
    meta: [
      { name: "description", content: `Detalhes do personagem ${character.value.name}` },
    ],
  });
}
</script>
