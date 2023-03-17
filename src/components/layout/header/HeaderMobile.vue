<template>
  <div id="cn_header_mobile" class="header-mobile align-items-center" v-bind:class="headerClasses">
    <!--begin::Logo-->
    <a href="/">
      <img alt="Logo" :src="headerLogo" class="logo-default max-h-30px" />
    </a>
    <!--end::Logo-->
    <!--begin::Toolbar-->
    <div class="d-flex align-items-center">
      <!--begin::Aside Mobile Toggle-->
      <button v-if="asideEnabled" class="btn p-0 burger-icon burger-icon-left" id="kt_aside_mobile_toggle">
        <span></span>
      </button>
      <!--end::Aside Mobile Toggle-->
      <!--begin::Header Menu Mobile Toggle-->
      <button class="btn p-0 burger-icon ml-4" id="cn_header_mobile_toggle" ref="cn_header_mobile_toggle">
        <span></span>
      </button>
      <!--end::Header Menu Mobile Toggle-->
      <!--begin::Topbar Mobile Toggle-->
      <button
        class="btn btn-icon btn-hover-transparent-white p-0 ml-3"
        id="cn_header_mobile_topbar_toggle"
        ref="cn_header_mobile_topbar_toggle"
      >
        <span class="svg-icon svg-icon-xl">
          <!--begin::Svg Icon | path:svg/icons/General/User.svg-->
          <!-- <button
            class="navbar-toggler second-button collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent23"
            aria-controls="navbarSupportedContent23"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div class="animated-icon2"><span></span><span></span><span></span><span></span></div>
          </button> -->
          <!--end::Svg Icon-->
        </span>
      </button>
      <!--end::Topbar Mobile Toggle-->
    </div>
    <!--end::Toolbar-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import LayoutHeaderTopbar from "@/assets/js/layout/base/header-topbar.js";

export default {
  name: "HeaderMobile",
  components: {},
  mounted() {
    // Init Header Topbar For Mobile Mode
    LayoutHeaderTopbar.init(this.$refs["cn_header_mobile_topbar_toggle"]);
  },
  computed: {
    ...mapGetters(["layoutConfig", "getClasses"]),

    /**
     * Get header logo
     * @returns {string}
     */
    headerLogo() {
      return process.env.BASE_URL + this.layoutConfig("self.logo.sticky");
    },

    /**
     * Get classes for mobile header
     * @returns {null|*}
     */
    headerClasses() {
      const classes = this.getClasses("header_mobile");
      if (typeof classes !== "undefined") {
        return classes.join(" ");
      }
      return null;
    },

    /**
     * Check if the left aside menu is enabled
     * @returns {boolean}
     */
    asideEnabled() {
      return !!this.layoutConfig("aside.self.display");
    },
  },
};
</script>
