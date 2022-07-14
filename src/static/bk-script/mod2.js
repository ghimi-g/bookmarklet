/**
 * @name 原型脚本
 * @desc 之后可以参考这个脚本进行小书签的开发
 */
(() => {
    console.log("代码开始执行");

    function JsPlugin() {
        this.loadCss('https://cdn.bootcdn.net/ajax/libs/bulma/0.9.3/css/bulma.min.css');
        const jsList = [
            'https://cdn.bootcdn.net/ajax/libs/vue/2.6.9/vue.min.js',
            'https://cdn.bootcdn.net/ajax/libs/blueimp-md5/2.18.0/js/md5.min.js',
            'https://babalae.github.io/genshin-info/js/bh-render.js'
        ];
        this.loadScript(jsList).then(function() {
            console.log('加载完成，执行回调');
            // write your own code
        }).catch(e => console.log(e));
    };
    /**
     * 加载 JS 脚本
     * @param {array|string} url js地址
     * @param {function} callback 回调函数
     */
    async function loadScript(url) {
        if (typeof url === 'object' && url instanceof Array) {
            var p = null;
            for (u of url) {
                p = p == null ? loadScript(u) : p.then(() => loadScript(u));
            }
            return p;
        }
        const script = document.createElement('script');
        script.type = 'text/javascript';
        const ret = new Promise((resolve, reject) => {
            if (script.readyState) {
                script.onreadystatechange = function() {
                    if (script.readyState === 'loaded' || script.readyState === 'complete') {
                        script.onreadystatechange = null;
                        return resolve();
                    } else {
                        return reject();
                    }
                }
            } else {
                script.onload = resolve;
            }
        });
        script.src = url;
        document.body.append(script);
        return ret;
    }
    /**
     * 加载 css 脚本
     * @param {string} url url/cssText
     */
    function loadCss(url) {
        /**
         * 判断是否为 url
         * @param {string} path 路径
         * @returns boolean true/false
         */
        function isUrl(path) {
            const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
            return reg.test(path);
        }
        let head = document.getElementsByTagName('head')[0];
        if (isUrl(url)) {
            const link = document.createElement('link');
            link.type = 'text/css';
            link.rel = 'stylesheet';
            link.href = url;
            head.appendChild(link);
        } else {
            const style = document.createElement("style");
            style.innerText = url;
            head.appendChild(style);
        }
    }
    JsPlugin.prototype = {
        loadScript,
        loadCss
    };
    if (!window._ysq) {
        window._ysq = new JsPlugin();
    }
})();
