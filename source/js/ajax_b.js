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
// 获取用户基本信息
function b_getBusiness(){
	var ajax = $.ajax({
		url: baseUrl + "/model/get/Business",
		data: {

		}
	});
	return ajax;
}
// 编辑企业资料
function b_editCompany(id,name,contact,phone){
	var ajax = $.ajax({
		url: baseUrl + "/model/save/Company",
		data:{
			"id": id,
			"name": name,
			"contact": contact,
			"phone":phone
		}
	})
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
// 获取子代理商(等于获得代理商同事)
function b_getSubBussiness(){
	var ajax = $.ajax({
		url: baseUrl + "/model/get/SubBusiness",
		data: {

		}
	});
	return ajax;
}
// 获取自己的企业
function b_getAllCompany(){
	var ajax = $.ajax({
		url: baseUrl + "/model/get/Company",
		data: {
			"add_":"device"
		}
	});
	return ajax;
}
// 根据企业id获得特定企业的动态
function b_getDynamicByCompanyId(id){
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
// 注册（新增）一个企业管理员 c端管理员（企业端管理员,c母账户）
function b_registerBCompanyParent(code,phone,name){
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
// 获得系统通告
function b_getNewestAnnounce(){
	var ajax = $.ajax({
		url: baseUrl + "/model/get/Comment",
		data: {
			
		}
	});
	return ajax;
}
// 解绑设备到企业
function b_unbindCompanyDeviceByDeviceId(id){
	var ajax = $.ajax({
		url: baseUrl + "/device/business/unbind",
		data: {
			"id": id
		}
	});
	return ajax;
}
// 根据企业id获得设备列表
function b_getDeviceListByCompanyId(id){
	var ajax = $.ajax({
		url: baseUrl + "/model/get/Device",
		data: {
			"company": id
		}
	});
	return ajax;
}
// 获得用户
function b_getAllUser(competence){
	var ajax = $.ajax({
		url: baseUrl + "/model/get/User",
		data: {
			"competence": competence
		}
	});
	return ajax;
}
// 获得b的同事
function b_getBColleague(){
	return b_getAllUser("代理商同事");
}
















