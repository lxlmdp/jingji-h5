<template>
    <!--<li  v-for="(model, index) in model.indexList">
        <div class="checkbox"
             @click="selectClick($event)"></div>{{model.indexName}}</li>-->
    <li>
        <div class="zhibiaocheckbox"
             v-on:click="selectClick($event)"></div>{{model.indexName}}
    </li>
</template>
<script>
export default {
    name: 'item2',
    props: {
        model: Object
    },
    methods: {
        selectClick(e) {
            e.target.classList.toggle('zhibiaoselect');
            this.$emit('selectClick',this.model)
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