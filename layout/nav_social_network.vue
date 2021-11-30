<template>
  <div>
    <b-navbar class="navbar-custom" variant="faded">
      <b-navbar-nav class="navbar">
        <b-nav-item>Follow us on our socials network to don't miss our update</b-nav-item>
        <b-nav-item><NuxtLink class="text-color" to="/">Instagram</NuxtLink></b-nav-item>
        <b-nav-item><NuxtLink class="text-color" to="/recruteur-about-us">Twitter</NuxtLink></b-nav-item>
        <b-nav-item><NuxtLink class="text-color" to="/recruteur-why-jobizz">Facebook</NuxtLink></b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar-custom {
  background-color: #E18473;
  height: 40px;
  justify-content: center !important;
}

.text-nav{
  align-content: space-between;
}

.text-color{
  color: white;
}

.navbar {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 600;
  color:  black;
}
</style>
