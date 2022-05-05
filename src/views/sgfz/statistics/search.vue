<!--
 * @Author: WangYP
 * @Date: 2022-04-21 23:56:12
 * @LastEditors: ZhouJG
 * @LastEditTime: 2022-05-05 17:46:51
 * @Description: 描述信息
 * @FilePath: /vuecli/src/views/sgfz/statistics/search.vue
-->
<template>
  <div class="detail-search">
    <el-form inline :model="value" ref="detailsSearch">
      <el-form-item label="井号" prop="wellId">
        <el-input v-model="value.wellId" placeholder="井号"></el-input>
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
      <el-form-item label="钻井液类型" prop="stuckPointHorizon">
        <el-select v-model="value.stuckPointHorizon">
          <el-option
            v-for="(item, index) in config.stuckPointHorizon"
            :key="index"
            :label="item"
            :value="item"
          ></el-option>
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
            :value='item.value'
            >{{ item.label }}</el-checkbox
          >
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">统计</el-button>
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
          data: [],
        };
      },
    },
    value: {
      type: Object,
      default() {
        return {
          wellType: null,
          wellPurpose: null,
          completionWellDate:null,
          wellId: null,
          stuckPointHorizon: null,
          returnField: [],
        };
      },
    },
  },
  data() {
    return {
      rules: {
      },
    };
  },
  created(){
  },
  methods: {
    handleCheckedCitiesChange(value) {
      this.$emit("checkBox", value);
    },
    onSubmit() {
      this.$emit("onSearch", this.value);
    },
  },
};
</script>

<style>
.detail-search {
  padding: 20px;
}
</style>