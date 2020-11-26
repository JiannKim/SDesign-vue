module.exports = {
  devServer: {
    overlay: false,
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/style/foundation/common.scss";`,
      },
    },
  },
};
