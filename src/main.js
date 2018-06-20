// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from 'store'

import iView from 'iview'
/*import 'iview/dist/styles/iview.css' // 使用 CSS*/
import 'js/common'
import axios from 'axios'
import 'babel-polyfill'
import Scrollbar from 'smooth-scrollbar'
//  公用请求方法
import publicUtils from 'js/publicUtils'
// 设置公用请求端口
import getwbkUrl from 'js/getwbkUrl'
import VueLazyload from 'vue-lazyload'
import InitScroll from 'js/initScroll'
import config from "../config";

axios.defaults.baseURL = process.env.API
Vue.prototype.axios = axios
Vue.prototype.Scrollbar = Scrollbar
Vue.config.productionTip = false

Vue.use(iView)
Vue.use(publicUtils)
Vue.use(getwbkUrl)
Vue.use(InitScroll)

// 懒加载图片
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('./assets/loading.png'),
  loading:require('./assets/loading.png'),
  attempt: 1
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

let urlWdatePicker = process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath
document.write('<script type="text/javascript" src="' + urlWdatePicker + 'static/My97DatePicker/WdatePicker.js"></script>')
 urlWdatePicker = null
