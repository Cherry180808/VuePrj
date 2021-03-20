<template>
  <div :class="{ 'has-logo': showLogo }">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sideba-item
          v-for="route in convertedRoutes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        ></sideba-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapState } from "vuex";
import sidebaItem from "./sideba-item.vue";
import variables from "@/style/variables.scss";
import { toRaw } from "vue";

export default {
  components: { sidebaItem },
  name: "sidebar",
  props: {},
  data() {
    return {
      showLogo: true
    };
  },
  computed: {
    ...mapState({
      permission_routes: state => state.permission.routes,
      sidebar: state => state.app.sidebar
    }),
    convertedRoutes() {
      let routes = this.permission_routes.map(e => {
        return Object.assign({}, toRaw(e));
      });
      return routes;
    },
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    variables() {
      return variables;
    },
    isCollapse() {
      return !this.sidebar.opened;
    }
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped></style>
