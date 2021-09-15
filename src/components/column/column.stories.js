import column from './column.vue'

export default {
  title: 'column',
  component: { column },
}

const template = () => ({
  components: { column },
  data () {
    return {
      comments: [{
        title: 'some-title',
        user: {
          login: 'some-login'
        }
      }],
      comm: {
        repo: 'name',
        owner: 'owner'
      }
    }
  },
  template: `
    <column 
      nick="Some nick"
      :comm="comm"
      path="https://picsum.photos/100/100" 
      :comments="comments"
    >
      <template #description>
        <h1>hello world!</h1>
      </template>
    </column>
  `
})

export const DefaultViewColumn = template.bind({})

DefaultViewColumn.story = {
  name: 'Вид колонки'
}
