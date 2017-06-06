<template>
  <div id="timePeriod">
    <jheader go-back="true" head-title="选择时间段"></jheader>
    <div class="con">

    </div>
    <input type="date" value="起始时间">
    <input type="date" value="截止时间">
  </div>
</template>
<script>
  import Jheader from '../../../components/Jheader'

  export default {
      name: 'timePeriod',
    components: {
          Jheader
    }
  }
</script>
<style lang="scss">
#timePeriod {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 99;
  background-color: #fff;
  overflow: hidden;
  .con {
    margin-top: 54px;
  }
}
</style>
