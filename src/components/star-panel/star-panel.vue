<template>
  <div class="c-starpanel">
    <div class="starpanel__item">
      <div class="star"><icon name="star" /></div>
      <div class="starpanel__star">Star</div>
    </div>
    <div class="starpanel__item starpanel__nstar">{{nstar}}</div>
    <div class="starpanel__item">
      <div class="star"><icon name="fork" /></div>
      <div class="starpanel__fork">fork</div>
    </div>
    <div class="starpanel__item starpanel__nfork">{{nfork}}</div>
  </div>
</template>

<script>
import { icon } from '../../icons'
export default {
  name: 'starpanel',
  props: ['nstar', 'nfork'],
  components: {
    icon
  }
}
</script>

<style lang="scss" src="./star-panel.scss" scoped>
</style>
