<template>
  <div id="changePsw">
    <jheader go-back="true" v-on:save="savePsw" right-text="保存" head-title="我的"></jheader>
    <ul>
      <li>
        <input type="text" v-model="oldPsw" placeholder="请输入原密码"/>
      </li>
      <li>
        <input type="password" v-model="newPsw" placeholder="请输入新密码"/>
      </li>
      <li>
        <input type="password" v-model="confirmPsw" placeholder="再次输入新密码">
      </li>
    </ul>
  </div>
</template>
<script>
  import Jheader from '../../components/Jheader'
  import {CHANGEPSW} from '../../utils/api'
  import Vue from 'vue'
  import * as native from '../../utils/native'
  export default {
      name: 'JchangePsw',
      data() {
          return {
            oldPsw: '',
            newPsw: '',
            confirmPsw: ''
          }
      },
      components: {
          Jheader
      },
    methods: {
      savePsw () {
          let url = CHANGEPSW;
          let LOGIN_OLDPASSWORD = this.oldPsw;
          let LOGIN_PASSWORD = this.newPsw;
          let TOKEN = window.localStorage.getItem('token');
          if(LOGIN_PASSWORD == '') {
            Vue.toast('请填写密码',{
              horizontalPosition: 'center',
              verticalPosition: 'center',
            })
            return ;
          }
          if(this.confirmPsw == '') {
            Vue.toast('请确认密码',{
              horizontalPosition: 'center',
              verticalPosition: 'center',
            })
            return ;
          }
          if(this.confirmPsw !== LOGIN_PASSWORD) {
            Vue.toast('请确认密码',{
              horizontalPosition: 'center',
              verticalPosition: 'center',
            })
              return ;
          }
        this.$ajax.get(url,{
            params: {
              LOGIN_OLDPASSWORD: LOGIN_OLDPASSWORD,
              LOGIN_PASSWORD: LOGIN_PASSWORD,
              TOKEN: TOKEN
            }
        })
          .then(response => {
              console.log(response.data);
            Vue.toast('保存成功',{
              horizontalPosition: 'center',
              verticalPosition: 'center',
            })
          native.logout()
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  }
</script>
<style lang="scss">
    @import "../../common/_global.scss";
    @import "../../common/_util.scss";

  #changePsw {
    position: absolute;
    width: 100%;
    height: 100%;
    left:0;
    top:0;
    z-index: 99;
    background-color: $bg;
    overflow: hidden;
    ul {
      margin-top: 54px;
      li {
        width: 100%;
        padding: rem(34) 0;
        margin-left: rem(30);
        border-bottom: 1px solid $borderColor;
        input {
          font-size: rem(30);
          border: none;
          width: 100%;
        }
      }
    }
  }
</style>
