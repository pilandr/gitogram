<template>
  <div class="topline">
    <topline>
      <template #headline>
        <div class="topline___header">
          <logo></logo>
          <div class="topline__user-icons">
            <profileicons></profileicons>
          </div>
        </div>
      </template>
      <template #content>
        <ul class="stories">
          <li class="stories-item" v-for="story in stories" :key="story.id">
            <story-user-item
              :avatar="story.avatar"
              :username="story.username"
              @onPress="handlePress(story.id)"
            />
          </li>
        </ul>
      </template>
    </topline>
  </div>
  <ul class="columns">
    <li class="columns-item" v-for="repos in repositories" :key="repos.id">
      <column :nick="repos.owner.login" :path="repos.owner.avatar_url" comments="">
        <template #description>
          <div class="column__content">
            <div class="column__title" v-text="repos.name"></div>
            <div class="column__description" v-text="repos.description">
            </div>
            <div class="column__starpanel"><starpanel :nstar="repos.stargazers_count" :nfork="repos.forks_count"></starpanel></div>
          </div>
        </template>
      </column>
    </li>
  </ul>
  <!-- <ul class="columns">
    <li class="columns-item" v-for="datauser in datausers" :key="datauser.id">
      <column :nick="datauser.username" :path="datauser.avatar" :comments="datauser.feeds">
        <template #description>
          <div class="column__content">
            <div class="column__title" v-text="datauser.title"></div>
            <div class="column__description" v-text="datauser.description">
            </div>
            <div class="column__starpanel"><starpanel :nstar="datauser.nstar" :nfork="datauser.nfork"></starpanel></div>
          </div>
        </template>
      </column>
    </li>
  </ul> -->
  <!-- <ul class="list">
    <li class="item" v-for="repos in repositories" :key="repos.id">
      <repo
        v-bind="getReposData (repos)"
      />
    </li>
  </ul> -->
  <slide />
</template>

<script>
import { topline } from '../../components/topline'
import { storyUserItem } from '../../components/storyUserItem'
import stories from './data.json'
import datausers from './datausers.json'
import logo from '../../components/logo/logo.vue'
import profileicons from '../../components/profile-icons/profile-icons.vue'
import column from '../../components/column/column.vue'
import starpanel from '../../components/star-panel/star-panel.vue'
import * as api from '../../api'
//  import repo from '../../components/repo/repo.vue'
import slide from '../../components/slide/slide.vue'

export default {
  name: 'feeds',
  components: {
    topline,
    storyUserItem,
    column,
    logo,
    profileicons,
    starpanel,
    //  repo,
    slide
  },
  data () {
    return {
      stories,
      datausers,
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
