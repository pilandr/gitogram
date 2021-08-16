<template>
  <div class="c-feed">
    <div class="feed-toggler">
      <toggler @onToggle="toggle" />
    </div>
    <div class="comments" v-if="shown">
      <ul class="comment-list">
        <li class="comments-item" v-for="(com, ind) in comments" :key="ind">
          <comment :text="com.comment" :username="com.nick" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Comment from '../comment/comment.vue'
import Toggler from '../toggler/toggler.vue'

export default {
  name: 'feed-item',
  props: ['comments'],
  components: {
    Comment,
    Toggler
  },
  data () {
    return {
      shown: false
    }
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
    }
  }
}
</script>

<style lang="scss" scoped src="./feed.scss"></style>
