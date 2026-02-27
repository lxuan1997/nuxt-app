// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@sidebase/nuxt-auth'],
  auth: {
    baseURL: process.env.AUTH_ORIGIN || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined),
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
