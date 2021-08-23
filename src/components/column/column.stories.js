import column from './column.vue'

export default {
  title: 'column',
  component: { column }
}

const template = () => ({
  components: { column },
  data () {
    return {
      comments: [{
        nick: 'hello',
        comment: 'world'
      }]
    }
  },
  template: `
    <column 
      nick="Some nick" 
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
