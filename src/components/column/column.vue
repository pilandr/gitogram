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
        <feed :comments="comments" :loading="loading" @tooggleIssues="toogle"></feed>
      </div>
    </div>
  </div>
</template>

<script>
import nickname from '../nickname/nickname.vue'
import feed from '../feed/feed.vue'
import axios from 'axios'

export default {
  name: 'column',
  props: ['nick', 'path', 'comm'],
  emits: ['tooggleIssues'],
  components: {
    nickname,
    feed
  },
  data () {
    return {
      comments: [],
      loading: false
    }
  },
  methods: {
    async toogle (isOpen) {
      // this.$emit('tooggleIssues', isOpen)
      this.loading = true
      const { data } = await axios.get(`https://api.github.com/repos/${this.comm.owner}/${this.comm.repo}/issues`, {
        headers: {
          Authorization: `token ${localStorage.getItem('token')}`,
          accept: 'application/vnd.github.v3.html+json'
        }
      })
      this.comments = data
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped src="./column.scss"></style>
