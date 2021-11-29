<template>
  <div>
    <div class="container">
      <Header/>
    </div>
    <SocialNav />
    <b-container class="recruteur-layout mt-5 pt-5">
      <b-row>
        <b-col>
          <h1 class="recruteur-layout__title pt-3 pb-3">Le recrutement plus efficacement.</h1>
          <p  class="recruteur-layout__subtitle pb-3">Découvrez une nouvelle méthode de recrutement lors de vos ouvertures de poste.</p>
          <button class="recruteur-layout__btn" >Donwload Now</button>
        </b-col>
        <b-col>
          <b-img class="recruteur-layout__cover mt-3 mb-5 pb-5" :src="require('@/assets/sect2.png')"></b-img>
        </b-col>
      </b-row>
    </b-container>
    <div class="recruteur-layout__line" />

    <div class="recruteur-layout2">
      <b-container class="recruteur-layout2__contain pt-5">
        <b-row>
          <b-col class="recruteur-layout2__col">
            <b-img class="recruteur-layout2__cover mt-3 mb-5 pb-5" :src="require('@/assets/block1.png')"></b-img>
            <h2 class="recruteur-layout2__title pt-3 pb-3">Une meilleure expérience recruteur</h2>
            <p  class="recruteur-layout2__subtitle pb-3">Un coup de cœur pour un talent mais de de poste pour lui? Cooptez-le directement depuis Talent Circle.
              Vous valorisez son parcours candidat en lui ouvrant votre réseau.</p>
          </b-col>
          <b-col class="recruteur-layout2__col">
            <b-img class="recruteur-layout2__cover mt-3 mb-5 pb-5" :src="require('@/assets/block3.png')"></b-img>
            <h2 class="recruteur-layout2__title pt-3 pb-3">Une meilleure expérience recruteur</h2>
            <p  class="recruteur-layout2__subtitle pb-3">Un coup de cœur pour un talent mais de de poste pour lui?
              Cooptez-le directement depuis Talent Circle. Vous valorisez son parcours candidat en lui ouvrant votre réseau.</p>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="recruteur-layout__line" />
    <div>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from '../layout/header_pass.vue'
import Footer from '../layout/footer.vue'
import SocialNav from '../layout/nav_social_network'

export default {
  components: { Header, Footer, SocialNav },}
</script>

<style lang="scss" scoped>

.recruteur-layout {
  &__title {
    font-size: 48px;
    font-weight: bold;
  }

  &__subtitle {
    padding-right: 10rem;
    font-size: 24px;
  }

  &__btn {
    border-radius: 99px;
    background-color: #7B6AF5;
    padding: 1rem 2rem;
    margin-bottom: 5rem;
    color: white;
    border: white;
  }

  &__line {
    background-color: #E18473;
    background-size: cover;
    background-position: center;
    padding-top: 4rem;
  }

  &__cover {
    width: 100%;
  }
}

*.recruteur-layout2 {
  background-color: rgb(115, 126, 225, 50%);

  &__contain {
    max-width: 1400px !important;

  }
  &__title {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    padding-right: 5rem;
    padding-left: 5rem;
  }

  &__col {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
  }

  &__subtitle {
    font-size: 18px;
    text-align: center;
    padding-right: 5rem;
    padding-left: 5rem;
  }

  &__cover {
    width: 360px;

  }
}
</style>
