import { createStore } from "vuex";

const moudleFiles = require.context("./module", true, /\.js$/);

const modules = moudleFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
  const value = moudleFiles(modulePath);
  modules[moduleName] = value.default;
  return modules;
}, {});

const store = createStore({ modules });

export default store;
