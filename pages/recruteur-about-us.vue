<template>
  <div>
    <div class="container">
      <Header/>
    </div>
    <SocialNav />
    <div class="head">
      <h1>A propos de Jobizz</h1>
    </div>
    <b-container>
      <b-row class="mt-5 pt-5 mb-5">
        <h2 class="head__subtitle">Notre mission chez Jobizz est de construire un outils centrés autour du recrutement</h2>
      </b-row>
      <b-row class="mt-5 mb-5 pb-5">
        <p>
          Nous aidons les services RH à remodeler leur façon de travailler, de recruter et de gérer les parcours internes
          et externes – nous construisons de nouveaux outils pour répondre aux enjeux actuels. En effet recruter doit
          devenir collaboratif pour attirer mais aussi aider les talents dans leur changement de carrière car les
          nouvelles générations n’aspirent plus à faire une seule carrière dans une seule entreprise.
        </p>
      </b-row>
      <b-img class="head__cover mb-5 pb-5" :src="require('@/assets/team2.png')"></b-img>
    </b-container>

    <div class="head__container">
      <div class="head__container__head">
        <h1 class="b-rating">Nos valeurs</h1>
      </div>
    </div>
    <b-container>
      <b-row>
        <b-col>
          <div>
            <p class="list">Transparence</p>
            <p>Un outil transparent sur le recrutument pour vos différentes annonce !</p>
          </div>
          <div>
            <p class="list">User Friendly</p>
            <p>Une expérience utilisateur orienté recruteur</p>
          </div>
          <div>
            <p class="list">Facile d'utilisation</p>
            <p>Un outil facile à utiliser et simple d'accès !</p>
          </div>
        </b-col>
        <b-col>
          <b-img class="head__cover mb-5 pb-5" :src="require('@/assets/phone_1.png')"></b-img>
        </b-col>
      </b-row>
    </b-container>

    <div class="head__container">
      <div class="head__container__head">
        <h1 class="b-rating">Nos valeurs et notre projet vous parlez ?</h1>
      </div>
    </div>
    <div class="row justify-content-center">
      <NuxtLink to="/#/Recruteur/Login">
        <b-button class="head__btn">
          Télechargement Maintenant
        </b-button>
      </NuxtLink>
      <b-img width="100" :src="require('@/assets/element2.png')"></b-img>
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
.head {
  background-image: url("~@/assets/Rectangle-18.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 10rem;
  padding-bottom: 18rem;

  h1 {
    text-align: center;
    color: white;
    font-size: 3.5rem;
  }

  &__subtitle {
    font-size: 3rem;
    text-align: center;
  }

  &__cover {
    width: 100%;
  }

  &__container {
    background-color: #E18473;
    background-size: cover;
    background-position: center;
    padding-top: 6rem;
    margin-bottom: 6rem;

    &__head {
      margin-right: 15rem;
      margin-left: 15rem;
      background-color: #737EE1;
      background-size: 500px;
      background-position: center;
      padding-top: 6rem;
      padding-bottom: 6rem;

      h1 {
        padding-left: 15rem;
        padding-right: 15rem;
      }
    }
  }

  &__btn {
    border-radius: 99px;
    background-color: #7B6AF5;
    padding: 1rem 2rem;
    margin-bottom: 5rem;

    &__logo {
      width: 10%;
      position: absolute;
      right: 0;
    }
  }
}

.list {
  color: black;
  font-size: 36px;
  padding-top: 1rem;

}
</style>
