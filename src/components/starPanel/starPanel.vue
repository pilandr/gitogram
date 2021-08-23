<template>
  <div class="c-starPanel">
    <div class="starPanel__item">
      <div class="star"><icon name="star" /></div>
      <div class="starPanel__star">Star</div>
    </div>
    <div class="starPanel__item starPanel__nstar">{{nstar}}</div>
    <div class="starPanel__item">
      <div class="star"><icon name="fork" /></div>
      <div class="starPanel__fork">fork</div>
    </div>
    <div class="starPanel__item starPanel__nfork">{{nfork}}</div>
  </div>
</template>

<script>
import { icon } from '../../icons'
export default {
  name: 'starPanel',
  props: ['nstar', 'nfork'],
  components: {
    icon
  }
}
</script>

<style lang="scss" src="./starPanel.scss" scoped>
</style>
