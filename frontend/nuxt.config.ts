export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-auth-utils'
  ],
  runtimeConfig: {
    public: {
      auth: {
        origin: 'http://localhost:4000',  // Your frontend URL
        baseUrl: 'http://localhost:3000/api/auth' // Backend auth API URL
      }
    }
  }
})
