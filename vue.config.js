module.exports = {
  css: {
    loaderOptions: {
      css: {
        sourceMap: true
      },
      scss: {
        prependData: `
          @import "@/styles/reset.scss";
          @import "@/styles/colors.scss";
          @import "@/styles/variables.scss";
        `
      }
    }
  }
}
