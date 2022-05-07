/*
 * @Author: WangYP
 * @Date: 2021-09-22 15:01:14
 * @LastEditors: ZhouJG
 * @LastEditTime: 2022-05-07 10:54:29
 * @Description: 描述信息
 * @FilePath: /vuecli/src/router/index.js
 */
import Vue from 'vue';
import { routes } from './routes';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior () {
    return { x: 0, y: 0 };
  },
  routes
});

router.beforeResolve((to, from, next) => {
  next()
});

router.beforeEach((to, from, next) => {
  const { query } = to;
  if (query && query.Authorization ) {
    localStorage.setItem('Authorization', query.Authorization)
  }
  next();
});

router.afterEach(() => {});

export default router;
