<template>
  <div class="c-nickname">
    <div class="nickname__avatar">
      <img :src="source" alt="avatar img" class="nickname__img">
    </div>
    <div class="nickname__content">
      <div class="nickname__name">{{name}}</div>
      <div class="nickname__data">
        <div class="col">
          <div class="col__count">{{repCount ? repCount : 0}}</div>
          <div class="col__name">
            <button class="col__button" :class="isActive ? 'active':''" @click="$emit('onClickReposts')">reposts</button>
          </div>
        </div>
        <div class="col">
          <div class="col__count">{{watchCount ? watchCount : 0}}</div>
          <div class="col__name">
            <button class="col__button" :class="isActive ? '':'active'" @click="$emit('onClickWatches')">watches</button>
          </div>
        </div>
      </div>
      <div class="nickname__realName">{{realName}}</div>
    </div>
  </div>
</template>

<script>
// import button from '../button/button.vue'
export default {
  // components: { button },
  props: ['name', 'source', 'repCount', 'watchCount', 'realName', 'isActive']
}
</script>

<style lang="scss" scoped src="./profileNickname.scss">

</style>
