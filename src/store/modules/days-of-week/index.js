export default {
  namespaced: true,
  state() {
    return {
      daysOfWeek: [
        {
          id: "monday",
          dayOfWeek: "Monday",
        },
        {
          id: "tuesday",
          dayOfWeek: "Tuesday",
        },
      ],
    };
  },
  getters: {
    daysOfWeek(state) {
        return state.daysOfWeek;
    }
  }
};
