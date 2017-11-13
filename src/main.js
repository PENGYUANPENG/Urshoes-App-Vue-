import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import MintUI from 'mint-ui'
import '../node_modules/mint-ui/lib/style.css'
import App from './App.vue'
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(MintUI)

import router from './js/router.js'

new Vue({
  el: '#app',
  render: h => h(App),
  router
})