<template>
  <div class="c-placeHolder">
    <div class="placeHolder__top"></div>
    <ul class="placeHolder__list">
      <li class="placeHolder__item" v-for="n in paragraphs" :key="n">
        <div class="placeHolder__p1"></div>
        <div class="placeHolder__p2"></div>
        <div class="placeHolder__p3"></div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props: {
    paragraphs: Number
  }
}
</script>

<style lang="scss" scoped src="./placeHolder.scss"></style>
