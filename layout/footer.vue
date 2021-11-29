<template>
  <div class="size">
  <div class="container footer">
    <b-container fluid>
      <img
        src="../assets/Jobizz.png"
        alt="logo"
        class="footer__image"
      />
    </b-container>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <h4>Company</h4>
          <p>About</p>
          <p>Presentation</p>
          <p>Apps</p>
        </b-col>
        <b-col>
          <h4>Region</h4>
          <p>France</p>
          <p>Espagne</p>
          <p>Allemagne</p>
        </b-col>
        <b-col>
          <h4>Help</h4>
          <p>Help center</p>
          <p>Contact support</p>
          <p>How it works</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
    <b-img width="120" :src="require('@/assets/element2.png')" alt="deco"></b-img>
    <p class="footer__rights text-center pb-3">
      ©Team Jobizz 2021.  All rights reserved
    </p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.size {
  background: linear-gradient(#7B6AF5, #6D64B1);
}

.footer {
  display: flex;
  padding-top: 7rem;
  padding-bottom: 2rem;

  max-width: 1400px;
  color: #fff;

  &__image {
    padding-left: 1rem;
  }

  &__rights {
    margin-bottom: 0 !important;
  }
}
</style>
