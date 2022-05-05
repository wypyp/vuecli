<!--
 * @Author: WangYP
 * @Date: 2022-04-21 23:56:12
 * @LastEditors: ZhouJG
 * @LastEditTime: 2022-05-05 17:09:45
 * @Description: 描述信息
 * @FilePath: /vuecli/src/views/sgfz/detail/search.vue
-->
<template>
  <div class="detail-search">
    <el-form inline :model="value" ref="detailsSearch">
      <el-form-item label="区块" prop="geoDescription">
        <el-select v-model="value.geoDescription">
          <el-option
            v-for="(item, index) in config.geoDescription"
            :key="index"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="井型" prop="wellType">
        <el-select v-model="value.wellType">
          <el-option
            v-for="(item, index) in config.wellType"
            :key="index"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="井别" prop="wellPurpose">
        <el-select v-model="value.wellPurpose">
          <el-option
            v-for="(item, index) in config.wellPurpose"
            :key="index"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="完井年份" prop="completionWellDate">
        <el-select v-model="value.completionWellDate">
          <el-option
            v-for="(item, index) in config.completionWellDate"
            :key="index"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="井号" prop="wellId">
        <el-input
          v-model="value.wellId"
          placeholder="井号"
        ></el-input>
      </el-form-item>
      <el-form-item label="层位" prop="stuckPointHorizon">
        <el-select v-model="value.stuckPointHorizon">
          <el-option
            v-for="(item, index) in config.stuckPointHorizon"
            :key="index"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">搜索</el-button>
        <el-button type="primary" @click="onReset">清空</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    config: {
      type: Object,
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
          wellId: null,
          stuckPointHorizon: null,
        };
      },
    },
  },
  data() {
    return {
      rules: {
        geoDescription: [{ required: true, message: "qukuai", trigger: "change" }],
        wellType: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
        wellPurpose: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        completionWellDate: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],
        wellId: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change",
          },
        ],
        stuckPointHorizon: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      this.$emit("onSearch", this.value,'search');
    },
    onReset() {
      this.$refs.detailsSearch.resetFields();
    },
  },
};
</script>

<style>
.detail-search {
  padding: 20px;
}
</style>