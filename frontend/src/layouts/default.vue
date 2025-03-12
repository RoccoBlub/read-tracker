<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navbar -->
    <nav class="p-4 bg-gray-800 text-white">
      <NuxtLink to="/" class="mr-4">Home</NuxtLink>
      <NuxtLink to="/dashboard">Dashboard</NuxtLink>
    </nav>

    <!-- Page Content -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="p-4 bg-gray-200 text-center">
      © 2025 Title Tracker
    </footer>
  </div>
</template>
