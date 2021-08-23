import comment from './comment.vue'

export default {
  title: 'comment',
  components: { comment }
}

export const defaultView = () => ({
  components: {
    comment
  },
  template: `
    <comment 
      username="Some username" 
      text="Some text" 
    />
  `
})
defaultView.story = {
  name: 'Комментарии'
}
