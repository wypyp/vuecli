<!--
 * @Author: WangYP
 * @Date: 2022-04-22 00:00:06
 * @LastEditors: ZhouJG
 * @LastEditTime: 2022-05-07 14:58:52
 * @Description: 描述信息
 * @FilePath: /vuecli/src/views/sgfz/statistics/list.vue
-->
<template>
  <div class="detail-list">
    <el-table
      :header-cell-style="changeHeaderStyles"
      border
      :data="tableList"
      style="width: 100%"
      :cell-style="changeCellStyles"
      :span-method="arraySpanMethod"
    >
      <template v-for="(col, index) in first">
        <el-table-column
          header-align="center"
          :key="index"
          :fixed="col.fixed"
          v-if="col.isShow"
          :prop="col.props"
          :label="col.label"
          :width="col.width"
          text-align="center"
        ></el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  props: ["tableList", "first", "searchData"],
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
};
</script>
<style>
.detail-list {
  padding: 20px;
}
</style>