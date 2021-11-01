## H5与android & IOS交互的基础模板
#### 1、按需引入Vant
```
import './lib/vant'
```
#### 2、引入postcss-px-to-viewport并解决与Vant冲突
```angular2html
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/style/base.scss";`
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
            landscapeWidth: 568
          })
        ]
      }
    }
  }
```
