import profileIcons from './profileIcons.vue'

export default {
  title: 'profileIcons',
  components: { profileIcons }
}

export const defaultView = () => ({
  components: {
    profileIcons
  },
  template: `
    <profileIcons 
    />
  `
})
defaultView.story = {
  name: 'Иконки профиля'
}
