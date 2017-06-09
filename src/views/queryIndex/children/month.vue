<template>
    <li class="monthList" :class="{monthselect: isSelect}"
        v-on:click="selectThis">
        {{month}}月
    </li>
</template>
<script>
export default{
    name: 'month',
    props: {
        month: Number,
        year: Number,
        dateArr: Array
    },
    watch: {
        year: function (val) {
            this.isSelect = false;
            let date = this.year + '年' + this.month + '月';
            let index = this.dateArr.indexOf(date);
            if(index > -1) {
                this.isSelect = true;
            }
        }
    },
    data() {
        return {
            isSelect: false
        }
    },
    methods: {
        selectThis() {
            this.isSelect = ! this.isSelect;
            let date = this.year + '年' + this.month + '月';
            this.$emit('selectThis',date)

        }
    }
}
</script>
<style>
    .monthList{
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
.monthselect {
    background-color: #1055f1;
    color: #fff;
}
</style>