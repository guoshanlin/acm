// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from 'store'

import iView from 'iview'
import 'iview/dist/styles/iview.css' // 使用 CSS
import 'js/common'
import axios from 'axios'
// import Promise from 'promise-polyfill'
import Scrollbar from 'smooth-scrollbar'
//  公用请求方法
import publicUtils from 'js/publicUtils'
// 设置公用请求端口
import getwbkUrl from 'js/getwbkUrl'

import InitScroll from 'js/initScroll'

axios.defaults.baseURL = process.env.API
Vue.prototype.axios = axios
Vue.prototype.Scrollbar = Scrollbar
Vue.config.productionTip = false

Vue.use(iView)
Vue.use(publicUtils)
Vue.use(getwbkUrl)
Vue.use(InitScroll)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
