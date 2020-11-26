module.exports = {
  devServer: {
    overlay: false,
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/css/foundation/common.scss";`,
      },
    },
  },
};
