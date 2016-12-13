var ADMIN_CONFIG = {
	"homePage": "home.html",
	"mainBodySelector": "#admin_body",
	"headerSelector": "#admin_header",
	"contentSelector": "#admin_content",
	"leftSelector":"#admin_left"
};
$(function(){
    adminInit();
    function adminInit(){
        // $.when(getMyInfo()).done(function(data){
        //     if(data.state == 0){
        //         console.log(data);
        //         var info = data.da;
        //         $("#admin_name").text(info.username);
        //     }
        // });
        var name=localStorage.getItem("username");
        $("#admin_name").text(name);
    	eventBind();
    }
});
function eventBind(){
    // eventBind 仅进行一次
	// 页面刷新 hash变化时的处理
	$(window).bind('load hashchange', loadContent);
	$(window).bind('resize',windowReset);
    $(window).bind('click', function(){
        $("[data-hideWhenBlur]").hide();
    });
    $('body').on('click','[data-urlback]',function(){
        window.history.back();
    });
	$(ADMIN_CONFIG.headerSelector+" .client").bind("click",function(e){
        if($("#admin_ui_dropdown_menu").is(":hidden")){
          	$("#admin_ui_dropdown_menu").show();
        }
        else{
          	$("#admin_ui_dropdown_menu").hide();
        }
        e.stopPropagation();
    });
    $(ADMIN_CONFIG.leftSelector+" .leftmenu>div>.line").bind('click',function(){
    	if($(this).next('.submenu').length){
    		// 有子菜单
    		if($(this).parent().hasClass("active")){
    			// 打开的
    			$(this).next('.submenu').slideUp(300);
    			$(this).parent().removeClass("active");
    		}
    		else{
    			$(this).next('.submenu').slideDown(300);
    			$(this).parent().addClass("active");
    		}
    		
    	}
    });
}
function uiComponentEventBind(){
    // 自动填充输入框 开始
    $.each($("[data-autoComplete]"),function(){
        var $this = $(this);
        var $input = $(this).children('input');
        var params = $this.attr('data-params');
        var regx = /<js>(.*?)<\/js>/g;

        if(!$input.siblings('.admin_ui_input_autoComplete_selectBox').length){
            $input.after('<div class="admin_ui_input_autoComplete_selectBox" data-hideWhenBlur></div>');
        }
        var selectBox = $input.siblings(".admin_ui_input_autoComplete_selectBox");
        var timeout;
        $input.bind('input',function(){
            var keyword = $.trim($input.val());
            if(keyword!=""){
                var _params = params;
                do{
                    var matchArr = regx.exec(params);
                    matchArr&&(_params = _params.replace(/<js>.*?<\/js>/,eval(matchArr[1])));
                }while(regx.lastIndex);
                _params = JSON.parse(_params);
                timeout&&clearTimeout(timeout);
                timeout = setTimeout(function(){
                    selectBox.empty().hide();
                    $.ajax(_params).done(function(data){
                        if(data.state == 0){
                            var textArr = data.data;
                            if(textArr.length > 0){
                                for(var i = 0, length = textArr.length; i < length; i++){
                                    var line = $('<div class="line">'+
                                                    textArr[i]+
                                                '</div>');
                                    line.bind('click',function(){
                                        if(!$this.siblings('.admin_ui_input_tagBox').length){
                                            $this.before('<div class="admin_ui_input_tagBox"></div>');
                                            $this.siblings('.admin_ui_input_tagBox').on('click','.admin_ui_colorLabel',function(){
                                                $(this).remove();
                                            });
                                        }
                                        var tagBox = $this.siblings('.admin_ui_input_tagBox');
                                        var length = length = tagBox.children('.admin_ui_colorLabel').length;
                                        if(length){
                                            for(var k = 0; k < length; k++){
                                                if(tagBox.children('.admin_ui_colorLabel').eq(k).text() == $(this).text()){
                                                    break;
                                                }
                                                if(k == length-1){
                                                    tagBox.append('<div class="admin_ui_colorLabel">'+$(this).text()+'</div>');
                                                }
                                            }
                                        }
                                        else{
                                            tagBox.append('<div class="admin_ui_colorLabel">'+$(this).text()+'</div>');
                                        }  
                                    });
                                    selectBox.append(line);
                                }
                                selectBox.show();
                            }
                            else{
                                var line = '<div class="line" onclick="return false">'+
                                                '无搜索结果'+
                                            '</div>';
                                selectBox.append(line);
                            }  
                        }
                    }).fail(function(data){
                        console.log(data);
                    });
                }, 500);
            }
            else{
                selectBox.empty().hide();
            }
        })
    });
    // 自动填充输入框 结束
    // 上传轮播图部分 开始
    $.each($("[data-sildeImageBox]"),function(){
        var $this = $(this);
        var src = $this.attr("data-src");
        if(src){
            var image = '<img src="'+src+'" />';
            $this.find(".slideImageUpload").append(image);
        }
        $this.find(".slideImageUpload").bind('click',function(){
            var $slideImageUpload = $(this);
            var $sildeImageBox = $this;
            // 值为0时说明这个为传图片的盒子
            if($(this).closest("[data-sildeImageBox]").attr("data-sildeImageBox")!=1){
                var fileInput = document.createElement("input");
                fileInput.type = "file";
                fileInput.accept="image/*";
                fileInput.click();
                fileInput.addEventListener('change',function(event){
                    if(this.files[0].type.match(/image\/\w*/)){
                        var objectURL = window.URL.createObjectURL(this.files[0]);
                        var _image = '<img src="'+objectURL+'" />';
                        _image.onload = function(){
                            window.URL.revokeObjectURL(this.src);
                        };
                        var $_sildeImageBox = $sildeImageBox.clone().attr({
                            "data-src": objectURL,
                            "data-id":0,
                            "data-sildeImageBox": 1
                        }).data({
                            "file": this.files[0]
                        });
                        console.log(_image);
                        $_sildeImageBox.find(".slideImageUpload").append(_image);
                        $_sildeImageBox.insertBefore($this);
                    }
                    else{
                        alert("请上传图片格式的文件");
                    }
                    
                });
            }
        });
    });
    // 上传轮播图部分 结束

    // 搜索框
    $("#searching").bind('click',function(){
        var keyword = $("#search").val();
        var tbody = $(".admin_ui_table>tbody");
    })
}
function windowReset(){
	var h =  $(window).height()-$(ADMIN_CONFIG.headerSelector).height();
    $(ADMIN_CONFIG.contentSelector).height(h);
}
function loadContent() {
    var hash = window.location.hash;
    if (hash == "") {
        hash = "#/"+ADMIN_CONFIG.homePage;
    }
    $(ADMIN_CONFIG.contentSelector).load(hash.split("/")[1], function(){
        uiComponentEventBind();
    });
}
var Tvm = Vue.extend({
    data: function(){
        return {JSON: JSON}
    },
    methods: {
        stamp2time: stamp2time
    }
});
// 时间戳转化为时间
function stamp2time(stamp) {
    var time = new Date(stamp);
    var year = time.getFullYear();
    var month = time.getMonth() - 0 + 1;
    month = month < 10 ? "0" + month : month;
    var day = time.getDate();
    day = day < 10 ? "0" + day : day;
    var hour = time.getHours();
    var minute = time.getMinutes();

    var now = new Date();
    var nowyear = now.getFullYear();
    var nowmonth = now.getMonth() - 0 + 1;
    nowmonth = nowmonth < 10 ? "0" + nowmonth : nowmonth;
    var nowday = now.getDate();
    var timeString = '';
    //if (year != nowyear) {
        return year + "-" + month + "-" + day;
    //} else {
    //    // 今年
    //    if (month == nowmonth && day == nowday) {
    //        // 说明是今天
    //        return hour + ":" + minute;
    //    } else {
    //        return month + "-" + day;
    //    }
    //}
}

function getQueryData(){
    var search = /\?(.*)/.exec(window.location.hash);
        search = search?search:"";
    var URI = decodeURI(search&&search[1]);
    var parseURI = URI;
    if(URI){
        try{
            parseURI = JSON.parse(URI);
        }
        catch(e){
            parseURI = "";
        }
    }
    return parseURI;

}
function handleNullObject(object,key){
    var value;
    try{
        value = object[key];
    }
    catch(e){
        value = "";
    }
    return value;
}
// base64转blob
function dataURL2Bolb(dataURL) {
    var arr = dataURL.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {
        type: mime
    });
}
// img对象获得base64
function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, img.width, img.height);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL;
}
// 获取图片
function getImageByUrl(url,width,height){
    width = width?width:"";
    height = height?height:"";
    return "/map?photo="+url+"&width="+width+"&height="+height;
}


