<template>
  <div class="content">
    <ul>
      <router-link tag="li" to="/workInfomation">
        <img src="../../../images/list1.png" alt="1">
        <div class="con">
          <p class="p1">经济运行工作信息</p>
          <p class="p2">发布国家发改委运行局工作信息</p>
        </div>
        <span class="right">
          新消息(<em>{{opertionCount}}</em>)
        </span>
      </router-link>
      <router-link tag="li" to="/runDaily/text">
        <img src="../../../images/list2.png" alt="1">
        <div class="con">
          <p class="p1">煤电油运运行日报</p>
          <p class="p2">发布近期煤电油运相关运行日报</p>
        </div>
        <span class="right">
          收藏(<em>{{staffFileCount}}</em>)
        </span>
      </router-link>
      <router-link tag="li" to="/queryIndex">
        <img src="../../../images/list3.png" alt="1">
        <div class="con">
          <p class="p1">经济运行月度重要指标</p>
          <p class="p2">查询月度重要指标的相关数据</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
  import {APPINDEXCOUNT} from '../../../utils/api'

  export default {
      name: 'Jcontent',
      created() {
        this.$ajax.get(APPINDEXCOUNT,{
            params: {
                TOKEN: window.localStorage.getItem('token')
            }
          })
          .then (reponese => {
                  this.staffFileCount = reponese.data.entity.staffFileCount;
                  this.opertionCount = reponese.data.entity.opertionCount;

          })
          .catch(error => {

          })
      },
      data() {
          return {
              staffFileCount: '',
              opertionCount: ''
          }
      }
  }
</script>
<style lang="scss">
  @import "../../../common/_global.scss";
  @import "../../../common/_util.scss";
  .content {
    padding-top: 54px;
    ul {
      margin-top: rem(50);
      li {
        position: relative;
        width: rem(722);
        height: rem(182);
        background-color: $bg;
        border-radius: 5px;
        margin: 0 auto;
        margin-bottom: rem(24);
        img {
          position: relative;
          top:rem(40);
          width: rem(100);
          height: rem(100);
          display: inline-block;
          margin: 0 rem(30);
        }
        .con {
          display: inline-block;
          .p1 {
            font-size: rem(34);
            color: #121212;
          }
          .p2 {
            position: relative;
            top:rem(28);
            font-size: rem(24);
            color: #a7a7a7;
          }
        }
        .right {
          position: absolute;
          right: rem(36);
          top: rem(70);
          font-size: rem(24);
          color: #a7a7a7;
          em {
            color: #121212;
          }
        }
      }
    }
  }
</style>
