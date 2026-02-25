export default defineEventHandler((event) => {
  const query = getQuery(event)
  const name = query.name || 'Guest'
  
  return {
    greeting: `Hello, ${name}!`,
    time: new Date().toISOString()
  }
})
