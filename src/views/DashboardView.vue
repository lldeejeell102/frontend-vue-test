<!-- Dashboard.vue -->
<template>
  <div class="dashboard-container">
    <h2>Welcome to our Dashboard Page</h2>
    <p>Hello {{ user.username }}</p>
    <button @click="logout">Sign out</button>
  </div>
</template>
<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  setup(){
    const store = useStore()
    const user = computed(() => store.state.user)
    const logout = () => {
      store.dispatch("logout")
      console.log("User has been logged out")
    };
    return {
      logout,
      user
    };
  }
}
</script>
<style scoped>
</style>