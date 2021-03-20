<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <el-tag :type="status" effect="dark">{{ statusText }}</el-tag>
        <span>标题: {{ todoItem.id }} --- {{ todoItem.title }}</span>
        <el-row class="btn-area">
          <el-button
            type="primary"
            icon="el-icon-edit"
            circle
            @click="editItem()"
          ></el-button>
          <el-button
            type="success"
            icon="el-icon-check"
            circle
            @click="checkItem()"
          ></el-button>
          <el-button
            type="danger"
            icon="el-icon-delete"
            circle
            @click="delItem()"
          ></el-button
        ></el-row>
      </div>
    </template>
    <div class="text item">内容: {{ todoItem.content }}</div>
  </el-card>
</template>
<script>
export default {
  name: "card",
  props: {
    todoItem: {
      type: Object
    }
  },
  data() {
    return {
      // status: ""
    };
  },
  mounted() {},
  computed: {
    status() {
      let todoStatus = this.todoItem.status || "";
      switch (todoStatus) {
        case "done":
          todoStatus = "success";
          break;
        default:
          todoStatus = "info";
      }
      return todoStatus;
    },
    statusText() {
      if (this.status === "info") {
        return "待完成";
      } else {
        return "已完成";
      }
    }
  },
  methods: {
    editItem() {
      this.$emit("editItem", this.todoItem);
    },
    checkItem() {
      this.$emit("checkItem", this.todoItem);
    },
    delItem() {
      this.$emit("delItem", this.todoItem);
    }
  }
};
</script>
<style lang="scss" scoped>
.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    font-weight: bolder;
    margin-left: 20px;
  }
  .btn-area {
    flex: 1;
    justify-content: flex-end;
  }
}
</style>
