<template>
  <div>
    <div class="container">
      <Header/>
    </div>
    <SocialNav />
    <b-container class="recruteur-layout mt-5 pt-5">
      <b-row>
        <b-col>
          <h1 class="recruteur-layout__title pt-3 pb-3">Pourquoi Jobizz ?</h1>
          <p  class="recruteur-layout__subtitle pb-3">Parce que Talent circle est une solution pour recruter plus
            efficacement et intelligemment tout en améliorant votre expérience candidat.</p>
          <button class="recruteur-layout__btn" >Je veux tester l'outil ?</button>
        </b-col>
        <b-col>
          <b-img class="recruteur-layout__cover mt-3 mb-5 pb-5" :src="require('@/assets/team3.png')"></b-img>
        </b-col>
      </b-row>
    </b-container>
    <div class="recruteur-layout__line" />
    <div class="recruteur-block pt-5" >
      <b-container class="mt-5 pt-5">
        <b-row>
          <b-col>
            <b-img class="mt-3 mb-5 pb-5" width="368" :src="require('@/assets/picture2.png')"></b-img>
          </b-col>
          <b-col>
            <h2 class="recruteur-block__title pt-3 pb-3">Notre constat du marché aujourd’hui</h2>
            <p  class="recruteur-block__subtitle pb-3">Le recrutement est un processus complexe et propre à chaque entreprise :</p>
            <p>Un coût d’acquisition important</p>
            <p>Un temps de traitement élevé</p>
            <p>Un parcours candidat laborieux</p>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="recruteur-layout__line" />

    <div class="recruteur-block2 pt-5 pb-5" >
      <b-container class="mt-5 pt-5">
        <h2 class="pb-1">Notre vision pour demain ?</h2>
        <p class="recruteur-block2__subtitle pb-5">Une approche intiutive dans le recrutement</p>
        <b-row>
          <b-col>
            <b-img class="mt-3 mb-5 pb-5" width="368" :src="require('@/assets/pic.png')"></b-img>
          </b-col>
          <b-col>
            <h3 class="pt-3 pb-3">✓ Plateforme complète et intuitive</h3>
            <p class="pb-3">Vous trouvez les meilleurs candidats avec notre système de filtres et vous les contactez directement.</p>
            <h3 class="pt-3 pb-3">✓ Nos meilleurs profils selon nous</h3>
            <p class="pb-3">Vous trouvez les meilleurs candidats avec notre système de filtres et vous les contactez directement.</p>
          </b-col>
        </b-row>
      </b-container>
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
    color: #8A88EC;
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

.recruteur-block {
  background-color: rgb(115, 126, 225, 50%);
  &__title {
    font-size: 28px;
    font-weight: bold;
    color: #7B6AF5;
  }

  &__subtitle {
    padding-right: 10rem;
    font-size: 24px;
  }
}

.recruteur-block2 {
  background-color: #F7F4FD;
  h2 {
    text-align: center;
    color: #E18473;
    font-weight: 800;
    font-size: 24px;
  }

  &__subtitle {
    font-size: 32px;
    text-align: center;
    font-weight: bold;
  }
}
</style>
