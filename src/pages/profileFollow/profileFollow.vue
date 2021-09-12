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
                <profileNickname :name="this.user.login" :source="this.user.avatar_url" :repCount="this.user.public_repos" :watchCount="this.starred.length" :realName="this.user.bio" @onClickReposts="$router.push({name: 'profile'})" :isActive="true" />
            </div>
          </div>
          <div class="right">
            <div class="right__content">
              <div class="right__container-title">
                <div class="right__title">Following</div>
                <div class="right__countRepo" v-text="this.starred.length"></div>
              </div>
              <ul class="following__list">
                <li class="following__item" v-for="repos in this.starred" :key="repos.id">
                   <div class="follow">
                    <div class="user">
                      <div class="user__avatar">
                        <img :src="repos.owner.avatar_url" alt="avatar owner" class="user__avatar-img">
                      </div>
                      <div class="user__info">
                        <div class="user__nickname">{{repos.owner.login}}</div>
                        <div class="user__profile">{{repos.owner.type}}</div>
                      </div>
                    </div>
                    <xButton
                      theme="green"
                      isSmall
                      @onClick="unFollow(repos.id)"
                    >
                      following
                    </xButton>
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
import profileNickname from '@/components/profileNickname/profileNickname.vue'
import button from '@/components/button/button.vue'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'profile',
  components: {
    topLine,
    logo,
    profileIcons,
    profileNickname,
    xButton: button
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      starred: state => state.likedOfMe,
      user: state => state.user
    }),
    ...mapGetters(['getUnstarredOnly'])
  },
  methods: {
    ...mapActions({
      fetchLikedOfMe: 'fetchLikedOfMe',
      fetchUser: 'fetchUser',
      logout: 'logout',
      unStarStarred: 'unStarStarred'
    }),
    getReposData (repos) {
      return {
        title: repos.name,
        description: repos.description,
        username: repos.owner.login,
        stars: repos.stargazers_count
      }
    },
    async unFollow (repos) {
      this.unStarStarred(repos)
    }
  },
  async created () {
    try {
    await this.fetchLikedOfMe()
    await this.fetchUser()
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style src="./profileFollow.scss" lang="scss" scoped></style>
