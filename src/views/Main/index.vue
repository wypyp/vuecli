<template>
  <div class="main-page-wrapper">
    <div>你可能需要一个头</div>
    <router-view />
    <div>你可能需要一个尾</div>
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
