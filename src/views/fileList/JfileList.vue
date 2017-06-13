<template>
  <div id="fileList">
      <jheader go-back="true" head-title="有关文件"></jheader>
      <div class="conList">
        <ul>
          <li v-for="file in fileData.rows"  @click="jumpPath(file)">
            <p class="p1">{{file.TITLE}}</p>
            <p class="p2">工作通知<em>{{convert(file.CREATE_TIME)}}</em></p>
          </li>
        </ul>
      </div>
  </div>
</template>
<script>
  import Jheader from '../../components/Jheader'
  import {FILELIST} from '../../utils/api'
  import {convertDate} from '../../utils/util'

  export default {
    name:'JfileList',
    components: {
        Jheader
    },
      created() {
        var that = this;
        this.$ajax.get(FILELIST,{
            params: {
                page:'1',
                rows: '100', //TODO 下拉加载
                TOKEN: window.localStorage.getItem('token')
            }
        }).then(response => {
              this.fileData =  response.data;
          }).catch(err => {
              console.log(err)
          })
      },
      data() {
        return {
            fileData: {}
        }
      },
      methods: {
          convert (date) {
              return  convertDate(date,'YYYY-MM-DD');;
          },
          jumpPath (data) {
              var that = this;
              console.log(data);
              if(data.MESSAGE_TYPE === '0') {
                  that.$router.push({ path: '/textCon', query: { FILE_ID: data.FILE_ID }});
              }else {
                  that.$router.push({ path: '/InfomationCon', query: { FILE_ID: data.FILE_ID }});
              }
          }
      }
  }
</script>
<style lang="scss">
  @import "../../common/_global.scss";
  @import "../../common/_util.scss";

  #fileList {
    position: absolute;
    width: 100%;
    box-sizing: border-box;
    background: $bg;
    height: 100%;
    padding-bottom: rem(120);
    background-color: $bgColor;

    padding-top: 54px;
    .conList {
        position: relative;
        width: 100%;
        height: 100%;
        overflow-y:auto;
        -webkit-overflow-scrolling:touch;
      ul {
        overflow-y: auto;
        li {
          padding: rem(30) rem(30) rem(10);
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
      }
    }
  }
</style>
