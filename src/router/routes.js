import Main from '@/views/Main';

export default [
  {
    path: '/',
    name: 'main',
    component: Main,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import(/* webpackChunkName: "index" */ '@/views/index'),
        meta: {
          keepAlive: false,
          title: 'index'
        }
      },
    ],
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/index1',
    name: 'index1',
    component: () => import(/* webpackChunkName: "index1" */ '@/views/index1'),
    meta: {
      keepAlive: false,
      title: 'index1'
    }
  }
]
