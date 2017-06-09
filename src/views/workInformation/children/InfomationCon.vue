<template>
    <div id="InfomationCon">
        <jheader go-back="true" head-title="InfomationInfo"></jheader>

    </div>
</template>
<script>
    import Jheader from '../../../components/Jheader.vue'

    import {RELINFO} from '../../../utils/api'

    export default {
        name: 'InfomationCon',
        created() {
            this.$ajax.get(RELINFO,{
                params: {
                    DATA_ID: this.$route.query.DATA_ID,
                    TOKEN: window.localStorage.getItem('token')
                }
            })
            .then(reponese => {
                console.log(reponese.data)
            })
            .catch(err => {
                console.log(err)
            })
        },
        data() {
            return {

            }
        },
        components: {
            Jheader
        }
    }
</script>
<style lang="scss">
    #InfomationCon {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 99;
        background-color: #fff;
    }
</style>