<template>
  <div id="datePicker">
      <div class="dateCon">
        <div class="top">
          <p>{{initYear}}</p>
          <p>{{initYear}}年{{initMonth}}月</p>
        </div>
        <ul class="month">
          <li v-for="month in initMonthArr">{{month}}月  </li>
        </ul>
      </div>
  </div>
</template>
<script>
  export default {
      name: 'datePicker',
      data() {
          return {
              initYear: new Date().getFullYear(),
            initMonth: '1',
            initMonthArr: [1,2,3,4,5,6,7,8,9,10,11,12]
          }
      }
  }
</script>
<style lang="scss">
  @import "../../../common/_util.scss";
  @import "../../../common/_global.scss";

  #datePicker{
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 99;
    background-color: rgba(0,0,0,.5);
    top:0;
    left:0;
    .dateCon {
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      width: 280px;
      height:280px;
      opacity: 1;
      line-height: 1.5;
      box-shadow: 0 0 10px rgba(0, 0, 0, .8);
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      user-select: none;
      background-color: #fff;
    .top {
      height:60px;
      text-align: center;
    }
      .month {
        @include flexBox()
      justify-content: center;
        flex-flow: row wrap;
        align-content: flex-start;
        border-top: 1px solid #ccc;
        li {
          -webkit-box-flex: 1;
          -ms-flex: 1;
          flex: 1;
          box-sizing: border-box;
          background-color: white;
          flex: 0 0 33.33%;
          height: 50px;
          text-align: center;
          line-height: 50px;
          border-left: 1px solid #ccc;
          border-bottom: 1px solid #ccc;
        }
      }
    }
  }
</style>
