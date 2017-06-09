// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import Toast from 'vue-easy-toast/dist/vue-easy-toast-lite.min.js'
require('vue-easy-toast/dist/vue-easy-toast.css')
import VueAwesomeSwiper from 'vue-awesome-swiper'

import axios from 'axios'


//region 插件
Vue.use(Toast)
Vue.use(VueAwesomeSwiper)
//endregion
Vue.config.productionTip = false
Vue.prototype.$ajax = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
