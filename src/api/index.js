/*
 * @Author: WangYP
 * @Date: 2022-05-04 22:00:14
 * @LastEditors: ZhouJG
 * @LastEditTime: 2022-05-04 22:15:09
 * @Description: 描述信息
 * @FilePath: /vuecli/src/api/index.js
 */
import axios  from '@/utils/request.js'
import { base } from './apiList'
export function searchByVO (data) {
  return axios.post(base.searchByVO,data)
}
export function searchWellCount (data) {
  return axios.post(base.searchWellCount,data)
}
