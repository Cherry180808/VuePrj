<template>
  <div id="nav">
    <router-link to="/lesson2/sub/1"> param1</router-link><br />
    <router-link to="/lesson2/sub/2"> param2</router-link><br />
    <router-view />
  </div>
  <!-- <router-view /> -->
</template>

<script>
export default {
  name: "Lesson2",
  data() {
    return {
      comName: "Lesson2"
    };
  },
  watch: {
    $route(to, from) {
      console.log("Lesson2-index-watch-route", to, from);
    }
  },
  beforeRouteUpdate(to, from, next) {
    console.log("Lesson2-index-beforeRouteUpdate", to, from);
    next();
  }
};
</script>
