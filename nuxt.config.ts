// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@sidebase/nuxt-auth'],
  auth: {
    originEnvKey: 'AUTH_ORIGIN',
    provider: {
      type: 'authjs'
    }
  },
  runtimeConfig: {
    // 服务端-only 的密钥
    githubClientSecret: process.env.GITHUB_CLIENT_SECRET,
    // 暴露给客户端的公钥
    public: {
      githubClientId: process.env.GITHUB_CLIENT_ID
    }
  }
})
