import { createRouter, createWebHistory } from "vue-router";

import StudentDashboard from "./pages/student/StudentDashboard.vue";
import StudentSchedule from "./pages/student/StudentSchedule.vue";
import StudentGrades from "./pages/student/StudentGrades.vue";
import StudentAssignments from "./pages/student/StudentAssignments.vue";
import StudentExams from "./pages/student/StudentExams.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
      { path: "/", redirect: "/schedule" },
      { path: "/dashboard", component: StudentDashboard },
      { path: "/schedule", component: StudentSchedule },
      { path: "/grades", component: StudentGrades },
      { path: "/assignments", component: StudentAssignments },
      { path: "/exams", component: StudentExams }
    ],
});

export default router;
