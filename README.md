# 小书签生成器(Bookmarklet Generator)

#### 介绍
一个小书签生成器,打开后拖动即可<br/>
a small bookmark generator,you can build your bookmarklet on a page and drag it on your favorites.<br/>
[example](https://ghimi-g.github.io/bookmarklet/index.html)

<!DOCTYPE html>  
<html>  
  <head>  
    <title>悬浮球按钮</title>  
    <style>  
      #drop-button {  
        background-color: #4CAF50;  
        border: none;  
        color: white;  
        padding: 10px 20px;  
        text-align: center;  
        text-decoration: none;  
        display: inline-block;  
        font-size: 16px;  
        margin: 20px;  
        cursor: pointer;  
        position: relative;  
      }  
      #drop-button:hover {  
        background-color: #3e8e41;  
      }  
      #drop-button-container {  
        background-color: #fff;  
        border-radius: 5px;  
        width: 200px;  
        margin: 20px auto;  
        padding: 10px;  
      }  
      #drop-button-container button {  
        background-color: #4CAF50;  
        border: none;  
        color: white;  
        padding: 10px 20px;  
        text-align: center;  
        text-decoration: none;  
        display: inline-block;  
        font-size: 16px;  
        margin: 0 20px;  
        cursor: pointer;  
        position: absolute;  
        top: 0;  
        left: 0;  
        width: 100%;  
        height: 100%;  
      }  
    </style>  
  </head>  
  <body>  
    <div id="drop-button-container">  
      <button id="drop-button">悬浮球按钮</button>  
    </div>  
    <script>  
      document.getElementById("drop-button").addEventListener("click", function() {  
        document.getElementById("drop-button-container").style.backgroundImage = "url('https://picsum.photos/id/1/600/400')" + this.id + ".png";  
      });  
    </script>  
  </body>  
</html>  

