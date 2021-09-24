# cli

集成axios拦截器 src/utils/request.js  全局 this.axios 调用
集成路由拦截器 src/router/index.js
集成vuex src/store/index.js
集成svg加载  <svg-icon name="verify-success" class-name="verify-success-icon"></svg-icon> name为 assets/icons/svg/文件名称（不含文件后缀）
集成本地跨域代理 src/proxy/index.js
集成vue 过滤器 src/utils/filter.js

npm 命令

npm run serve 调用生产环境的接口配置启动
npm run test 调用测试环境的接口和配置启动
npm run build 打包（打包生产包）
npm run build-test 打包 （打包测试包）
