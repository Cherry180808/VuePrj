<template>
  <div>
    {{ data.title }}
    <ul>
      <li v-for="(arr, index) of arrs" :key="index">{{ arr }}</li>
    </ul>
    <button @click="changeVal()">Click</button>
  </div>
</template>
<script>
export default {
  name: "documentation",
  data() {
    return {
      data: {},
      arrs: [11, 22, 33]
    };
  },
  mounted() {},
  methods: {
    changeVal() {
      this.arrs[1] = [1, 2, 3];
    }
  }
};
</script>
<style lang="scss"></style>
