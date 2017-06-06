<template>
  <div id="header">
    <i v-if="goBack" class="iconLeft" @click="$router.go(-1)"></i>
    <h1 v-if="headTitle">{{headTitle}}</h1>
    <template v-if="type=='tab'">
      <div class="tab">
          <router-link to="/runDaily/text" replace active-class="active">文字日报</router-link>
          <router-link to="/runDaily/report" replace active-class="active">报表日报</router-link>
      </div>
    </template>
    <span v-on:click="save" class="right">{{rightText}}</span>
  </div>
</template>
<script>
  export default{
      name: 'Jheader',
      props: ['headTitle','goBack','rightText','type'],
    methods: {
      save() {
        this.$emit('save')
      }
    }
  }
</script>
<style lang="scss">
  @import "../common/_util.scss";
  @import "../common/_global.scss";

  #header {
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height:54px;
    background-color: $allColor;
    line-height: 54px;
    z-index: 9;
    h1 {
      color: $bg;
      text-align: center;
      font-size: 20px;
      font-weight: 200;
    }
    .iconLeft {
      position: absolute;
      left:20px;
      color: $bg;
      width: 14px;
      height:20px;
      background: url("../images/back.png") center no-repeat;
      background-size: contain;
      top: 17px;
    }
    .right {
      position: absolute;
      font-size: rem(30);
      color: $bg;
      right: rem(34);
      top:0;
    }
    .tab {
      width: 156px;
      margin: 0 auto;
      overflow: hidden;
      a {
        display: block;
        float: left;
        height: 30px;
        line-height: 30px;
        padding: 0 14px;
        background-color: transparent;
        color: #fff;
        border: 1px solid #fff;
        margin-top: 12px;

      }
  a:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

  }
  a:last-child {
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    border-left: none;
  }
  a.active {
    background-color: #fff;
    color: $allColor;
  }
    }
  }
</style>
