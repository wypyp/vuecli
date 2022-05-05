<!--
 * @Author: WangYP
 * @Date: 2022-04-21 21:45:37
 * @LastEditors: ZhouJG
 * @LastEditTime: 2022-04-24 14:27:31
 * @Description: 描述信息
 * @FilePath: /vuecli/src/views/Main/components/left-menu.vue
-->
<template>
  <div class="main-menu-left-wrapper">
    <el-menu
      background-color="white"
      text-color="grey"
      router
      active-text-color="orange"
      :default-active="defaultActive"
    >
      <template
        v-for="item in menu"
        :index="item.path"
      >
        <el-submenu
          v-if="item.children"
          :index="item.path"
          :key="item.path"
        >
          <template slot="title">
            <i :class="item.meta.icon"></i>
            <span>{{item.meta.title}}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              v-for="items in item.children"
              :key="items.path"
              :index="items.path"
            >{{items.meta.title}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item
          v-else
          :index="item.path"
          :key="item.path"
        >
          <i :class="item.meta.icon"></i>
          <span slot="title">{{item.meta.title}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>
<script>
export default {
  props: {
    menu: {
      type: Array,
      default () {
        return []
      }
    },
    defaultActive: {
      type: String,
      default: ''
    }
  }
}
</script>
