<template>
  <div id="textCon">
    <jheader go-back="true" type="collect"  head-title="煤电油运运行日报" v-on:collect="collect" v-bind:is-select="selectStarDate"></jheader>
    <div class="htmlCon" v-html="libText"></div>
    <div class="baobiaoBtn">
      <span @click="showTable">{{showTableText}}</span>
    </div>
    <table v-show="showBaobiao" border="1">
      <tr>
        <td>name</td>
        <td>value</td>
      </tr>
      <tr v-for="data in data.DATA">
        <td>{{data.NAME_CH}}</td>
        <td>{{data.VALUE}}</td>
      </tr>
    </table>
    <!--<a v-bind:href="'https://docs.google.com/gview?embedded=true&url='+data.FILE_URL">{{data.FILE_URL}}</a>-->
  </div>
</template>
<script>
  import Jheader from '../../../components/Jheader'
  import {FINDREPORTWORDBYID,APPINDEXCOUNT,FILESAVE,FILEINFO} from '../../../utils/api'

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
              this.$ajax.get(FILESAVE,{
                  params: {
                      ID: this.$route.query.ID,
                      TYPE: '0',
                      TOKEN: window.localStorage.getItem('token'),

                  }
              })
                  .then(response => {
                      console.log(response.data);
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
    .baobiaoBtn {
      span {
        width: 100px;
        margin: 0 auto;
        text-align: center;
        display: block;
        background-color: #1055f1;
        color: #fff;
        padding: 6px 0;
        border-radius: 4px;

      }
    }
  }
  .htmlCon {
    margin-top: 70px;
    padding: 0 20px;
    line-height: 1.5;
  }
</style>
