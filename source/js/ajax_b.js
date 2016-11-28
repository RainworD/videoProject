// B端api
// 配置项
var baseUrl = "http://monitor.xiyoukeji.com"
// 17是同事,/login_test?id=4
$.ajaxSetup({
	type: "POST",
	xhrFields: {
      withCredentials: true
    }
});
// 获取用户余额
function b_getBusiness(){
	var ajax = $.ajax({
		url: baseUrl + "/model/get/Business",
		data: {

		}
	});
	return ajax;
}
// 获取用户账单
function b_getOrder(){
	var ajax = $.ajax({
		url: baseUrl + "/model/get/Order",
		data:{

		}
	});
	return ajax;
}