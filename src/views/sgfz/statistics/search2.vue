<!--
 * @Author: WangYP
 * @Date: 2022-04-21 23:56:12
 * @LastEditors: ZhouJG
 * @LastEditTime: 2022-05-07 14:15:10
 * @Description: 描述信息
 * @FilePath: /vuecli/src/views/sgfz/statistics/search2.vue
-->
<template>
  <div class="detail-search">
    <el-form inline :model="value" ref="detailsSearch">
      <el-form-item label="区块" prop="structurePos">
        <el-select v-model="value.structurePos">
          <el-option
            v-for="(item, index) in config.structurePos"
            :key="index"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="井号" prop="wellName">
        <el-select v-model="value.wellName" multiple placeholder="多井选择">
          <el-option
            v-for="(item, index) in config.wellName"
            :key="index"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="选择维度" prop="returnField">
        <el-checkbox-group
          v-model="value.returnField"
          @change="handleCheckedCitiesChange"
        >
          <el-checkbox
            v-for="(item, index) in config.returnField"
            :label="item.value"
            :key="index"
            :value="item.value"
            >{{ item.label }}</el-checkbox
          >
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">统计</el-button>
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
          structurePos: null,
          wellName: [],
          returnField: [],
        };
      },
    },
  },
  data() {
    return {
      rules: {},
    };
  },
  methods: {
    handleCheckedCitiesChange(value) {
      this.$emit("checkBox2", value);
    },
    onSubmit(reset) {
      this.$emit("onSearch", reset);
    },
  },
};
</script>

<style>
.detail-search {
  padding: 20px;
}
</style>