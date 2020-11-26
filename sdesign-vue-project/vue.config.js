module.exports = {
  devServer: {
    overlay: false,
  },
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/assets/css/foundation/common.scss"',
      },
    },
  },
};
