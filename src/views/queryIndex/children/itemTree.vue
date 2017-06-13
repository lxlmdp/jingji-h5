<template>
    <li class="itemTree">
        <div @click="toggle">{{model.industryName || model.itemName || model.indexName}}</div>
        <ul v-show="open" v-if="isFolder">
            <itemTree v-for="cel in model.items || model.indexList" :model="cel"></itemTree>
        </ul>
    </li>
</template>
<script>
export default {
    name: 'itemTree',
    props: {
        model: null
    },
    data() {
        return {
            open: false
        }
    },
    computed: {
        isFolder: function() {
            return this.model.items && this.model.items.length || this.model.indexList && this.model.indexList.length
        }
    },
    methods: {
        toggle() {
            this.open = !this.open
        }
    }
}
</script>
<style lang="scss">
    .itemTree {
        margin: 20px;
        border-bottom: 1px solid #ccc;
    }
</style>