<template>
  <div id="myApp">
    <router-view></router-view>
    <jfooter></jfooter>
  </div>
</template>

<script>
import Jfooter from './components/Jfooter'
import {getUrlKey} from './utils/native'
import Vue from 'vue'

export default {
  name: 'app',
  components: {
    Jfooter
  },
  created() {
    const token = getUrlKey('token') || window.localStorage.getItem('token');
    const userName = getUrlKey('DEPT_NAME') || window.localStorage.getItem('userName');

    if (token) {
      window.localStorage.setItem('token', token)
    } else {
      console.log("未登陆 无token")
      Vue.toast('未登陆 无token',{
        horizontalPosition: 'center',
        verticalPosition: 'center',
      })
    }
    if(userName) {
        window.localStorage.setItem('userName', userName)
    } else {
      console.log("未登陆 无name")
    }
  }
}
</script>

<style lang="scss">
  @import "./common/reset.css";
  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
  }
  .router-fade-enter, .router-fade-leave-active {
    opacity: 0;
  }
</style>
