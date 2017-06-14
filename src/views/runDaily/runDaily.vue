<template>
  <div id="runDaily">
    <!--<jheader type="tab" go-back="true"></jheader>-->
    <jheader head-title="文字日报" go-back="true"></jheader>
    <router-view></router-view>
  </div>
</template>
<script>
  import Jheader from '../../components/Jheader'
  export default {
    name: 'runDaily',
    components: {
          Jheader
    }
  }
</script>
<style lang="scss">
  @import "../../common/_global.scss";
#runDaily {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 99;
  background-color: $bgColor;
  overflow: hidden;
}
</style>
