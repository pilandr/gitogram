<template>
  <div class="c-user-icons">
    <a href="/" class="icon user-icons__element">
      <icon name="home" />
    </a>
    <a href="/" class="icon user-icons__element">
      <icon name="avatar" />
    </a>
    <button class="icon user-icons__element">
      <icon name="exit" />
    </button>
  </div>
</template>

<script>
import { icon } from '../../icons'
export default {
  name: 'logo',
  components: {
    icon
  }
}
</script>

<style lang="scss" scoped src="./profileIcons.scss"></style>
