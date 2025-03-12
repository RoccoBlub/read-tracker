import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    srcDir: "src/",
    modules: [
        'nuxt-auth-utils'
    ],
    runtimeConfig: {
        public: {
            apiBase: 'http://localhost:3000/api', // Backend API URL
            auth: {
                origin: 'http://localhost:4000', // Frontend URL
                baseUrl: 'http://localhost:3000/api/auth' // Backend auth API URL
            }
        }
    },
    devServer: {
        port: 4000,
    },
    vite: {
        plugins: [
            tailwindcss(),
        ]
    }
})
