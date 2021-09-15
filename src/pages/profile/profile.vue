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
                <profileNickname :loading="loading" :name="this.user.login" :source="this.user.avatar_url" :repCount="this.user.public_repos" :watchCount="this.starred.length" :realName="this.user.bio" @onClickWatches="toProfileFollow" :isActive="false" />
            </div>
          </div>
          <div class="right">
            <div class="right__content">
              <div class="right__container-title">
                <div class="right__title">Repositories</div>
                <div class="right__countRepo" v-text="this.userRepos.length"></div>
              </div>
              <div class="right__container-loading" v-if="this.loading">
                <div class="right__loading">
                  <spinner />
                </div>
              </div>
              <ul class="repos__list" v-else>
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
import spinner from '@/components/spinner/spinner.vue'
import { useStore } from 'vuex'
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'profile',
  components: {
    topLine,
    logo,
    profileIcons,
    starPanel,
    profileNickname,
    spinner
  },
  setup () {
    const { dispatch, state } = useStore()
    const router = useRouter()
    const loading = ref(true)
    const logout = () => {
      dispatch('logout')
    }

  const toProfileFollow = () => {
      router.push({ name: 'profileFollow' })
    }

    onMounted(() => {
      try {
        dispatch('fetchUser')
        dispatch('fetchUserRepos')
        loading.value = false
      } catch (error) {
        console.log(error)
      }
    })
    return {
      loading,
      starred: computed(() => state.likedOfMe),
      user: computed(() => state.user),
      userRepos: computed(() => state.userRepos),
      logout,
      toProfileFollow
    }
  }
}
</script>

<style src="./profile.scss" lang="scss" scoped></style>
