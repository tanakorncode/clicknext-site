import Vue from "vue";
import Vuex from "vuex";
import config from "./config.module";
import htmlClass from "./htmlclass.module";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    config,
    htmlClass,
  },
});
