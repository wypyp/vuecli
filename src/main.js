/*
 * @Author: WangYP
 * @Date: 2021-09-22 15:13:24
 * @LastEditors: ZhouJG
 * @LastEditTime: 2022-05-07 14:37:37
 * @Description: 描述信息
 * @FilePath: /vuecli/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from '@/router';
import { Axios } from '@/utils/request';
import { filters } from '@/utils/filter';
import './assets/icons';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/less/index.less'
import './themes/index.css'
import { base } from '@/api/apiList'
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Axios);
Vue.use(filters);
Vue.prototype.$apiList = { base }
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
