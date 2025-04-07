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
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <CharacterCard
          v-for="character in characters.results"
          :key="character.id"
          :character="character"
        />
      </div>

      <div class="flex justify-center items-center gap-4 my-8">
        <button
          @click="currentPage--"
          :disabled="currentPage === 1"
          class="px-4 py-2 rounded bg-blue-500 text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Anterior
        </button>
        <span class="text-lg">
          Página {{ currentPage }} de {{ characters.info.pages }}
        </span>
        <button
          @click="currentPage++"
          :disabled="currentPage === characters.info.pages"
          class="px-4 py-2 rounded bg-blue-500 text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Próxima
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const currentPage = ref(1);

const { data: characters, pending, error } = await useFetch(
  () => `${config.public.apiBase}/character?page=${currentPage.value}`,
  { watch: [currentPage] }
);

watch(currentPage, () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

useHead({
  title: "Home",
});
</script>
