<template>
<div>
  <div class="table-wrapper" v-if="model && model.length">
    <div class="scrollable">
     <table class="responsive" >
    <tbody>
    <tr>
      <th v-for="data in model.entity.list">{{data.INDEXS[0].INDEX_NAME}}</th>
    </tr>
    <tr v-for="data in model.entity.list">
      <td v-for="value in data.INDEXS">{{value.VALUE || '空值'}}</td>
    </tr>
    </tbody>
  </table></div><div class="pinned"><table class="">
    <tbody>
    <tr>
      <th>指标名称</th>
    </tr>
    <tr v-for="data in model.entity.list">
      <td>{{data.ITEM_NAME}}</td>
    </tr>
    </tbody>
  </table>
  </div>
  </div>
</div>
</template>
<script>
  export default{
    name: 'Jtable',
    props: {
      model: {}
    }
  }


</script>
<style lang="scss">
  .table-wrapper {
    position: relative;
    margin-bottom: 20px;
    overflow: hidden;
    border: 1px solid #ccc;
  }
  .scrollable {
    overflow: scroll;
    overflow-y: hidden;
  }
  .responsive {
    margin-left: 35%;
  }
  .responsive th,td {
    padding: 9px 10px;
    text-align: center;
    white-space: nowrap;
  }
  .pinned {
    position: absolute;
    left: 0;
    top: 0;
    background: #fff;
    width: 35%;
    overflow: hidden;
    overflow-x: scroll;
    border-right: 1px solid #ccc;
  }
  .pinned table {
    width: 100%;
  }
  .pinned th,td {
    padding: 9px 10px;
    text-align: center;
    white-space: nowrap;
  }
  table tbody tr:nth-child(even) {
    background: #f9f9f9;
  }
</style>
