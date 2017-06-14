<template>
        <li v-on:click="itemList2CLick()" v-bind:class="{selectZhibiao:isSelect()}">
            {{model.indexName}}
        </li>
</template>
<script>
    export default {
        name: 'itemList2',
        props: {
            model: null,
            selectData: null
        },
        methods: {
            itemList2CLick() {
                this.$emit('itemList2CLick',this.model)
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
    .selectZhibiao {
        background-color: #007aff;
        color: #fff;
    }
</style>