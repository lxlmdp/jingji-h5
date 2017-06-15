<template>
  <div id="home">
    <jheader head-title="我的"></jheader>
    <div class="user">
      <p class="name">{{userInfo.STAFF_NAME}}</p>
      <p class="post">{{userInfo.DEPT_NAME}}</p>
    </div>
    <ul class="homeList">
      <router-link class="changePsw" tag="li" to="/changePsw">
        <i></i>
        修改密码
      </router-link>
      <li class="version">
        <i></i>
        当前版本
        <span class="right">V1.2.4</span>
      </li>
    </ul>
    <div @click="signOut" class="signOut">
        退出当前登陆
    </div>
  </div>

</template>
<script>
  import Jheader from '../../components/Jheader'
  import * as native from '../../utils/native'
  import {USERINFO} from '../../utils/api'

  export default {
    name: 'Jhome',
    data() {
        return {
            userName: window.localStorage.getItem('userName'),
            userInfo: {}
        }
    },
    created() {
      this.$ajax.get(USERINFO,{
          params: {
              TOKEN: window.localStorage.getItem('token')
          }
      }).then(response => {
          console.log(response)
          this.userInfo = response.data.entity;
      }).catch(err => {
          console.log(err)
      })
    },
    components : {
        Jheader
    },
    methods: {
      signOut() {
        native.logout()
      }
    }
  }
</script>
<style lang="scss">
  @import "../../common/_util.scss";
  @import "../../common/_global.scss";

  #home {
    .user {
      margin-top: 54px;
      width: 100%;
      height: rem(172);
      background-color: $bg;
      padding-left: rem(60);
      padding-top: rem(42);
      .name {
        font-size: rem(40);
        color: $color3;
      }
      .post {
        position: relative;
        top: rem(22);
        font-size: rem(23);
        color:#929090;
      }
    }
    .homeList {
      padding: rem(20) 0;
      background-color: #f3f3f3;
      li {
        height:rem(100);
        line-height: rem(100);
        background-color: $bg;
        border-bottom: 1px solid $borderColor;
        color: $color3;
        font-size : rem(30);
        i {
          display: block;
          float: left;
          width: rem(50);
          height: rem(50);
          margin: rem(25) rem(20) 0 rem(30);
        }
        .right {
          float: right;
          margin-right: rem(30);
        }
      }
      .changePsw {
        i {
          background: url("../../images/user1.png");
          background-size: contain;
        }
      }
      .version {
        i {
          background: url("../../images/user2.png");
          background-size: contain;
        }
      }
      li:last-child {
        border-bottom: none;
      }
    }
    .signOut {
      width: rem(680);
      height: rem(88);
      line-height: rem(88);
      text-align: center;
      margin: 0 auto;
      font-size: rem(30);
      color: $bg;
      border-radius: 5px;
      background-color: $btnColor;
      margin-top: rem(110);
    }
  }
</style>
