import spinner from './spinner.vue'

export default {
  title: 'spinner',
  components: { spinner }
}

export const defaultView = () => ({
  components: {
    spinner
  },
  template: `
    <spinner 
    />
  `
})
defaultView.story = {
  name: 'Спиннер'
}
