<template>
  <div id="textCon">
    <jheader go-back="true" head-title="煤电油运运行日报"></jheader>
    <div class="htmlCon" v-html="libText"></div>
    <a v-bind:href="'https://docs.google.com/gview?embedded=true&url='+data.FILE_URL">{{data.FILE_URL}}</a>
    <a href="https://docs.google.com/gview?embedded=true&url=https://contents.netbk.co.jp/pc/pdf/pr/20150130_fs.pdf">11</a>
  </div>
</template>
<script>
  import Jheader from '../../../components/Jheader'
  import {FINDREPORTWORDBYID} from '../../../utils/api'
  export default {
    name: 'JtextCon',
    data() {
      return {
        ID: this.$route.query.ID,
        data: {}
      }
    },
    created(){
        let url = FINDREPORTWORDBYID;
      this.$ajax.get(FINDREPORTWORDBYID,{
          params: {
              ID: this.$route.query.ID,
            TOKEN: window.localStorage.getItem('token')
          }
      })
        .then(response => {
            console.log(response.data);
            this.data = response.data.entity;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    computed: {
      libText:function(){
        let str = this.data.CONTENT;
        return str;
      }
    },
    components: {
          Jheader
    }
  }
</script>
<style lang="scss">
  #textCon {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 99;
    background-color: #fff;
    overflow: hidden;
  }
  .htmlCon {
    margin-top: 60px;
  }
</style>
