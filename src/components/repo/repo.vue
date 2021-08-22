<template>
  <div class="c-repo">
    <h1>title: {{ title }}</h1>
    <h2>owner: {{ username }}</h2>
    <h3>stars: {{ stars }}</h3>
    <p v-if="description">descriotion" {{ description }} </p>
  </div>
</template>

<script>

export default {
  name: 'repo',
  props: {
    title: String,
    username: String,
    stars: Number,
    description: String,
    dark: Boolean
  }
}
</script>

<style lang="scss" scoped src="./repo.scss"></style>
