<template>
  <div class="max-w-md mx-auto bg-white shadow p-6 rounded">
    <h1 class="text-2xl font-bold mb-4">Login</h1>
    <form @submit.prevent="login">
      <div class="mb-4">
        <label class="block mb-1">Usuário</label>
        <input
          v-model="username"
          type="text"
          class="w-full border p-2 rounded"
          placeholder="Digite seu usuário"
        />
      </div>
      <div class="mb-4">
        <label class="block mb-1">Senha</label>
        <input
          v-model="password"
          type="password"
          class="w-full border p-2 rounded"
          placeholder="Digite sua senha"
        />
      </div>
      <button
        type="submit"
        class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
      >
        Entrar
      </button>
    </form>
    <p v-if="error" class="text-red-500 mt-4">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useUserStore } from "~/stores/user";
import { useRouter } from "#app";

const username = ref("");
const password = ref("");
const error = ref("");
const user = useUserStore();
const router = useRouter();

const login = () => {
  // Simulação simples de autenticação: apenas valida se os campos foram preenchidos
  if (username.value && password.value) {
    user.login();
    router.push("/");
  } else {
    error.value = "Preencha todos os campos.";
  }
};

useHead({
  title: "Login",
});
</script>
