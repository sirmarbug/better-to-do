module.exports = {
  css: {
    loaderOptions: {
      css: {
        sourceMap: true
      },
      scss: {
        prependData: `
          @import "@/styles/colors.scss";
          @import "@/styles/variables.scss";
        `
      }
    }
  }
}
