<template>
  <div id="selectIndex">
    <jheader go-back="true" head-title="请选择指标"></jheader>
    <ul class="con">
      <item  v-for="{data,index} in selectData"
             class="item"
             :model="data" :key="index">
      </item>
    </ul>



  </div>
</template>
<script>
  import Jheader from '../../../components/Jheader'
  import item from './item'
  export default {
    name: 'selectIndex',
    data () {
        return {
            selectData : []
        }
    },
    components: {
        item,
      Jheader
    },
    created(){
      this.$ajax.get('http://localhost:8080/static/json/index.json')
        .then(response => {
          this.selectData = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    methods: {

    }
  }
</script>
<style lang="scss">
  @import "../../../common/_global.scss";
  @import "../../../common/_util.scss";

  #selectIndex {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 99;
    background-color: #fff;
    overflow: auto;
  .children {
    margin-left: rem(50);
  }
  .childrenSecond {
    margin-left: rem(50);
    li {
      margin: rem(10) 0;
      border-bottom: 1px solid #ccc;
    }
  }
  .con {
    margin-top: 54px;
  }
}
</style>
