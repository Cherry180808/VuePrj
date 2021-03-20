import { createApp } from "vue";
import Vuex from "vuex";
// import VueRouter from "vue-router";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./permission";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";

import "@/style/index.scss"; // global css
import "./icons"; // icon

import svgIcon from "@/components/shared/iconSvg/iconSvg";

require("./utils/common_fn");

//development环境下采用mock方式
if (process.env.NODE_ENV === "development") {
  const { mockXHR } = require("../mock");
  mockXHR();
}

const app = createApp(App);
app.use(Vuex);
// app.use(VueRouter);
app.use(router);
app.use(store);
app.use(ElementPlus, { size: "small", zIndex: 3000 });
app.mount("#app");
app.component("svg-icon", svgIcon);

app.config.globalProperties.$services = require("./utils/axios");
app.config.globalProperties.$api = require("./api/api"); //挂载api到vue原型上后，在vuex action中无法调用，因为action中没有this对象
