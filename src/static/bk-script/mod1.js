/**
 * @name 小书签1
 * @desc 这是一个测试书签
 */
(() => {
    function load(url) {
        // 不存在跨域问题,但会受到https 限制
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        document.body.appendChild(script);
    }
    function load2() {
        // 存在跨域问题
        fetch("http://localhost:6600/module/mod3.js")
            .then(res => res.text())
            .then(js => eval(js));
    }
    console.log("这里可以写你的小书签了");
    alert("来自小书签的提示！");
})();
