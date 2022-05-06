<template>
  <div class="d-grid grid-cols-3 grid-gap-40">
    <day-from-week
      v-for="day in daysOfWeek"
      :key="day.id"
      :dayOfWeek="day.dayOfWeek"
    ></day-from-week>
  </div>
</template>

<script>
import DayFromWeek from "../../components/schedule/DayFromWeek.vue";

export default {
  components: { DayFromWeek },
  computed: {
    daysOfWeek() {
      return this.$store.getters["daysOfWeek/daysOfWeek"];
    },
  },
};
</script>
