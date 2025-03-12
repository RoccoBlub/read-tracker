<script setup>
import { useAuthUtils } from '~/composables/useAuth';

const { loginWithGoogle } = useAuthUtils();
</script>

<template>
  <button @click="loginWithGoogle" class="px-4 py-2 bg-blue-500 text-white rounded">
    Login with Google
  </button>
</template>
