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
                <profileNickname :loading="loading" :name="this.user.login" :source="this.user.avatar_url" :repCount="this.user.public_repos" :watchCount="this.starred.length" :realName="this.user.bio" @onClickReposts="$router.push({name: 'profile'})" :isActive="true" />
            </div>
          </div>
          <div class="right">
            <div class="right__content">
              <div class="right__container-title">
                <div class="right__title">Following</div>
                <div class="right__countRepo" v-text="this.starred.length"></div>
              </div>
              <div class="right__container-loading" v-if="this.loading">
                <div class="right__loading">
                  <spinner />
                </div>
              </div>
              <ul class="following__list" v-else>
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
                      isSmall
                      :theme="repos.following?.status ? 'gray' : 'green'"
                      :loading="repos.following?.loading"
                      @onClick="repos.following?.status ? starStarred(repos.id) : unStarStarred(repos.id)"
                    >
                      {{repos.following?.status ? 'unFollowing' : 'following'}}
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
import spinner from '@/components/spinner/spinner.vue'
import { useStore } from 'vuex'
import { ref, onMounted, computed } from 'vue'

export default {
  name: 'profile',
  components: {
    topLine,
    logo,
    profileIcons,
    profileNickname,
    xButton: button,
    spinner
  },
  setup () {
    const { dispatch, state } = useStore()
    const loading = ref(true)
    const logout = () => {
      dispatch('logout')
    }
    const unStarStarred = (id) => {
      dispatch('unStarStarred', id)
    }
    const starStarred = (id) => {
      dispatch('starStarred', id)
    }
    onMounted(() => {
      try {
        dispatch('fetchUser')
        dispatch('fetchLikedOfMe')
        loading.value = false
      } catch (error) {
        console.log(error)
      }
    })
    return {
      loading,
      starred: computed(() => state.likedOfMe),
      user: computed(() => state.user),
      logout,
      unStarStarred,
      starStarred
    }
  }
}
</script>

<style src="./profileFollow.scss" lang="scss" scoped></style>
