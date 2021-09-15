import { mount } from '@vue/test-utils'
import column from './column'
import axios from 'axios'

it('количество данных в компоненте совпадает с пришедшими', async () => {

  const jestMock = jest.mock('axios', () => ({
    get: jest.fn(() => Promise.resolve({
      data: [{
        title: 'some-text',
        user: {
          login: 'some-login'
        }
      },
      {
        title: 'some-text',
        user: {
          login: 'some-login'
        }
      },
      {
        title: 'some-text',
        user: {
          login: 'some-login'
        }
      }]
    })
    )
  }))

  const wrapper = mount(column)

  expect(wrapper.find('.comments').exists()).toBe(false)
  await wrapper.find('.feed-toggler button').trigger('click')
  expect(wrapper.findAll('.placeHolder-issue').length).toBe(3)
  
})