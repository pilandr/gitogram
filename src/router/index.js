import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

// export default createRouter({
//   history: createWebHashHistory(),
//   routes
// })

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const authRoute = to.name === 'auth'
  next(authRoute ? { name: 'feeds' } : null)
  // try {
  //   await api.user.getUserData()
  //   next(authRoute ? { name: 'feeds' } : null)
  // } catch (error) {
  //   if (e.response.status === 401) {
  //     next(authRoute ? null : { name: 'auth' })
  //   }
  // }
})
export default router
