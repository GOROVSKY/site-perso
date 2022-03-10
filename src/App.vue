<template>
  <div class="app-container">
    <Header v-if="$route.name != 'home'"/>
    <router-view />
  </div>
</template>

<script>
import Header from '@/views/header/header.vue'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>


<style src="@/assets/variables.css">
</style>
<style src="@/assets/style.css">
</style>
<style src="@/assets/animations.css">
</style>
<style src="@/assets/responsive.css">
</style>
