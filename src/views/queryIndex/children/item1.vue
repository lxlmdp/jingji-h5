<template>
  <li>
    <div
      @click="toggle()"
      @dblclick="changeType">
      <!--<input type="checkbox">-->
      {{model.itemName}}
    </div>
    <ul class="childrenUl" v-show="open" v-if="isFolder">
      <li  v-for="(model, index) in model.indexList">
        <div class="checkbox"
             @click="selectClick($event)"></div>{{model.indexName}}</li>
    </ul>
  </li>
</template>
<script>
  export default {
    name: 'item1',
    props: {
      model: Object
    },
    data: function () {
      return {
        open: false,
        selectArr : [],
        inSelectArr: []
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
      selectClick : function (e) {
        e.target.classList.toggle('select')
      }
    }
  }
</script>
<style>
  .childrenUl {
    margin-left: 20px;
  }
  .checkbox {
    width: 10px;
    height:10px;
    border: 1px solid #ccc;
    float: left;
    margin-right: 5px;
  }
  .select {
    background-color: #ccc;
  }
</style>
