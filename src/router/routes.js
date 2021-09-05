import { feeds } from '../pages/feeds/index'
import { stories } from '../pages/stories'
import { auth } from '../pages/auth'
export default [{
  path: '/',
  component: feeds,
  name: 'feeds'
},
{
  path: '/stories',
  component: stories,
  name: 'stories'
},
{
  path: '/auth',
  component: auth,
  name: 'auth'
}]
