<template>
  <div id="fileList">
      <jheader go-back="true" head-title="有关文件"></jheader>
      <div class="conList">
        <ul>
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
    name:'JfileList',
    components: {
        Jheader
    }
  }
</script>
<style lang="scss">
  @import "../../common/_global.scss";
  @import "../../common/_util.scss";

  #fileList {
    position: absolute;
    width: 100%;
    box-sizing: border-box;
    background: $bg;
    height: 100%;
    padding-bottom: rem(120);
    background-color: $bgColor;
    overflow-y:auto;
    -webkit-overflow-scrolling:touch;
    padding-top: 54px;
    .conList {
      ul {
        overflow-y: auto;
        li {
          padding: rem(30) rem(30) rem(10);
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
      }
    }
  }
</style>
