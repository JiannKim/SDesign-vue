module.exports = {
  devServer: {
    overlay: false,
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/css/foundation/common.scss";`,
      },
    },
  },
};
