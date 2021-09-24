import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from '@/router';
import { Axios } from '@/utils/request';
import { filters } from '@/utils/filter';
import './assets/icons';

Vue.config.productionTip = false

Vue.use(Axios);
// Vue.use(Ui);
Vue.use(filters);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
