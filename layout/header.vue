<template>
  <div>
    <b-navbar variant="faded" type="light">
      <b-navbar-brand href="/">
        <img
          src="../assets/Jobizz.png"
          alt="Kitten"
          class="image"
        />
      </b-navbar-brand>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="navbar ml-auto">
          <b-nav-item><NuxtLink class="text-color" to="#pres">Présentation</NuxtLink></b-nav-item>
          <b-nav-item><NuxtLink class="text-color" to="#features">Fonctionnalité</NuxtLink></b-nav-item>
          <b-nav-item><NuxtLink class="text-color" to="#timeline">Progression</NuxtLink></b-nav-item>
          <b-nav-item><NuxtLink class="text-color" to="#team">Equipe</NuxtLink></b-nav-item>
          <b-nav-item>
            <NuxtLink class="text-color" to="/recruteur">Recruteur</NuxtLink>
          </b-nav-item>
          <b-nav-item href="http://51.103.25.25:3000/#/User/Register">
            <button class="button btn">
              Commencer
            </button>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.image {
  width: 120px;
}
.text-nav{
  align-content: space-between;
}
.text-color{
  color: black;
}
.text-color:hover {
  color: rgb(129, 141, 229);
}
.button {
  border-radius: 100rem;
  border-color: rgb(129, 141, 229);
  background-color: white;
  color:  rgb(129, 141, 229);
  width: 7rem;
  height: 3rem;
  text-align: start;
  transition: 0.5s;
}
.button:hover {
  background-color: rgb(129, 141, 229);
  color: white;
  width: 9rem;
  height: 3rem;
}
.navbar {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 600;
  color:  black;
}
.navbar:hover{
  color:  rgb(129, 141, 229);
}

@media (max-width: 700px) {
  .navbar {
    height: 40vh;
  }
}
</style>
