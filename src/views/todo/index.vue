<template>
  <div class="todo-wrapper">
    <div class="todo-form">
      <div class="todo-form-item">
        <div class="item-title">标题:</div>
        <el-input v-model="todo.title" placeholder="请输入内容"></el-input>
      </div>
      <div class="todo-form-item">
        <div class="item-title">内容:</div>
        <el-input v-model="todo.content" placeholder="请输入内容"></el-input>
      </div>
      <el-button class="add_btn" @click="addAction()">{{ btnLable }}</el-button>

      <el-select clearable v-model="filter.status" placeholder="请选择状态">
        <el-option
          v-for="obj in statusOptions"
          :key="obj.label"
          :label="obj.label"
          :value="obj.value"
        >
        </el-option>
      </el-select>

      <el-select clearable v-model="filter.id" placeholder="请选择序号">
        <el-option v-for="id in todoIds" :key="id" :label="id" :value="id">
        </el-option>
      </el-select>
    </div>
    <div class="todo-list">
      <template v-for="item of showList" :key="item.id"
        ><card
          :todoItem="item"
          @editItem="editItem($event)"
          @checkItem="checkItem($event)"
          @delItem="delItem($event)"
        ></card
      ></template>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
import Card from "./card.vue";

export default {
  name: "todo",
  components: { Card },
  data() {
    return {
      todo: { title: "", content: "" },
      statusOptions: [
        { label: "ALL", value: "" },
        { label: "DONE", value: "done" },
        { label: "TODO", value: "todo" }
      ],
      filter: {
        status: "",
        id: ""
      }
    };
  },
  computed: {
    ...mapState({ todoList: state => state.todo.todoList }),
    ...mapGetters({
      todoIds: "todo/todoIds",
      filteredTods: "todo/filteredTods"
    }),
    showList() {
      return this.filteredTods(this.filter);
    },
    btnLable() {
      if (this.todo.id) {
        return "UPDATE";
      }
      return "ADD";
    }
  },
  created() {
    this.queryItem();
  },
  mounted() {},
  methods: {
    addAction() {
      if (this.todo.id) {
        this.updateItem(this.todo);
      } else {
        this.addItem();
      }
    },
    addItem() {
      let maxId = Math.max.apply(null, this.todoIds);
      this.$store
        .dispatch(
          "todo/addItem",
          Object.assign({}, this.todo, { status: "todo", id: maxId + 1 })
        )
        .then(res => {
          if (res.success) {
            this.todo = {};
          }
        });
    },
    queryItem() {
      this.$store.dispatch("todo/queryItem");
    },
    editItem($event) {
      this.todo = Object.assign({}, $event);
    },
    checkItem($event) {
      this.updateItem(Object.assign({}, $event, { status: "done" }));
    },
    delItem($event) {
      this.$store.dispatch("todo/deleteItem", $event);
    },
    updateItem(item) {
      this.$store.dispatch("todo/updateItem", item).then(res => {
        if (res.success) {
          this.todo = {};
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.todo-wrapper {
  .todo-form {
    display: flex;
    align-items: center;
    height: 50px;
    .todo-form-item {
      display: flex;
      align-items: center;
      .item-title {
        width: 100px;
        text-align: right;
      }
    }
    .add_btn {
      height: 35px;
      margin-left: 30px;
      margin-right: 20px;
    }
  }
}
</style>
