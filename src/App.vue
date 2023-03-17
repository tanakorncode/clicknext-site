<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Poppins:200,200i,300,400,500,600,700,800,900|Roboto:300,400,500,600,700|Sarabun:300,400,500,600,700|Sriracha:300,400,500,600,700|Prompt:300,400,500,600,700);
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.1/css/all.min.css);
@import "assets/css/grid-xs.css";
@import "assets/css/animated-icon.css";
@import "assets/plugins/keenthemes-icons/font/ki.css";
@import "~@/assets/scss/vendors/bootstrap-vue/index";
@import "assets/sass/style.vue";
@import "aos/dist/aos.css";
@import "@/assets/css/style.css";
#app {
  font-family: "Poppins", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.flex-root {
  -webkit-box-flex: 1;
  flex: 1;
  -ms-flex: 1 0 0px;
}

.flex-column-auto {
  -webkit-box-flex: 0;
  -ms-flex: none;
  flex: none;
}

.flex-column-fluid {
  -webkit-box-flex: 1;
  -ms-flex: 1 0 auto;
  flex: 1 0 auto;
}

.flex-row-auto {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
}

.flex-row-fluid {
  -webkit-box-flex: 1;
  flex: 1 auto;
  -ms-flex: 1 0 0px;
  min-width: 0;
}
.min-w-40px {
  min-width: 40px !important;
}
.min-w-72px {
  min-width: 72px !important;
}

.min-h-40px {
  min-height: 40px !important;
}
.min-h-196px {
  min-height: 196px !important;
}

.max-h-40px {
  max-height: 40px !important;
}
.max-h-72px {
  max-height: 72px !important;
}
.max-w-40px {
  max-width: 40px !important;
}
</style>
