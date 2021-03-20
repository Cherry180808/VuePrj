<template>
  <div
    class="app-wrapper"
    :class="{
      hideSidebar: !sidebar.opened,
      openSidebar: sidebar.opened,
      mobile: device === 'mobile'
    }"
  >
    <!--mobile状态下的导航菜单遮罩层-->
    <div
      v-if="device === 'mobile' && sidebar.opened"
      class="drawer-bg"
      @click="handleClickOutside"
    />
    <sidebar class="main-sider"></sidebar>
    <div class="main-container">
      <navbar
        :is-active="sidebar.opened"
        @toggleClick="toggleClick($event)"
      ></navbar>
      <tagview></tagview>
      <mainapp></mainapp>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { sidebar, navbar, tagview, mainapp } from "../../components/shared";
import ResizeMixin from "../../components/mixin/resize-handler";

export default {
  name: "Layout",
  components: {
    sidebar,
    navbar,
    tagview,
    mainapp
  },
  props: {},
  data() {
    return {};
  },
  mixins: [ResizeMixin],
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
      device: state => state.app.device
    })
  },
  created() {},
  mounted() {},
  methods: {
    toggleClick() {
      this.$store.dispatch("app/toggleSideBar");
    },
    handleClickOutside() {
      this.$store.dispatch("app/closeSideBar");
    }
  }
};
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }

  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }
}
</style>
