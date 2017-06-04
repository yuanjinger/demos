console.log("hello world");
function init(){
	setInterval(function(){
		applicationCache.update();
	},5000);
	applicationCache.addEventListener("updateready",function(){
		if(confirm("本地缓存已被更新，需要刷新画面获取应用程序最新版本，是否刷新？")){
			applicationCache.swapCache();
			location.reload();
		}
	},true);

}