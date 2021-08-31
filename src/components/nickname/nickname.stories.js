import nickname from './nickname.vue'

export default {
  title: 'nickname',
  components: { nickname }
}

export const defaultView = () => ({
  components: {
    nickname
  },
  template: `
    <nickname 
      name="some name"
      source="https://picsum.photos/100/100"
    />
  `
})
defaultView.story = {
  name: 'Лого Никнейм горизонтально'
}
