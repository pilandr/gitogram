<template>
  <div class="c-slide" :class="{ active }">
    <div class="header">
      <div class="header__progress">
        <xProgress :active="active" @onFinish="$emit('onProgressFinish')" />
      </div>
      <div class="header__nickname">
        <nickname :name="data.username" :source="data.userAvatar" />
      </div>
    </div>
    <div class="content">
      <div class="content__loading" v-if="active && loading">
        <spinner />
      </div>
      <div class="content__info" v-else>
        <div v-if="data.content?.length" class="content__tex" v-html="data.content"></div>
        <placeHolder v-else :paragraphs=2 />
      </div>
    </div>
    <div class="footer">
      <xButton hoverText="Unfollow">Following</xButton>
    </div>
    <template v-if="active">
      <button
        v-if="btnsShown.includes('next')"
        class="btn btn-next"
        @click="$emit('onNextSlide')"
      >
        <span class="icon">
          <icon name="arrow" />
        </span>
      </button>
      <button
        v-if="btnsShown.includes('prev')"
        class="btn btn-prev"
        @click="$emit('onPrevSlide')"
      >
        <span class="icon">
          <icon name="arrow" />
        </span>
      </button>
    </template>
  </div>
</template>

<script>
import progress from '../progress/progress.vue'
import nickname from '../nickname/nickname.vue'
import spinner from '../spinner/spinner.vue'
import placeHolder from '../placeHolder/placeHolder.vue'
import icon from '../../icons/icon.vue'
import button from '../button/button.vue'

export default {
  name: 'slide',
  components: {
    xProgress: progress,
    nickname,
    spinner,
    xButton: button,
    placeHolder,
    icon
  },
  emits: ['onNextSlide', 'onPrevSlide', 'onProgressFinish'],
  props: {
    active: Boolean,
    loading: Boolean,
    btnsShown: {
      type: Array,
      default: () => ['next', 'prev'],
      validator (value) {
        return value.every(item => item === 'next' || item === 'prev')
      }
    },
    data: {
      type: Object,
      require: true,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped src="./slide.scss"></style>
