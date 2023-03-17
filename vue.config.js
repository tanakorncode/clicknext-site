const bootstrapSassAbstractsImports = require("vue-cli-plugin-bootstrap-vue/sassAbstractsImports.js");
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: bootstrapSassAbstractsImports.join("\n"),
      },
      scss: {
        additionalData: [...bootstrapSassAbstractsImports, ""].join(";\n"),
      },
    },
  },
  chainWebpack: (config) => {
    config.plugin("eslint").tap((args) => {
      args[0].fix = true;
      return args;
    });
  },
  devServer: {
    port: 8081,
  },
});
