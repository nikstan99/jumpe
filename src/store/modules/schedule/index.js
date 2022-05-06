import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      weeklySchedule: [
        {
          id: "subjectOne",
          dayOfWeekId: "monday",
          subjectName: "Intro to Psyhology",
          classHour: "firstHour",
          classroomNumber: 31,
          subjectDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida arcu in tellus tempus, eget pretium felis rutrum. Donec vehicula eu urna sed tristique. Duis sit amet interdum felis. Etiam placerat libero nec risus vestibulum, at vehicula ex condimentum. Nullam euismod nulla est, quis dapibus leo consequat sed. Donec condimentum ultricies pulvinar. Sed faucibus ut tortor euismod imperdiet. Nunc a fermentum turpis.",
          teacherBio:
            "Etiam placerat libero nec risus vestibulum, at vehicula ex condimentum. Nullam euismod nulla est, quis dapibus leo consequat sed. Donec condimentum ultricie",
        },
        {
          id: "subjectTwo",
          dayOfWeekId: "monday",
          subjectName: "German Culture and History",
          classHour: "secondHour",
          classroomNumber: 35,
          subjectDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida arcu in tellus tempus, eget pretium felis rutrum. Donec vehicula eu urna sed tristique. Duis sit amet interdum felis. Etiam placerat libero nec risus vestibulum, at vehicula ex condimentum. Nullam euismod nulla est, quis dapibus leo consequat sed. Donec condimentum ultricies pulvinar. Sed faucibus ut tortor euismod imperdiet. Nunc a fermentum turpis.",
          teacherBio:
            "Etiam placerat libero nec risus vestibulum, at vehicula ex condimentum. Nullam euismod nulla est, quis dapibus leo consequat sed. Donec condimentum ultricie",
        },
        {
          id: "subjectThree",
          dayOfWeekId: "monday",
          subjectName: "Music Class",
          classHour: "thirdHour",
          classroomNumber: 15,
          subjectDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida arcu in tellus tempus, eget pretium felis rutrum. Donec vehicula eu urna sed tristique. Duis sit amet interdum felis. Etiam placerat libero nec risus vestibulum, at vehicula ex condimentum. Nullam euismod nulla est, quis dapibus leo consequat sed. Donec condimentum ultricies pulvinar. Sed faucibus ut tortor euismod imperdiet. Nunc a fermentum turpis.",
          teacherBio:
            "Etiam placerat libero nec risus vestibulum, at vehicula ex condimentum. Nullam euismod nulla est, quis dapibus leo consequat sed. Donec condimentum ultricie",
        },
        {
          id: "subjectOne",
          dayOfWeekId: "tuesday",
          subjectName: "Maths",
          classHour: "firstHour",
          classroomNumber: 37,
          subjectDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida arcu in tellus tempus, eget pretium felis rutrum. Donec vehicula eu urna sed tristique. Duis sit amet interdum felis. Etiam placerat libero nec risus vestibulum, at vehicula ex condimentum. Nullam euismod nulla est, quis dapibus leo consequat sed. Donec condimentum ultricies pulvinar. Sed faucibus ut tortor euismod imperdiet. Nunc a fermentum turpis.",
          teacherBio:
            "Etiam placerat libero nec risus vestibulum, at vehicula ex condimentum. Nullam euismod nulla est, quis dapibus leo consequat sed. Donec condimentum ultricie",
        },
        {
          id: "subjectTwo",
          dayOfWeekId: "tuesday",
          subjectName: "Music Class",
          classHour: "secondHour",
          classroomNumber: 55,
          subjectDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida arcu in tellus tempus, eget pretium felis rutrum. Donec vehicula eu urna sed tristique. Duis sit amet interdum felis. Etiam placerat libero nec risus vestibulum, at vehicula ex condimentum. Nullam euismod nulla est, quis dapibus leo consequat sed. Donec condimentum ultricies pulvinar. Sed faucibus ut tortor euismod imperdiet. Nunc a fermentum turpis.",
          teacherBio:
            "Etiam placerat libero nec risus vestibulum, at vehicula ex condimentum. Nullam euismod nulla est, quis dapibus leo consequat sed. Donec condimentum ultricie",
        },
        {
          id: "subjectThree",
          dayOfWeekId: "tuesday",
          subjectName: "Physiscs",
          classHour: "thirdHour",
          classroomNumber: 15,
          subjectDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida arcu in tellus tempus, eget pretium felis rutrum. Donec vehicula eu urna sed tristique. Duis sit amet interdum felis. Etiam placerat libero nec risus vestibulum, at vehicula ex condimentum. Nullam euismod nulla est, quis dapibus leo consequat sed. Donec condimentum ultricies pulvinar. Sed faucibus ut tortor euismod imperdiet. Nunc a fermentum turpis.",
          teacherBio:
            "Etiam placerat libero nec risus vestibulum, at vehicula ex condimentum. Nullam euismod nulla est, quis dapibus leo consequat sed. Donec condimentum ultricie",
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
