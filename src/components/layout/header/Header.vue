<template>
  <div id="cn_header" ref="cn_header" class="header" :class="headerClasses">
    <div
      class="d-flex align-items-center justify-content-between pl-0 pr-0"
      :class="{ 'container-fluid': widthFluid, container: !widthFluid }"
    >
      <div class="d-flex align-items-stretch mr-3 w-100">
        <div class="header-logo flex-grow-1">
          <router-link to="/">
            <img alt="Logo" :src="layoutConfig('self.logo.sticky')" class="logo-default max-h-72px" />
            <img alt="Logo" :src="layoutConfig('self.logo.sticky')" class="logo-sticky max-h-72px" />
          </router-link>
        </div>
        <!-- begin:: Header Menu -->
        <div class="header-menu-wrapper header-menu-wrapper-left" ref="cn_header_menu_wrapper">
          <div
            v-if="headerMenuEnabled"
            id="cn_header_menu"
            ref="cn_header_menu"
            class="header-menu header-menu-mobile"
            :class="headerMenuClasses"
          >
            <!-- example static menu here -->
            <HeaderMenu></HeaderMenu>
          </div>
        </div>
        <!-- end:: Header Menu -->
      </div>
      <!-- <Topbar> </Topbar> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import LayoutHeader from "@/assets/js/layout/base/header.js";
import LayoutHeaderMenu from "@/assets/js/layout/base/header-menu.js";
import HeaderMenu from "@/components/layout/header/Menu.vue";
// import Topbar from "@/components/layout/header/Topbar.vue";

export default {
  name: "AppHeader",
  components: {
    HeaderMenu,
    // Topbar,
  },
  computed: {
    ...mapGetters(["layoutConfig", "getClasses"]),

    /**
     * Get extra classes for header based on the options
     * @returns {null|*}
     */
    headerClasses() {
      const classes = this.getClasses("header");
      if (typeof classes !== "undefined") {
        return classes.join(" ");
      }
      return null;
    },

    /**
     * Check if header container is fluid
     */
    widthFluid() {
      return this.layoutConfig("header.self.width") === "fluid";
    },

    /**
     * Check if the header menu is enabled
     * @returns {boolean}
     */
    headerMenuEnabled() {
      return !!this.layoutConfig("header.menu.self.display");
    },

    /**
     * Get extra classes for header menu based on the options
     * @returns {null|*}
     */
    headerMenuClasses() {
      const classes = this.getClasses("header_menu");
      if (typeof classes !== "undefined") {
        return classes.join(" ");
      }
      return null;
    },
  },
  mounted() {
    // Init Desktop & Mobile Headers
    LayoutHeader.init("cn_header", "cn_header_mobile");

    // Init Header Menu
    LayoutHeaderMenu.init(this.$refs["cn_header_menu"], this.$refs["cn_header_menu_wrapper"]);

    const headerRef = this.$refs["cn_header"];

    headerRef.querySelectorAll("a[class='menu-link']").forEach((item) => {
      item.addEventListener("click", () => {
        LayoutHeaderMenu.getOffcanvas().hide();
      });
    });
  },
};
</script>

<style lang="scss" scoped></style>
