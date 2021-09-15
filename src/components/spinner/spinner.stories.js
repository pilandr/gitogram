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
  <div style="color: green; width: 50px; heght: 50px">
    <spinner 
    />
  </div>
  `
})
defaultView.story = {
  name: 'Спиннер с цветом и размером блока'
}
