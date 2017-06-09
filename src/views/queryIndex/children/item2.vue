<template>
    <li>
        <div class="zhibiaocheckbox"
             v-on:click="selectClick($event)" v-bind:class="{zhibiaoselect: isSelect()}"></div>{{model.indexName}}
    </li>
</template>
<script>
export default {
    name: 'item2',
    props: {
        model: Object,
        selectData: Object
    },

    methods: {
        selectClick(e) {
            this.$emit('selectClick',this.model)
        },
        isSelect() {
            let that = this;
            let arr = this.selectData.items;
            for(let i=0; i<arr.length; i++ ) {
                for(let j=0; j<arr[i].indexList.length; j++) {
                    if(arr[i].indexList[j] == that.model) {
                        return true;
                    }
                }
            }
            return false;
        }
    }
}
</script>
<style lang="scss">
    .zhibiaocheckbox {
        width: 10px;
        height:10px;
        border: 1px solid #ccc;
        float: left;
        margin-right: 5px;
    }
    .zhibiaoselect {
        background-color: #ccc;
    }
</style>