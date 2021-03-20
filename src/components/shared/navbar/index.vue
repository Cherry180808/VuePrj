<template>
  <div class="navbar">
    <div class="hamburger-container" @click="toggleClick">
      <svg
        :class="{ 'is-active': isActive }"
        class="hamburger"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
      >
        <path
          d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"
        />
      </svg>
    </div>

    <div class="breadcrumb-container">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="right-menu">
      <div class="right-menu-item">
        <svg-icon icon-class="search" />
      </div>
      <div class="right-menu-item">
        <svg-icon icon-class="list" />
      </div>
      <div class="right-menu-item">
        <svg-icon icon-class="star" />
      </div>
      <div class="right-menu-item">
        <svg-icon icon-class="peoples" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    toggleClick() {
      this.$emit("toggleClick");
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);

  .hamburger-container {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    .hamburger {
      width: 20px;
      height: 20px;
    }
    .hamburger.is-active {
      transform: rotate(180deg);
    }
  }

  .breadcrumb-container {
    height: 100%;
    display: flex;
    flex: 1;
    align-items: center;
    padding: 0 16px;
  }

  .right-menu {
    margin-right: 30px;
    height: 100%;
    display: flex;
    align-items: center;

    .right-menu-item {
      font-size: 24px;
      margin-right: 15px;
    }
  }
}
</style>
