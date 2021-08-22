<template>
  <div class="c-slide">
    <div class="header">
      <div class="header__progress">
        <xProgress />
      </div>
      <div class="header__nickname">
        <nickname name="nickname" source="https://picsum.photos/100/100" />
      </div>
    </div>
    <div class="content">
      <div class="content__image">
        <img src="https://picsum.photos/300/300" alt="" class="content__pic">
      </div>
      <div class="content__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse distinctio impedit ex aliquam, et alias aperiam numquam aspernatur, adipisci dicta, corrupti magnam reiciendis repellendus corporis iure fuga quibusdam eligendi neque!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse distinctio impedit ex aliquam, et alias aperiam numquam aspernatur, adipisci dicta, corrupti magnam reiciendis repellendus corporis iure fuga quibusdam eligendi neque!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse distinctio impedit ex aliquam, et alias aperiam numquam aspernatur, adipisci dicta, corrupti magnam reiciendis repellendus corporis iure fuga quibusdam eligendi neque!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse distinctio impedit ex aliquam, et alias aperiam numquam aspernatur, adipisci dicta, corrupti magnam reiciendis repellendus corporis iure fuga quibusdam eligendi neque!
      </div>
    </div>
    <div class="footer">
      <xButton hoverText="Unfollow">Following</xButton>
    </div>
  </div>
</template>

<script>
import progress from '../progress/progress.vue'
import nickname from '../nickname/nickname.vue'
import button from '../button/button.vue'

export default {
  components: { xProgress: progress, nickname, xButton: button },
  name: 'slide'
}
</script>

<style lang="scss" scoped src="./slide.scss"></style>
