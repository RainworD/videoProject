$.ajaxSetup({
	type: "POST",
	success: successHandle,
	error: errorHandle,
	traditional: true,
	xhrFields: {
      withCredentials: true
    }
});
var baseUrl = "http://monitor.xiyoukeji.com"
function errorHandle(){
	alert("网络异常");
}
function successHandle(data){
	if(data.state == 0){}
	else if(data.state == 10001){
		alert("登录超时,请重新登录");
		window.location.href="sign_in.html";
	}
	else if(data.msg){
		alert(data.msg);
	}
}
//获取个人信息
function getMyInfo(competence){
	var ajax = $.ajax({
		url: "/model/get/User",
		type: "POST",
		data:{
			competence:competence,
		},
		traditional:true,
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function getSingleUser(id){
	var ajax = $.ajax({
		url: "/model/get/User?id="+id,
		type: "POST",
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function getLabel(){//获得标签列表
	var ajax = $.ajax({
		url: baseUrl + "/model/get/Label",
		type: "POST",
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function getBusiness(){//获得代理商列表
	var ajax = $.ajax({
		url:"/model/get/Business",
		type: "POST",
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function sendMessage(title,text,business){//获得代理商列表
	var ajax = $.ajax({
		url:"/model/save/Announce",
		type: "POST",
		traditional:true,
		data:{
			title:title,
			text:text,
			business:business,
		},
		success: successHandle,
		error: errorHandle,
	});
	return ajax;
}
//登入
function loginApi(username,password){
	var ajax = $.ajax({
		url: baseUrl + "/auth/login",
		type: "POST",
		data: {
			"username":username,
			"password":password,
			"remember-me":"on"
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
//登出
function logoutApi(){
	var ajax = $.ajax({
		url: baseUrl + "/auth/logout",
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
// 修改密码
function changePassword(oldPassword,newPassword){
	var ajax = $.ajax({
		url: baseUrl + "/api/change_password",
		type: "POST",
		data: {
			"old_password": oldPassword,
			"new_password": newPassword
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
//新增管理员
function addAdmin(username,password,name,contact,competence){
	var ajax = $.ajax({
		url: baseUrl + "/createAdmin",
		type: "POST",
		data:{
			"username": username,
			"password": password,
			'name':name,
			'contact':contact,
			"competence":competence,
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function editAdmin_(id,name,contact,competence){
	var ajax = $.ajax({
		url:"/model/save/User",
		type: "POST",
		data:{
			"id":id,
			'name':name,
			'contact':contact,
			"competence":competence,
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
//编辑管理员
function editAdmin(id,password,name,contact,competence,enable){
	var ajax = $.ajax({
		url: "/model/save/User",
		type: "POST",
		data:{
			"id": id,
			"password": password,
			'name':name,
			'contact':contact,
			"competence":competence,
			"enable":enable,
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function editpw(id,password){
	var ajax = $.ajax({
		url: "/model/save/User",
		type: "POST",
		data:{
			"id": id,
			"password": password,
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function editUserState(id,enable){
	var ajax = $.ajax({
		url: "/model/save/User",
		type: "POST",
		data:{
			"id": id,
			"enable": enable,
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function getUserInfo(competence){
	var ajax = $.ajax({
		url: "/model/get/User",
		type: "POST",
		traditional:true,
		data:{
			competence:competence,
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function deleteLabel(id){
	var ajax = $.ajax({
		url: baseUrl + "/model/delete/Label",
		data:{
			"id": id
		},
		type: "POST",
		success: successHandle,
		error: errorHandle,
	});
	return ajax;
}
function deletePush(id){
	var ajax = $.ajax({
		url: "/model/delete/Announce",
		data:{
			"id": id
		},
		type: "POST",
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function getArticle(){
	var ajax = $.ajax({
		url: baseUrl + "/model/get/Article?add_=label",
		data:{
		},
		type: "POST",
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function getArticleDetail(id){
	var ajax = $.ajax({
		url:"/model/get/Article?add_=label&id="+id,
		data:{
		},
		type: "POST",
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function deleteArticle(id){
	var ajax = $.ajax({
		url: "/model/delete/Article",
		data:{
			"id": id
		},
		type: "POST",
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function getPush(){
	var ajax = $.ajax({
		url: baseUrl + "/model/get/Announce?add_=business",
		type: "POST",
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function getSinglePush(id){
	var ajax = $.ajax({
		url: baseUrl + "/model/get/Announce?add_=business&id="+id,
		type: "POST",
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function sendArticle(title,text,label,top){
	var ajax = $.ajax({
		url:"/model/save/Article",
		type: "POST",
		traditional:true,
		data:{
			title:title,
			text:text,
			label:label,
			top:top,
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function editArticle(id,title,text,label,top){
	var ajax = $.ajax({
		url:"/model/save/Article",
		type: "POST",
		traditional:true,
		data:{
			id:id,
			title:title,
			text:text,
			label:label,
			top:top,
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function changeTop(id,top){
	var ajax = $.ajax({
		url:"/model/save/Article?id="+id+"&top="+top,
		type: "POST",
		traditional:true,
		data:{
			id:id,
			top:top,
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function getDevice(){//获得设备列表
	var ajax = $.ajax({
		url: "/model/get/Device?add_=business&add_=company",
		type: "POST",
		data:{
		}
	});
	return ajax;
}
function deleteDevice(id){//获得设备列表
	var ajax = $.ajax({
		url: "/model/delete/Device?id"+id,
		type: "POST",
		data:{
		}
	});
	return ajax;
}
function bindDevice(id,business){//获得设备列表
	var ajax = $.ajax({
		url: "/device/admin/bind",
		type: "POST",
		traditional:true,
		data:{
			id:id,
			business:business,
		}
	});
	return ajax;
}
function unbindDevice(id){//获得设备列表
	var ajax = $.ajax({
		url: "/device/admin/unbind",
		type: "POST",
		data:{
			id:id,
		}
	});
	return ajax;
}
function addDevice(code,number){//获得设备列表
	var ajax = $.ajax({
		url: "/model/save/Device",
		type: "POST",
		data:{
			code:code,
			number:number,
		}
	});
	return ajax;
}
function getDynamic(){//获得设备列表
	var ajax = $.ajax({
		url: "/model/get/Dynamic?add_=user.company.business&add_=user&add_=user.company",
		type: "POST",
		data:{
		}
	});
	return ajax;
}
function deleteDynamic(id){//获得设备列表
	var ajax = $.ajax({
		url: "/model/delete/Dynamic?id="+id,
		type: "POST",
		data:{
		}
	});
	return ajax;
}
function getComments(){//获得评论列表
	var ajax = $.ajax({
		url: "/model/get/Comment?add_=dynamic&add_=user.company.business&add_=user&add_=user.company",
		type: "POST",
		data:{
		}
	});
	return ajax;
}
function deleteComment(id){//删除评论列表
	var ajax = $.ajax({
		url: "/model/delete/Comment?id="+id,
		type: "POST",
		data:{
		}
	});
	return ajax;
}