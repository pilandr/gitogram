import starPanel from './starPanel.vue'

export default {
  title: 'starPanel',
  components: { starPanel }
}

export const defaultView = () => ({
  components: {
    starPanel
  },
  template: `
    <starPanel 
      nstar=1
      nfork=1
    />
  `
})
defaultView.story = {
  name: 'Панель звезд и fork'
}
