<template>
  <div class="topline">
    <topLine>
      <template #headline>
        <div class="topline___header">
          <logo></logo>
          <div class="topline__user-icons">
            <profileIcons></profileIcons>
          </div>
        </div>
      </template>
      <template #content>
        <ul class="stories">
          <li class="stories-item" v-for="story in repositories" :key="story.id">
            <story-user-item
              :avatar="story.owner.avatar_url"
              :username="story.owner.login"
              @onPress="handlePress(story.id)"
            />
          </li>
        </ul>
      </template>
    </topLine>
  </div>
  <ul class="columns">
    <li class="columns-item" v-for="repos in repositories" :key="repos.id">
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
  <slide />
</template>

<script>
import { topLine } from '@/components/topline'
import { storyUserItem } from '@/components/storyUserItem'
import logo from '@/components/logo/logo.vue'
import profileIcons from '@/components/profileIcons/profileIcons.vue'
import column from '@/components/column/column.vue'
import starPanel from '@/components/starPanel/starPanel.vue'
import * as api from '@/api'
import slide from '@/components/slide/slide.vue'

export default {
  name: 'feeds',
  components: {
    topLine,
    storyUserItem,
    column,
    logo,
    profileIcons,
    starPanel,
    slide
  },
  data () {
    return {
      repositories: []
    }
  },
  methods: {
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
      const { data } = await api.trendings.getTrendings()
      this.repositories = data.items
      console.log(this.repositories)
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style src="./feeds.scss" lang="scss" scoped></style>
