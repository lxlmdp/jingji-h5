<template>
  <div class="Jtext">
    <span class="clickBtn" @click="selectTarget">选择指标</span>
    <span class="clickBtn" @click="selectTime">选择时间</span>
  </div>
</template>
<script>
  var DateTimePicker = require('date-time-picker')
  var options = {
    lang: 'EN', // default 'EN'. One of 'EN', 'zh-CN'
    format: 'yyyy-MM-dd', // default 'yyyy-MM-dd'
    default: '2016-10-19', // default `new Date()`. If `default` type is string, then it will be parsed to `Date` instance by `format` . Or it can be a `Date` instance
  }
  var config = {
    day: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    shortDay: ['日', '一', '二', '三', '四', '五', '六'],
    MDW: 'D, MM-d',
    YM: 'yyyy-M',
    OK: '确定',
    CANCEL: '取消'
  }

  export default {
    name: 'Jreport',
    methods: {
      selectTime () {
        var datePicker = new DateTimePicker.Date(options, config)
        datePicker.on('selected', function (formatDate, now) {
          console.log(formatDate)
          // formatData = 2016-10-19
          // now = Date instance -> Wed Oct 19 2016 20:28:12 GMT+0800 (CST)
        })
      },
      selectTarget () {
          console.log(1);
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
</style>
