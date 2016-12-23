// B端api
// 配置项
var baseUrl = "http://monitor.xiyoukeji.com",
	ossUrl = "http://xiyou-monitor.oss-cn-hangzhou.aliyuncs.com";
// 17是同事,/login_test?id=4
$.ajaxSetup({
	type: "POST",
	success: successHandle,
	error: errorHandle,
	cache: false,
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
			"create_user": getUser_Id()
		}
	});
	return ajax;
}
function b_getOrderByState(state,start, rows){
	if(!start){start = 0}
	if(!rows){rows = 20}
	var ajax = $.ajax({
		url: baseUrl + "/model/get/Order",
		data:{
			"order_": "id desc",
			"start_": start,
			"rows_": rows,
			"state": state,
			// "create_user": getUser_Id()
		}
	});
	return ajax;
}
// 获取单个账单
function b_getOrderById(orderId){
	var ajax = $.ajax({
		url: baseUrl + "/model/get/Order",
		data:{
			"id": orderId
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
		// url: "../announce.json",
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
// 获得所有的企业的动态
function getAllCompanyDynamic(start, rows){
	if(!start){
		start = 0;
	}
	if(!rows){
		rows = 0;
	}
	var ajax = $.ajax({
		url: baseUrl + "/model/get/Dynamic",
		data: {
			"start_": start,
			"rows_": rows,
			"add_":["comment","comment.user","comment.user.photo","user","user.photo","photo"],
			"order_":"id desc"
		}
	});
	return ajax;
}
// 根据companyId获得某一个企业动态
function getCompanyDynamicByCompanyId(companyId, start, rows){
	if(!start){
		start = 0;
	}
	if(!rows){
		rows = 0;
	}
	var ajax = $.ajax({
		url: baseUrl + "/model/get/Dynamic",
		data: {
			"company": companyId,
			"start_": start,
			"rows_": rows,
			"add_":["comment","comment.user","comment.user.photo","user","user.photo","photo"],
			"order_":"id desc"
		}
	});
	return ajax;
}
// 获得我的动态
function getMyDynamic(start, rows){
	if(!start){
		start = 0;
	}
	if(!rows){
		rows = 0;
	}
	var ajax = $.ajax({
		url: baseUrl + "/model/get/Dynamic",
		data: {
			"start_": start,
			"rows_": rows,
			"user": getUser_Id(),
			"add_":["comment","comment.user","comment.user.photo","user","user.photo","photo"],
			"order_":"id desc"
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
// 获得知会我的企业动态
function getInformedDynamic(start, rows){
	if(!start){
		start = 0;
	}
	if(!rows){
		rows = 0;
	}
	var ajax = $.ajax({
		url: baseUrl + "/model/get/Dynamic",
		data: {
			"start_": start,
			"rows_": rows,
			"add_":["comment","comment.user","comment.user.photo","user","user.photo","photo"],
			"informed": 1,
			"order_":"id desc"
		}
	});
	return ajax;
}
// 获得我评论的企业动态
function getCommentDynamic(start, rows){
	if(!start){
		start = 0;
	}
	if(!rows){
		rows = 0;
	}
	var ajax = $.ajax({
		url: baseUrl + "/model/get/Dynamic",
		data: {
			"start_": start,
			"rows_": rows,
			"add_":["comment","comment.user","comment.user.photo","user","user.photo","photo"],
			"commented": 1,
			"order_":"id desc"
		}
	});
	return ajax;
}
// 获得我评论的某一个企业的动态
function getCommentDynamicByCompanyId(companyId,start, rows){
	if(!start){
		start = 0;
	}
	if(!rows){
		rows = 0;
	}
	var ajax = $.ajax({
		url: baseUrl + "/model/get/Dynamic",
		data: {
			"company": companyId,
			"start_": start,
			"rows_": rows,
			"add_":["comment","comment.user","comment.user.photo","user","user.photo","photo"],
			"commented": 1,
			"order_":"id desc"
		}
	});
	return ajax;
}
// 根据动态id获得动态
function getDynamicById(dynamicId){
	var ajax = $.ajax({
		url: baseUrl + "/model/get/Dynamic",
		data: {
			"add_":["comment","comment.user","comment.user.photo"],
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
// 获得某一种类型的Message
// function getTypeMessage (type) {
// 	var ajax = $.ajax({
// 		url: baseUrl+"/model/get/Message",
// 		// url: "../announce.json",
// 		data: {
// 			"type" : type
// 		}
// 	});
// 	return ajax;
// }
//获得所有Announce
function getAnnounce () {
	var ajax = $.ajax({
		url: baseUrl+"/model/get/Announce",
		// url: "../announce.json",
		data: {
			add_: "reading"
		}
	});
	return ajax;
}
//获得未读的Announce
function getAnnounceUnread () {
	var ajax = $.ajax({
		url: baseUrl+"/model/get/Announce",
		data:{
			read: 0,
			rows_: 1,
			order_: "id desc"
		}
	});
	return ajax;
}
//获得未读的Announce数量
function getAnnounceUnreadCount (){
	var ajax = $.ajax({
		url: baseUrl+"/model/get/Announce",
		data:{
			read: 0,
			count_: true
		}
	});
	return ajax;
}
//获得固定长度的Announce
function getAnnounceFixedLength (start, length){
	var ajax = $.ajax({
		url: baseUrl+"/model/get/Announce",
		data:{
			add_: "reading",
			order_: "id desc",
			start_: start,
			rows_: length
		}
	});
	return ajax;
}
//获得某一种类型的未读Message
function getMessageUnread(type){
	var ajax = $.ajax({
		url: baseUrl+"/model/get/Message",
		data:{
			type: type,
			reading: false,
			rows_: 1,
			order_: "id desc"
		}
	});
	return ajax;
}
//获得某一种类型的未读Message的数量
function getMessageUnreadCount(type){
	var ajax = $.ajax({
		url: baseUrl+"/model/get/Message",
		data:{
			type: type,
			reading: false,
			count_: true
		}
	});
	return ajax;
}
//获得固定长度的Message
function getMessageFixedLength (type, start, length){
	var ajax = $.ajax({
		url: baseUrl+"/model/get/Message",
		data:{
			type: type,
			order_: "id desc",
			start_: start,
			rows_: length
		}
	});
	return ajax;
}
function getWarningUnread(){
	var ajax = $.ajax({
		url: baseUrl+"/model/get/Warning",
		data:{
			reading: false,
			rows_: 1,
			order_: "id desc"
		}
	});
	return ajax;
}
function getWarningUnreadCount(){
	var ajax = $.ajax({
		url: baseUrl+"/model/get/Warning",
		data:{
			reading: false,
			count_: true
		}
	});
	return ajax;
}
function getWarningFixedLength(start, length){
	var ajax = $.ajax({
		url: baseUrl+"/model/get/Warning",
		data:{
			order_: "id desc",
			start_: start,
			rows_: length
		}
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
//获得某一个Message的具体内容
function getDetailMessage (id) {
	var ajax = $.ajax({
		// url: '../detail.json',
		url: baseUrl+"/model/get/Message",
		data: {
			"id": id
		}
	});
	return ajax;
}
//获得某一个Announce的具体内容
function getDetailAnnounce (id) {
	var ajax = $.ajax({
		url: baseUrl+"/model/get/Announce",
		data: {
			"id": id
		}
	});
	return ajax;
}
//获得某一个Warning的具体内容
function getDetailWarning (id) {
	var ajax = $.ajax({
		url: baseUrl+"/model/get/Warning",
		data: {
			"id": id
		}
	});
	return ajax;
}
function readAnnounce(id){
	var ajax = $.ajax({
		url: baseUrl+"/announce/read?id="+id,
	});
}
function readMessage(id){
	var ajax = $.ajax({
		url: baseUrl+"/model/save/Message",
		data: {
			"id": id,
			"reading": true
		}
	});
}
function readWarning(id){
	var ajax = $.ajax({
		url: baseUrl+"/model/save/Warning",
		data: {
			"id": id,
			"reading": true
		}
	});
}
function renewDevice(deviceId,month,code){
	var ajax = $.ajax({
		url: baseUrl+"/model/save/Order",
		data: {
			"device": deviceId,
			"type": "消费",
			"month": month,
			"code": code
		}
	});
	return ajax;
}
// 获取验证码
function getVerifyCode(phone,type){
	var ajax = $.ajax({
		url: baseUrl+"/verify/getCode",
		data: {
			"phone": phone,
			"type": type
		}
	});
	return ajax;
}
function uploadImageAndGetId(file){
	var deferred = $.Deferred();
	fileType = file.type;
	$.ajax({
		url: baseUrl + "/upload?type="+fileType,
	}).done(function(result){
		var formData = new FormData();
		var data = result.data;
		for(key in data){
			if(data.hasOwnProperty(key)){
				formData.append(key, data[key]);
			}
		}
		formData.append("file",file);
		$.ajax({
			url: ossUrl,
			data: formData,
			processData: false,
        	contentType: false,
        	xhrFields: {
		        withCredentials: false
		    }
		}).done(function(_data){
			deferred.resolve(_data);
		});
	});
	return deferred;
}
function uploadImageFileListAndGetIdArray(imageFileList){
	var times = 0;
	var deferred = $.Deferred();
	var idList = [];
	if(imageFileList.length > 0){
		for(var i = 0, length = imageFileList.length; i < length; i++){
			$.when(uploadImageAndGetId(imageFileList[i])).done(function(data){
				idList.push(data.id);
				if(++times == length){
					deferred.resolve({"idList":idList});
				}
			});
		}
	}
	else{
		deferred.resolve({"idList":idList});
	}
	return deferred;
}
// 设置私人变量
function setUserVariable(key,value){
	var ajax = $.ajax({
		url: baseUrl+"/variable/user/set?"+key+"="+value
	});
	return ajax;
}
// c端，设置知会我的上次查看时间戳
function setStamp_c_informedDynamic(stamp){
	return setUserVariable("stamp_c_informedDynamic",stamp);
}
// c端，设置我评论的上次查看时间戳
function setStamp_c_commentDynamic(stamp){
	return setUserVariable("stamp_c_commentDynamic",stamp);
}
// c端，设置全部动态上次查看时间戳
function setStamp_c_allDynamic(stamp){
	return setUserVariable("stamp_c_allDynamic",stamp);
}
// 获得私人变量1
function getUserVariable(key){
	var ajax = $.ajax({
		url: baseUrl+"/variable/user/get?key="+key,
	});
	return ajax;
}
// 获得私人变量2
function getMutilUserVariable(keyParams){
	var ajax = $.ajax({
		url: baseUrl+"/variable/user/get?"+keyParams
	});
	return ajax;
}
// 获得某个公司动态的上次查看时间戳
function getCompanyDynamicLastStamp(companyId){
	return getUserVariable("companyDynamicLastStampOfCompanyId_"+companyId);
}
// 设置某个公司动态的上次查看时间戳
function setCompanyDynamicLastStamp(companyId,stamp){
	return setUserVariable("companyDynamicLastStampOfCompanyId_"+companyId, stamp);
}
// 获得我评论的某个公司动态上次查看时间戳
function getCompanyCommentDynamicLastStamp(companyId){
	return getUserVariable("companyCommentDynamicLastStampOfCompanyId_"+companyId);
}
// 设置某个公司动态的上次查看时间戳
function setCompanyCommentDynamicLastStamp(companyId,stamp){
	return setUserVariable("companyCommentDynamicLastStampOfCompanyId_"+companyId, stamp);
}
// 获得在某个时间戳后的动态条数
// 知会我的
function getNumberOfInformedDynamicAfter(stamp){
	var ajax = $.ajax({
		url: baseUrl+"/model/get/Dynamic",
		data: {
			"count_": true,
			"informed": 1,
			"in_time_begin_": stamp
		}
	});
	return ajax;
}
// 我评论的
function getNumberOfCommentDynamicAfter(stamp){
	var ajax = $.ajax({
		url: baseUrl+"/model/get/Dynamic",
		data: {
			"count_": true,
			"commented": 1,
			"update_time_begin_": stamp
		}
	});
	return ajax;
}
// 全部的
function getNumberOfAllDynamicAfter(stamp){
	var ajax = $.ajax({
		url: baseUrl+"/model/get/Dynamic",
		data: {
			"count_": true,
			"in_time_begin_": stamp
		}
	});
	return ajax;
}
// b端，获得某个公司的新动态条数
function getNumberOfCompanyDynamicByCompanyIdAndStamp(companyId, stamp){
	var ajax = $.ajax({
		url: baseUrl+"/model/get/Dynamic",
		data: {
			"company": companyId,
			"count_": true,
			"in_time_begin_": stamp
		}
	});
	return ajax;
}
// b端，获得某个公司的*我评论的\有更新的*动态条数
function getNumberOfCompanyCommentDynamicByCompanyIdAndStamp(companyId, stamp){
	var ajax = $.ajax({
		url: baseUrl+"/model/get/Dynamic",
		data: {
			"company": companyId,
			"commented": 1,
			"count_": true,
			"update_time_begin_": stamp
		}
	});
	return ajax;
}

// 获得全局变量
function getGlobalData(key){
	var ajax = $.ajax({
		url: baseUrl+"/variable/global/get",
		data: {
			'key': key
		}
	});
	return ajax;
}
// 获得行业文章
function getArticleById(id){
	var ajax = $.ajax({
		url: baseUrl+"/model/get/Article",
		data: {
			'id': id
		}
	});
	return ajax;
}









