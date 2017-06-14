<template>
  <div id="datePicker">
      <div class="dateCon">
        <div class="chosen">
          <div>当前已选择{{dateArr.length}}个月</div>
          <ul>
            <li v-for="date in dateArr">{{date}}</li>
          </ul>
        </div>
        <div class="top">
          <span @click="yearLeft" class="left">&lt;</span>
          {{initYear}}
          <span @click="yearRight" class="right">&gt;</span>
        </div>
        <ul class="month">
          <month v-on:selectThis="selectThis" v-for="month in initMonthArr"
                 class="item"
                 :month="month"
          :year="initYear"
          :dateArr="dateArr">
          </month>
        </ul>
        <div class="dateBtn">

          <button v-on:click="clearedDateArr">清除</button>
          <button v-on:click="cancel">取消</button>
          <button v-on:click="define">确定</button>
        </div>
      </div>
  </div>
</template>
<script>
  import month from './month.vue'
  import Vue from 'vue'
  import {convertDate} from '../../../utils/util'
  export default {
      name: 'datePicker',
      props: {
        date: Array
      },
      data() {
          return {
            initYear: new Date().getFullYear(),
            initMonth: '1',
            initMonthArr: ['01','02','03','04','05','06','07','08','09','10','11','12'],
              dateArr:this.date || []
          }
      },
      components: {
        month
      },
      methods: {
          define() {
              this.$emit('define',this.dateArr);
          },
          cancel() {
              this.$emit('define',[convertDate(new Date(),'YYYY年MM月')])
          },
          clearedDateArr() {
            this.dateArr = []
          },
          yearLeft() {
              this.initYear--;
          },
          yearRight() {
              this.initYear++;
          },
          selectThis(date) {
            var index = this.dateArr.indexOf(date);
             if(index > -1) {
             this.dateArr.splice(index,1)
             }else {
             this.dateArr.push(date);
             }
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
      padding:10px 0;
      opacity: 1;
      line-height: 1.5;
      box-shadow: 0 0 10px rgba(0, 0, 0, .8);
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      user-select: none;
      background-color: #fff;
    .top {
      position: relative;
      height:40px;
      text-align: center;
      line-height: 40px;
      .left {
        position: absolute;
        left:20px;
      }
      .right {
        position: absolute;
        right:20px;
      }
    }
      .month {
        @include flexBox()
        justify-content: center;
        flex-flow: row wrap;
        align-content: flex-start;
        border-top: 1px solid #ccc;
      }
  .dateBtn {
    float: right;
    margin-top: 8px;
    button {
      padding: 4px 8px;
      border: 1px solid #ccc;
      background-color: transparent;
    }
  }
    }
  .chosen {
    margin: 0 20px;
  overflow:hidden;
    ul {
    max-height: 36px;
    overflow-y: auto;
      li {
        float: left;
        margin-right: 10px;
      }
    }
  }
  }
</style>
