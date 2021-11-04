module.exports = {
  devServer: {
    overlay: false,
    disableHostCheck: true
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/style/foundation/common.scss";`,
      },
    },
  },
};
