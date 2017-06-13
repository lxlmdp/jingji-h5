<template>
  <div id="queryIndex">
    <jheader go-back="true" head-title="经济运行月度重要指标"></jheader>
    <div class="con">
        <div class="selectBtn">
          <div @click="timePoint" class="btn">{{timeArr[0] || initTimeDate}}</div>

            <!--<div v-for="zhibiao in zhibiaoArr" class="btn" >
                {{zhibiao}}
            </div>-->
            <div @click="initZhibiaoIndex = '2' " class="btn" :class="{zhibiaoIndex: initZhibiaoIndex == '2'}">
                煤炭行业
            </div>
            <div @click="initZhibiaoIndex = '3' " class="btn" :class="{zhibiaoIndex: initZhibiaoIndex == '3'}">
                电力行业
            </div>
            <div @click="selectIndex" class="btn">
                更多指标
            </div>
        </div>
        <jtable :model="tableData"></jtable>
    </div>
    <div v-show="selectZhibiao" class="zhibiaoCon">
      <!--<item v-on:dateObject="dateObject" v-for="data in selectData"-->
             <!--class="item"-->
             <!--:model="data">-->
      <!--</item>-->
        <itemTree v-for="data in selectData" :model="data">

        </itemTree>


      <button class="confirmBtn" @click="closeSelect">确定</button>
    </div>
    <datePicker v-if="selectDate" v-on:define="define" :date="timeArr"></datePicker>
      <Jloading v-show="showLoading"></Jloading>
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
  import itemTree from './children/itemTree.vue'
  import Jloading from '../../components/loading/Jloading'

  export default {
    name: 'queryIndex',
    components: {
        Jheader,
        Jtable,
      item,
      datePicker,
        itemTree,
        Jloading
    },
    data() {
      return {
          showLoading: false,
        timeArr : [],
        selectData : [],
        selectZhibiao: false,
        tableData: {},
        selectDate: false,
        dataObject:{},
        initTimeDate: new Date().getFullYear() + '年' + (new Date().getMonth() + 1) + '月',
        zhibiaoArr: ['煤炭行业','电力行业'],
          initZhibiaoIndex: '2'

      }
    },
    created(){
        this.timeArr.push(this.initTimeDate);
        this.initAjax();
        this.showLoading = true;

    },
    watch: {
        initZhibiaoIndex: function (){
            this.showLoading = true;
            this.initAjax()
        }
    },
    methods: {
        timePoint ()  {
          this.selectDate = true
        },
        define(val) {
          this.timeArr = val || [];
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
            })
            .catch(function (error) {
              console.log(error);
            });

      },
        initAjax() {
            this.$ajax.get(APPINDEXS,{
                params: {
                    TOKEN: window.localStorage.getItem('token')
                }
            })
            .then(response => {
                this.selectData = response.data.entity.data;
                let data = this.selectData[this.initZhibiaoIndex];
                this.showTable(data);
            })
            .catch(function (error) {
                    console.log(error);
                });


        },
        showTable(data) {

            data.periodType = '0';
            data.TIME_SPAN = '0' ;
            data.SJ_TYPE = '1';
            data.DATE_POINTS = [this.initTimeDate];

            this.$ajax.post(INDEXTABLE,qs.stringify({
                DATA: JSON.stringify(data),
                TOKEN: window.localStorage.getItem('token')
            }))
                .then(response => {
                this.showLoading = false;
                this.tableData  = response.data;

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
      margin-bottom: 20px;
        .btn {
          padding: 10px 0;
          background-color: #fff;
          width: 22%;
          margin-right: 3%;
          float: left;
          margin-top: 10px;
          text-align: center;
        }
        .zhibiaoIndex {
            background-color: #1055f1;
            color: #fff;
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
