<template>
  <div class="bg-white shadow rounded p-4 hover:shadow-lg transition">
    <img
      :src="character.image"
      :alt="character.name"
      class="w-full h-84 object-cover rounded"
    />
    <h2 class="mt-2 font-bold">{{ character.name }}</h2>
    <NuxtLink :to="`/character/${character.id}`" class="text-blue-500 hover:underline">
      Ver Detalhes
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
interface Character {
  id: number;
  name: string;
  image: string;
}

defineProps<{
  character: Character;
}>();
</script>
