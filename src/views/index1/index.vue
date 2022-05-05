<!--
 * @Author: WangYP
 * @Date: 2021-09-22 15:34:18
 * @LastEditors: ZhouJG
 * @LastEditTime: 2021-09-26 23:02:59
 * @Description: 描述信息
 * @FilePath: /vuecli/src/views/index1/index.vue
-->
<template>
  <div class="index1">
    {{name}}页面
  </div>
</template>
     
<script>

export default {
  name: 'page-index1',
  data () {
    return {
      name: 'index1'
    }
  },
  methods: {},
  created () {}
}
</script>

<style lang="less">
.index1{}
</style>
