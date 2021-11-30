import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c7628ff8 = () => interopDefault(import('../pages/features.vue' /* webpackChunkName: "pages/features" */))
const _dea51812 = () => interopDefault(import('../pages/pres.vue' /* webpackChunkName: "pages/pres" */))
const _33acae6a = () => interopDefault(import('../pages/recruteur.vue' /* webpackChunkName: "pages/recruteur" */))
const _1cc93591 = () => interopDefault(import('../pages/recruteur-about-us.vue' /* webpackChunkName: "pages/recruteur-about-us" */))
const _3427fab8 = () => interopDefault(import('../pages/recruteur-why-jobizz.vue' /* webpackChunkName: "pages/recruteur-why-jobizz" */))
const _795935a4 = () => interopDefault(import('../pages/team.vue' /* webpackChunkName: "pages/team" */))
const _aac9f3f0 = () => interopDefault(import('../pages/timeline.vue' /* webpackChunkName: "pages/timeline" */))
const _e2755dca = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/features",
    component: _c7628ff8,
    name: "features"
  }, {
    path: "/pres",
    component: _dea51812,
    name: "pres"
  }, {
    path: "/recruteur",
    component: _33acae6a,
    name: "recruteur"
  }, {
    path: "/recruteur-about-us",
    component: _1cc93591,
    name: "recruteur-about-us"
  }, {
    path: "/recruteur-why-jobizz",
    component: _3427fab8,
    name: "recruteur-why-jobizz"
  }, {
    path: "/team",
    component: _795935a4,
    name: "team"
  }, {
    path: "/timeline",
    component: _aac9f3f0,
    name: "timeline"
  }, {
    path: "/",
    component: _e2755dca,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
