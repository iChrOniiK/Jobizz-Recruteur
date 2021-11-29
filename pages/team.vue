<template>
  <div class="container">
      <NavBar/>
      <Team/>
  </div>
</template>

<script>
import Header from '../layout/header.vue'
import Team from '../components/Team.vue'
export default {
    components: {
      Header,
        Team,
    }

}
</script>

<style>

</style>
