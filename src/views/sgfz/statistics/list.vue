<!--
 * @Author: WangYP
 * @Date: 2022-05-05 00:45:04
 * @LastEditors: ZhouJG
 * @LastEditTime: 2022-05-05 17:27:44
 * @Description: 描述信息
 * @FilePath: /vuecli/src/views/sgfz/statistics/list.vue
-->
<!--
 * @Author: WangYP
 * @Date: 2022-04-22 00:00:06
 * @LastEditors: ZhouJG
 * @LastEditTime: 2022-04-28 16:48:04
 * @Description: 描述信息
 * @FilePath: /vuecli/src/views/sgfz/statistics/list.vue
-->
<template>
  <div class="detail-list">
    <el-table
      :data="tableList"
      :cell-style="changeCellStyles"
      style="width: 100%"
      >>
      <template v-for="(col, index) in cols">
        <el-table-column
          :fixed="col.fixed"
          width="150px"
          :key="index"
          v-if="col.isShow"
          :prop="col.props"
          :label="col.label"
        >
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
  export default {
    props:['tableList','cols','searchData'],
    data() {
      return {
      }
    },
    methods:{
      changeCellStyles(row) {
        // console.log(this.searchData.returnField)
        // if( this.searchData.returnField.includes(row.column.property)){
        //   return "color:blue"
        // }
        if(row.column.label==='井号') {
          return "color:pink"
        }
      }
    }
  }
</script>
<style>
.detail-list {
  padding: 20px;
}
</style>