<template>
  <div class="c-user-icons">
    <button class="icon user-icons__element">
      <icon name="home" />
    </button>
    <button class="icon user-icons__element">
      <img :src="source" alt="avatar" class="user-icons__img" v-if="source">
      <icon name="avatar" v-else />
    </button>
    <button class="icon user-icons__element" @click="$emit('onLogout')">
      <icon name="exit" />
    </button>
  </div>
</template>

<script>
import { icon } from '../../icons'

export default {
  name: 'logo',
  emits: ['logout'],
  components: {
    icon
  },
  props: ['source']
}
</script>

<style lang="scss" scoped src="./profileIcons.scss"></style>
