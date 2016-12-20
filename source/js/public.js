// 检查输入是否为空，空的话返回true
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
function getQueryData(){
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
// 时间戳转化为日期对象
function getTimeBy(stamp){
    var time = new Date(stamp);
    var year = time.getFullYear();
    var month = time.getMonth() - 0 + 1;
    month = month < 10 ? "0" + month : month;
    var day = time.getDate();
    day = day < 10 ? "0" + day : day;
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    return {
        "date": time,
        "year": year,
        "month": month,
        "day": day,
        "hour": hour,
        "minute": minute,
        "second": second
    }
}
// 时间戳转化为yyyy-mm-dd hh-mm-ss
function stamp2formatTime(stamp){
    var time = getTimeBy(stamp);
    return time.year+"-"+(time.month<=9?"0":"")+time.month+"-"+time.day+" "+(time.hour<=9?"0":"") +time.hour+":"+(time.minute<=9?"0":"") + time.minute+":"+(time.second<=9?"0":"") +time.second;
}
// 时间戳转化为yyyy-mm-dd hh-mm
function stamp2formatTime2(stamp){
    var time = getTimeBy(stamp);
    return time.year+"-"+ (time.month<=9?"0":"") + time.month +"-" + time.day+" "+ (time.hour<=9?"0":"") + time.hour+":"+(time.minute<=9?"0":"") +time.minute;
}
function stamp2formatDate(stamp){
    var time = getTimeBy(stamp);
    return time.year+"-"+time.month+"-"+time.day;
}
// 时间戳转化为"刚刚"等
function stamp2time(stamp) {
    var time = getTimeBy(stamp);

    var now = new Date();
    var nowyear = now.getFullYear();
    var nowmonth = now.getMonth() - 0 + 1;
    nowmonth = nowmonth < 10 ? "0" + nowmonth : nowmonth;
    var nowday = now.getDate();
    var nowhour = now.getHours();
    var nowminute = now.getMinutes();
    var timeString = '';
    if (time.year != nowyear) {
        return time.year + "-" + time.month + "-" + time.day;
    } else {
       // 今年
       if (time.month == nowmonth && time.day == nowday) {
           // 说明是今天
           if(time.hour == nowhour){
                // 说明是同一个小时
                if(time.minute == nowminute){
                    // 说明是同一分钟
                    return "刚刚";
                }
                else{
                    return nowminute - time.minute + "分钟前";
                }
           }
           else{
                return time.hour + ":" + time.minute;
           }
       } else {
           return time.month + "-" + time.day;
       }
    }
}
function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, img.width, img.height);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL;
}
function getResourceById(id){
    return baseUrl + "/resources/"+id
}
function getMinifiedImage(id,width,height){
    return getResourceById(id) + "?x-oss-process=image/resize,m_fill,w_"+width+",h_"+height

}
function getMoneyValue(value){
    return (value/100).toFixed(2);
}
var Vue = Vue.extend({
    data: function(){
        return {
            JSON: JSON,
            minifiedWidth: 100
        }
    },
    methods: {
        encodeObj: encodeObj,
        getQueryData: getQueryData,
        stamp2time: stamp2time,
        stamp2formatTime: stamp2formatTime,
        stamp2formatDate: stamp2formatDate,
        stamp2formatTime2: stamp2formatTime2,
        getResourceById: getResourceById,
        getMoneyValue: getMoneyValue,
        getMinifiedImage: function(id, width, height){
            var self = this;
            return getMinifiedImage(id, width, height);
        }
    }
});
Vue.filter('textify', function (value) {
    if (!value) return ''
    return $('<div>'+value+'</div>').text();
});
function cclear(){
    window.localStorage.clear();
}