<script setup>
import { useRouter } from 'vue-router';
import { useAuthUtils } from '~/composables/useAuth';

const router = useRouter();
const { handleGoogleCallback } = useAuthUtils();

handleGoogleCallback().then(() => {
  router.push('/dashboard');
});
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-xl font-bold">Processing Google Login...</h1>
  </div>
</template>
