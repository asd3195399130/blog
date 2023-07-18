# NodeJs

## Express 框架

### 一、安装
```bash
    # 初始化
    npm init -y
    # 安装express框架
    npm install express --save
    # 安装body-parser cookie-parser multer
    npm install body-parser --save
    npm install cookie-parser --save
    npm install multer --save
```
### 二、hello demo
:::: code-group
::: code-group-item index.js
```javascript 
//引入框架
var express = require("express");
//获取框架的实例对象
var app = express();
//调用app的get方法传入2个参数
//第一个参数 访问路径  也叫做路由
//第二个参数 回调函数 做具体的业务使用
//  req==request 请求的一些信息  res==response 响应的一些
app.get("/", function (req, res) {
  //调用响应的函数send发送 响应信息
  res.send("Hello World");
});
app.get("/user", (req, res) => {
  res.json({ name: "李艳阳" });
});
app.post("/user", (req, res) => {
  console.log(req.query);
  res.json({
    msg: "success",
    code: 200,
  });
});
//启动一个对外的服务端口是8081
app.listen(8081, function () {
  console.log("启动成功");
});

```
:::
::::