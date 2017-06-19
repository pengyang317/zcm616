$(function(){
	//设置html标签的font-size的大小
	var w = document.documentElement.offsetWidth;
	var fs = w/750 *100 +"px";   // 750是设计稿的宽度,100是取的基准值
	
	$("html").css("font-size",fs);
		
})
