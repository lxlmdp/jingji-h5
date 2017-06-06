<template>
  <div id="index">
    <jheader  head-title="经济运行监测预测协调系统"></jheader>
    <jcontent></jcontent>
    <!--<pdf src="../../static/test.pdf"></pdf>-->
  </div>
</template>
<script>
  import Jheader from '../../components/Jheader'
  import Jcontent from './children/Jcontent'
  import pdf from 'vue-pdf'

  export default{
    name: 'index',
    components: {
      Jheader,
      Jcontent,
      pdf
    },
    methods: {

    }
  }
</script>
<style lang="scss">
  @import "../../common/_util.scss";
  @import "../../common/_global.scss";
  #index {
    position: absolute;
    width: 100%;
    box-sizing: border-box;
    background: $bg;
    height: 100%;
    padding-bottom: rem(120);
    background-color: $bgColor;
  }
  .content {

  }
</style>

