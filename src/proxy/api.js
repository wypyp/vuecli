/*
 * @Author: WangYP
 * @Date: 2021-09-22 15:15:18
 * @LastEditors: ZhouJG
 * @LastEditTime: 2022-05-05 14:22:26
 * @Description: 描述信息
 * @FilePath: /vuecli/src/proxy/api.js
 */
// 配置接口地址 dev为测试环境 prod为生产
module.exports = {
  dev: {
    '/api': 'http://192.168.43.86:10011/'
  },
  prod: {
    '/api': 'https://baidu.com',
  },
};