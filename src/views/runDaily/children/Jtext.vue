<template>
  <div id="Jtext" class="Jtext">
      <span class="clickBtn" @click="showTime">{{dataText}}</span>

      <router-link v-for="data in datarows" tag="span" :to="{ path: '/textCon',query: { ID: data.ID }}" class="listBtn">{{data.TITLE}}</router-link>
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
                  TEMPLATE_ID: 'c6ef4b1c7e024477a33478cb6a8601a8',
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
              // formatData = 2016-10-19
              // now = Date instance -> Wed Oct 19 2016 20:28:12 GMT+0800 (CST)
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
  margin: 68px rem(36) 0;
  padding: rem(20);
  border: 1px solid $borderColor;
}
  .listBtn {
    display: block;
    margin: 10px rem(36) 0;
    padding: rem(20);
    border: 1px solid $borderColor;
  }
  /*.picker-mask {
    margin-top: 54px;
    background-color: transparent !important;
  }*/
</style>
