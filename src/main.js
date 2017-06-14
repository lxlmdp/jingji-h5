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
import {logout} from './utils/native'

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

/*ajax token失效统一处理*/
axios.interceptors.response.use(function (response) {
    if(response.data.success == 9) {
        Vue.toast('您的账号在其他地方登陆或超时，请重新登陆',{
            horizontalPosition: 'center',
            verticalPosition: 'center',
        });
        native.logout();
    }
    // Do something with response data
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});