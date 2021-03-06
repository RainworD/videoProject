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
		url: baseUrl+ "/model/get/User",
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
		url: baseUrl+ "/model/get/User?id="+id,
		type: "POST",
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function getLabel(){//获得标签列表
	var ajax = $.ajax({
		url: baseUrl+ "/model/get/Label",
		type: "POST",
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function getLabel_c(){//获得标签列表
	var ajax = $.ajax({
		url: baseUrl+ "/model/get/Label",
		type: "POST",
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function getRecommend_c(){//获得标签列表
	var ajax = $.ajax({
		url: baseUrl+ "/model/get/User",
		data:{
			competence:"一般管理员",
		},
		type: "POST",
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function addLabel(name){//获得标签列表
	var ajax = $.ajax({
		url: baseUrl + "/model/save/Label",
		type: "POST",
		data:{
			name: name,
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function sendMessage(title,text,business){//获得代理商列表
	var ajax = $.ajax({
		url: baseUrl+"/model/save/Announce",
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
		url: baseUrl+ "/auth/login",
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
		url: baseUrl+ "/auth/logout",
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
// 修改密码
function changePassword(oldPassword,newPassword){
	var ajax = $.ajax({
		url: baseUrl+ "/changePassword",
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
		url: baseUrl+ "/createAdmin",
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
function editAdmin_(id,name,contact){
	var ajax = $.ajax({
		url: baseUrl+"/model/save/User",
		type: "POST",
		data:{
			"id":id,
			'name':name,
			'contact':contact,
			// "competence":competence,
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
//编辑管理员
function editAdmin(id,password,name,contact){
	var ajax = $.ajax({
		url: baseUrl+ "/model/save/User",
		type: "POST",
		data:{
			"id": id,
			"password": password,
			'name':name,
			'contact':contact,
			// "competence":competence,
			// "enable":enable,
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function editpw(id,password){
	var ajax = $.ajax({
		url: baseUrl+ "/model/save/User",
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
		url: baseUrl+ "/model/save/User",
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

function deleteLabel(id){
	var ajax = $.ajax({
		url: baseUrl+ "/model/delete/Label",
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
		url: baseUrl+ "/model/delete/Announce",
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
		url: baseUrl+ "/model/get/Article",
		data:{
			order_:'id desc',
			add_:['label']
		},
		type: "POST",
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function getArticleDetail(id){
	var ajax = $.ajax({
		url: baseUrl+"/model/get/Article",
		data:{
			add_:['label','photo'],
			id:id,
		},
		type: "POST",
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function getEnableArticle(enable){
	var ajax = $.ajax({
		url: baseUrl+"/model/get/Article",
		data:{
			add_:['label','photo'],
			enable:enable,
		},
		type: "POST",
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function deleteArticle(id){
	var ajax = $.ajax({
		url: baseUrl+ "/model/delete/Article",
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
		url: baseUrl+ "/model/get/Announce",
		type: "POST",
		data:{
			order_:'id desc',
			add_:['business'],
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function getSinglePush(id){
	var ajax = $.ajax({
		url: baseUrl+ "/model/get/Announce?add_=business&id="+id,
		type: "POST",
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function sendArticle(title,text,label,top,photo){
	var ajax = $.ajax({
		url: baseUrl+"/model/save/Article",
		type: "POST",
		traditional:true,
		data:{
			title:title,
			text:text,
			label:label,
			top:top,
			photo:photo,
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function editArticle(id,title,text,label,top,photo){
	var ajax = $.ajax({
		url: baseUrl+"/model/save/Article",
		type: "POST",
		traditional:true,
		data:{
			id:id,
			title:title,
			text:text,
			label:label,
			top:top,
			photo:photo,
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function setEnableArticle(id,enable){
	var ajax = $.ajax({
		url: baseUrl+"/model/save/Article",
		type: "POST",
		traditional:true,
		data:{
			id:id,
			enable:enable,
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function changeTop(id,top){
	var ajax = $.ajax({
		url: baseUrl+"/model/save/Article?id="+id+"&top="+top,
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
		url: baseUrl+ "/model/get/Device",
		type: "POST",
		data:{
			add_:['business','company'],
		}
	});
	return ajax;
}
function deleteDevice(id,enable){//
	var ajax = $.ajax({
		url: baseUrl+ "/model/save/Device",
		type: "POST",
		data:{
			id:id,
			enable:false
		}
	});
	return ajax;
}
function bindDevice(id,business){//获得设备列表
	var ajax = $.ajax({
		url: baseUrl+ "/device/admin/bind",
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
		url: baseUrl+ "/device/admin/unbind",
		type: "POST",
		data:{
			id:id,
		}
	});
	return ajax;
}
function unbindSubBusiness(id){//获得设备列表
	var ajax = $.ajax({
		url: baseUrl+ "/model/save/SubBusiness",
		type: "POST",
		data:{
			id:id,
			enable:false,
		}
	});
	return ajax;
}
function unbindBusiness(id){//获得设备列表
	var ajax = $.ajax({
		url: baseUrl+ "/model/save/Business",
		type: "POST",
		data:{
			id:id,
			enable:false,
		}
	});
	return ajax;
}
function bindBusiness(id){//获得设备列表
	var ajax = $.ajax({
		url: baseUrl+ "/model/save/Business",
		type: "POST",
		data:{
			id:id,
			enable:true,
		}
	});
	return ajax;
}
function bindSubBusiness(id){//获得设备列表
	var ajax = $.ajax({
		url: baseUrl+ "/model/save/SubBusiness",
		type: "POST",
		data:{
			id:id,
			enable:true,
		}
	});
	return ajax;
}
function bindCompany(id){//获得设备列表
	var ajax = $.ajax({
		url: baseUrl+ "/model/save/Company",
		type: "POST",
		data:{
			id:id,
			enable:true,
		}
	});
	return ajax;
}
function unbindCompany(id){//获得设备列表
	var ajax = $.ajax({
		url: baseUrl+ "/model/save/Company",
		type: "POST",
		data:{
			id:id,
			enable:false,
		}
	});
	return ajax;
}
function addDevice(code,number){//获得设备列表
	var ajax = $.ajax({
		url: baseUrl+ "/model/save/Device",
		type: "POST",
		data:{
			code:code,
			number:number,
		}
	});
	return ajax;
}
function getDynamic(){//
	var ajax = $.ajax({
		url: baseUrl+ "/model/get/Dynamic",
		type: "POST",
		data:{
			add_:['user.company.business','user','user.company'],
			order_:'id desc',
		}
	});
	return ajax;
}
function getBusiness(){
	var ajax = $.ajax({
		url: baseUrl+"/model/get/Business",
		type: "POST",
		data:{
			add_:['user','recommend'],
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function getBusRegister(){
	var ajax = $.ajax({
		url: baseUrl+"/model/get/Register",
		type: "POST",
		data:{
			complete:false,
			add_:['user','recommend'],
			competence:['代理商管理员']
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function getBusiness_c(recommend){
	var ajax = $.ajax({
		url: baseUrl+"/model/get/Business",
		type: "POST",
		data:{
			recommend:recommend,
			add_:['user','recommend'],
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function getBusiness_cR(recommend){
	var ajax = $.ajax({
		url: baseUrl+"/model/get/Register",
		type: "POST",
		data:{
			complete:false,
			recommend:recommend,
			add_:['user','recommend'],
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function getSingleBusiness(id){
	var ajax = $.ajax({
		url: baseUrl+"/model/get/Business",
		type: "POST",
		data:{
			id:id,
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function getSingleCompany(id){
	var ajax = $.ajax({
		url: baseUrl+"/model/get/Company",
		type: "POST",
		data:{
			id:id,
			add_:['label','business','subBusiness'],
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function getSubBusiness_c(recommend){
	var ajax = $.ajax({
		url: baseUrl+"/model/get/SubBusiness",
		type: "POST",
		data:{
			recommend:recommend,
			add_:'user',
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function getSubBusiness(){//获得代理商列表
	var ajax = $.ajax({
		url: baseUrl+"/model/get/SubBusiness",
		type: "POST",
		data:{
			add_:'user',
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}

// function getSubBusiness_c(){//获得代理商列表
// 	var ajax = $.ajax({
// 		url: baseUrl+"/model/get/SubBusiness",
// 		type: "POST",
// 		data:{
// 			add_:'user',
// 		},
// 		success: successHandle,
// 		error: errorHandle
// 	});
// 	return ajax;
// }

function getSubBusinessByBusid(id){//获得代理商列表
	var ajax = $.ajax({
		url: baseUrl+"/model/get/SubBusiness",
		type: "POST",
		data:{
			business: id,
			"add_":["business","user"]
		},
		// async: false,
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}

function addBusiness_c(code,name,contact,phone,competence){
	var ajax = $.ajax({
		url: baseUrl+"/model/save/Register",
		type: "POST",
		data:{
			code:code,
			name:name,
			contact:contact,
			phone:phone,
			competence:competence
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function editBusiness_c(id,code,name,contact,phone,competence){
	var ajax = $.ajax({
		url: baseUrl+"/model/save/Business",
		type: "POST",
		data:{
			id:id,
			code:code,
			name:name,
			contact:contact,
			phone:phone,
			competence:competence
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function editSubBusiness_c(id,code,name,contact,competence){
	var ajax = $.ajax({
		url: baseUrl+"/model/save/SubBusiness",
		type: "POST",
		data:{
			add_:"user",
			id:id,
			code:code,
			
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function addCompany_bus(code,name,contact,phone,label,business,competence){
	var ajax = $.ajax({
		url: baseUrl+"/model/save/Register",
		type: "POST",
		data:{
			code:code,
			name:name,
			contact:contact,
			phone:phone,
			label:label,
			business:business,
			competence:['企业管理员'],
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function addCompany_bus_none(code,name,contact,phone,business,competence){
	var ajax = $.ajax({
		url: baseUrl+"/model/save/Register",
		type: "POST",
		data:{
			code:code,
			name:name,
			contact:contact,
			phone:phone,
			business:business,
			competence:['企业管理员'],
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function addCompany_sub(code,name,contact,phone,label,business,subBusiness,competence){
	var ajax = $.ajax({
		url: baseUrl+"/model/save/Register",
		type: "POST",
		data:{
			code:code,
			name:name,
			contact:contact,
			phone:phone,
			label:label,
			business:business,
			subBusiness:subBusiness,
			competence:['企业管理员'],
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function addCompany_sub_none(code,name,contact,phone,business,subBusiness,competence){
	var ajax = $.ajax({
		url: baseUrl+"/model/save/Register",
		type: "POST",
		data:{
			code:code,
			name:name,
			contact:contact,
			phone:phone,
			business:business,
			subBusiness:subBusiness,
			competence:['企业管理员'],
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function editCompany_c(id,code,name,contact,phone,label){
	var ajax = $.ajax({
		url: baseUrl+"/model/save/Company",
		type: "POST",
		data:{
			id:id,
			code:code,
			name:name,
			contact:contact,
			phone:phone,
			label:label,
			// competence:['企业管理员'],
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function editCompany_c_none(id,code,name,contact,phone){
	var ajax = $.ajax({
		url: baseUrl+"/model/save/Company",
		type: "POST",
		data:{
			id:id,
			code:code,
			name:name,
			contact:contact,
			phone:phone,
			// competence:['企业管理员'],
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
// function editCompany_bus(id,code,name,contact,phone,label){
// 	var ajax = $.ajax({
// 		url: baseUrl+"/model/save/Company",
// 		type: "POST",
// 		data:{
// 			id:id,
// 			code:code,
// 			name:name,
// 			contact:contact,
// 			phone:phone,
// 			label:label,
// 			business:business,
// 			competence:['企业管理员'],
// 		},
// 		success: successHandle,
// 		error: errorHandle
// 	});
// 	return ajax;
// }
// function editCompany_sub(id,code,name,contact,phone,label,business,subBusiness){
// 	var ajax = $.ajax({
// 		url: baseUrl+"/model/save/Company",
// 		type: "POST",
// 		data:{
// 			code:code,
// 			name:name,
// 			contact:contact,
// 			phone:phone,
// 			label:label,
// 			business:business,
// 			subBusiness:subBusiness,
// 		},
// 		success: successHandle,
// 		error: errorHandle
// 	});
// 	return ajax;
// }
function getCompany(){//
	var ajax = $.ajax({
		url: baseUrl+"/model/get/Company",
		type: "POST",
		data:{
			add_:['business','label','business.user'],
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function getCompanyRegister(){//
	var ajax = $.ajax({
		url: baseUrl+"/model/save/Register",
		type: "POST",
		data:{
			complete:false,
			add_:['business','label','business.user'],
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}

function getUser(){
	var ajax = $.ajax({
		url: baseUrl+"/model/get/User",
		type: "POST",
		data:{
			add_:'company',
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function getUserInfo(){
	var ajax = $.ajax({
		url: baseUrl+ "/model/get/User",
		type: "POST",
		traditional:true,
		data:{
			competence:["一般管理员","财务管理员"],

		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function getUserInfo_(){
	var ajax = $.ajax({
		url: baseUrl+ "/model/get/User",
		type: "POST",
		traditional:true,
		data:{
			competence:["企业同事"],
			add_:['company'],

		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function deleteDynamic(id){//删除设备列表
	var ajax = $.ajax({
		url: baseUrl+ "/model/delete/Dynamic?id="+id,
		type: "POST",
		data:{
		}
	});
	return ajax;
}
function getComments(){//获得评论列表
	var ajax = $.ajax({
		url: baseUrl+ "/model/get/Comment",
		type: "POST",
		data:{
			add_:['user.company.business','user','user.company','dynamic'],
			order_:'id desc',
		}
	});
	return ajax;
}
function deleteComment(id){//删除评论列表
	var ajax = $.ajax({
		url: baseUrl+ "/model/delete/Comment?id="+id,
		type: "POST",
		data:{
		}
	});
	return ajax;
}
function getImgUrl(type){//上传图片
	var ajax = $.ajax({
		url: baseUrl+ "/upload",
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
function uploadSlideInfo(photo,url,article){//上传图片到oss
	var ajax=$.ajax({
        url: baseUrl+ '/model/save/Carousel',
        type: 'POST',
        data: {
        	photo:photo,
        	url: url,
        	article:article,
        },
    })
    return ajax;
}
function uploadSlideInfo_(photo,url){//上传图片到oss
	var ajax=$.ajax({
        url: baseUrl+ '/model/save/Carousel',
        type: 'POST',
        data: {
        	photo:photo,
        	url: url,
        },
    })
    return ajax;
}
function slideInfo(){//上传图片到oss
	var ajax=$.ajax({
        url: baseUrl+ '/model/get/Carousel',
        type: 'POST',
       	data:{}
    })
    return ajax;
}
function getAgentFinance(){//获得代理商财务
	var ajax=$.ajax({
        url: baseUrl+ '/model/get/Business',
        type: 'POST',
       	data:{}
    })
    return ajax;
}
function getSingleAgentFinance(id){//获得代理商财务
	var ajax=$.ajax({
        url: baseUrl+ '/model/get/Business?id='+id,
        type: 'POST',
       	data:{}
    })
    return ajax;
}
function recharge(type,business,value){
	var ajax=$.ajax({
        url: baseUrl+ '/model/save/Order',
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
        url: baseUrl+ '/model/get/Order',
        type: 'POST',
       	data:{
       		add_:add_,
			order_:'id desc',
       		state:state,
       		type:type,
       	}
    })
    return ajax;
}
function setRechargeState(id,success){
	var ajax=$.ajax({
        url: baseUrl+ '/order/withdraw',
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
        url: baseUrl+ '/variable/global/set',
        type: 'POST',
       	data:{
       		renewal:renewal,
       	}
    })
    return ajax;
}
function getFee(){
	var ajax=$.ajax({
        url: baseUrl+ '/variable/global/get',
        type: 'POST',
       	data:{
       		key:'renewal',
       	}
    })
    return ajax;
}
function getBill(){
	var ajax=$.ajax({
        url: baseUrl+ '/model/get/Order',
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
        url: baseUrl+ '/statistics',
        type: 'POST',
       	data:{
       	}
    })
    return ajax;
}
function deleteCarousel(id){//删除轮播图
	var ajax=$.ajax({
        url: baseUrl+ '/model/delete/Carousel',
        type: 'POST',
       	data:{
       		id:id,
       	}
    })
    return ajax;
}
function getFeedback(){//获得意见反馈
	var ajax=$.ajax({
        url: baseUrl+ '/model/get/Feedback',
        type: 'POST',
       	data:{
       		add_:['user.company','user','user.company.business'],
       	}
    })
    return ajax;
}
function deleteFeedback(id){//获得意见反馈
	var ajax=$.ajax({
        url: baseUrl+ '/model/delete/Feedback',
        type: 'POST',
       	data:{
       		id:id,
       	}
    })
    return ajax;
}
function deleteFeedback(id){//获得意见反馈
	var ajax=$.ajax({
        url: baseUrl+ '/model/delete/Feedback',
        type: 'POST',
       	data:{
       		id:id,
       	}
    })
    return ajax;
}
function getAboutus_1(){//获得关于我们
	var ajax=$.ajax({
        url: baseUrl+ '/variable/global/get',
        type: 'POST',
       	data:{
       		key:['flag_1','title_1','content_1']
       	}
    })
    return ajax;
}
function getAboutus_2(){//获得关于我们
	var ajax=$.ajax({
        url: baseUrl+ '/variable/global/get',
        type: 'POST',
       	data:{
       		key:['flag_2','title_2','content_2']
       	}
    })
    return ajax;
}
function setAboutus_1(flag_1,title_1,content_1){//设置关于我们
	var ajax=$.ajax({
        url: baseUrl+ '/variable/global/set',
        type: 'POST',
       	data:{
       		flag_1:flag_1,
       		title_1:title_1,
       		content_1:content_1,
       	}
    })
    return ajax;
}
function setAboutus_2(flag_2,title_2,content_2){//设置关于我们
	var ajax=$.ajax({
        url: baseUrl+ '/variable/global/set',
        type: 'POST',
       	data:{
       		flag_2:flag_2,
       		title_2:title_2,
       		content_2:content_2,
       	}
    })
    return ajax;
}function getMoreStatistics(){
	var ajax=$.ajax({
        url: baseUrl+ '/model/get/Statistics',
        type: 'POST',
       	data:{
       		order_:'id desc'
       	}
    })
    return ajax;
}
function getCarousel(){
	var ajax=$.ajax({
        url: baseUrl+ '/model/get/Carousel',
        type: 'POST',
       	data:{
       		add_:['photo','article']
       	}
    })
    return ajax;
}
function GetRandomNum(Min,Max){   
	var Range = Max - Min;   
	var Rand = Math.random();   
	return(Min + Math.round(Rand * Range));   
}   
function checkCode(code){
	var ajax=$.ajax({
        url: baseUrl+ '/verify/checkReg',
        type: 'POST',
       	data:{
       		code:code,
       	}
    })
    return ajax;
}
