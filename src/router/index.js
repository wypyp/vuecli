import Vue from 'vue';
import routes from './routes';
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
  next();
});

router.afterEach(() => {});

export default router;
