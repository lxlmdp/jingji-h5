<template>
  <nav id="nav">
    <ul>
      <router-link to="/index" tag="li" active-class="active">
        <em></em>
        <strong>首页</strong>
      </router-link>
      <router-link to="/fileList" tag="li" active-class="active">
        <em></em>
        <strong>相关文件</strong>
      </router-link>
      <router-link to="/home" tag="li" active-class="active">
        <em></em>
        <strong>我的</strong>
      </router-link>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'jfooter'
  }
</script>
<style lang="scss">
  @import "../common/_util.scss";
  @import "../common/_global.scss";
  #nav {

    position: absolute;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
    width: 100%;
    height: rem(120);
    z-index: 9;
    font-size: rem(20);
    background: #fff;
    border-top: 1px solid $borderColor;
    ul {
      @include flexBox

      li {
        flex: 1;
        text-align: center;
        color: $footerTextColor;
        em {
          display: block;
          width: rem(44);
          height: rem(40);
          margin: rem(20) auto rem(10);
        }
        strong {
          font-weight: 200;
        }
      }
      li:nth-child(1) {
        em {
          background: url("../images/1_1.png") center no-repeat;
          background-size: contain;
        }
      }
      li:nth-child(2) {
        em {
          background: url("../images/2_2.png") center no-repeat;
          background-size: contain;
        }
      }
      li:nth-child(3) {
        em {
          background: url("../images/3_3.png") center no-repeat;
          background-size: contain;
        }
      }
      li:nth-child(1).active {
        color: $allColor;
        em {
          background: url("../images/1.png") center no-repeat;
          background-size: contain;
        }
      }
      li:nth-child(2).active {
        color: $allColor;
        em {
          background: url("../images/2.png") center no-repeat;
          background-size: contain;
        }
      }
      li:nth-child(3).active {
        color: $allColor;
        em {
          background: url("../images/3.png") center no-repeat;
          background-size: contain;
        }
      }
    }
  }
</style>

