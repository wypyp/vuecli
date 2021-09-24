const path = require('path');
const cumputedProxy = require('./src/proxy/index').cumputedProxy;
const webpack = require('webpack');
const envState = process.env.ENV;
const proxyState = process.env.PROXY;
function resolve(dir) {
  return path.join(__dirname, dir);
}
// function computHashName() {
//   return process.env.NODE_ENV === 'production' ? 'contenthash' : 'hash';
// }
const config = {
  publicPath: '',
  // outputDir: './static',
  css: {
    // extract: {
    //   chunkFilename: `css/[name].css?[${computHashName()}]`
    // },
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/index.scss";`,
      }
    },
    extract: false
  },
  productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
  chainWebpack: config => {
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/icons'))
      .end();
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end();
    config
			// https://webpack.js.org/configuration/devtool/#development
			.when(process.env.NODE_ENV === 'development',
				config => config.devtool('source-map')
			);
    // config.output
    //   .filename(`js/[name].js?[${computHashName()}]`)
    //   .chunkFilename(`js/[name].js?[${computHashName()}]`)
    //   .end();
  },
  configureWebpack: {
    plugins: [    
      new webpack.DefinePlugin({
        'process.ENV': JSON.stringify(envState),
        'process.PROXY': JSON.stringify(proxyState)
      })
    ]
  },
  devServer: {
    port: 8999,
    disableHostCheck: true,
    compress: true,
    progress: true
  }
};
if (proxyState === 'true') {
  config.devServer.proxy = cumputedProxy()
}
module.exports = config;