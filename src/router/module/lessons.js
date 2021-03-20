import Home from "../../views/Home.vue";
import Lesson1 from "../../lessons/lesson1/index.vue";
import Lesson2 from "../../lessons/lesson2/index.vue";
import SubLesson2 from "../../lessons/lesson2/sub-index.vue";

const LessonsRouter = [
  {
    path: "/home",
    component: Home
  },
  {
    path: "/lesson1",
    component: Lesson1
  },
  {
    path: "/lesson2",
    component: Lesson2,
    children: [
      {
        path: "sub/:id",
        component: SubLesson2
      }
    ]
  }
];

export default LessonsRouter;
