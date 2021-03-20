import Cookies from "js-cookie";

const state = {
  sidebar: {
    opened: Cookies.get("sidebarStatus")
      ? !!+Cookies.get("sidebarStatus")
      : true
  },
  device: "desktop"
};

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened;
    if (state.sidebar.opened) {
      Cookies.set("sidebarStatus", 1); //sidebar打开
    } else {
      Cookies.set("sidebarStatus", 0); //sidebar收起
    }
  },
  CLOSE_SIDEBAR: state => {
    Cookies.set("sidebarStatus", 0);
    state.sidebar.opened = false;
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device;
  }
};

const actions = {
  toggleSideBar({ commit }) {
    commit("TOGGLE_SIDEBAR");
  },
  closeSideBar({ commit }) {
    commit("CLOSE_SIDEBAR");
  },
  toggleDevice({ commit }, device) {
    commit("TOGGLE_DEVICE", device);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
