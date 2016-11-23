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
function getLabel(){//获得标签列表
	var ajax = $.ajax({
		url: "/model/get/Label",
		type: "POST",
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
function getMyInfo(){
	var ajax = $.ajax({
		url: "/front/my_info",
		type: "POST",
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}