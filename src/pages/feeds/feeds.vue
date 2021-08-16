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
  </ul>
    <!-- <column nick="Camille" path="https://picsum.photos/44/44">
      <template #description>
        <div class="column__content">
          <div class="column__title">Vue.js</div>
          <div class="column__description">
            JavaScript framework for building interactive web applications ⚡
          </div>
        </div>
      </template>
    </column> -->
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

export default {
  name: 'feeds',
  components: {
    topline,
    storyUserItem,
    column,
    logo,
    profileicons,
    starpanel
  },
  data () {
    return {
      stories,
      datausers
    }
  }
}
</script>

<style src="./feeds.scss" lang="scss" scoped></style>
