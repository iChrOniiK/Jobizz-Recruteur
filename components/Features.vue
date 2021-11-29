<template>
<div id="features">
  <img class="vector" width="900" src="~/assets/Frame.png"/>
  <img class="litle-image" width="200" src="~/assets/element.png"/>
  <div class="page-feature container">
    <h1>Caractéristique</h1>
    <p class="page-feature__lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elementum purus dignissim mi pulvinar tincidunt.
      Pellentesque mattis ut arcu ac fermentum</p>
    <div class="page-feature__block" >
      <b-card-group deck>
      <b-card class="page-feature__block__logo" img-src="../assets/image1.png" img-alt="Card image">
        <h3>Maps</h3>
        <b-card-text class="page-feature__block__description">
          Some quick example text to build on the card and make up the bulk of the card's content.
        </b-card-text>
      </b-card>
      <b-card class="page-feature__block__logo" img-src="../assets/image2.png" img-alt="Card image">
        <h3>Messages</h3>
        <b-card-text class="page-feature__block__description">
          Some quick example text to build on the card and make up the bulk of the card's content.
        </b-card-text>
      </b-card>
      <b-card class="page-feature__block__logo" img-src="../assets/image3.png" img-alt="Card image">
        <h3>Customization</h3>
        <b-card-text class="page-feature__block__description">
          Some quick example text to build on the card and make up the bulk of the card's content.
        </b-card-text>
      </b-card>
    </b-card-group>
    </div>

    <div class="page-feature__block" >
      <b-card-group deck>
      <b-card class="page-feature__block__logo" img-src="../assets/image6.png" img-alt="Card image">
        <h3>Accesible</h3>
        <b-card-text class="page-feature__block__description">
          Some quick example text to build on the card and make up the bulk of the card's content.
        </b-card-text>
      </b-card>
      <b-card class="page-feature__block__logo" img-src="../assets/image4.png" img-alt="Card image">
        <h3>Fast Process</h3>
        <b-card-text class="page-feature__block__description">
          Some quick example text to build on the card and make up the bulk of the card's content.
        </b-card-text>
      </b-card>
      <b-card class="page-feature__block__logo" img-src="../assets/image5.png" img-alt="Card image">
        <h3>Support 24/7</h3>
        <b-card-text class="page-feature__block__description">
          Some quick example text to build on the card and make up the bulk of the card's content.
        </b-card-text>
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
}

.litle-image {
  position: absolute;
  right: 12%;
  top: 235%;
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

.card-img {
  width: 100px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 3rem;
  padding-bottom: 2rem;
}
</style>
