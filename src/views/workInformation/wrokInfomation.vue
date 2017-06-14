<template>
  <div id="workInfomation">
    <jheader go-back="true" head-title="经济运行工作信息"></jheader>
    <div class="conList">
      <ul>
        <router-link v-for="(row,index) in rows" tag="li" v-bind:class="{ select: row.IF_READ == '0' }"
                     :to="{ path: '/InfomationCon',query: { DATA_ID: row.DATA_ID }}" key="index">
          <p class="p1">{{row.TITLE_NAME}}</p>
          <p class="p2">{{convert(row.CREATE_TIME)}}</p>
          <span v-on:click.stop="listCollect(row)" class="collectBtn">
            <span v-if="row.IS_COLLET === 0">
              <i class="starBtn"></i>
            </span>
            <span v-else>
              <i class="selectStarBtn"></i>
            </span>
          </span>
        </router-link>

      </ul>
    </div>
  </div>
</template>
<script>
  import Jheader from '../../components/Jheader'
  import {RELLIST,FILESAVE,UPDATEIFDELETE} from '../../utils/api'
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
          convert (date) {
              return  convertDate(date,'YYYY-MM-DD');
          },
          listCollect (row) {
              let url =null;
            if(row.IS_COLLET === 0){
                url = FILESAVE;
            }else {
                url = UPDATEIFDELETE;
            }
            this.$ajax.get(url,{
                params: {
                    TOKEN: window.localStorage.getItem('token'),
                    ID: row.DATA_ID,
                    TYPE: '1'
                }
            })
                .then(response => {
                    if(row.IS_COLLET === 0) {
                        row.IS_COLLET = 1;
                    }else {
                        row.IS_COLLET = 0;
                    }
                })
                .catch(err => {
                    console.log(err);
                })
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
    position: relative;
    padding: rem(30) rem(30) rem(10) rem(80);
    margin-bottom: rem(10);
    background-color: $bg;
    font-weight: 200;
    line-height: 1.5;
  .p1 {
    font-size: rem(34);
    color: #141414;
    margin-right: rem(100);
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
  .collectBtn{
    position: absolute;
    right: 20px;
    top:50%;
    margin-top: -12px;
    color: #fff;
    padding: 0px 10px;
    border-radius: 6px;
    font-size: 12px;
    line-height: 2;
    i{
      display: block;
      width: rem(50);
      height: rem(50);
    }
    .starBtn {
      background: url("../../images/collect.jpg") center no-repeat;
      background-size: contain;
    }
    .selectStarBtn {
      background: url("../../images/collect_1.jpg") center no-repeat;
      background-size: contain;
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
