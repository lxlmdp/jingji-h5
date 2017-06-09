<template>
  <div id="workInfomation">
    <jheader go-back="true" head-title="经济运行工作信息"></jheader>
    <div class="conList">
      <ul>
        <router-link v-for="row in rows" tag="li" v-bind:class="{ select: row.IF_READ == '0' }"
                     :to="{ path: '/InfomationCon',query: { DATA_ID: row.DATA_ID }}">
          <p class="p1">{{row.TITLE_NAME}}</p>
          <p class="p2">工作通知<em>{{convert(row.CREATE_TIME)}}</em></p>
        </router-link>

      </ul>
    </div>
  </div>
</template>
<script>
  import Jheader from '../../components/Jheader'
  import {RELLIST} from '../../utils/api'
  import {convertDate} from '../../utils/util'

  export default {
    name:'workInfomation',
    created() {
      this.$ajax.get(RELLIST,{
          params: {
              TOKEN: window.localStorage.getItem('token'),
              page: '1',
              rows: '10'
          }
      })
        .then(reponese => {
          console.log(reponese);
          let arr = reponese.data.rows;
          this.rows = this.rows.concat(arr) ;
        })
        .catch(err => {
          console.log(err);
        })
    },
      methods: {
          convert: function (date) {
              return  convertDate(date,'YYYY-MM-DD');;
          }
      },
    components: {
      Jheader
    },
    data() {
      return {
        rows: []
      }
    }
  }
</script>
<style lang="scss">
  @import "../../common/_global.scss";
  @import "../../common/_util.scss";

  #workInfomation {
    position: absolute;
    width: 100%;
    box-sizing: border-box;
    background: $bg;
    height: 100%;
    background-color: $bgColor;
    padding-top: 54px;
    overflow-y:auto;
    -webkit-overflow-scrolling:touch;
    z-index: 99;
  .conList {
  ul {
    overflow-y: auto;
  li {
    padding: rem(30) rem(30) rem(10) rem(80);
    margin-bottom: rem(10);
    background-color: $bg;
    font-weight: 200;
    line-height: 1.5;
  .p1 {
    font-size: rem(34);
    color: #141414;
  }
  .p2 {
    position: relative;
    margin-top:rem(18);
    font-size: rem(22);
    color: #b3b3b3;
  em {
    position: relative;
    left:rem(40);
    font-weight: 200;
  }
  }

  }
  .select:before {
    content: '';
    width: 6px;
    height:6px;
    background-color: #f00;
    position: absolute;
    border-radius: 50%;
    margin-left: rem(-40);
    margin-top: rem(50);
  }
  }
  }
  }
</style>
