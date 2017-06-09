<template>
    <div id="InfomationCon">
        <jheader go-back="true" head-title="InfomationInfo"></jheader>

        <swiper class="swiper" :options="swiperOption" ref="mySwiper">

            <swiper-slide v-for="swiper in swiperData">

                <!--<img src="{{swiper}}">-->
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>

    </div>
</template>
<script>
    import Jheader from '../../../components/Jheader.vue'
    import {RELINFO} from '../../../utils/api'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

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
                this.swiperData = reponese.data.entity.FILE_URL.split(",");
                console.log(reponese.data.entity.FILE_URL)
            })
            .catch(err => {
                console.log(err)
            })
        },
        data() {
            return {
                swiperOption: {
                    // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
                    // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                    notNextTick: true,
                    // swiper configs 所有的配置同swiper官方api配置
                    direction : 'horizontal',
                    grabCursor : true,
                    setWrapperSize :true,
                    autoHeight: true,
                    paginationClickable :true,
                    prevButton:'.swiper-button-prev',
                    nextButton:'.swiper-button-next',
                    mousewheelControl : true,
                    observeParents:true,
                    // if you need use plugins in the swiper, you can config in here like this
                    // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
                    // swiper callbacks
                    // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
                    onTransitionStart(swiper){
                        console.log(swiper)
                    }
                    // more Swiper configs and callbacks...
                    // ...
                },
                swiperData: []
            }
        },
        components: {
            Jheader,
            swiper,
            swiperSlide
        },
        methods: {

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
            height:200px;
            margin-top: 54px;
        }
        .swiper-button-prev {
            bottom: 0;
        }
    }
</style>