<!--
 * @Author: WangYP
 * @Date: 2021-09-22 15:35:16
 * @LastEditors: ZhouJG
 * @LastEditTime: 2021-09-26 23:02:39
 * @Description: 描述信息
 * @FilePath: /vuecli/src/views/index/index.vue
-->
<template>
  <div class="index">
    <svg-icon name="verify-success" class-name="verify-success-icon"></svg-icon>
    {{name}}
    <button @click="to">跳转index1</button>
  </div>
</template>
     
<script>

export default {
  name: 'page-index1',
  data () {
    return {
      name: 'index'
    }
  },
  methods: {
    to () {
      this.$router.push('index1')
    }
  },
  created () {
    const params = {
      a: 123
    }
    this.$axios.get('api/aaaa', { params }).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    });
  }
}
</script>

<style lang="less">
.index{
  .verify-success-icon{
    font-size: 50px;
  }
}
</style>
