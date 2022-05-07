<!--
 * @Author: WangYP
 * @Date: 2022-04-21 23:56:12
 * @LastEditors: ZhouJG
 * @LastEditTime: 2022-05-07 14:18:51
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
        <el-date-picker
          value-format="yyyy"
          v-model="value.completionWellDate"
          type="year"
          placeholder="选择年"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="井号" prop="wellName">
        <el-input v-model="value.wellName" placeholder="井号"></el-input>
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
        <el-button type="primary" @click="onSubmit('search')">搜索</el-button>
        <el-button type="primary" @click="onSubmit('reset')">清空</el-button>
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
          wellName: null,
          stuckPointHorizon: null,
        };
      },
    },
  },
  data() {
    return {
    };
  },
  methods: {
    onSubmit(reset) {
      this.$emit("onSearch", this.value, reset);
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