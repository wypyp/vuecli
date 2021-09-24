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

<style lang="scss">
.index{
  .verify-success-icon{
    font-size: 50px;
  }
}
</style>
