import icon from './icon.vue'

export default {
  title: 'icon',
  components: { icon }
}

export const defaultView = () => ({
  components: {
    icon
  },
  template: `
  <icon name="avatar" />
  `
})
defaultView.story = {
  name: 'Иконка'
}
