<template>
  <div class="topline">
    <topLine>
      <template #headline>
        <div class="topline___header">
          <div class="topline__logo">
            <logo color='black'></logo>
          </div>
          <div class="topline__user-icons">
            <profileIcons :source="this.user?.avatar_url" @onLogout="logout" @onUser="$router.push({name: 'profile'})" @onHome="$router.push({name: 'feeds'})"></profileIcons>
          </div>
        </div>
      </template>
      <template #content>
        <ul class="stories">
          <li class="stories-item" v-for="story in getUnstarredOnly" :key="story.id">
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
    <li class="columns-item" v-for="repos in this.starred" :key="repos.id">
      <column :nick="repos.owner.login" :path="repos.owner.avatar_url" :comm="getRepoOwner(repos)" @tooggleIssues='tooggleIssues(repos, $event)'>
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
import { mapState, mapActions, mapGetters } from 'vuex'
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
      trendings: state => state.data,
      starred: state => state.likedOfMe,
      user: state => state.user
    }),
    ...mapGetters(['getUnstarredOnly'])
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'fetchTrendings',
      fetchLikedOfMe: 'fetchLikedOfMe',
      fetchUser: 'fetchUser',
      logout: 'logout',
      fetchIssue: 'fetchIssue'
    }),
    getReposData (repos) {
      return {
        title: repos.name,
        description: repos.description,
        username: repos.owner.login,
        stars: repos.stargazers_count
      }
    },
    getRepoOwner (repos) {
      return {
        repo: repos.name,
        owner: repos.owner.login
      }
    },
    async tooggleIssues (repos, event) {
      if (event && !Object.prototype.hasOwnProperty.call(repos, 'issuesList')) {
        try {
          await this.fetchIssue({ id: repos.id, owner: repos.owner.login, repo: repos.name })
        } catch (error) {
          console.log(error)
        }
      }
    }
  },
  async created () {
    try {
      if (!this.trendings.length) {
        await this.fetchTrendings()
      }
    await this.fetchLikedOfMe()
    await this.fetchUser()
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
<style src="./feeds.scss" lang="scss" scoped></style>
