<template>

  <li class="list">
    <div
      :class="{bold: isFolder}"
      @click="toggle"
      @dblclick="changeType">
      <!--<input type="checkbox">-->
      {{model.industryName}}
    </div>
    <ul class="childrenUl" v-show="open" v-if="isFolder">
      <item1
        class="item"
        v-for="model in model.items"
        :model="model">
      </item1>
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
        open: false
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
