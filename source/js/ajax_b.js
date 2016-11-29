// B端api
// 配置项
var baseUrl = "http://monitor.xiyoukeji.com"
// 17是同事,/login_test?id=4
$.ajaxSetup({
	type: "POST",
	success: successHandle,
	error: errorHandle,
	xhrFields: {
      withCredentials: true
    }
});
function successHandle(data){
	if(data.state != 0){
		mui.toast(data.msg);
	}
}
function errorHandle(data){
	mui.toast("网络异常");
}
// 获取企业用户基本信息
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
// 获取子代理商
function b_getSubBussiness(){
	var ajax = $.ajax({
		url: baseUrl + "/model/get/SubBusiness",
		data: {

		}
	});
	return ajax;
}
// 根据企业id获得特定企业的动态
function b_getDynamicByBussinessId(id){
	var ajax = $.ajax({
		url: baseUrl + "/model/get/Dynamic",
		data: {
			"company": id
		}
	});
	return ajax;
}
// 根据动态id获得动态评论
function b_getCommentByDynamicId(id){
	var ajax = $.ajax({
		url: baseUrl + "/model/get/Comment",
		data: {
			"company": id
		}
	});
	return ajax;
}
// 创造一个企业管理员 c端管理员（企业端管理员,c母账户）
function b_createBCompanyParent(code,phone,name){
	return b_addOneRegister(code,phone,name,"企业管理员");
}
// 邀请一个同事
function b_addColleague(code,phone){
	return b_addOneRegister(code, phone, undefined,"代理商同事");
}
function b_addOneRegister(code, phone, name,competence){
	var ajax = $.ajax({
		url: baseUrl + "/model/save/Register",
		data: {
			"code": code,
			"phone": phone,
			"name": name,
			"competence":competence
		}
	});
	return ajax;
}



















