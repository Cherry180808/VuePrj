import request from "../utils/axios/request";

export function getAssetNos() {
  return request({
    prefix: "assetx",
    url: "/getAssetNos",
    method: "get"
  });
}

export function createTodo(data) {
  return request({
    url: "/todo/create",
    method: "post",
    data
  });
}

export function queryTodoList() {
  return request({
    url: "/todo/queryList",
    method: "get"
  });
}

export function deleteTodo(data) {
  return request({
    url: "/todo/delete",
    method: "post",
    data
  });
}

export function updateTodo(data) {
  return request({
    url: "/todo/update",
    method: "post",
    data
  });
}
