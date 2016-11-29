if(!window.localStorage.getItem("b_id")){
	window.location.href="b_init.html?"+encodeObj({"url":window.location.href});
}
function getB_Code(){
	return window.localStorage.getItem("b_code");
}
function getB_Phone(){
	return window.localStorage.getItem("b_phone");
}
function getB_Name(){
	return window.localStorage.getItem("b_name");
}