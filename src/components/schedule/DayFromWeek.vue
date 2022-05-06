<template>
  <base-card>
    <h3>{{ dayOfWeek }}</h3>
    <ul>
      <subject-item
        v-for="subject in filteredWeeklySchedule"
        :key="subject.id"
        :subject-name="subject.subjectName"
      ></subject-item>
    </ul>
  </base-card>
</template>

<script>
import SubjectItem from "./SubjectItem.vue";

export default {
  components: { SubjectItem },
  props: ["dayOfWeek"],
  computed: {
    filteredWeeklySchedule() {
      const days = this.$store.getters["schedule/weeklySchedule"];
      return days.filter((day) => {
        if (day.dayOfWeekId === this.dayOfWeek.toLowerCase()) {
          return true;
        }
      });
    },
  },
};
</script>
