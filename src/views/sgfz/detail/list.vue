<!--
 * @Author: WangYP
 * @Date: 2022-04-22 00:00:06
 * @LastEditors: ZhouJG
 * @LastEditTime: 2022-05-07 14:58:50
 * @Description: 描述信息
 * @FilePath: /vuecli/src/views/sgfz/detail/list.vue
-->
<template>
  <div class="detail-list">
    <el-table :data="tableList" style="width: 100%"
      >>
      <template v-for="(col, index) in cols">
        <el-table-column
          header-align="center"
          fixed="left"
          :width="col.width"
          v-if="!col.child"
          :key="index"
          :prop="col.props"
          :label="col.label"
        >
        </el-table-column>
        <el-table-column
          v-if="col.child"
          :key="index"
          :label="col.label"
          header-align="center"
        >
          <template v-for="(item, child_index) in col.child">
            <el-table-column
              header-align="center"
              :width="item.width"
              :key="child_index"
              :prop="item.props"
              :label="item.label"
            ></el-table-column>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="value.pageNum"
        :page-sizes="[5, 10, 20, 30]"
        :page-size="value.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="value.total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tableList: {
      type: Array,
      default() {
        return {
          date: [],
        };
      },
    },
    value: {
      type: Object,
      default() {
        return {
          geoDescription: null,
          wellType: null,
          wellPurpose: null,
          completionWellDate: null,
          wellName: null,
          stuckPointHorizon: null,
        };
      },
    },
  },
  data() {
    return {
      cols: [
        { props: "geoDescription", label: "构造带", width: "200px" },
        { props: "structurePos", label: "圈闭/构造", width: "200px" },
        { props: "wellName", label: "井号", width: "100px" },
        {
          label: "卡钻情况",
          child: [
            { props: "accidentNumber", label: "卡钻编号", width: "100px" },
            { props: "accidentDate", label: "发生时间", width: "200px" },
            { props: "removeDate", label: "解除时间", width: "200px" },
            { props: "openTimes", label: "开次", width: "100px" },
            { props: "bitSize", label: "钻头直径mm", width: "150px" },
            { props: "wellDepth", label: "井深m", width: "100px" },
            { props: "stuckPointHorizon", label: "层位", width: "100px" },
            {
              props: "accidentBitHorizon",
              label: "钻头深度层位",
              width: "150px",
            },
            { props: "fluidType", label: "卡钻类型", width: "100px" },
            { props: "accidentBitHorizon", label: "卡钻深度m", width: "100px" },
            { props: "stuckPointHorizon", label: "卡点层位", width: "100px" },

            { props: "address", label: "层位密度最小值g/cm³", width: "100px" },
            { props: "address", label: "层位密度最大值g/cm³", width: "100px" },
            { props: "stuckPointLava", label: "卡点岩性", width: "100px" },

            { props: "occurrenceProcess", label: "发生经过", width: "300px" },
            { props: "processingMethod", label: "解卡方法", width: "300px" },
            { props: "processingCourse", label: "处理概述", width: "300px" },
            { props: "stuckDrillReason", label: "卡钻原因", width: "300px" },
            {
              props: "treatingAgentCost",
              label: "处理卡钻处理剂总费用",
              width: "100px",
            },
            { props: "reworkFootage", label: "返工进尺m", width: "100px" },
            { props: "abandonedFootage", label: "报废进尺m", width: "100px" },
            { props: "lostTime", label: "损失时间h", width: "200px" },
          ],
        },
      ],
    };
  },
  methods: {
    handleSizeChange(val) {
      this.$emit("onSearch", val, "num");
    },
    handleCurrentChange(val) {
      this.$emit("onSearch", val, "page");
    },
  },
};
</script>
<style>
.detail-list {
  padding: 20px;
}
</style>