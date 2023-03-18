import "@babel/polyfill";
import "mutationobserver-shim";
import "./plugins/bootstrap-vue";
import "./registerServiceWorker";
import "./plugins/clicknext";
import "./plugins/swiper";
import "./plugins/vue-lazyload";

import App from "./App.vue";
import PerfectScrollbar from "perfect-scrollbar";
import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import router from "./router";
import store from "./store";

window.PerfectScrollbar = PerfectScrollbar;

Vue.config.productionTip = false;

Vue.use(VueAwesomeSwiper);

window.addEventListener("scroll", (event) => {
  const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  if (currentScroll > 0) {
    const el = document.getElementById("backto-top");
    if (el) {
      el.classList.add("show");
    }
  } else if (currentScroll === 0) {
    const el = document.getElementById("backto-top");
    if (el) {
      el.classList.remove("show");
    }
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
