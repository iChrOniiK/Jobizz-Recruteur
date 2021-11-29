<template>
  <div id="about-us" class="Hero container">
    <div class="text-container">
    <h1>
        A propos de nous
    </h1>
    <p class="snippet">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nullam elementum purus dignissim mi pulvinar tincidunt.
        Pellentesque mattis ut arcu ac fermentum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <NuxtLink  to="/features">
    <button class="button btn"> En savoir plus</button></NuxtLink>
    </div>
    <img src="../assets/team.svg" alt="" class="image">
  </div>
</template>

<script>
export default {
  components: true,
}
</script>

<style scoped>
.text-color {
    color: white;
}
    .Hero {
        position: relative;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        margin-bottom: 10rem;
    }
    .text-container {
        width: 50%;
        margin-top: 4rem;
        padding-left: 8%;
    }
    .header {
        font-weight: 900;
        font-size: 5rem;
    }
    .snippet {
        color: grey;
        margin-top: 2rem;
        margin-bottom: 2rem;
        font-size: 1rem;
    }
    .image {
        width: 30rem;
        margin-top: 2rem;
    }
    .overlay {
        background: rgba(0, 0, 0, 0);
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
    }
    .button {
        padding: 1rem 4rem;
        border-radius: 100rem;
        background-color: white;
        border-color: rgb(129, 141, 229);
        color: rgb(129, 141, 229);
        width: 20rem;
        font-weight: 700;
        transition: 0.5s;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    .button:hover {
        background-color: rgb(129, 141, 229);
        color:  white;
    }
    @media (max-width: 500px) {
        .Hero {
            height: 40vh;
        }
    }
</style>
