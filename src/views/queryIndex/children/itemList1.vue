<template>
    <div class="itemList">
        <span class="itemTitle">{{model.itemName}}</span>
        <ul>
            <itemList2 v-for="(data,index) in model.indexList" v-on:itemList2CLick="itemList1Click" :model="data" :selectData="selectData" key="index"></itemList2>
        </ul>
    </div>
</template>
<script>
    import itemList2 from './itemList2'
    export default {
        name: 'indexList1',
        props: {
            model: null,
            selectData: null,
            timeArr: Array
        },
        data() {
            return {
                thisObject: {
                    "itemName": '',
                    "itemId": '',
                    "indexList": []
                }
            }
        },
        components: {
            itemList2
        },
        methods: {
            itemList1Click(data) {
                this.thisObject.itemName = this.model.itemName;
                this.thisObject.itemId = this.model.itemId;

                let index = this.thisObject.indexList.indexOf(data);
                if(index > -1) {
                    this.thisObject.indexList.splice(index,1)
                }else {
                    if(this.timeArr.length > 1) {
                        this.thisObject.indexList = [];
                    }
                    this.thisObject.indexList.push(data);
                }
                this.$emit('itemList1Click',this.thisObject);
            }
        }
    }
</script>
<style lang="scss">
    .itemList {
        margin-bottom: 20px;
    .itemTitle {
        font-size: 14px;
        line-height: 2;
    }
    ul {
        background-color: #fff;
        overflow: hidden;
        padding: 20px 0;
    li {
        width: 28%;
        margin: 2%;
        float: left;
        line-height: 1.5;
        padding: 20px 0;
        border: 1px solid #ccc;
        text-align: center;
    }
    }
    }
</style>