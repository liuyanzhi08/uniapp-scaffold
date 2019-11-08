// vue.config.js
const WebfontPlugin = require('webfont-webpack-plugin').default;
const path = require('path');

const isDev = process.env.NODE_ENV === 'development';
module.exports = {
  chainWebpack: (config) => {
    // scss common files
    // const scssOneOfsMap = config.module.rule('scss').oneOfs.store;
    // scssOneOfsMap.forEach((item) => {
    //   item
    //     .use('sass-resources-loader')
    //     .loader('sass-resources-loader')
    //     .options({
    //       resources: [`./src/styles/${isDev ? 'dev' : 'prd'}.scss`],
    //     })
    //     .end();
    // });
    // stylus common files
    const stylusOneOfsMap = config.module.rule('stylus').oneOfs.store;
    stylusOneOfsMap.forEach((item) => {
      item
        .use('style-resources-loader')
        .loader('style-resources-loader')
        .options({
          patterns: [`./src/styles/${isDev ? 'dev' : 'prd'}.styl`],
        })
        .end();
    });
  },
  configureWebpack: {
    plugins: [
      new WebfontPlugin({
        fontName: 'm-font',
        templateClassName: 'm-icon',
        templateFontPath: '../../styles/fonts/',
        files: path.resolve(__dirname, 'src/styles/icons/**/*.svg'),
        dest: path.resolve(__dirname, 'src/styles/fonts'),
        template: path.resolve(__dirname, 'src/styles/fonts/icon.styl'),
        destTemplate: path.resolve(__dirname, 'src/styles/components'),
      }),
    ],
  },
};
