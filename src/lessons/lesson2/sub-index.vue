<template>
  <div>Lesson2 route params: {{ $route.params.id }}</div>
</template>

<script>
export default {
  name: "SubLesson2",
  data() {
    return {
      comName: "SubLesson2"
    };
  },
  watch: {
    $route(to, from) {
      console.log("Lesson2-sub-index-watch-route", to, from);
    }
  },
  beforeRouteUpdate(to, from, next) {
    console.log("Lesson2-sub-index-beforeRouteUpdate", to, from);
    next();
  }
};
</script>
