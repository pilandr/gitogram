<template>
  <div class="c-column">
    <div class="column__container">
      <div class="column__nick">
        <nickname :name="nick" :source="path"></nickname>
      </div>
      <div class="column__description">
        <slot name="description" />
      </div>
      <div class="column__feed">
        <feed :comments="comments"></feed>
      </div>
    </div>
  </div>
</template>

<script>
import nickname from '../nickname/nickname.vue'
import feed from '../feed/feed.vue'

export default {
  name: 'column',
  props: ['nick', 'path', 'comments'],
  components: {
    nickname,
    feed
  }
}
</script>

<style lang="scss" scoped src="./column.scss"></style>
