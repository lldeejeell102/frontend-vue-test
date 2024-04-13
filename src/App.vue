<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <!-- <router-link to="/people">People</router-link> | -->
      <!-- <router-link to="/new">New Friends</router-link> | -->
      <router-link to="/login">Login</router-link> |
      <router-link to="/dashboard">Dashboard</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  setup(){
    const store = useStore();
    const user = computed(() => store.state.user)
    return{
      user
    }
  }
}
</script>


<style>
button {
  width: 300px;
  height: 30px;
  padding: 0 5px;
  background-color: #35aa58;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
}
button:hover {
  background-color: #35aa58b7;
}
</style>