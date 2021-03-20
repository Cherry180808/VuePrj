<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in"
      ><router-view :key="key"
    /></transition>
  </section>
</template>

<script>
export default {
  name: "mainapp",
  props: {},
  data() {
    return {};
  },
  computed: {
    key() {
      return this.$route.path;
    }
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.app-main {
  min-height: calc(100vh - 86px); //navbar和tagview都有border-bottom:1px
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>
