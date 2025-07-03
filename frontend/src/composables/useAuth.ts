import { useRoute } from 'vue-router';

export function useAuthUtils() {
    const tokenCookie = useCookie('auth_token');
    const route = useRoute();

    async function loginWithGoogle() {
        window.location.href = 'http://localhost:3000/auth/google';
    }

    async function handleGoogleCallback() {
        const code = route.query.code;
        if (!code) return console.error('No OAuth code found.');

        try {
            console.log("Getting token now!");
            const response = await $fetch<{ access_token: string }>('/auth/google/callback', {
                method: 'POST',
                baseURL: 'http://localhost:3000',
                body: { code },
                credentials: 'include',
            });

            if (response.access_token) {
                tokenCookie.value = response.access_token;
            }
        } catch (error) {
            console.error('Google Callback Error:', error);
        }
    }

    function logout() {
        tokenCookie.value = null;
    }

    return { loginWithGoogle, handleGoogleCallback, logout, token: tokenCookie };
}
