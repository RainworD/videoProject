// 检查输入是否为空
function checkEmpty(str){
    return !$.trim(str);
}
// 手机号正则验证
function isRightPhoneNumber(phone){
    // 由1开头的11位数字
    return /^[1][\d]{10}$/.test(phone);
}
// 把对象转换成字符串，并进行URI编码，用于url中的查询参数拼接
function encodeObj(obj){
    return encodeURIComponent(JSON.stringify(obj));
}
// 获取url中的search，提取数据
function getQueryData (){
    var searchUrl = window.location.search.split("?")[1];
    var URI = decodeURIComponent(searchUrl);
    var parseURI = URI;
    if(URI){
        try{
            parseURI = JSON.parse(URI);
        }
        catch(e){
            parseURI = "";
        }
    }
    return parseURI;
}
// 时间戳转化为时间
function stamp2time(stamp) {
    var time = new Date(stamp);
    var year = time.getFullYear();
    var month = time.getMonth() - 0 + 1;
    month = month < 10 ? "0" + month : month;
    var day = time.getDate();
    day = day < 10 ? "0" + day : day;
    var hour = time.getHours();
    var minute = time.getMinutes();

    var now = new Date();
    var nowyear = now.getFullYear();
    var nowmonth = now.getMonth() - 0 + 1;
    nowmonth = nowmonth < 10 ? "0" + nowmonth : nowmonth;
    var nowday = now.getDate();
    var nowhour = now.getHours();
    var nowminute = now.getMinutes();
    var timeString = '';
    if (year != nowyear) {
        return year + "-" + month + "-" + day;
    } else {
       // 今年
       if (month == nowmonth && day == nowday) {
           // 说明是今天
           if(hour == nowhour){
                // 说明是同一个小时
                if(minute == nowminute){
                    // 说明是同一分钟
                    return "刚刚";
                }
                else{
                    return nowminute - minute + "分钟前";
                }
           }
           else{
                return hour + ":" + minute;
           }
       } else {
           return month + "-" + day;
       }
    }
}
var Vue = Vue.extend({
    data: function(){
        return {JSON: JSON}
    },
    methods: {
        encodeObj: encodeObj,
        getQueryData: getQueryData,
        stamp2time: stamp2time
    }
});