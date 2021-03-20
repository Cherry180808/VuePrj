<template>
  <div class="items">
    <div class="item">
      <div>测试http</div>
      <button @click="getUserInfo()">get user info</button>
      <div>
        <div>ID: {{ userInfo.id }}</div>
        <div>NAME: {{ userInfo.name }}</div>
        <div>AGE: {{ userInfo.age }}</div>
      </div>
    </div>

    <div class="item">
      <div>强制刷新</div>
      <button @click="forceUpdate()">force update</button>
    </div>

    <div class="item">
      <div v-for="item in todoList" :key="item.id">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { getAssetNos } from "../../api/api";

export default {
  name: "dashboard",
  props: {},
  data() {
    return {
      userInfo: {}
    };
  },
  computed: {
    ...mapState({ todoList: state => state.todo.todoList })
  },
  created() {},
  mounted() {},
  methods: {
    getUserInfo() {
      getAssetNos().then(res => {
        this.userInfo = res.data;
      });
    },

    forceUpdate() {
      this.$forceUpdate();
    }
  }
};
</script>
<style lang="scss" scoped></style>
