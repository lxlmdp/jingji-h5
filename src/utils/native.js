/**
 * @Date: 2017/4/2  15:08
 * @Author: lxbin
 * http://xuebin.me/
 * Created with JetBrains WebStorm.
 */

import Vue from 'vue'

/**
 * 与APP交互的数据中转站
 * @type {Vue}
 */
export const _vm = new Vue({
    data: {
        version: '0.0.0',
        userInfo: null
    },
    watch: {
        version(val, oldVal){
            this.$emit('versionOnChange', val)
        },
        userInfo(val, oldVal){
            this.$emit('userInfoOnChange', val)
        }
    }
})

//region 设备类型
/**
 * 设备类型
 * @type {{versions: {trident, presto, webKit, gecko, mobile, ios, android, iPhone, iPad, webApp, weixin, qq}, language: string}}
 */
export const browser = {
    versions: function () {
        const u = navigator.userAgent, app = navigator.appVersion;
        return {
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
            iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
            weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
            qq: u.match(/\sQQ/i) == " qq" //是否QQ
        };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
}
//endregion

//region 退出登录
/**
 * 退出登录
 */
export function logout() {
    try {
        console.log("[Leo] => 退出登录")
        window.localStorage.removeItem('token')

        const u = navigator.userAgent
        if (!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {//iOS终端
            const url = 'logoff://logoff'
            const iframe = document.createElement('iframe')
            iframe.style.width = '1px'
            iframe.style.height = '1px'
            iframe.style.display = 'none'
            iframe.src = url
            window.document.body.appendChild(iframe)
            setTimeout(function () {
                iframe.remove();
            }, 100);
        } else if (u.indexOf('Android') > -1 || u.indexOf('Adr') > -1) {//Android终端
            window.bridge.logoff()
        } else {
            window.bridge.logoff()
        }
    } catch (e) {
    }
}
//endregion

//region 获取版本信息
/**
 * 获取版本信息
 */
export function getAppVersion() {
    try {
        window.bridge.getVersion('setAppVersion')
    } catch (e) {
    }
}
/**
 * 原生回调，设置版本号
 * @param version
 */
window.setAppVersion = function (version) {
    try {
        Vue.set(_vm, 'version', version)
        window.localStorage.setItem('version', version)
    } catch (e) {
        console.error(e)
    }
}
//endregion


export function getUrlKey(name){
  return decodeURIComponent((new RegExp('[?|&]'+name+'='+'([^&;]+?)(&|#|;|$)').exec(location.href)||[,""])[1].replace(/\+/g,'%20'))||null;
}
