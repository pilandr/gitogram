import feed from './feed.vue'

export default {
  title: 'feed',
  component: feed
}

const template = () => ({
  components: { feed },
  data () {
    return {
      comments: [{
        nick: 'hello',
        comment: 'world'
      }]
    }
  },
  template: `<feed :comments="comments"></feed>
  `
})

export const Default = template.bind({})

Default.story = {
  name: 'Переключатель c отображением комментариев'
}