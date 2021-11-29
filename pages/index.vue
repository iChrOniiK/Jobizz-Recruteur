<template>
<div>
  <div class="container">
    <Header/>
  </div>
  <Hero />

</div>
</template>

<script>
import Header from '../layout/header.vue'
import Footer from '../layout/footer.vue'
import Hero from '../components/Hero.vue'


export default {
  components: { Hero, Header, Footer },}
</script>
