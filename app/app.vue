<script setup lang="ts">
const { signIn, signOut, data: session } = useAuth()
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
    
    <div v-if="!session" style="position: fixed; top: 16px; right: 16px;">
      <button 
        @click="signIn('github')" 
        style="padding: 8px 16px; cursor: pointer; background: #24292e; color: white; border: none; border-radius: 4px; font-size: 14px;"
      >
        Sign in with GitHub
      </button>
    </div>
    
    <div v-else style="position: fixed; top: 16px; right: 16px; display: flex; align-items: center; gap: 12px;">
      <img :src="session.user?.image" alt="Avatar" style="width: 32px; height: 32px; border-radius: 50%;" />
      <button @click="signOut()" style="padding: 6px 12px; cursor: pointer; font-size: 14px;">
        Sign Out
      </button>
    </div>
  </div>
</template>
