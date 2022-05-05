<!--
 * @Author: WangYP
 * @Date: 2022-04-21 21:44:04
 * @LastEditors: ZhouJG
 * @LastEditTime: 2022-05-04 21:54:37
 * @Description: 描述信息
 * @FilePath: /vuecli/src/views/Main/components/top-menu.vue
-->
<template>
  <div class="main-menu-top-wrapper">
    <div class="main-menu-left">
      <div class="block">
        <img
          src="../../../assets/img/logo.jpg"
        />
        <span class="demonstration">钻完井液信息系统</span>
      </div>
    </div>
    <div class="main-menu-right">
      <el-menu
        mode="horizontal"
        router
        :default-active="defaultActive"
        background-color="white"
        text-color="grey"
        active-text-color="green"
      >
        <el-menu-item v-for="item in menu" :key="item.name" :index="item.path">
          <template slot="title">
            <i :class="item.meta.icon"></i>
            <span>{{ item.meta.title }}</span>
          </template>
        </el-menu-item>
        <!-- <el-menu-item index="2" disabled>防漏堵漏</el-menu-item>
        <el-menu-item index="3" disabled>井壁稳定</el-menu-item>
        <el-menu-item index="4">事故复杂</el-menu-item>
        <el-menu-item index="5" disabled>地层特性</el-menu-item>
        <el-menu-item index="6" disabled>完井液</el-menu-item>
        <el-menu-item index="7" disabled>储层保护</el-menu-item>
        <el-menu-item index="8" disabled>综合管理</el-menu-item> -->
      </el-menu>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    menu: {
      type: Array,
      default() {
        return [];
      },
    },
    defaultActive: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="less">
.main-menu-top-wrapper {
  border-bottom: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .main-menu-left {
    width: 300px;
    font-size: 24px;
    padding-left: 20px;
    .block {
      display: flex;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }
    }
  }
  .main-menu-right {
    overflow: hidden;
    font-size: 20px !important;
  }
}
</style>