/**
 * @name 小书签工具
 * @desc 之后可以参考这个脚本进行小书签的开发
 */
(()=>{
	var t={};
	var e=!0;
	if("object"==typeof this.artoo&&(artoo.settings.reload||(artoo.log.verbose("artoo already exists within this page. No need to inject him again."),artoo.loadSettings(t),artoo.exec(),e=!1)),e){
		var o = document.getElementsByTagName("body")[0];
		o||(o=document.createElement("body");
		document.documentElement.appendChild(o));
		var a=document.createElement("script");
		console.log("artoo.js is loading...");
		a.src="//ghimi-g.gitee.io/bookmarklet/artoo/artoo-latest.min.js";
		a.type="text/javascript";
		a.id="artoo_injected_script";
		a.setAttribute("settings",JSON.stringify(t));
		o.appendChild(a)
	}
})(this);