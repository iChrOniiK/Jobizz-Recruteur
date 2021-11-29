<template>
<div id="team">
  <img class="vector" width="900" src="~/assets/Frame.png"/>
  <!-- <img class="litle-image" width="200" src="~/assets/element.png"/> -->
  <div class="page-feature container">
    <h1>L'equipe</h1>
    <p class="page-feature__lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elementum purus dignissim mi pulvinar tincidunt.
      Pellentesque mattis ut arcu ac fermentum</p>
    <div class="page-feature__block" >
      <b-card-group deck>
      <b-card class="page-feature__block__logo" img-src="../assets/trombi1.png" img-alt="Card image">
        <h4>Développeur iOs</h4>
        <b-card-text class="page-feature__block__description">
          Some quick example text to build on the card and make up the bulk of the card's content.
        </b-card-text>

        <template #footer>
          <small class="text-muted">
            <b-button variant="light">
              <a class="link-person" href="https://www.linkedin.com/in/antoine-levy-342559140">En savoir plus</a>
              <img src="../assets/linkedin.png">
            </b-button>
          </small>
      </template>
      </b-card>
      <b-card class="page-feature__block__logo" img-src="../assets/trombi2.png" img-alt="Card image">
        <h4>Developpeur Back End</h4>
        <b-card-text class="page-feature__block__description">
          Some quick example text to build on the card and make up the bulk of the card's content.
        </b-card-text>
         <template #footer>
          <small class="text-muted">
            <b-button variant="light">
              <a class="link-person" href="https://www.linkedin.com/in/olivier-chane-353335158">En savoir plus</a>
              <img src="../assets/linkedin.png">
            </b-button>
          </small>
      </template>
      </b-card>
      <b-card class="page-feature__block__logo" img-src="../assets/trombi-mieux.png" img-alt="Card image">
        <h4>Developpeur Front End</h4>
        <b-card-text class="page-feature__block__description">
          Some quick example text to build on the card and make up the bulk of the card's content.
        </b-card-text>
         <template #footer>
          <small class="text-muted">
            <b-button variant="light">
              <a class="link-person" href="https://www.linkedin.com/in/th%C3%A9o-lebarq-223906154">En savoir plus</a>
              <img src="../assets/linkedin.png">
            </b-button>
          </small>
      </template>
      </b-card>
    </b-card-group>
    </div>

    <div class="page-feature__block" >
      <b-card-group deck>
      <b-card class="page-feature__block__logo" img-src="../assets/trombi6.png" img-alt="Card image">
        <h4>Dévellopeur FullStack</h4>
        <b-card-text class="page-feature__block__description">
          Some quick example text to build on the card and make up the bulk of the card's content.
        </b-card-text>
         <template #footer>
          <small class="text-muted">
            <b-button variant="light">
              <a class="link-person-big" href="https://www.linkedin.com/in/nicolas-pezet-a87007193">En savoir plus</a>
              <img src="../assets/linkedin.png">
            </b-button>
          </small>
      </template>
      </b-card>
      <b-card class="page-feature__block__logo" img-src="../assets/trombi7.png" img-alt="Card image">
        <h4>DevOps</h4>
        <b-card-text class="page-feature__block__description">
          Some quick example text to build on the card and make up the bulk of the card's content.
        </b-card-text>
         <template #footer>
          <small class="text-muted">
            <b-button variant="light">
              <a class="link-person-big" href="https://www.linkedin.com/in/mohamed-aribi-a54808159">En savoir plus</a>
              <img src="../assets/linkedin.png">
            </b-button>
          </small>
      </template>
      </b-card>
    </b-card-group>
    </div>
  </div>
</div>
</template>

<script>
export default {
  components: true,
  data: () => ({
    messageWhenNoItems: "There arent items",
  })
};
</script>

<style lang="scss" scoped>

.vector {
  position: absolute;
  transform: scaleX(-1);
  right: 0;
}

.page-feature {
  padding: 5rem 0;

  &__lorem {
    text-align: center;
    font-family: 'SF Pro Display', sans-serif;
    font-size: 1rem;
    font-weight: 300;
    color: #7D7987;
    padding-left: 10rem;
    padding-right: 10rem;
    padding-bottom: 2rem;
  }

  &__vector {
    position: absolute;
  }

  h1 {
    text-align: center;
    padding-bottom: 3rem;
  }

  &__block {
    display: flex;
    width: 100%;
    margin-bottom: 2rem;

    &__logo {
      width: 100%;
      margin-left: 1rem;
      margin-right: 1rem;
      border-radius: 1.5rem;
      box-shadow: 2px 2px 2px #E8E8E8;
    }

    &__description {
      color: #7D7987;
      margin-bottom: 1rem;
    }
  }
}

.link-person {
  color: black;
  margin-right: 10rem;
}

.link-person-big {
  color: black;
  margin-right: 22rem;
}

.card-img {
  width: 100px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 3rem;
  padding-bottom: 2rem;
}
</style>
