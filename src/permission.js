import router from "./router";
import store from "./store";
import NProgress from "nprogress"; // progress bar

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  await store.dispatch("permission/generateRoutes", ["admin"]);
  next();
});

router.afterEach(() => {
  NProgress.done();
});
