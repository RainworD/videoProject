// B端api
// 配置项
var baseUrl = "http://monitor.xiyoukeji.com"
// 17是同事,/login_test?id=4
$.ajaxSetup({
	type: "POST",
	success: successHandle,
	error: errorHandle,
	traditional: true,
	xhrFields: {
      withCredentials: true
    }
});
function successHandle(data){
	if(data.state == 10001){
		// 未登录
		window.location.href="h5action:error:10001";
	}
	if(data.state != 0){
		mui.toast(data.msg);
	}
}
function errorHandle(data){
	mui.toast("网络异常");
}
// 获取用户基本信息
function getSelf(){
	var ajax = $.ajax({
		url: baseUrl + "/model/get/User",
		data: {
			"my":1,
			"add_":["photo","business"]
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
function getNewestAnnounce(){
	var ajax = $.ajax({
		url: baseUrl + "/model/get/Comment",
		data: {
			
		}
	});
	return ajax;
}
// 获得系统消息
function getMessage(){
	var ajax = $.ajax({
		url: baseUrl + "/model/get/Message",
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
// 获得特定类型的用户
function getAllUser(competence){
	var ajax = $.ajax({
		url: baseUrl + "/model/get/User",
		data: {
			"competence": competence,
			"add_": "photo"
		}
	});
	return ajax;
}
// 获得未注册同事
function getColleague_unregister(businessId,competence){
	var ajax = $.ajax({
		url: baseUrl + "/model/get/Register",
		data: {
			"user": businessId,
			"competence": competence,
			"add_": ["enable","name","concat"]
		}
	});
	return ajax;
}
// 禁用自己的同事
function disableColleagueByColleagueId(colleagueId){
	var ajax = $.ajax({
		url: baseUrl + "/model/save/User",
		data: {
			"id":colleagueId,
			"enable": false
		}
	});
	return ajax;
}
function enableColleagueByColleagueId(colleagueId){
	var ajax = $.ajax({
		url: baseUrl + "/model/save/User",
		data: {
			"id":colleagueId,
			"enable": true
		}
	});
	return ajax;
}
function b_getBusiness(){
	var ajax = $.ajax({
		url: baseUrl + "/model/get/Business",
		data: {

		}
	});
	return ajax;
}
// 退出登陆
function b_logout(){
	var ajax = $.ajax({
		url: baseUrl + "/auth/logout",
		data: {

		},
		success: function(data){
			if(data.state == 0){
				window.localStorage.clear();
			}
		}
	});
	return ajax;
}

// 获得流水账统计
function b_getStatistics(){
	var ajax = $.ajax({
		url: baseUrl + "/model/get/Statistics",
		data: {

		}
	});
	return ajax;
}
// 获得企业的动态
function getCompanyDynamic(){
	var ajax = $.ajax({
		url: baseUrl + "/model/get/Dynamic",
		data: {
			"add_":["comment","user","comment.user"]
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
// 给动态评论
function commentDynamicByDynamicId(dynamicId,text){
	var ajax = $.ajax({
		url: baseUrl + "/model/save/Comment",
		data: {
			"dynamic": dynamicId,
			"text": text
		}
	});
	return ajax;
}
// 获得所有企业的动态
function getAllCompanyDynamic(){
	var ajax = $.ajax({
		url: baseUrl + "/model/get/Dynamic",
		data: {
			"add_":["comment","user","comment.user"],
		}
	});
	return ajax;
}
// 获得知会我的企业动态
function getInformedDynamic(){
	var ajax = $.ajax({
		url: baseUrl + "/model/get/Dynamic",
		data: {
			"add_":["comment","user","comment.user"],
			"informed": 1
		}
	});
	return ajax;
}
// 获得知会我评论的
function getCommentDynamic(){
	var ajax = $.ajax({
		url: baseUrl + "/model/get/Dynamic",
		data: {
			"add_":["comment","user","comment.user"],
			"comment": 1
		}
	});
	return ajax;
}
// 根据动态id获得动态
function getDynamicById(dynamicId){
	var ajax = $.ajax({
		url: baseUrl + "/model/get/Dynamic",
		data: {
			"add_":["comment","user","comment.user"],
			"id": dynamicId
		}
	});
	return ajax;
}
// 发布动态
function saveDynamic(text,photo,informed){
	var ajax = $.ajax({
		url: baseUrl + "/model/save/Dynamic",
		data: {
			"title": "xykj",
			"photo": photo,
			"text": text,
			"informed":informed
		}
	});
	return ajax;
}
// 提交反馈信息
function postFeedback(text,contact){
	var ajax = $.ajax({
		url: baseUrl+"/model/save/Feedback",
		data:{
			text:text,
			contact:contact
		}
	});
	return ajax;
}
function getAnnounce () {
	var ajax = $.ajax({
		// url: baseUrl+"/model/get/Message",
		url: "../announce.json",
	});
	return ajax;
}
// 申请提现
function applyWithdraw(alipay,value){
	var ajax = $.ajax({
		url: baseUrl+"/model/save/Order",
		data:{
			"type": "提现",
			"alipay": alipay,
			"value": value
		}
	});
	return ajax;
}

function getDetail (sid) {
	var ajax = $.ajax({
		url: '../detail.json',
		data: {
			id: sid
		}
	});
	return ajax;
}






