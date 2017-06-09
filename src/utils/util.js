/**
 * 返回转换后的日期文本
 *
 * @param t 时间毫秒值
 * @param modelString 模式
 */
export function convertDate(t, modelString) {
    var ONE_MINUTE = 60,
        ONE_HOUR = ONE_MINUTE * 60,
        ONE_DAY = ONE_HOUR * 24,
        ONE_MONTH = ONE_DAY * 30,
        ONE_YEAR = ONE_MONTH * 12;
    var msd = Date.now() - t;
    msd = msd > 0 ? msd : 0;
    var time = parseFloat(msd) / 1000; // to second
    var ret = '';
    var d = new Date(t);

    if (modelString) {
        ret = getDateString(modelString);
    } else {
        if (time != null && time != "") {
            if (time < ONE_MINUTE) {
                ret = "刚刚";
            } else if (time >= ONE_MINUTE && time < ONE_HOUR) {
                ret = parseInt(time / ONE_MINUTE) + "分钟前";
            } else if (time >= ONE_HOUR && time < ONE_DAY) {
                ret = parseInt(time / ONE_HOUR) + "小时前";
            } else if (time >= ONE_DAY && time < ONE_MONTH) {
                ret = parseInt(time / ONE_DAY) + "天前";
            } else if (time >= ONE_MONTH && time < ONE_YEAR) {
                ret = parseInt(time / ONE_MONTH) + "个月前";
            } else if (time >= ONE_YEAR && time < ONE_YEAR * 15) {
                ret = parseInt(time / ONE_YEAR) + "年前";
            } else {
                ret = 'N年前'
            }
        }
    }

    function getDateString(modelString) {
        /**
         * 字符模式:
         *      YYYY: 年
         *      MM: 月
         *      DD: 日
         *      hh: 小时
         *      mm: 分钟
         *      ss: 秒
         */
        var _r = /\d?(\d{2})/;
        var _ret = modelString || 'YYYY-MM-DD hh:mm:ss';
        var _d = {
            'YYYY': d.getFullYear(),
            'MM': ('0' + (d.getMonth() + 1)).replace(_r, '$1'),
            'DD': ('0' + d.getDate()).replace(_r, '$1'),
            'hh': ('0' + d.getHours()).replace(_r, '$1'),
            'mm': ('0' + d.getMinutes()).replace(_r, '$1'),
            'ss': ('0' + d.getSeconds()).replace(_r, '$1')
        };

        for (var k in _d) {
            _ret = _ret.replace(k, _d[k]);
        }

        return _ret;
    }

    return ret;
}


