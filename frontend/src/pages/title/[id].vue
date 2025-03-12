<template>
  <div class="p-5">
    <h1 class="text-2xl font-bold">Title Details</h1>
    <p>Viewing title with ID: {{ route.params.id }}</p>
    <NuxtLink to="/dashboard" class="text-blue-500 underline">Back to Dashboard</NuxtLink>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>
