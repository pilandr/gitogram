<template>
  <div class="topline">
    <topLine>
      <template #headline>
        <div class="topline___header">
          <div class="topline__logo">
            <logo color='black'></logo>
          </div>
          <div class="topline__user-icons">
            <profileIcons></profileIcons>
          </div>
        </div>
      </template>
      <template #content>
        <ul class="stories">
          <li class="stories-item" v-for="story in this.trendings" :key="story.id">
            <story-user-item
              :avatar="story.owner.avatar_url"
              :username="story.owner.login"
              @onPress="$router.push({name: 'stories', params: {initialSlide: story.id}})"
            />
          </li>
        </ul>
      </template>
    </topLine>
  </div>
  <ul class="columns">
    <li class="columns-item" v-for="repos in this.trendings" :key="repos.id">
      <column :nick="repos.owner.login" :path="repos.owner.avatar_url" comments="">
        <template #description>
          <div class="column__content">
            <div class="column__title" v-text="repos.name"></div>
            <div class="column__description" v-text="repos.description">
            </div>
            <div class="column__starpanel"><starPanel :nstar="repos.stargazers_count" :nfork="repos.forks_count"></starPanel></div>
          </div>
        </template>
      </column>
    </li>
  </ul>
</template>

<script>
import { topLine } from '@/components/topline'
import { storyUserItem } from '@/components/storyUserItem'
import logo from '@/components/logo/logo.vue'
import profileIcons from '@/components/profileIcons/profileIcons.vue'
import column from '@/components/column/column.vue'
import starPanel from '@/components/starPanel/starPanel.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'feeds',
  components: {
    topLine,
    storyUserItem,
    column,
    logo,
    profileIcons,
    starPanel
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      trendings: state => state.data
    })
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'fetchTrendings'
    }),
    getReposData (repos) {
      return {
        title: repos.name,
        description: repos.description,
        username: repos.owner.login,
        stars: repos.stargazers_count
      }
    }
  },
  async created () {
    try {
      if (!this.trendings.length) {
        await this.fetchTrendings()
      }
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style src="./feeds.scss" lang="scss" scoped></style>
