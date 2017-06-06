<template>
  <div id="workInfomation">
    <jheader go-back="true" head-title="经济运行工作信息"></jheader>
    <div class="conList">
      <ul>
        <li class="select">
          <p class="p1">2016年全国经济运行调节培训班在北京举办济运行调节培训班在北京举办</p>
          <p class="p2">工作通知<em>2017-05-23</em></p>
        </li>
        <li class="select">
          <p class="p1">2016年全国经济运行调节培训班在北京举办济运行调节培训班在北京举办</p>
          <p class="p2">工作通知<em>2017-05-23</em></p>
        </li>
        <li class="select">
          <p class="p1">2016年全国经济运行调节培训班在北京举办济运行调节培训班在北京举办</p>
          <p class="p2">工作通知<em>2017-05-23</em></p>
        </li>
        <li class="select">
          <p class="p1">2016年全国经济运行调节培训班在北京举办济运行调节培训班在北京举办</p>
          <p class="p2">工作通知<em>2017-05-23</em></p>
        </li>
        <li>
          <p class="p1">2016年全国经济运行调节培训班在北京举办济运行调节培训班在北京举办</p>
          <p class="p2">工作通知<em>2017-05-23</em></p>
        </li>
        <li>
          <p class="p1">2016年全国经济运行调节培训班在北京举办济运行调节培训班在北京举办</p>
          <p class="p2">工作通知<em>2017-05-23</em></p>
        </li>
        <li>
          <p class="p1">2016年全国经济运行调节培训班在北京举办济运行调节培训班在北京举办</p>
          <p class="p2">工作通知<em>2017-05-23</em></p>
        </li>
        <li>
          <p class="p1">2016年全国经济运行调节培训班在北京举办济运行调节培训班在北京举办</p>
          <p class="p2">工作通知<em>2017-05-23</em></p>
        </li>
        <li>
          <p class="p1">2016年全国经济运行调节培训班在北京举办济运行调节培训班在北京举办</p>
          <p class="p2">工作通知<em>2017-05-23</em></p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import Jheader from '../../components/Jheader'

  export default {
    name:'workInfomation',
    components: {
      Jheader
    }
  }
</script>
<style lang="scss">
  @import "../../common/_global.scss";
  @import "../../common/_util.scss";

  #workInfomation {
    position: absolute;
    width: 100%;
    box-sizing: border-box;
    background: $bg;
    height: 100%;
    background-color: $bgColor;
    padding-top: 54px;
    overflow-y:auto;
    -webkit-overflow-scrolling:touch;
    z-index: 99;
  .conList {
  ul {
    overflow-y: auto;
  li {
    padding: rem(30) rem(30) rem(10) rem(80);
    margin-bottom: rem(10);
    background-color: $bg;
    font-weight: 200;
    line-height: 1.5;
  .p1 {
    font-size: rem(34);
    color: #141414;
  }
  .p2 {
    position: relative;
    margin-top:rem(18);
    font-size: rem(22);
    color: #b3b3b3;
  em {
    position: relative;
    left:rem(40);
    font-weight: 200;
  }
  }

  }
  .select:before {
    content: '';
    width: 6px;
    height:6px;
    background-color: #f00;
    position: absolute;
    border-radius: 50%;
    margin-left: rem(-40);
    margin-top: rem(50);
  }
  }
  }
  }
</style>
