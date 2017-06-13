<template>

  <li class="list">
    <div
      :class="{bold: isFolder}"
      @click="toggle"
      @dblclick="changeType">
      {{model.industryName}}
    </div>
    <ul class="childrenUl" v-show="open" v-if="isFolder">
      <!--<item1-->
        <!--class="item"-->
        <!--v-for="model in model.items"-->
        <!--:model="model" :selectData="dateObject" v-on:selectClick="itemsParent">-->
      <!--</item1>-->
      <item>

      </item>
    </ul>
  </li>

</template>

<script>
  import item1 from './item1'
  export default {
    name: 'item',
    props: {
        model: Object
    },
    components: {
      item1
    },
    data: function () {
      return {
        open: false,
        dateObject:{
            "industryName": this.model.industryName,
            "industryId": this.model.industryId,
            "periodType": this.model.periodType,
            "items": []
        }
      }
    },
    computed: {
      isFolder: function () {
        return this.model.items &&
          this.model.items.length
      }
    },
    methods: {
      toggle: function () {
        if (this.isFolder) {
          this.open = !this.open
        }
      },
      changeType: function () {
          console.log(2);
        if (!this.isFolder) {
          Vue.set(this.model, 'items', [])
          this.addChild()
          this.open = true
        }
      },
      itemsParent:function (item) {
        let arr =  this.dateObject.items;
        let index = arr.indexOf(item);
        if(index > -1) {
            arr[index] = item;
        }else {
            arr.push(item);
        }
        for(let i in arr) {
            if(!arr[i].indexList.length) {
                arr.splice(this.dateObject.items[i],1)
            }
        }
        this.$emit('dateObject',this.dateObject);
      }
    }
  }
</script>
<style lang="scss">
  .list {
    margin:20px;
  }
.childrenUl {
  margin-left: 20px;
  li {
    margin-top: 10px;
  }
}
</style>
