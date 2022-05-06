<!--
 * @Author: WangYP
 * @Date: 2021-09-22 15:12:44
 * @LastEditors: ZhouJG
 * @LastEditTime: 2022-05-06 14:16:53
 * @Description: 描述信息
 * @FilePath: /vuecli/src/views/Main/index.vue
-->
<template>
  <div class="main-page-wrapper">
    <div class="main-header">
      <TopMenu :menu="topMeunArr" :defaultActive="defaultActive" />
    </div>
    <div class="main-content">
      <div class="main-content-left">
        <LeftMenu :menu="leftMenuData" :defaultActive="letDefaultActive" />
      </div>
      <div class="main-content-right">
        <div class="main-nav-bread">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: `${defaultActive}` }">{{
              defaultActiveName
            }}</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: `${letDefaultActive}` }">{{
              letDefaultActiveName
            }}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <router-view />
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import TopMenu from "./components/top-menu.vue";
import LeftMenu from "./components/left-menu.vue";
import { getMenu } from "@/router/routes";

export default {
  name: "main-page-wrapper",
  data() {
    const { leftMenuInfo, topMeunArr } = getMenu();
    return {
      topMeunArr,
      defaultActive: "",
      letDefaultActive: "",
      leftMenuInfo,
      leftMenuData: [],
      defaultActiveName: "",
    };
  },
  watch: {
    $route: {
      handler(route) {
        const { path, name, matched } = route;
        console.log(route);
        console.log(name);
        console.log(getMenu());
        const currentMenuPath = `/${path.split("/")[1]}`;
        this.defaultActive = currentMenuPath;
        this.defaultActiveName = matched[0]["name"];
        this.letDefaultActive = path;
        this.letDefaultActiveName = name;
        this.leftMenuData = this.leftMenuInfo[currentMenuPath] || [];
      },
      immediate: true,
    },
  },
  components: {
    TopMenu,
    LeftMenu,
  },
};
</script>

<style lang="less">
.main-page-wrapper {
  .main-content {
    display: flex;
    .main-content-left {
      width: 300px;
    }
    .main-content-right {
      margin-left:1px solid grey;
      flex: 1;
      overflow: hidden;
      .main-nav-bread{
        padding: 20px;
        font-size: 16px
      }
    }
  }
}
</style>>

