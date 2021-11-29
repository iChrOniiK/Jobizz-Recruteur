<template>
  <div id="timeline" class="page-timeline">
    <div class="page-timeline__text-container">
      <Timeline
      :timeline-items="dataTimeline"
      :message-when-no-items="messageWhenNoItems"
      :show-day-and-month="true"
      order="asc"
    />
    </div>
    <!-- <img src="../assets/sect1.png" alt="" class="image" width="950" height="450" > -->
  </div>
</template>

<script>
import Timeline from "timeline-vuejs";

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

<style lang="scss">

.page-timeline {
  position: relative;
  display: flex;
  padding: 5rem 0;
  justify-content: space-between;

  &__text-container {
    width: 80%;
  }
}
</style>
