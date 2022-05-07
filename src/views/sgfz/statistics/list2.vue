<!--
 * @Author: WangYP
 * @Date: 2022-04-22 00:00:06
 * @LastEditors: ZhouJG
 * @LastEditTime: 2022-05-07 14:58:53
 * @Description: 描述信息
 * @FilePath: /vuecli/src/views/sgfz/statistics/list2.vue
-->
<template>
  <div class="detail-list">
    <el-table
      header-align="center"
      :data="tableList"
      style="width: 100%"
      border
      :cell-style="changeCellStyles"
      :header-cell-style="changeHeaderStyles"
      :span-method="arraySpanMethod"
    >
      <template v-for="(col, index) in second">
        <el-table-column
          header-align="center"
          :width="col.width"
          :key="index"
          :fixed="col.fixed"
          v-if="!col.child && col.isShow"
          :prop="col.props"
          :label="col.label"
        ></el-table-column>
        <el-table-column
          v-if="col.child"
          :key="index"
          :label="col.label"
          header-align="center"
        >
          <template v-for="(item, child_index) in col.child">
            <el-table-column
              header-align="center"
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
  props: ["tableList", "second", "searchData"],
  data() {
    return {};
  },
  methods: {
    arraySpanMethod({ row, column }) {
      if (column.label == "井号") {
        const { wellName } = row;
        let rowspan = 0;
        this.tableList.forEach((item) => {
          if (item.rowspan !== undefined) {
            return;
          }
          if (item.wellName == wellName) {
            rowspan += 1;
            if (rowspan > 1) {
              item.rowspan = 0;
              this.tableList.find((items) => {
                if (items.rowspan > 0 && items.wellName === wellName) {
                  items.rowspan = rowspan;
                  return true;
                }
              });
            } else {
              item.rowspan = rowspan;
            }
          }
        });
        return {
          rowspan: row.rowspan,
          colspan: 1,
        };
      }
      if (column.property === "total") {
        row.total = "(" + row.rowspan + "条)";
        return {
          rowspan: row.rowspan,
          colspan: 1,
        };
      }
    },
    changeHeaderStyles(row) {
      var styleObj = { "background-color": "rgb(245,247,250", color: "grey" };
      if (this.searchData.returnField.includes(row.column.property)) {
        styleObj.color = "blue";
      }
      var textString = ["井号", "构造带", "圈闭/构造"];
      if (textString.includes(row.column.label)) {
        styleObj.color = "rgb(254,38,254)";
      }
      if (row.column.property === "wellName") {
        styleObj["border-right"] = "none";
        styleObj["width"] = "80px";
      }
      return styleObj;
    },
    changeCellStyles(row) {
      if (this.searchData.returnField.includes(row.column.property)) {
        return "color:blue";
      }
      if (row.column.property === "wellName") {
        return {
          "border-right": "none",
          color: "rgb(254,38,254)",
        };
      }
      var textString = ["total"];
      if (textString.includes(row.column.property)) {
        return "width:80px";
      }
    },
  },
  created() {},
};
</script>
<style>
.detail-list {
  padding: 20px;
}
</style>