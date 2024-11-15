import { createRouter, createWebHistory } from 'vue-router'
import GettingStarted from './pages/GettingStarted.vue'
import Redoc from './pages/Redoc.vue'

const router = createRouter({
  scrollBehavior(to) {
		if (to.hash) {
			window.scroll({ top: 0 })
		} else {
			document.querySelector('html').style.scrollBehavior = 'auto'
			window.scroll({ top: 0 })
			document.querySelector('html').style.scrollBehavior = ''
		}
	},
  base: __APP_BASE_URL__,
  history: createWebHistory(__APP_BASE_URL__),
  routes: [
    {
      path: '/',
      redirect: '/documentation/getting-started'
    },
    {
      path: '/documentation/getting-started',
      component: GettingStarted
    },
    {
      path: '/oas/:filename',
      component: Redoc
    }
  ]
})

export default router
