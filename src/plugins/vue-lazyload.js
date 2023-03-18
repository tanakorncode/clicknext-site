import Vue from "vue";
import VueLazyload from "vue-lazyload";

Vue.use(VueLazyload);

// or with options
const loadimage = require("@/assets/img/clicknext_logo2x.webp");
const errorimage = require("@/assets/img/404.png");

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: errorimage,
  loading: loadimage,
  attempt: 1,
  // listenEvents: ["scroll"],
});
