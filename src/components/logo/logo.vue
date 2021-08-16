<template>
<a href="/" class="c-logo">
    <div class="icon">
      <icon name="logo" />
    </div>
  </a>
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

<style lang="scss" scoped src="./logo.scss"></style>
