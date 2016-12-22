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