<template>
    <div class="c-profile">
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
      </topLine>
      <div class="x-container">
        <ul class="sides">
          <div class="left">
            <div class="left__content">
                <div class="left__title">My profile</div>
                <profileNickname :name="this.user.login" :source="this.user.avatar_url" :repCount="this.user.public_repos" :watchCount="this.starred.length" :realName="this.user.bio" @onClickWatches="$router.push({name: 'profileFollow'})" :isActive="false" />
            </div>
          </div>
          <div class="right">
            <div class="right__content">
              <div class="right__container-title">
                <div class="right__title">Repositories</div>
                <div class="right__countRepo" v-text="this.userRepos.length"></div>
              </div>
              <ul class="repos__list">
                <li class="repos__item" v-for="repos in this.userRepos" :key="repos.id">
                  <div class="repo">
                    <div class="repo__title" v-text="repos.name"></div>
                    <div class="repo__text" v-text="repos.description"></div>
                    <starPanel :nstar="repos.stargazers_count" :nfork="repos.forks_count"/>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </ul>
      </div>
    </div>
</template>

<script>
import { topLine } from '@/components/topline'
import logo from '@/components/logo/logo.vue'
import profileIcons from '@/components/profileIcons/profileIcons.vue'
import starPanel from '@/components/starPanel/starPanel.vue'
import profileNickname from '@/components/profileNickname/profileNickname.vue'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'profile',
  components: {
    topLine,
    logo,
    profileIcons,
    starPanel,
    profileNickname
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      starred: state => state.likedOfMe,
      user: state => state.user,
      userRepos: state => state.userRepos
    }),
    ...mapGetters(['getUnstarredOnly'])
  },
  methods: {
    ...mapActions({
      fetchLikedOfMe: 'fetchLikedOfMe',
      fetchUser: 'fetchUser',
      fetchUserRepos: 'fetchUserRepos',
      logout: 'logout'
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
    await this.fetchLikedOfMe()
    await this.fetchUser()
    await this.fetchUserRepos()
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style src="./profile.scss" lang="scss" scoped></style>
