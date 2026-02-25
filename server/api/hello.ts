export default defineEventHandler(() => {
  return {
    message: 'Hello from Nuxt 4 API!',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  }
})
