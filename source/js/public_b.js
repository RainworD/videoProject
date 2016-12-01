if(!getB_Id()){
	window.location.href="b_init.html?"+encodeObj({"url":window.location.href});
}
function getB_Id(){
	return window.localStorage.getItem("b_id");
}
function getB_Code(){
	var code;
	try{
		code = window.localStorage.getItem("b_code");
	}
	catch(e){
		code =  e;
	}
	return code;
}
function getB_Phone(){
	return window.localStorage.getItem("b_phone");
}
// 获取真实姓名
function getB_Name(){
	return window.localStorage.getItem("b_name");
}
// 获得账户余额
function getB_Price(){
	return window.localStorage.getItem("b_price");
}