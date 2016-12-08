$.ajaxSetup({
	// type: "POST",
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
		url: "/model/get/Device",
		type: "POST",
		data:{
			add_:['business','company'],
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
function getImgUrl(type){//上传图片
	var ajax = $.ajax({
		url: "/upload",
		type: "POST",
		data:{
			type:type,
		}
	});
	return ajax;
}
function uploadImg(formData){//上传图片到oss
	var ajax=$.ajax({
        url: 'http://xiyou-monitor.oss-cn-hangzhou.aliyuncs.com',
        type: 'POST',
        cache: false,
        data: formData,
        processData: false,
        contentType: false,
        xhrFields: {
	      withCredentials: false,
	    }
    })
    return ajax;
}
function uploadSlideInfo(photo,url,announce){//上传图片到oss
	var ajax=$.ajax({
        url: '/model/save/Carousel',
        type: 'POST',
        data: {
        	photo:photo,
        	url:url,
        	announce:announce,
        },
    })
    return ajax;
}
function uploadSlideInfo_(photo,announce){//上传图片到oss
	var ajax=$.ajax({
        url: '/model/save/Carousel',
        type: 'POST',
        data: {
        	photo:photo,
        	announce:announce,
        },
    })
    return ajax;
}
function slideInfo(){//上传图片到oss
	var ajax=$.ajax({
        url: '/model/get/Carousel',
        type: 'POST',
       	data:{}
    })
    return ajax;
}
function getAgentFinance(){//获得代理商财务
	var ajax=$.ajax({
        url: '/model/get/Business',
        type: 'POST',
       	data:{}
    })
    return ajax;
}
function getSingleAgentFinance(id){//获得代理商财务
	var ajax=$.ajax({
        url: '/model/get/Business?id='+id,
        type: 'POST',
       	data:{}
    })
    return ajax;
}
function recharge(type,business,value){
	var ajax=$.ajax({
        url: '/model/save/Order',
        type: 'POST',
       	data:{
       		type:type,
       		business:business,
       		value:value,
       	}
    })
    return ajax;
}
function getRecharge(add_,order_,state,type){
	var ajax=$.ajax({
        url: '/model/get/Order',
        type: 'POST',
       	data:{
       		add_:add_,
       		order_:order_,
       		state:state,
       		type:type,
       	}
    })
    return ajax;
}
function setRechargeState(id,success){
	var ajax=$.ajax({
        url: '/order/withdraw',
        type: 'POST',
       	data:{
       		id:id,
       		success:success,
       	}
    })
    return ajax;
}
function setFee(renewal){
	var ajax=$.ajax({
        url: '/variable/global/set',
        type: 'POST',
       	data:{
       		renewal:renewal,
       	}
    })
    return ajax;
}
function getBill(){
	var ajax=$.ajax({
        url: '/model/get/Order',
        type: 'POST',
       	data:{
       		add_:['business'],
       		order_:'id des',
       		state:'已完成',
       	}
    })
    return ajax;
}
function getTodayStatistics(){
	var ajax=$.ajax({
        url: '/statistics',
        type: 'POST',
       	data:{
       	}
    })
    return ajax;
}
function getMoreStatistics(){
	var ajax=$.ajax({
        url: '/model/get/Statistics',
        type: 'POST',
       	data:{
       		order_:'id desc'
       	}
    })
    return ajax;
}
function getCarousel(){
	var ajax=$.ajax({
        url: '/model/get/Carousel',
        type: 'POST',
       	data:{
       		add_:['photo','announce']
       	}
    })
    return ajax;
}