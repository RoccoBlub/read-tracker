export default defineNuxtRouteMiddleware(async (to) => {
    const token = useCookie('auth_token');

    if (to.path === '/auth/callback') {
        return; // ✅ Don't block OAuth processing
    }

    if (!token.value && to.path !== '/') {
        return navigateTo('/', {redirectCode: 301});
    }
});
