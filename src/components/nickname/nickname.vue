<template>
  <div class="c-nickname">
    <div class="nickname__avatar">
      <img :src="source" alt="avatar img" class="nickname__img">
    </div>
      <div class="nickname__name">{{name}}</div>
  </div>
</template>

<script>
export default {
  props: ['name', 'source']
}
</script>

<style lang="scss" scoped src="./nickname.scss">

</style>
