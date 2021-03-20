<template>
  <div>
    <span>Home Page</span>
    <div id="nav">
      <router-link to="/layout">Layout</router-link><br />
      <router-link to="/lesson1"> Lesson1</router-link><br />
      <router-link to="/lesson2"> Lesson2</router-link><br />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
