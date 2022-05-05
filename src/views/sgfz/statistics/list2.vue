<!--
 * @Author: WangYP
 * @Date: 2022-04-22 00:00:06
 * @LastEditors: ZhouJG
 * @LastEditTime: 2022-05-05 17:22:28
 * @Description: 描述信息
 * @FilePath: /vuecli/src/views/sgfz/statistics/list2.vue
-->
<template>
  <div class="detail-list">
    <el-table :data="tableList" style="width: 100%"
      >>
      <template v-for="(col, index) in cols2">
        <el-table-column
          fixed="left"
          width="150px"
          v-if="!col.child"
          :key="index"
          v-show="col.isShow"
          :prop="col.props"
          :label="col.label"
        ></el-table-column>
        <el-table-column v-if="col.child" :key="index" :label="col.label">
          <template v-for="(item, child_index) in col.child">
            <el-table-column
              width="150"
              :key="child_index"
              :prop="item.props"
              :label="item.label"
            ></el-table-column>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  props: ["tableList",'cols2'],
  data() {
    return {

    };
  },
};
</script>
<style>
.detail-list {
  padding: 20px;
}
</style>