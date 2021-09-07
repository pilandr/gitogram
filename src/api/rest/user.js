import { makeRequest } from '../request'

export const getUser = () => {
  const contentHeader = 'application/vnd.github.v3.html+json'
  return makeRequest({
    url: '/user',
    headers: {
      accept: contentHeader
    }
  })
}
