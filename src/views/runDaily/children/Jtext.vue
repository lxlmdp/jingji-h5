<template>
  <div id="Jtext" class="Jtext">
      <span class="clickBtn" @click="showTime">{{dataText}}</span>

        <div v-if="datarows && datarows.length ">
            <router-link  v-for="(data,index) in datarows" tag="span" :to="{ path: '/textCon',query: { ID: data.ID }}" class="listBtn" key="index">
                <p class="p1">{{data.TITLE}}</p>
                <p class="p2">{{convert(data.CREATE_TIME)}}</p>
            </router-link>
        </div>
      <div v-else class="noContent">暂无内容</div>
  </div>
</template>
<script>
  var DateTimePicker = require('date-time-picker')
  var options = {
    lang: 'zh-CN', // default 'EN'. One of 'EN', 'zh-CN'
    format: 'yyyy-MM-dd', // default 'yyyy-MM-dd'
    default: '2017-05-28', // default `new Date()`. If `default` type is string, then it will be parsed to `Date` instance by `format` . Or it can be a `Date` instance
  }
  var config = {
    day: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    shortDay: ['日', '一', '二', '三', '四', '五', '六'],
    MDW: 'D, MM-d',
    YM: 'yyyy-M',
    OK: '确定',
    CANCEL: '取消'
  }

  import {REPORTWORDOUTLISTPAGE} from '../../../utils/api';
  import {convertDate} from '../../../utils/util'

  export default {
      name: 'Jtext',
    data() {
          return{
            dataText: '选择时间',
            datarows: []
          }
    },
      created() {
          this.$ajax.get(REPORTWORDOUTLISTPAGE, {
              params: {
                  TEMPLATE_ID: '3c629ede130045fdadf4f637792a3d92',
                  TOKEN: window.localStorage.getItem('token'),
                  page: '1',
                  rows: '10'
              }
          })
          .then(response => {
              this.datarows = response.data.rows;
            })
      .catch(function (error) {
              console.log(error);
          });
      },
    methods: {
        convert (date) {
            return  convertDate(date,'YYYY-MM-DD');;
        },
          showTime () {
            var that = this;
            var datePicker = new DateTimePicker.Date(options, config)
            datePicker.on('selected', function (formatDate, now) {
                that.dataText = formatDate;
              that.$ajax.get(REPORTWORDOUTLISTPAGE, {
                  params: {
                    TEMPLATE_ID: 'c6ef4b1c7e024477a33478cb6a8601a8',
                    SJ: formatDate,
                    TOKEN: window.localStorage.getItem('token')
                  }

                })
                  .then(response => {
                    that.datarows = response.data.rows;
                    if(response.data.rows.length) {
                        that.$router.push({ path: '/textCon', query: { ID: response.data.rows[0].ID }});
                    }
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
            })
          },
      toCon(data) {
        console.log(data,this.$router);
      }
    }
  }
</script>
<style lang="scss">
  @import "../../../common/_util.scss";
  @import "../../../common/_global.scss";
.clickBtn {
  display: block;
  margin: 68px 0 0;
  padding: rem(20);
  border: 1px solid $borderColor;
}
  .listBtn {
    display: block;
    background-color: #fff;
    padding: rem(20);
    border: 1px solid $borderColor;
      margin-top: 10px;
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
      }
  }
  .noContent {
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%,-50%);
      -ms-transform: translate(-50%,-50%);
      transform: translate(-50%,-50%);
  }
  .noContent:before {
      position: absolute;
      content: '';
      width: 50px;
      height: 2px;
      border-bottom: 1px solid #fff;
      left: -60px;
      top:2px;
  }
  .noContent:after {
      position: absolute;
      content: '';
      width: 50px;
      height: 2px;
      border-bottom: 1px solid #fff;
      right: -60px;
      top:2px;
  }
  /*.picker-mask {
    margin-top: 54px;
    background-color: transparent !important;
  }*/
</style>
