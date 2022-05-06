<!--
 * @Author: WangYP
 * @Date: 2022-04-22 00:00:06
 * @LastEditors: ZhouJG
 * @LastEditTime: 2022-05-06 14:40:13
 * @Description: 描述信息
 * @FilePath: /vuecli/src/views/sgfz/detail/list.vue
-->
<template>
  <div class="detail-list">
    <el-table :data="tableList" style="width: 100%"
      >>
      <template v-for="(col, index) in cols">
        <el-table-column
          fixed="left"
          width="150px"
          v-if="!col.child"
          :key="index"
          :prop="col.props"
          :label="col.label"
        >
        </el-table-column>
        <el-table-column v-if="col.child" :key="index" :label="col.label">
          <template v-for="(item, child_index) in col.child">
            <el-table-column
              :key="child_index"
              :prop="item.props"
              :label="item.label"
            ></el-table-column>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="block" >
      <el-pagination 
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="value.pageNum"
        :page-sizes="[10, 20, 30, 40]"
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
  props:{
    tableList: {
      type: Array,
      default () {
        return {
          date: []
        }
      }
    },
    value: {
      type: Object,
      default () {
        return {
          geoDescription:null,
          wellType: null,
          wellPurpose:null,
          completionWellDate:null,
          wellName:null,
          stuckPointHorizon:null
        }
      }
    }
  },
  data() { 
    return {
      cols: [
        { props: "geoDescription", label: "构造带" },
        { props: "structurePos", label: "圈闭/构造" },
        { props: "wellName", label: "井号" },
        {
          label: "卡钻情况",
          child: [
            { props: "accidentNumber", label: "卡钻编号" },
            { props: "accidentDate", label: "发生时间" },
            { props: "removeDate", label: "解除时间" },
            { props: "openTimes", label: "开次" },
            { props: "bitSize", label: "钻头直径mm" },
            { props: "wellDepth", label: "井深m" },
            { props: "stuckPointHorizon", label: "层位" },
            { props: "accidentBitHorizon", label: "钻头深度层位" },
            { props: "fluidType", label: "卡钻类型" },
            { props: "accidentBitHorizon", label: "卡钻深度m" },
            { props: "stuckPointHorizon", label: "卡点层位" },

            { props: "address", label: "层位密度最小值g/cm³" },
            { props: "address", label: "层位密度最大值g/cm³" },
            { props: "stuckPointLava", label: "卡点岩性" },

            { props: "occurrenceProcess", label: "发生经过" },
            { props: "processingMethod", label: "解卡方法" },
            { props: "processingCourse", label: "处理概述" },
            { props: "stuckDrillReason", label: "卡钻原因" },
            { props: "treatingAgentCost", label: "处理卡钻处理剂总费用" },
            { props: "reworkFootage", label: "返工进尺m" },
            { props: "abandonedFootage", label: "报废进尺m" },
            { props: "lostTime", label: "损失时间h" },
          ],
        },
      ],
    };
  },
  methods: {
    handleSizeChange(val) {
      this.$emit('onSearch',val,'num')
    },
    handleCurrentChange(val) {
      this.$emit('onSearch',val,'page')
    },
  },
};
</script>
<style>
.detail-list {
  padding: 20px;
}
</style>