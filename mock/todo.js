const Mock = require("mockjs");

const List = [];
const count = 5;

for (let i = 0; i < count; i++) {
  List.push(
    Mock.mock({
      id: "@increment",
      title: "@title(5, 10)",
      content: "@cparagraph",
      "status|1": ["todo", "done"]
    })
  );
}

module.exports = [
  {
    url: "/todo/create",
    type: "post",
    response: config => {
      const item = config.body;
      item["id"] = Mock.mock("@increment");
      List.push(item);
      return {
        success: true,
        code: 2000,
        data: List
      };
    }
  },
  {
    url: "/todo/queryList",
    type: "get",
    response: config => {
      const list = List;
      return {
        success: true,
        code: 2000,
        data: list
      };
    }
  },
  {
    url: "/todo/delete",
    type: "post",
    response: config => {
      const item = config.body;
      List.removeObjArr(item, "id");
      return {
        success: true,
        code: 2000,
        data: List
      };
    }
  },
  {
    url: "/todo/update",
    type: "post",
    response: config => {
      const item = config.body;
      let index = List.findIndex(e => e["id"] === item["id"]);
      if (index !== -1) {
        List.updateObjArr(index, item);
      }
      return {
        success: true,
        code: 2000,
        data: List
      };
    }
  }
];
