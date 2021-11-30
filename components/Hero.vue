<template>
<div>
  <div class="Hero container">
    <div class="text-container">
    <h1>
        La première plateforme de petit job et d'extra.
    </h1>
    <p class="snippet">
        Nous somme la premiere plateforme aidant les utilisateurs à trouver des petits jobs et des extra rapidement et proche d'eux.
        <br><br>
        Téléchargez l'application ou continuez à visiter notre site pour en savoir d'avantage sur Jobizz.
    </p>
    <a href="https://testflight.apple.com/join/Oxi8gyvA/">
      <button class="button btn">Télécharger</button>
    </a>
    <NuxtLink to="/pres">
      <button class="button2 btn">  En savoir plus</button>
    </NuxtLink>
    </div>
    <img src="../assets/sect1.png" alt="" class="image">
  </div>
  <Pres />
  <Features />
  <AboutUs />
  <div id="timeline" class="container page-timeline">
    <img src="../assets/phone1.png" alt="" class="image" width="950" height="450" >
    <div class="page-timeline__text-container">
      <Timeline
      :timeline-items="dataTimeline"
      :message-when-no-items="messageWhenNoItems"
      :show-day-and-month="true"
      order="asc"
    />
    </div>
  </div>
  <Team />
  <Contact />
  <Footers />
</div>

</template>

<script>
import Timeline from 'timeline-vuejs'
import "../node_modules/timeline-vuejs/dist/timeline-vuejs.css";

export default {
  components: {
    Timeline
  },
  data: () => ({
    messageWhenNoItems: "There arent items",
    dataTimeline: [
      {
        from: new Date(2019, 5, 22),
        title: "Septembre 2019",
        showDayAndMonth: true,
        color: '#e74c3c',
        description:
          "Creation du projet"
      },
      {
        from: new Date(2019, 12, 20),
        title: "Decembre 2019",
        showDayAndMonth: true,
        color: '#e74c3c',
        description:
          "Creation du MVP"
      },
      {
        from: new Date(2020, 4, 20),
      title: "Avril 2020",
        showDayAndMonth: true,
        color: '#e74c3c',
        description:
          "Premier Prototype"
      },
      {
        from: new Date(2021, 10, 10),
        title: "Aujourd'hui",
        showDayAndMonth: true,
        color: '#7C6CF5',
        description:
          "Beta Mobile et Web"
      },
      {
        from: new Date(2022, 4, 10),
        title: "Dans 6 mois",
        showDayAndMonth: true,
        color: '#e18373',
        description:
          "Prochaine fonctionnalités"
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
    .Hero {
      position: relative;
      display: flex;
      padding: 1rem 0;
      align-items: flex-start;
      justify-content: space-between;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    .text-container {
        width: 80%;
        margin-bottom: 4rem;
        margin-top: 5rem;
    }
    .header {
        font-weight: 900;
        font-size: 5rem;
    }
    .snippet {
        color: grey;
        font-size: 1rem;
        width: 100%;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
    .image {
        width: 80%;
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
        background-color: rgb(129, 141, 229);
        color: white;
        width: 20rem;
        font-weight: 700;
        transition: 0.5s;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    .button:hover {
        border-color: rgb(129, 141, 229);
        background-color: white;
        color:  rgb(129, 141, 229);
    }
    .button2 {
        margin-top: 1rem;
        border-color: transparent;
        padding: 1rem 4rem;
        border-radius: 100rem;
        background-color: white;
        color: black;
        width: 20rem;
        font-weight: 700;
        transition: 0.5s;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    .button2:hover {
        margin-top: 1rem;
        background-color: transparent;
        color:  #E18473;
    }
    @media (max-width: 500px) {
        .Hero {
            height: 40vh;
        }
    }

    .page-timeline {
      position: relative;
      display: flex;
      padding: 0rem 0;

      &__text-container {
        width: 100%;
        margin-left: 15%;
      }
    }
</style>
