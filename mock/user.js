const Mock = require("mockjs");

const data = Mock.mock({
  "list|1": [
    {
      id: "@id",
      name: "Nancy",
      age: 12
    }
  ]
});

module.exports = [
  {
    url: "/user",
    type: "get",
    response: config => {
      const list = data.list;
      return {
        success: true,
        code: 2000,
        data: list
      };
    }
  },
  {
    url: "/getAssetNos",
    type: "get",
    response: config => {
      const list = data.list;
      return {
        success: true,
        code: 2000,
        data: list
      };
    }
  }
];
