<template>
  <div id="queryIndex">
    <jheader go-back="true" head-title="经济运行月度重要指标"></jheader>
    <div class="con">
        <div class="selectBtn">
          <div @click="timePoint" class="btn">按时间点</div>
          <div @click="selectIndex"  class="btn" tag="div">
            请选择指标
          </div>
        </div>
        <div class="timeCon">
          <div v-for="time in timeArr">{{time}}</div>
        </div>
        <jtable :model="tableData"></jtable>
    </div>
    <ul v-show="selectZhibiao" class="zhibiaoCon">
      <item v-on:dateObject="dateObject" v-for="data in selectData"
             class="item"
             :model="data">
      </item>
      <button class="confirmBtn" @click="closeSelect">确定</button>
    </ul>
    <datePicker v-if="selectDate" v-on:define="define"></datePicker>
  </div>
</template>
<script>
  import Jheader from '../../components/Jheader'
  import Jtable from '../../components/table/Jtable'
  import item from './children/item'
  import {APPINDEXS,INDEXTABLE} from '../../utils/api'
  import qs from 'qs'
  import datePicker from './children/datePicker'
  import Vue from 'vue'

  export default {
    name: 'queryIndex',
    components: {
        Jheader,
        Jtable,
      item,
      datePicker
    },
    data() {
      return {
        timeArr : [],
        selectData : [],
        selectZhibiao: false,
        tableData: {},
        selectDate: false,
        dataObject:{}

      }

    },
    created(){

    },
    methods: {
        timePoint ()  {
          this.selectDate = true
        },
        define(val) {
            console.log(val);
            this.timeArr = val;
          this.selectDate = false;
        },
        timePeriod () {
            console.log('timePeriod')
        },
        selectIndex () {
            if(this.timeArr.length < 1 ) {
                Vue.toast('请选择时间',{
                    horizontalPosition: 'center',
                    verticalPosition: 'center',
                });
                return;
            }
          this.$ajax.get(APPINDEXS,{
              params: {
                  TOKEN: window.localStorage.getItem('token')
              }
          })
            .then(response => {
              this.selectData = response.data.entity.data;
              this.selectZhibiao = true;
            })
            .catch(function (error) {
              console.log(error);
            });
        },
        dateObject(data) {
            this.dataObject = data
        },
      closeSelect() {
        var that = this;
        var data = this.dataObject;
        data.TIME_SPAN = this.timeArr.length > 1 ? '1' : '0' ;
        data.SJ_TYPE = '1';
        data.DATE_POINTS = this.timeArr;
        console.log(data);
          /* {
          "industryName": "GDP",
          "industryId": "",
          "periodType":"0",
          "TIME_SPAN":"1",
          "SJ_TYPE": "1",
          "DATE_POINTS": this.timeArr,
          "items": [
              {
                "itemName": "全国GDP",
                "itemId": "1qaz12335",
                "indexList": [
                  {
                    "indexName": "累计值",
                    "indexId": "123456734a56786790",
                    "table": "",
                    "type": 0,
                    "format": 0,
                    "unit": "亿元"
                  }
                ]
              }
            ]
          }*/
          this.$ajax.post(INDEXTABLE,qs.stringify({
            DATA: JSON.stringify(data),
            TOKEN: window.localStorage.getItem('token')
          }))
            .then(reponese => {
                this.tableData  = reponese.data;
                this.selectZhibiao = false;
                console.log( this.tableData)

            })
            .catch(function (error) {
              console.log(error);
            });

      }
    }
  }
</script>
<style lang="scss">
  @import "../../common/_global.scss";
  @import "../../common/_util.scss";

  #queryIndex {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 99;
    background-color: #fff;
    overflow: hidden;
    .con {
      margin-top: 54px;
      .selectBtn {
        height: rem(120);
        background-color: #f3f3f3;
        padding-left:3%;
        .btn {
          padding: 10px 0;
          background-color: #fff;
          width: 30%;
          margin-right: 3%;
          float: left;
          margin-top: 10px;
          text-align: center;
        }
      }
    }
  .timeCon {
    margin: 3%;
  }
  }
  .zhibiaoCon {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 100;
    background-color: #fff;
    overflow: hidden;
    overflow-y: auto;
  }
  .confirmBtn {
    margin: 0 auto;
    display: block;
    width: 40px;
    height: 20px;
    border: 1px solid #ccc;
  }

</style>
