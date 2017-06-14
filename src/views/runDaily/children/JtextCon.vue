<template>
  <div id="textCon">
    <jheader go-back="true" type="collect"  head-title="煤电油运运行日报" v-on:collect="collect" v-bind:is-select="selectStarDate"></jheader>
    <div class="scrollCon">
      <div class="htmlCon" v-html="libText"></div>
      <div class="baobiaoBtn">
        <span @click="showTable">{{showTableText}}</span>
      </div>
      <table class="baobiaoTable" v-show="showBaobiao" border="1">
        <tr v-for="data in data.DATA">
          <td>{{data.NAME_CH}}</td>
          <td>{{data.VALUE}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
  import Jheader from '../../../components/Jheader'
  import {FINDREPORTWORDBYID,APPINDEXCOUNT,FILESAVE,FILEINFO,UPDATEIFDELETE} from '../../../utils/api'

  export default {
    name: 'JtextCon',
    data() {
      return {
        ID: this.$route.query.ID,
        data: {},
        showBaobiao: false,
        showTableText: '查看报表',
          selectStarDate: 'false'
      }
    },
    created(){
        let url = FINDREPORTWORDBYID;
        if(this.$route.query.ID) {
            this.$ajax.get(FINDREPORTWORDBYID,{
                params: {
                    ID: this.$route.query.ID,
                    TOKEN: window.localStorage.getItem('token')
                }
            })
                .then(response => {
                this.data = response.data.entity;
            if(response.data.entity.IS_COLLET !== 0) {
                this.selectStarDate = 'true';
            }
        })
        .catch(function (error) {
                console.log(error);
            });
        }else  {
            this.$ajax.get(FILEINFO,{
                params: {
                    FILE_ID: this.$route.query.FILE_ID,
                    TOKEN: window.localStorage.getItem('token')
                }
            })
                .then(response => {
                this.data = response.data.entity;
            if(response.data.entity.IS_COLLET !== 0) {
                this.selectStarDate = 'true';
            }
        })
        .catch(function (error) {
                console.log(error);
            });
        }

    },
    computed: {
      libText:function(){
        let str = this.data.CONTENT;
        return str;
      }
    },
    components: {
          Jheader
    },
      methods: {
          collect() {
              //true 取消收藏
              let url = null;
              if(this.selectStarDate == 'true') {
                  url = UPDATEIFDELETE;
              }else {
                  url = FILESAVE
              }
              this.$ajax.get(url,{
                  params: {
                      ID: this.$route.query.ID || this.data.SRC_ID,
                      TYPE: '0',
                      TOKEN: window.localStorage.getItem('token'),
                  }
              })
                  .then(response => {
                      console.log(response.data)
                      if(response.data.entity.IF_DELETED && response.data.entity.IF_DELETED !== 0) {
                          this.selectStarDate = 'false';
                          return;
                      }
                      this.selectStarDate = 'true';
                  })
                  .catch(err => {
                      console.log(err);
                  })

          },
          showTable() {
              this.showTableText == '查看报表' ? this.showTableText = '隐藏报表' : this.showTableText = '查看报表';
              this.showBaobiao = !this.showBaobiao;
          },
          selectStar() {
              console.log(this.selectStarDate);
              return this.selectStarDate;
          }
      }
  }
</script>
<style lang="scss">
  #textCon {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 99;
    background-color: #fff;
    overflow: hidden;
  .scrollCon {
    position: relative;
    width:100%;
    height: 100%;
    overflow-y: auto;
  }
    .baobiaoBtn {
    margin-top: 20px;
      span {
        width: 100px;
        margin: 0 auto;
        text-align: center;
        display: block;
        background-color: #1055f1;
        color: #fff;
        padding: 10px 0;
        border-radius: 4px;

      }
    }
  .baobiaoTable {
      margin: 20px auto;
   th,td {
    padding: 9px 10px;
    text-align: center;
    white-space: nowrap;
  }
  }

  }
  .htmlCon {
    margin-top: 70px;
    padding: 0 20px;
    line-height: 2;
    font-size: 14px;
  }
</style>
