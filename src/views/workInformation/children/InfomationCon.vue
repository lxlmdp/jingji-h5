<template>
    <div id="InfomationCon">
        <jheader go-back="true" head-title="运行信息详情" v-on:collect="jingjiCollect" type="collect" v-bind:is-select="selectStarDate"></jheader>

        <swiper class="swiper" :options="swiperOption" ref="mySwiper">

            <swiper-slide class="swiperSlide" v-for="swiper in swiperData">
                <div v-if="isPdf(swiper)">
                    <pdf v-bind:src="swiper"></pdf>
                </div>
                <div v-else>
                    <img v-bind:src="swiper">
                </div>

            </swiper-slide>
            <swiper-slide>
                <pdf src="../../static/test.pdf"></pdf>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>

    </div>
</template>
<script>
    import Jheader from '../../../components/Jheader.vue'
    import {RELINFO,FILESAVE,FILEINFO} from '../../../utils/api'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import pdf from 'vue-pdf'

    export default {
        name: 'InfomationCon',
        created() {
            if(this.$route.query.DATA_ID) {
                this.$ajax.get(RELINFO,{
                    params: {
                        DATA_ID: this.$route.query.DATA_ID,
                        TOKEN: window.localStorage.getItem('token')
                    }
                })
                    .then(reponse => {
//                this.swiperData = reponese.data.entity.FILE_URL.split(",");
                        this.swiperData = ['https://o82zr1kfu.qnssl.com/@/image/5628a260e4b0a38598cb4103.jpg','http://118.190.40.178:7070/mhtml/static/test.pdf']
                        if(reponse.data.entity.IS_COLLET !== 0) {
                            this.selectStarDate = 'true';
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }else {
                this.$ajax.get(FILEINFO,{
                    params: {
                        FILE_ID: this.$route.query.FILE_ID,
                        TOKEN: window.localStorage.getItem('token')
                    }
                })
                    .then(reponse => {
                        this.swiperData = reponse.data.entity.FILE_URL.split(",");
                        if(reponse.data.entity.IS_COLLET !== 0) {
                            this.selectStarDate = 'true';
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }

        },
        data() {
            return {
                swiperOption: {
                    // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
                    // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                    notNextTick: true,
                    // swiper configs 所有的配置同swiper官方api配置
                    autoplay: 3000,
                    direction : 'horizontal',
                    grabCursor : true,
                    pagination : '.swiper-pagination',
                    // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
                    onTransitionStart(swiper){
//                        console.log(swiper)
                    },
                    // more Swiper configs and callbacks...
                    // ...
                },
                swiperData: [],
                selectStarDate: 'false'
            }
        },
        components: {
            Jheader,
            swiper,
            swiperSlide,
            pdf
        },
        methods: {
            isPdf(str) {
                let last  = str.substring(str.lastIndexOf('.')+1)
                if(last == 'pdf') {
                    return true;
                }
            },
            jingjiCollect() {
                this.$ajax.get(FILESAVE,{
                    params: {
                        TOKEN: window.localStorage.getItem('token'),
                        ID: this.$route.query.DATA_ID,
                        TYPE: '1'
                    }
                })
                    .then(response => {
                        console.log(response);
                        this.selectStarDate = 'true';
                    })
                    .catch(err => {
                        console.log(err);
                    })
            }
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
        .swiper {
            width: 100%;
            margin-top: 54px;
            .swiperSlide {
                width: 100%;
                img{
                    width: 100%;
                }
            }
        }
        .swiper-button-prev {
            bottom: 0;
        }
    }
</style>