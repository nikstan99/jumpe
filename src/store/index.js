import { createStore } from "vuex";

import scheduleModule from "./modules/schedule/index.js";
import daysOfWeekModule from "./modules/days-of-week/index.js";

const store = createStore({
    modules: {
        schedule: scheduleModule,
        daysOfWeek: daysOfWeekModule
    },
});

export default store;