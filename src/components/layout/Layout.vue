<template>
  <div class="d-flex flex-column flex-root">
    <HeaderMobile />

    <Loader v-if="loaderEnabled" :logo="loaderLogo"></Loader>

    <div class="d-flex flex-row flex-column-fluid page">
      <div id="cn_wrapper" class="d-flex flex-column flex-row-fluid wrapper">
        <AppHeader />

        <div id="kt_content" class="content d-flex flex-column flex-column-fluid">
          <div class="d-flex flex-column-fluid">
            <div
              :class="{
                'container-fluid': contentFluid,
                container: !contentFluid,
              }"
              class="pl-0 pr-0"
            >
              <div class="d-lg-flex flex-row-fluid">
                <div class="content-wrapper flex-row-fluid">
                  <transition name="fade-in-up">
                    <router-view />
                  </transition>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div @click="onScrollTop" id="backto-top" class="cn-backto-top cn-backto-top-active m-auto">
      <i class="fas fa-chevron-up text-white"></i>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { ADD_BODY_CLASSNAME, REMOVE_BODY_CLASSNAME } from "@/store/htmlclass.module.js";
import HtmlClass from "@/core/services/htmlclass.service";
import Loader from "@/components/layout/Loader.vue";
import AppHeader from "@/components/layout/header/Header.vue";
import HeaderMobile from "@/components/layout/header/HeaderMobile.vue";
import * as AOS from "aos";

export default {
  name: "AppLayout",
  components: {
    Loader,
    AppHeader,
    HeaderMobile,
  },
  beforeMount() {
    // show page loading
    this.$store.dispatch(ADD_BODY_CLASSNAME, "page-loading");

    // initialize html element classes
    HtmlClass.init(this.layoutConfig());
  },
  mounted() {
    this.$nextTick(function () {
      // Simulate the delay page loading
      setTimeout(() => {
        // Remove page loader after some time
        this.$store.dispatch(REMOVE_BODY_CLASSNAME, "page-loading");
      }, 300);

      AOS.init();
    });
  },
  computed: {
    ...mapGetters(["layoutConfig"]),

    /**
     * Check if the page loader is enabled
     * @returns {boolean}
     */
    loaderEnabled() {
      return !/false/.test(this.layoutConfig("loader.type"));
    },

    /**
     * Check if container width is fluid
     * @returns {boolean}
     */
    contentFluid() {
      return this.layoutConfig("content.width") === "fluid";
    },

    /**
     * Page loader logo image using require() function
     * @returns {string}
     */
    loaderLogo() {
      return process.env.BASE_URL + this.layoutConfig("loader.logo");
    },

    /**
     * Check if the left aside menu is enabled
     * @returns {boolean}
     */
    asideEnabled() {
      return !!this.layoutConfig("aside.self.display");
    },

    /**
     * Set the right toolbar display
     * @returns {boolean}
     */
    toolbarDisplay() {
      // return !!this.layoutConfig("toolbar.display");
      return true;
    },

    /**
     * Set the subheader display
     * @returns {boolean}
     */
    subheaderDisplay() {
      return !!this.layoutConfig("subheader.display");
    },
  },
  methods: {
    onScrollTop() {
      window.ClicknextUtil.scrollTop(0, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.cn-backto-top.cn-backto-top-active {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
.cn-backto-top i {
  margin: 14px;
}

.cn-backto-top {
  position: fixed;
  right: 30px;
  bottom: 30px;
  height: 46px;
  width: 46px;
  cursor: pointer;
  display: none;
  border-radius: 50px;
  box-shadow: inset 0 0 0 2px #f8e3c3;
  z-index: 10000;
  opacity: 0;
  visibility: hidden;
  transform: translateY(15px);
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}
.cn-backto-top.show {
  display: block;
}
</style>
