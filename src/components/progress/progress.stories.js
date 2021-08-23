import progress from './progress.vue'

export default {
  title: 'progress',
  component: progress,
  argTypes: {
    onFinish: {
      action: 'onFinish',
      description: 'after full progress'
    }
  }
}

const template = (args) => ({
  components: { xProgress: progress },
  data () {
    return { args }
  },
  template: '<x-progress @onFinish="args.onFinish" />'
})

export const Default = template.bind({})
