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
function getUserInfo(){//获得我的信息
	var ajax = $.ajax({
		url: "/model/get/User?my=1",
		type: "POST",
		// success: successHandle,
		// error: errorHandle
	});
	return ajax;
}
function getAllActicities(){//获得所有动态
	var ajax = $.ajax({
		url: "/model/get/Dynamic?add=comment",
		type: "POST",
		// success: successHandle,
		// error: errorHandle
	});
	return ajax;
}
function getCommentActivities(){//获得评论动态
	var ajax = $.ajax({
		url: "/model/get/Dynamic?add=comment&commented=1",
		type: "POST",
		// success: successHandle,
		// error: errorHandle
	});
	return ajax;
}
function getInformActivities(){//获得知会动态
	var ajax = $.ajax({
		url: "/model/get/Dynamic?add_=comment&informed=1",
		type: "POST",
		// success: successHandle,
		// error: errorHandle
	});
	return ajax;
}
function inviteColleague(text,contact,competence){//邀请同事
	var ajax = $.ajax({
		url: "/model/save/Register",
		type: "POST",
		data:{
			text:text,
			contact:contact,
			competence:competence,
		}
	});
	return ajax;
}
function deliverComment(text,dynamic){//邀请同事
	var ajax = $.ajax({
		url: "/model/save/Comment",
		type: "POST",
		data:{
			text:text,
			dynamic:dynamic,
		}
	});
	return ajax;
}
function getWorkmates(){//邀请同事
	var ajax = $.ajax({
		url: "/model/get/User",
		type: "POST",
		data:{
		}
	});
	return ajax;
}
function getImgUrl(type){//邀请同事
	var ajax = $.ajax({
		url: "/upload",
		type: "POST",
		data:{
			type:type,
		}
	});
	return ajax;
}
function uploadImg(formData){
	var ajax=$.ajax({
        url: 'http://xiyou-monitor.oss-cn-hangzhou.aliyuncs.com',
        type: 'POST',
        cache: false,
        data: formData,
        processData: false,
        contentType: false
    })
    return ajax;
}
function deliverActivity(title,text,photo,informed){
	var ajax=$.ajax({
        url: '/model/save/Dynamic',
        type: 'POST',
       	traditional:true,
        data: {
        	title:title,
        	text:text,
        	photo:photo,
        	informed:informed,
        },
    })
    return ajax;
}