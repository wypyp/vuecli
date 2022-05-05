/*
 * @Author: WangYP
 * @Date: 2021-09-22 15:23:08
 * @LastEditors: ZhouJG
 * @LastEditTime: 2022-04-28 16:26:10
 * @Description: 描述信息
 * @FilePath: /vuecli/src/router/routes.js
 */
import Main from '@/views/Main';

const routes = [
  {
    path: '/zjy',
    name: '钻井液',
    component: Main,
    meta: {
      title: '钻井液',
      icon: 'el-icon-menu'
    },
    redirect: '/zjy/gk',
    children: [
      {
        path: '/zjy/gk',
        name: '钻井液概况',
        component: () => import(/* webpackChunkName: "zjy" */ '@/views/index'),
        meta: {
          title: '钻井液概况',
          icon: 'el-icon-menu'
        },
      },
      {
        path: '/zjy/xn',
        name: '性能',
        redirect: '/zjy/jyixin',
        component: () => import(/* webpackChunkName: "zjy" */ '@/views/index1'),
        meta: {
          title: '性能',
          icon: 'el-icon-location'
        },
        children: [
          {
            path: '/zjy/jyixin',
            name: '钻井液简易性能',
            component: () => import(/* webpackChunkName: "zjy" */ '@/views/index'),
            meta: {
              title: '钻井液简易性能'
            }
          },
        ]
      }
    ]
  },
  {
    path: '/sgfz',
    name: '事故复杂',
    component: Main,
    meta: {
      title: '事故复杂',
      icon: 'el-icon-location'
    },
    redirect: '/sgfz/detail',
    children: [
      {
        path: '/sgfz/detail',
        name: '事故复杂详情',
        component: () => import(/* webpackChunkName: "sgfz" */ '@/views/sgfz/detail'),
        meta: {
          title: '事故复杂详情',
          icon: 'el-icon-location'
        }
      },
      {
        path: '/sgfz/statistics',
        name: '事故复杂统计',
        component: () => import(/* webpackChunkName: "sgfz" */ '@/views/sgfz/statistics'),
        meta: {
          title: '事故复杂统计',
          icon: 'el-icon-location'
        }
      }
    ]
  }
]
const getMenu = () => {
  const topMeunArr = [];
  const leftMenuInfo = {};
  routes.forEach(item => {
    // if (pathArr.includes(item.path)) {
      const { path, name, redirect, children, meta} = item;
      topMeunArr.push({
        path,
        name,
        redirect,
        meta: meta || {}
      });
      leftMenuInfo[path] = children;
    // }
  })
  return { leftMenuInfo, topMeunArr }
}
export { routes, getMenu }
