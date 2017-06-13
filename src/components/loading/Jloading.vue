<template>
    <div id="loading">
        <img class="loadingImg" src="../../images/loading.gif">
    </div>
</template>
<script>
    export default {
        name: 'loading'
    }
</script>
<style lang="scss">
    #loading {
        position: absolute;
        width: 100%;
        height:100%;
        top:0;
        left: 0;
        .loadingImg {
            position: absolute;
            width: 100px;
            height: 100px;
            top: 50%;
            left: 50%;
            margin-left: -50px;
            margin-top: -50px;

        }
    }
</style>