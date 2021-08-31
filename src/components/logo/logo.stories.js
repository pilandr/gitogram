import logo from './logo.vue'

export default {
  title: 'logo',
  components: { logo }
}

export const defaultView = () => ({
  components: {
    logo
  },
  template: `
    <logo 
    />
  `
})
defaultView.story = {
  name: 'Лого'
}
