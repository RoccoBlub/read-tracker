<template>
  <div class="p-5">
    <h1 class="text-2xl font-bold">My Reading List</h1>
    <div v-if="token">
      <p>JWT Token: {{ token }}</p>
      <button @click="logout" class="mt-4 px-4 py-2 bg-red-500 text-white rounded">
        Logout
      </button>
    </div>
  </div>
</template>

<script setup>
import { useAuthUtils } from '~/composables/useAuth';

const { token, logout } = useAuthUtils();
</script>
