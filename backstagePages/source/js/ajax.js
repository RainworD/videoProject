//处理错误
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
function uploadImage(formData){
	var ajax = $.ajax({
		url: "/upload",
		type: "POST",
		data: formData,
		processData: false,
		contentType: false,
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
//登入
function loginApi(username,password){
	var ajax = $.ajax({
		url: "/auth/login",
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
		url: "/auth/logout",
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
// 修改密码
function changePassword(oldPassword,newPassword){
	var ajax = $.ajax({
		url: "/api/change_password",
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
//获取个人信息
function getMyInfo(){
	var ajax = $.ajax({
		url: "/front/my_info",
		type: "POST",
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
// 获取管理员信息
function getAdmin(){
	var ajax = $.ajax({
		url: "/admin/info",
		type: "POST",
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
//增加一个管理员
function addAdmin(username,password){
	var ajax = $.ajax({
		url: "/admin/addAdmin",
		type: "POST",
		data:{
			"username": username,
			"password": password
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
//设置用户or管理员信息
function setMyInfo(nick,height,weight,bust,waistline,hips,taobao,jingdong){
	var ajax = $.ajax({
		url: "/api/my_info",
		type: "POST",
		data: {
			"nick": nick,
			"height": height,
			"weight": weight,
			"bust": bust,
			"waistline": waistline,
			"hips": hips,
			"taobao": taobao,
			"jingdong": jingdong
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
//用户管理 获取用户列表
function getUser(){
	var ajax = $.ajax({
		url: "/admin/getUser",
		type: "POST",
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
// 用户管理 删除用户
function deleteUser(userId){
	var ajax = $.ajax({
		url: "/admin/getUser",
		data:{
			"user": userId
		},
		type: "POST",
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
//用户管理 改变用户信息
function changeUserInfo(id,nick,height,weight,bust,waistline,hips,taobao,jingdong,phone){
	var ajax = $.ajax({
		url: "/admin/changeUserInfo",
		type: "POST",
		data: {
			"id": id,
			"nick": nick,
			"height": height,
			"weight": weight,
			"bust": bust,
			"waistline": waistline,
			"hips": hips,
			"taobao": taobao,
			"jingdong": jingdong,
			"phone": phone
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
// 获取轮播图
function getSlideImages(){
	var ajax = $.ajax({
		url: "/front/main",
		type: "POST",
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
//增加顶端轮播图
function addTopSlideImages(formData){
	var ajax = $.ajax({
		url: "/admin/addTopCarousel",
		type: "POST",
		data: formData,
		processData: false,
		contentType: false,
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
// 编辑轮播图url
function editTopSlideImagesUrl(id,url){
	var ajax = $.ajax({
		url: "/admin/changeTopUrl",
		type: "POST",
		data: {
			"id": id,
			"url": url
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
//增加底端轮播图
function addBottomSlideImages(formData){
	var ajax = $.ajax({
		url: "/admin/addBottomCarousel",
		type: "POST",
		data: formData,
		processData: false,
		contentType: false,
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
// 删除顶部轮播图
function deleteTopSlideImages(slideImageId){
	var ajax = $.ajax({
		url: "/admin/deleteTopCarousel",
		type: "POST",
		data: {
			"id": slideImageId
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
// 删除底部轮播图
function deleteBottomSlideImages(slideImageId){
	var ajax = $.ajax({
		url: "/admin/deleteBottomCarousel",
		type: "POST",
		data: {
			"id": slideImageId
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
// 获取评论列表
function getComments(){
	var ajax = $.ajax({
		url: "/admin/getAllComment",
		type: "POST",
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
// 删除评论
function deleteComment(commentId){
	var ajax = $.ajax({
		url: "/admin/deleteComment",
		type: "POST",
		data: {
			"id": commentId
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
// 获得秀榜
function getShowRank(page,rows){
	var ajax = $.ajax({
		url: "/front/show",
		type: "POST",
		data: {
			"page":page,
			"rows":rows
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
// 置顶秀图
function topShow(showId){
	var ajax = $.ajax({
		url: "/admin/topShow",
		type: "POST",
		data: {
			"show":showId
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
// 置顶秀图
function cancelTopShow(showId){
	var ajax = $.ajax({
		url: "/admin/cancelTopShow",
		type: "POST",
		data: {
			"show":showId
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
//把秀图设为顶部轮播图
function addShowImageAsTopSlideImage(showId){
	var ajax = $.ajax({
		url: "/admin/addTopShow",
		type: "POST",
		data: {
			"show":showId
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
//把秀图设为底部轮播图
function addShowImageAsBottomSlideImage(showId){
	var ajax = $.ajax({
		url: "/admin/addBottomShow",
		type: "POST",
		data: {
			"show":showId
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
// 获得标签列表
function getLabel(){
	var ajax = $.ajax({
		url: "/admin/getAllPoint",
		type: "POST",
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
// 获得衣橱列表
function getWardrobe(){
	var ajax = $.ajax({
		url: "/admin/getAllShowPhoto",
		type: "POST",
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
// 数据统计 概况
function getStatistics(){
	var ajax = $.ajax({
		url: "/admin/statistics",
		type: "POST",
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
// 意见统计
function getStatisticsComment(){
	var ajax = $.ajax({
		url: "/admin/opinion",
		type: "POST",
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
// 获取操作记录
function getRecord(){
	var ajax = $.ajax({
		url: "/admin/getRecord",
		type: "POST",
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
// 设置全局变量
function setGlobal(name, text){
	var ajax = $.ajax({
		url: "/admin/setGlobal",
		type: "POST",
		data:{
			"name": name,
			"text": text
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
// 读取全局变量
function getGlobal(name){
	var ajax = $.ajax({
		url: "/front/getGlobal",
		type: "POST",
		data:{
			"name": name
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
// 管理员设置自己昵称
function setMyNickName(nickName){
	var ajax = $.ajax({
		url: "/api/my_info",
		type: "POST",
		data:{
			"nick": nickName
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
// 获得品牌街
function getBrands(){
	var ajax = $.ajax({
		url: "/front/brands",
		type: "POST",
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
// 编辑品牌街
function editBrand(id,name,url){
	if(url&&url.search(/^(?:http||https):\/\//)){
		url = "http://"+url;
	}
	var ajax = $.ajax({
		url: "/admin/editBrand",
		type: "POST",
		data:  {
			"id": id,
			"name": name,
			"url": url
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
// 删除某一条品牌街
function deleteBrand(id){
	var ajax = $.ajax({
		url: "/admin/deleteBrands",
		type: "POST",
		data:  {
			"id[0]": id
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
// 获得合作网站
function getPartnerSites(){
	var ajax = $.ajax({
		url: "/front/other",
		type: "POST",
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
// 编辑合作网站
function editPartnerSite(id,name,url,photo){
	if(url&&url.search(/^(?:http||https):\/\//)){
		url = "http://"+url;
	}
	var ajax = $.ajax({
		url: "/admin/editWebsite",
		type: "POST",
		data:{
			"id": id,
			"name": name,
			"url": url,
			"photo": photo
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
// 删除合作网站
function deletePartnerSite(id){
	var ajax = $.ajax({
		url: "/admin/deleteWebsite",
		type: "POST",
		data: {
			"id": id
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}























