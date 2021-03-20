## http 请求的几种方式

// 方法一 直接调用 axios
const axios = require("axios");
axios.get("assetx/getAssetNos").then(res => {
    console.log("axios", res);
});

// 方法二 调用封装好的 request
import request from "../../utils/axios/request";
request({
    url: "/getAssetNos",
    method: "get",
    prefix: "assetx"
}).then(res => {
    console.log("request", res);
});

// 方法三 注册全局$services，调用$services
this.$services.default
.assets({ method: "get", prefix: "assetx" })
.then(res => {
    console.log("$services", res);
});

// 方法四 注册全局$api，调用$api
this.$api.getAssetNos().then(res => {
    this.userInfo = res.data;
});

// 方法五 调用封装好的api.js
import { getAssetNos } from "../../api/api";
getAssetNos().then(res => {
    console.log("getAssetNos", res);
});
