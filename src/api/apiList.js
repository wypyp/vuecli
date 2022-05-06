/*
 * @Author: WangYP
 * @Date: 2022-05-04 22:06:40
 * @LastEditors: ZhouJG
 * @LastEditTime: 2022-05-05 16:43:10
 * @Description: 描述信息
 * @FilePath: /vuecli/src/api/apiList.js
 */
export const base= {
  // 事故复杂的搜索框内容
  searchByField:'/api/elasticsearchController/searchByField',
  // 事故复杂详情
  searchByVO:'/api/elasticsearchController/searchByVO',
  // 事故统计 井
  searchWellCount: '/api/accidentController/searchWellCount',
   // 事故统计 区块
   searchRegionCount: '/api/accidentController/searchRegionCount',
   // 事故统计 区块 中区块
   getRegionInfo: '/api/accidentController/getRegionInfo'
}
