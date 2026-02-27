// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@sidebase/nuxt-auth'],
  auth: {
    baseURL: '/api/auth',
    provider: {
      type: 'authjs'
    }
  },
  runtimeConfig: {
    githubClientSecret: process.env.GITHUB_CLIENT_SECRET,
    public: {
      githubClientId: process.env.GITHUB_CLIENT_ID
    }
  }
})
