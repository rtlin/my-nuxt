import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _5e99759c = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _161d1f68 = () => import('../pages/users.vue' /* webpackChunkName: "pages/users" */).then(m => m.default || m)
const _dea83814 = () => import('../pages/posts/index.vue' /* webpackChunkName: "pages/posts/index" */).then(m => m.default || m)
const _be7110d6 = () => import('../pages/mystore.vue' /* webpackChunkName: "pages/mystore" */).then(m => m.default || m)
const _1d798948 = () => import('../pages/counter.vue' /* webpackChunkName: "pages/counter" */).then(m => m.default || m)
const _9e092b26 = () => import('../pages/about.vue' /* webpackChunkName: "pages/about" */).then(m => m.default || m)
const _4ce792b6 = () => import('../pages/rob.vue' /* webpackChunkName: "pages/rob" */).then(m => m.default || m)
const _52ae6bde = () => import('../pages/posts/_id.vue' /* webpackChunkName: "pages/posts/_id" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _5e99759c,
			name: "index"
		},
		{
			path: "/users",
			component: _161d1f68,
			name: "users"
		},
		{
			path: "/posts",
			component: _dea83814,
			name: "posts"
		},
		{
			path: "/mystore",
			component: _be7110d6,
			name: "mystore"
		},
		{
			path: "/counter",
			component: _1d798948,
			name: "counter"
		},
		{
			path: "/about",
			component: _9e092b26,
			name: "about"
		},
		{
			path: "/rob",
			component: _4ce792b6,
			name: "rob"
		},
		{
			path: "/posts/:id",
			component: _52ae6bde,
			name: "posts-id"
		}
    ],
    fallback: false
  })
}
