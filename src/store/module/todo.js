import {
  createTodo,
  deleteTodo,
  queryTodoList,
  updateTodo
} from "../../api/api";

const state = {
  todoList: []
};

const getters = {
  todoIds: state => {
    let ids = [];
    state.todoList.forEach(e => {
      ids.push(e.id);
    });
    return ids;
  },

  filteredTods: state => filter => {
    return state.todoList.filter(
      e =>
        (filter.status ? e.status === filter.status : true) &&
        (filter.id ? e.id === filter.id : true)
    );
  }
};

const mutations = {
  ADD_TOTO: (state, item) => {
    state.todoList.push(item);
  },
  DELETE_TODO: (state, item) => {
    state.todoList.removeObjArr(item, "id");
  },
  QUERY_TODOLIST: (state, todoList) => {
    state.todoList = todoList;
  },
  UPDATE_TODO: (state, item) => {
    let index = state.todoList.findIndex(e => e["id"] === item["id"]);
    if (index !== -1) {
      state.todoList.updateObjArr(index, item);
    }
  }
};

const actions = {
  addItem({ commit }, item) {
    return new Promise((resolve, reject) => {
      createTodo(item)
        .then(res => {
          if (res.success) {
            commit("ADD_TOTO", item);
          }
          resolve(res);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  deleteItem({ commit }, item) {
    return new Promise((resolve, reject) => {
      deleteTodo(item)
        .then(res => {
          if (res.success) {
            commit("DELETE_TODO", item);
          }
          resolve(res);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  queryItem({ commit }) {
    return new Promise((resolve, reject) => {
      queryTodoList()
        .then(res => {
          if (res.success) {
            commit("QUERY_TODOLIST", res.data);
          }
          resolve(res);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  updateItem({ commit }, item) {
    return new Promise((resolve, reject) => {
      updateTodo(item)
        .then(res => {
          if (res.success) {
            commit("UPDATE_TODO", item);
          }
          resolve(res);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
