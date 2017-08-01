if(!getUser_Id()){
	refreshUserData();
}
function refreshUserData(){
	window.location.href="user_init.html?"+encodeObj({"url":window.location.href});
}
function getUserData(){
	window.location.href="object:"+window.localStorage.getItem("user_data");
}
function getUser_Id(){
	return window.localStorage.getItem("user_id");
}
function getUser_Type(){
	return getUser_Code()[0].toLowerCase();
}
function getUser_competence(){
	return window.localStorage.getItem("user_competence");
}
function getUser_Code(){
	var code;
	try{
		code = window.localStorage.getItem("user_code");
	}
	catch(e){
		code =  e;
	}
	return code;
}
// 获得用户注册时间
function getUser_Intime(){
	return window.localStorage.getItem("user_intime");
}
function getUser_PhotoId(){
	return window.localStorage.getItem("user_photoId");
}
function getUser_Phone(){
	return window.localStorage.getItem("user_phone");
}
// 获取真实姓名
function getUser_Name(){
	return window.localStorage.getItem("user_name");
}
// 获得账户余额
function getB_Price(){
	return window.localStorage.getItem("b_price");
}
// 获得押金
function getB_Deposit(){
	return window.localStorage.getItem("b_deposit");
}
// c端获得自己company信息
function getC_company(){
	return JSON.parse(window.localStorage.getItem("c_company"));
}
// c端获得自己的business
function getC_business(){
	return JSON.parse(window.localStorage.getItem("c_business"))
}
// c端获得自己的subBusiness
function getC_subBusiness(){
	return JSON.parse(window.localStorage.getItem("c_subBusiness"));
}






