<template>
  <li>
    <div
      @click="toggle()"
      @dblclick="changeType">
      {{model.itemName}}
    </div>
    <ul class="childrenUl" v-show="open" v-if="isFolder">
      <!--<li  v-for="model in model.indexList">
        <div class="checkbox"
             v-on:click="selectClick(model,$event)"></div>{{model.indexName}}</li>-->
        <item2 v-for="model in model.indexList" :model="model"
        v-on:selectClick="selectClick"></item2>

    </ul>
  </li>
</template>
<script>
  import item2 from './item2'

  export default {
    name: 'item1',
    props: {
      model: Object
    },
    components: {
      item2
    },
    data: function () {
      return {
        open: false,
        selectArr : [],
        inSelectArr: [],
        thisObject: {
           "itemName": this.model.itemName,
           "itemId": this.model.itemId,
           "indexList": []
        }
      }
    },
    computed: {
      isFolder: function () {
        return this.model.indexList &&
          this.model.indexList.length
      }
    },
    methods: {
      toggle: function () {
        if (this.isFolder) {
          this.open = !this.open
        }
      },
      changeType: function () {
        if (!this.isFolder) {
          Vue.set(this.model, 'indexList', [])
          this.addChild()
          this.open = true
        }
      },
      selectClick : function (model) {
          let index = this.thisObject.indexList.indexOf(model);
          if(index > -1) {
              console.log('splice');
              this.thisObject.indexList.splice(index,1)
          }else {
              this.thisObject.indexList.push(model);
          }
          this.$emit('selectClick',this.thisObject);
      }
    }
  }
</script>
<style>
  .childrenUl {
    margin-left: 20px;
  }

</style>
