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
function getMyInfo(){
	var ajax = $.ajax({
		url: baseUrl + "/model/get/User",
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
		// success: successHandle,
		// error: errorHandle
	});
	return ajax;
}
//编辑管理员
function editAdmin(id,password,name,contact,competence,enable){
	var ajax = $.ajax({
		url: baseUrl + "/createAdmin",
		type: "POST",
		data:{
			"id": id,
			"password": password,
			'name':name,
			'contact':contact,
			"competence":competence,
			"enable":enable,
		},
		// success: successHandle,
		// error: errorHandle
	});
	return ajax;
}
function getUserInfo(competence){
	var ajax = $.ajax({
		url: baseUrl + "/model/get/User",
		type: "POST",
		tranditional:true,
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
		error: errorHandle
	});
	return ajax;
}
function getArticle(){
	var ajax = $.ajax({
		url: baseUrl + "/model/get/Article",
		data:{
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
function sendArticle(title,text,label,top){
	var ajax = $.ajax({
		url: baseUrl + "/model/save/Article",
		data:{
			title:title,
			text:text,
			label:label,
			top:top,
		},
		type: "POST",
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
