<!--
 * @Author: WangYP
 * @Date: 2021-09-22 15:12:44
 * @LastEditors: ZhouJG
 * @LastEditTime: 2021-09-24 15:15:02
 * @Description: 描述信息
 * @FilePath: /vuecli/src/views/Main/index.vue
-->
<template>
  <div class="main-page-wrapper">
    <div>头部</div>
    <router-view />
    <div>尾部</div>
  </div>
</template>

<script>

export default {
  name: 'main-page-wrapper',
  components: {
  }
}
</script>

<style lang="scss">
.main-page-wrapper{}
</style>>
