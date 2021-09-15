import { mount } from '@vue/test-utils'
import feed from './feed'
import axios from 'axios'

describe('issue component', () => {
  it('выполняет emit события tooggleIssues', async () => {
    const wrapper = mount(feed)

    await wrapper.find('.feed-toggler button').trigger('click')

    expect(wrapper.emitted().tooggleIssues?.length).toBe(1)

  })

  it('количество компонентов совпадает с пришедшими', async () => {
    const comment = {
      user: {
        login: 'test-nick'
      },
      title: 'test-comment'
    }
    const wrapper = mount(feed, {
      props: {
        comments: Array.from({length: 10}).map(x => comment)
      }
    })

    expect(wrapper.find('.comments').exists()).toBe(false)
    await wrapper.find('.feed-toggler button').trigger('click')
    expect(wrapper.findAll('.comments-item').length).toBe(10)
  })


  it('не происходит повторных запросов если есть comments', async () => {
    const comment = {
      user: {
        login: 'test-nick'
      },
      title: 'test-comment'
    }
    const wrapper = mount(feed, {
      props: {
        comments: Array.from({length: 10}).map(x => comment)
      }
    })

    expect(wrapper.find('.comments').exists()).toBe(false)
    await wrapper.find('.feed-toggler button').trigger('click')
    expect(wrapper.emitted().tooggleIssues).toBeUndefined()
  })
  
})