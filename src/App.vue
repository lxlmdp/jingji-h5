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

  /*fade 进入后 ＆ 离开后 状态*/
  .fade-enter-active, .fade-leave-active {
    transition: opacity .1s ease;
  }
  /*fade 进入前 ＆ 离开后*/
  .fade-enter, .fade-leave-active {
    opacity: 0
  }

  /*endregion*/

  /*region slide动画*/

  /*.slide-left-enter-active, .slide-left-leave-active,
  .slide-right-enter-active, .slide-right-leave-active {
    transition: all .5s cubic-bezier(.55, 0, .1, 1);
  }

  .slide-left-enter, .slide-left-leave-active {
    -webkit-transform: translate3d(50%, -100%, 10%);
    transform: translate3d(50%, -100%, 10%);
  }

  .slide-right-enter, .slide-right-leave-active {
    -webkit-transform: translate(370px, 0);
    transform: translate(370px, 0);
  }*/
</style>
