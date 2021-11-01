// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/style/base.scss";',
      },
      postcss: {
        plugins: [
          require('autoprefixer')(),
          require('postcss-px-to-viewport')({
            unitToConvert: 'px',
            viewportWidth: 7500,
            unitPrecision: 5,
            propList: ['*', '!max-width'],
            viewportUnit: 'rem',
            fontViewportUnit: 'rem',
            selectorBlackList: ['html'],
            minPixelValue: 1,
            mediaQuery: false,
            replace: true,
            exclude: [/node_modules/],
            landscape: false,
            landscapeUnit: 'vw',
            landscapeWidth: 568,
          }),
        ],
      },
    },
  },
};
