<template>
    <div id="itemList">
        <jheader head-title="请选择指标" v-on:save="closeSelect" right-text="确定"></jheader>
        <div class="listLeft">
            <div @click="changeRightList(index)" class="leftList" v-for="(data, index) in model" :class="{leftSelect: index == leftSelectIndex}">
                {{data.industryName}}
            </div>

        </div>
        <div class="listRight" v-if="model && model[leftSelectIndex]">
            <itemList1 v-for="(data,index) in model[leftSelectIndex].items" v-on:itemList1Click="itemListClick" :model="data" :selectData="dateObject" :timeArr="timeArr" key="index"></itemList1>
        </div>
        <!--<button v-on:click="closeSelect" class="zhibiaosubmitBtn">确定</button>-->
    </div>
</template>
<script>
    import itemList1 from './itemList1'
    import Jheader from '../../../components/Jheader'
export default {
    name: 'itemList',
    props: {
        model: null,
        date: Array,
        timeArr: Array
    },
    components: {
        itemList1,
        Jheader
    },
    data() {
        return {
            leftSelectIndex: 0,
            dateObject:{
                "industryName": '',
                "industryId": '',
                "periodType": '',
                "items": []
            }
        }
    },
    methods: {
        changeRightList(index) {
            this.leftSelectIndex = index;
            this.dateObject.items = [];
        },
        itemListClick(item) {
            this.dateObject.industryName = this.model[this.leftSelectIndex].industryName;
            this.dateObject.industryId = this.model[this.leftSelectIndex].industryId;
            this.dateObject.periodType = this.model[this.leftSelectIndex].periodType;
            this.dateObject.TIME_SPAN = this.timeArr.length > 1 ? '1' : '0' ;
            this.dateObject.SJ_TYPE = '1';
            this.dateObject.DATE_POINTS = this.timeArr;
            let index = this.dateObject.items.indexOf(item);
            if(index > -1) {
                this.dateObject.items[index] = item;
            }else {
                if(this.timeArr.length <= 1) {
                    this.dateObject.items = []
                }
                this.dateObject.items.push(item);
            }
            for(let i in this.dateObject.items) {
                if(!this.dateObject.items[i].indexList.length) {
                    this.dateObject.items.splice(this.dateObject.items[i],1)
                }
            }
            console.log(this.dateObject);
        },
        closeSelect() {
            this.$emit('closeSelect',this.dateObject)
        }
    }
}
</script>
<style lang="scss">
@import "../../../common/_global.scss";
@import "../../../common/_util.scss";

    #itemList {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 99;
        background-color: $bgColor;
        overflow: hidden;
padding-top:54px;
        .listLeft {
            position: relative;
            width: 30%;
            height: 100%;
            float: left;
            text-align: center;
            overflow-y: auto;
            .leftList {
                height:30px;
                line-height: 30px;
                background-color: #fff;
                border-bottom:1px solid $bgColor;
                border-right: 1px solid $bgColor;
            }
            .leftSelect {
                background-color: #efeff4;
            }
        }
        .listRight {
            position: relative;
            height: 100%;
            overflow-y: auto;
            width: 65%;
            float: right;

        }
        .zhibiaosubmitBtn {
            position: absolute;
            width: 100px;
            height: 44px;
            line-height: 44px;
            bottom: 10%;
            left: 2%;
            z-index: 99;
            background-color: #007aff;
            color: #fff;
            border: none;
        }
    }
</style>