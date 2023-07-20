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
::: tip 作业
使用文件系统完成，用户登录，修改用户信息
:::
### 三、安装应用生成器
```shell
  npm install express-generator -g
```
在终端cmd或者vscode的终端 进入到 你想放置项目的目录
```shell
#helloworld为目录名
express helloworld 
```
安装完成后cd 进入 目录 进行安装项目所需要的依赖并运行
```shell
cd helloworld
npm install
npm start
```
此时打开浏览器访问 ：[ http://127.0.0.1:3000/]( http://127.0.0.1:3000/) 查看是否可以访问
::: tip 安装文件改动时自动重启服务器
```shell
npm install -g nodemon
# 这里还可以把它作为开发依赖将安装在本地，
# 于是使用这个项目的开发人员只要安装这个应用就能自动获得。
# 通过以下命令将其安装在骨架项目的根目录 
# npm install --save-dev nodemon
```
执行完毕后代 项目根目录的 package.json 文件查看是否下面这个属性
```json
 "devDependencies": {
    "nodemon": "^X.XX.X"
  }
```
找到 package.json 的 scripts 部分。
在 "start" 一行的末尾添加逗号，并在新的一行中添加 "dev"，如下:
```json
 "scripts": {
    "start": "node ./bin/www",
    "dev": "nodemon ./bin/www" //将此行命令添加到文件中
  },
```
现在可以使用下面命令尝试启动项目
```shell 
npm run dev
```
:::
### 四、Mysql 安装
根据自己的系统版本下载对应的安装包
[官网下载地址](https://dev.mysql.com/downloads/mysql/)
下载完成后解压到指定目录<br>
在mysql目录下创建配置文件
```ini
[client]
# 设置mysql客户端默认字符集
default-character-set=utf8
 
[mysqld]
# 设置3306端口
port=3306
# 设置mysql的安装目录
basedir=C:\\web\\mysql-8.0.11
# 允许最大连接数
max_connections=20
# 服务端使用的字符集默认为8比特编码的latin1字符集
character-set-server=utf8
# 创建新表时将使用的默认存储引擎
default-storage-engine=INNODB
```
访问bin目录打开cmd终端初始化mysql(需要管理员的身份)
```shell
mysqld --initialize --console
```
执行完成后，会输出 root 用户的初始默认密码，如:
```shell
...
2018-04-20T02:35:05.464644Z 5 [Note] [MY-010454] [Server] A temporary password is generated for root@localhost: APWCY5ws&hjQ
...
```
安装启动mysql
```shell
mysqld install
net start mysql
```
登录mysql
```shell
mysql -h 主机名 -u 用户名 -p
```
修改默认密码和远程访问的权限
```shell
# 1.登录
mysql -u root -p
#  2.选择数据库
use mysql;
# 3. 修改root密码
#修改初始密码
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';
#之后修改密码使用下面的语句
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123456';
# 4.修改远程访问权限
update user set host = '%' where user = 'root';
# 5.刷新权限
FLUSH PRIVILEGES;
# 6.退出 
exit;
```
