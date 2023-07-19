## 一、Git 简介
#### 什么是 Git？
Git 是一种分布式版本控制系统，可以用于管理软件开发中的源代码和历史版本。它最初由Linus Torvalds创建，旨在为Linux内核开发提供一个更好的版本控制工具。Git通过跟踪文件的修改历史，使得用户可以随时回退到任何之前的版本，并支持多人协作开发。它使用命令行工具或图形界面来进行操作，并具有高度灵活性和可扩展性。Git已成为当前最广泛使用的版本控制系统之一,广泛应用于软件开发、文档管理、网站开发等领域。
#### Git 的优势和特点

1. 分布式：Git 和传统的集中式版本控制系统不同，它是一种分布式的版本控制系统。每个人的本地仓库都包含了完整的代码历史记录，可以随时离线操作和提交代码。这样可以非常灵活地进行协作开发。
2. 高效性：Git 在管理和合并分支上非常高效，使用 Git 可以轻松实现多人协作开发，大大提高开发效率。而且由于是分布式的，对服务器的依赖也比较小。
3. 数据完整性：Git 会对所有数据进行哈希处理，一旦提交数据后，哈希值就不会再改变。这种特性保证了数据的完整性，一旦有数据损坏或丢失，可以通过哈希值来进行恢复。
4. 强大的分支管理：Git 的分支管理功能非常强大，用户可以轻松创建、切换、合并分支，让开发更加灵活和高效。
5. 多平台支持：Git 支持多平台，包括 Windows、Linux、macOS 等操作系统。
6. 大型项目管理：Git 可以很好地管理大型项目，它能够应对数百万行的代码，并且可以很好地管理各种版本和发布
#### 常用的 Git 管理工具

1. 命令行工具：Git 自带了命令行工具，可以通过命令行操作 Git。
2. GUI 工具：例如 TortoiseGit、GitKraken 等，这些 GUI 工具提供了更加友好的用户界面，方便用户进行 Git 操作。
3. 集成开发环境（IDE）：常见的 IDE 如 Eclipse、IntelliJ IDEA 等都集成了 Git 的功能，使得开发者可以直接在 IDE 中进行 Git 管理。
4. 代码托管平台：如 GitHub、GitLab、Bitbucket 、Gitee、coding等，这些平台除了提供代码托管服务，也提供了 Git 的管理功能，使得开发者可以直接在平台上进行 Git 相关操作
#### 下载安装Git

2. 下载git 

[https://github.com/git-for-windows/git/releases/download/v2.39.0.windows.1/Git-2.39.0-64-bit.exe](https://github.com/git-for-windows/git/releases/download/v2.39.0.windows.1/Git-2.39.0-64-bit.exe)
云盘下载
工具 [https://www.aliyundrive.com/s/RciDDwgjSNv](https://www.aliyundrive.com/s/RciDDwgjSNv) 点击链接保存，或者复制本段内容，打开「阿里云盘」APP ，无需下载极速在线查看，视频原画倍速播放。
![image.png](https://cdn.nlark.com/yuque/0/2023/png/29209509/1682317790469-144e2d9c-6596-4494-844f-f15d7de0fa2b.png#averageHue=%23f0efee&clientId=uf8b8dbd5-1ff5-4&from=paste&height=394&id=uefc1a23c&originHeight=986&originWidth=1232&originalType=binary&ratio=2.5&rotation=0&showTitle=false&size=82520&status=done&style=none&taskId=u0fa03e33-9724-4e3b-b6ea-9a54cff7326&title=&width=492.8)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/29209509/1682317801777-05ca372d-8e07-4668-91a6-9bbbf8d47221.png#averageHue=%23ebe9e9&clientId=uf8b8dbd5-1ff5-4&from=paste&height=379&id=u69b0fbc6&originHeight=948&originWidth=1243&originalType=binary&ratio=2.5&rotation=0&showTitle=false&size=64496&status=done&style=none&taskId=u97ee52b6-8e04-4377-9db0-b760a7c0376&title=&width=497.2)
#### 常用的win命令
| 命令 | 描述 | 参数 | 示例 |
| --- | --- | --- | --- |
| dir | 列出指定目录下的文件和子目录 | 目录路径（可选） | dir C:\\ |
| cd | 改变当前目录为指定的目录 | 目录路径 | cd C:\\Windows\\System32 |
| md/mkdir | 创建新目录 | 目录名称 | md new_folder |
| echo  | 创建文件 | 
 | echo 内容 >> 文件名.txt |
| rd/rmdir | 删除指定目录 | 目录名称 | rd unwanted_folder |
| 
 | 文件名提示 | 
 | 文件名前缀+tab键 |
| copy | 复制一个或多个文件到指定位置 | 文件名 目标路径 | copy file.txt C:\\new_folder |
| xcopy | 复制文件和目录树 | 源路径 目标路径 | xcopy /s C:\\my_folder\\ D:\\backup |
| del | 删除一个或多个文件 | 文件名 | del old_file.txt |
| ren/rename | 重命名文件或目录 | 文件名 新文件名 | ren current_file.txt updated_file.txt |
| type | 显示文本文件内容 | 文件名 | type readme.txt |
| cls | 清空屏幕显示 | 无 | cls |
| color | 更改控制台颜色 | 颜色代码 | color 9 |
| start | 启动单独的窗口以运行指定的程序或命令 | 文件名 | start firefox.exe |
| tasklist | 列出所有正在运行的进程 | 无 | tasklist |
| ping | 测试与另一台计算机的连接 | IP 地址 | ping 192.168.1.1 |
| ipconfig/ifconfig | 显示网络接口配置信息 | 无 | ipconfig |
| netstat | 显示网络状态和活动连接 | 无 | netstat -ano |
| tracert | 跟踪到目标并显示路径上的每个网关 | 目标地址 | tracert www.google.com |
| systeminfo | 显示计算机的系统配置信息 | 无 | systeminfo |
| chkdsk | 检查磁盘并显示有关磁盘使用情况的统计信息 | 磁盘代号 | chkdsk C: |
| defrag | 重新排列磁盘上的文件以改善系统性能 | 磁盘代号 | defrag C: |
| sfc /scannow | 扫描并修复 Windows 系统文件，以确保它们没有损坏或遭受破坏 | 无 | sfc /scannow |
| taskkill | 终止一个或多个进程 | 进程 ID | taskkill /pid 1234 |
| shutdown | 关闭计算机 | 无 | shutdown -s -t 0 |
| help | 显示帮助信息 | 命令名称 | help dir |

二、Git 使用流程

1. 创建本地 Git 仓库：通过 git init 命令在本地创建 Git 仓库。
2. 添加文件到 Git 仓库：使用 git add 命令将修改的代码添加到 Git 的暂存区中，例如，添加一个文件可以使用命令 git add filename。
3. 提交文件到 Git 仓库：使用 git commit 命令将暂存区中的修改提交到 Git 仓库中，例如，提交可以使用命令 git commit -m "commit message"。
4. 查看 Git 状态信息：使用 git status 命令查看当前 Git 仓库的状态信息，例如，查看可以使用命令 git status。
5. 查看提交历史：使用 git log 命令查看当前 Git 仓库的提交历史信息，例如，查看可以使用命令 git log。
## 三、Git 分支管理
#### 分支的概念和作用
Git 中的分支是指从主干分支（通常为 master 或main分支）派生出来的一个开发分支，它可以在不影响主干分支的情况下开发新功能、修复问题等。分支在 Git 中非常重要，因为它允许多人协作开发，提高了团队的协作效率。
:::success
特性分支（Feature Branches）：用于开发新功能或添加新特性的分支。每个特性都可以在一个独立的分支上进行开发，这样可以保持主分支的稳定性，同时允许团队成员并行工作。一旦特性开发完成，可以将其合并到主分支。

修复分支（Bugfix Branches）：用于修复已知问题或错误的分支。当发现bug时，可以从主分支中创建一个修复分支，并在该分支上进行修改和测试。修复完成后，再将其合并回主分支。

发布分支（Release Branches）：用于发布软件版本的分支。在软件开发周期的某个阶段，可能需要为即将发布的版本创建一个独立的分支。在这个分支上，可以进行最后的测试、调整和文档编写等工作。一旦准备就绪，可以将发布分支合并到主分支，并发布该版本。

预发分支（Pre-release Branches）：在软件发布前的预发布环境中进行测试的分支。在软件开发完成后，通常会先将其部署到一个预发布环境中，进行全面测试和验证。为此，可以创建一个预发分支，并在该分支上进行测试。如果有必要，可以在预发分支上进行修复和调整，直到通过所有测试为止。

热修复分支（Hotfix Branches）：用于紧急修复线上问题的分支。当在生产环境中出现紧急bug或问题时，可以从主分支中创建一个热修复分支，针对该问题进行修复。修复完成后，将其合并回主分支，并将修复应用于生产环境，以尽快解决问题。

开发分支（Development Branches）：用于整体开发工作的分支。在大型项目中，可能会有多个人同时进行开发，并行处理多个特性或任务。为了避免互相干扰，可以为每个开发人员创建一个独立的开发分支，各自完成自己的任务。开发分支一般从主分支派生，并在任务完成后合并回主分支。

合并分支（Merge Branches）：用于合并多个分支的分支。有时候，可能需要将多个特性分支合并到一起形成一个整体功能。为了处理这种情况，可以创建一个合并分支，将所有需要合并的分支逐一合并到该分支上，确保最终整合的功能稳定可用。

实验分支（Experiment Branches）：用于进行实验性或临时性的开发工作的分支。在某些情况下，可能需要尝试一些新的想法、算法或技术，但不希望直接在主分支上进行。在这种情况下，可以创建一个实验分支，进行相关的尝试和测试工作。根据实验结果，可以决定是否将其合并到主分支或其他适当的分支。

文档分支（Documentation Branches）：用于编写和更新文档的分支。项目不仅需要代码，还需要清晰、准确的文档来记录设计、用法、API等信息。为了管理文档的版本和更新，可以使用专门的文档分支。在该分支上进行文档的编写、更新和校对等工作，并在适当的时候合并回主分支。

实施分支（Deployment Branches）：用于部署和发布代码到生产环境的分支。在一些大规模项目中，可能存在多个不同的环境（如开发环境、测试环境、生产环境等）。为了实现持续集成和部署，可以为每个环境创建相应的实施分支，将代码部署到相应的环境中
:::
#### 创建和切换分支
在 Git 中创建和切换分支非常简单，可以使用命令 git branch 创建分支，例如，创建一个名为 feature 的分支可以使用命令 git branch feature。使用命令 git checkout 切换分支，例如，切换到名为 feature 的分支可以使用命令 git checkout feature。
#### 合并分支
当开发者在分支中完成了某项工作后，需要将分支中的修改合并到主干分支，可以使用 git merge 命令进行合并，例如，在主干分支上执行命令 git merge feature 将 feature 分支所做的更改合并到主干分支中
#### 解决合并冲突
有时候，在进行分支合并时可能会出现合并冲突的情况，需要手动解决冲突。解决冲突的步骤通常包括以下几个部分：

1. 执行 git merge 合并分支时，Git 会报告发生冲突的文件。在合并冲突之前，需要先将代码库更新到最新的版本。
2. 手动修改冲突代码，通常可以使用文本编辑器进行修改。在解决冲突时，需要确保修改后的代码可以顺利运行。
3. 对修改后的代码执行 git add 和 git commit 命令，将修改后的代码提交到 Git 仓库中。
#### .设置git用户名和密码 或 设置秘钥
1.全局用户名
:::success
git config --global user.name "名字"                   设置名字
git config --global user.email "邮箱@qq.com"
:::
正常在使用之前会有提示 输入用户名和密码  设置用户密码 只用设置一次就可以了
```git
1、首先，在Git.bash终端输入命令：

git config --global credential.helper store

# 2、然后你会发现你的C:\Users\用户名xx.gitconfig**文件会多出以下代码：
# [credential]
# 	helper = store**

3、紧接着，使用git pull或者git push 命令，根据提示输入帐号和密码。这时你的本地生成一个类似C:\Users\用户名xx.git-credentials文件，用于记录帐号密码。

https://帐号:密码@gitee.com

4、完成以上几步，下次就不用再次输帐号密码了。
```
2.秘钥key
:::info
使用秘钥的方式：[https://gitee.com/help/articles/4181#article-header0](https://gitee.com/help/articles/4181#article-header0)
:::
## 四、Git 远程仓库
1.注册 gitee账户
[https://gitee.com/enterprises?invite_co de=Z2l0ZWUtMjIzNDU1OA%3D%3D](https://gitee.com/enterprises?invite_code=Z2l0ZWUtMjIzNDU1OA%3D%3D)
注册完成 ，新建一个仓库 ，建好之后 在下面的页面不要动
![image.png](https://cdn.nlark.com/yuque/0/2022/png/29209509/1671000227659-e45105e8-65b1-4bb4-81fa-17cd2b230667.png#averageHue=%23afaeae&clientId=uce629b3a-8ff7-4&from=paste&height=417&id=u8d298e6c&originHeight=1677&originWidth=2003&originalType=binary&ratio=1&rotation=0&showTitle=false&size=234885&status=done&style=none&taskId=ue207844d-3651-4d2e-9b4d-0f637765459&title=&width=497.5075378417969)
```javascript
// Git 全局设置:
git config --global user.name "LL"
git config --global user.email "459077797@qq.com"
// ————————————————————————————————————————————————————————————————
// 创建 git 仓库:
mkdir ultraman123
cd ultraman123
git init 
touch README.md
git add README.md
git commit -m "first commit"
git remote add origin https://gitee.com/lhcoding/ultraman123.git
git push -u origin "master"
// ————————————————————————————————————————————————————————————————
// 已有仓库?
cd existing_git_repo
git remote add origin https://gitee.com/lhcoding/ultraman123.git
git push -u origin "master"
```

- 连接远程仓库

git remote add origin url

- 推送本地代码到远程仓库
- git push
- 从远程仓库拉取代码
- 解决冲突
## 常用命令
```git
git init 初始化仓库
git add 文件名  添加文件  当新建文件新增文件时需要add
git add  .  增加所有新增的文件到git版本
git commit -m "备注"  提交当前所有的修改 包括删除和新增
git push --set-upstream origin master
git pull origin master  拉取远端仓库
--allow-unrelated-histories   拉取远端仓库 并合并历史版本
git push 推送
-u origin "master"  远端master主分支
git clone 远端链接  克隆一个远端仓库
git status  查看当前文件状态
git log  查看提交历史
git reset --hard 版本号  回退到指定版本
git reset --hard "HEAD^" 回退上一个版本
git reset --hard "HEAD^^" 上上一个版本
分支
git branch 查看分支
分支名--创建分支
-a--查看所有分支
git checkout  分支名   	切换分支 
git push origin --delete bug2.0   删除远端分支 
git merge  分支名   合并分支
```
## 五、GitHub Pages
GitHub Pages 是一个免费的静态网站托管服务，可以将 GitHub 仓库中的代码转换为静态网站并发布到互联网上。要使用 GitHub Pages，需要先在 GitHub 上创建一个仓库，并将你的静态网站代码上传到该仓库。然后，通过配置 GitHub Pages 选项来指定将哪个分支的代码作为静态网站进行发布。
#### 配置 GitHub Pages 选项
#### 创建和发布静态网站
下面是创建和发布静态网站的基本步骤：

1. 在 GitHub 上创建一个新的仓库，例如，可以将仓库命名为 username.github.io，其中 username 是你的 GitHub 用户名。这是默认的 GitHub Pages 仓库名称，它将作为你的个人网站首页。
2. 将你的静态网站代码上传到该仓库，可以使用 Git 命令或者 GitHub Desktop 等工具将代码提交到仓库中。
3. 进入仓库的设置页面，选择 左侧 Pages 选项。在 选择要用于生成静态站点的代码分支，通常为 main 分支或 master 分支。
4. 点击 Save 按钮保存设置，等待几分钟，GitHub Pages 就会自动为你的仓库创建静态网站并发布到互联网上。
5. 打开浏览器访问 https://username.github.io，即可查看你的个人网站。
## 六、GitHub Actions 
### GitHub Actions 是什么？
:::success
大家知道，持续集成由很多操作组成，比如抓取代码、运行测试、登录远程服务器，发布到第三方服务等等。GitHub 把这些操作就称为 actions。
很多操作在不同项目里面是类似的，完全可以共享。GitHub 注意到了这一点，想出了一个很妙的点子，允许开发者把每个操作写成独立的脚本文件，存放到代码仓库，使得其他开发者可以引用。
如果你需要某个 action，不必自己写复杂的脚本，直接引用他人写好的 action 即可，整个持续集成过程，就变成了一个 actions 的组合。这就是 GitHub Actions 最特别的地方。
GitHub 做了一个[官方市场](https://github.com/marketplace?type=actions)，可以搜索到他人提交的 actions。另外，还有一个 [awesome actions](https://github.com/sdras/awesome-actions) 的仓库，也可以找到不少 action
上面说了，每个 action 就是一个独立脚本，因此可以做成代码仓库，使用userName/repoName的语法引用 action。比如，actions/setup-node就表示github.com/actions/setup-node这个仓库，它代表一个 action，作用是安装 Node.js。事实上，GitHub 官方的 actions 都放在 github.com/actions 里面。
既然 actions 是代码仓库，当然就有版本的概念，用户可以引用某个具体版本的 action。下面都是合法的 action 引用，用的就是 Git 的指针概念，详见[官方文档](https://docs.github.com/en/actions/creating-actions/about-custom-actions#versioning-your-action)
:::
```git
actions/setup-node@74bc508 # 指向一个 commit
actions/setup-node@v1.0    # 指向一个标签
actions/setup-node@master  # 指向一个分支
```
### 基本概念
GitHub Actions 有一些自己的术语。
（1）workflow （工作流程）：持续集成一次运行的过程，就是一个 workflow。
（2）job （任务）：一个 workflow 由一个或多个 jobs 构成，含义是一次持续集成的运行，可以完成多个任务。
（3）step（步骤）：每个 job 由多个 step 构成，一步步完成。
（4）action （动作）：每个 step 可以依次执行一个或多个命令（action）。
### workflow 文件
GitHub Actions 的配置文件叫做 workflow 文件，存放在代码仓库的.github/workflows目录
workflow 文件采用[ YAML 格式](http://www.ruanyifeng.com/blog/2016/07/yaml.html)，文件名可以任意取，但是后缀名统一为.yml，比如foo.yml。一个库可以有多个 workflow 文件。GitHub 只要发现.github/workflows目录里面有.yml文件，就会自动运行该文件。
workflow 文件的配置字段非常多，详见[官方文档](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)。下面是一些基本字段。
**（1）name**
name字段是 workflow 的名称。如果省略该字段，默认为当前 workflow 的文件名。
```bash
name: GitHub Actions Demo
```
**（2）on**
on字段指定触发 workflow 的条件，通常是某些事件。
```bash
on: push
```
上面代码指定，push事件触发 workflow。
on字段也可以是事件的数组。
```bash
on: [push, pull_request]
```
上面代码指定，push事件或pull_request事件都可以触发 workflow。
完整的事件列表，请查看[官方文档](https://help.github.com/en/articles/events-that-trigger-workflows)。除了代码库事件，GitHub Actions 也支持外部事件触发，或者定时运行。
**（3）on.<push|pull_request>.<tags|branches>**
指定触发事件时，可以限定分支或标签。

```bash
on:
  push:
    branches:    
      - master
```
上面代码指定，只有master分支发生push事件时，才会触发 workflow。
**（4）jobs.<job_id>.name**
workflow 文件的主体是jobs字段，表示要执行的一项或多项任务。
jobs字段里面，需要写出每一项任务的job_id，具体名称自定义。job_id里面的name字段是任务的说明。
```javascript
jobs:
  my_first_job:
    name: My first job
  my_second_job:
    name: My second job
```
上面代码的jobs字段包含两项任务，job_id分别是my_first_job和my_second_job。
**（5）jobs.<job_id>.needs**
needs字段指定当前任务的依赖关系，即运行顺序。
```javascript
jobs:
  job1:
  job2:
    needs: job1
  job3:
    needs: [job1, job2]
```
上面代码中，job1必须先于job2完成，而job3等待job1和job2的完成才能运行。因此，这个 workflow 的运行顺序依次为：job1、job2、job3。
**（6）jobs.<job_id>.runs-on**
runs-on字段指定运行所需要的虚拟机环境。它是必填字段。目前可用的虚拟机如下。

- ubuntu-latest，ubuntu-18.04或ubuntu-16.04
- windows-latest，windows-2019或windows-2016
- macOS-latest或macOS-10.14

下面代码指定虚拟机环境为ubuntu-18.04。

```javascript
runs-on: ubuntu-18.04
```
**（7）jobs.<job_id>.steps**
steps字段指定每个 Job 的运行步骤，可以包含一个或多个步骤。每个步骤都可以指定以下三个字段。

- jobs.<job_id>.steps.name：步骤名称。
- jobs.<job_id>.steps.run：该步骤运行的命令或者 action。
- jobs.<job_id>.steps.env：该步骤所需的环境变量。

下面是一个完整的 workflow 文件的范例。

```javascript
name: Greeting from Mona
on: push

jobs:
  my-job:
    name: My Job
    runs-on: ubuntu-latest
    steps:
    - name: Print a greeting
      env:
        MY_VAR: ikun
        FIRST_NAME: cai
        MIDDLE_NAME: xu
        LAST_NAME: kun
      run: |
        echo $MY_VAR $FIRST_NAME $MIDDLE_NAME $LAST_NAME.
```
上面代码中，steps字段只包括一个步骤。该步骤先注入四个环境变量，然后执行一条 Bash 命令。

[https://www.actionsbyexample.com/](https://www.actionsbyexample.com/)
[https://mrhope.site/code/github/](https://mrhope.site/code/github/)
## 常见问题

1. 清除代理/配置代理
git config --global --unset http.proxy

git config --global --unset https.proxy

2. 过滤不需要添加到版本控制的文件

 新建一个文件.gitignore 添加如下内容保存 之后git就不会将这些文件或文件夹添加到git追踪记录
```
node_modules
5-15/node_modules
222
44444
222
```
3. 工作中 的一些事项
    ::: tip 
        1. 第一天上班：
            有人对接:
                交付工作内容,以及相关项目事项,工作群等,项目代码,账户是自己，还是公司给分配
            无人对接:
                主动找组长主管领导问,需要和谁交接工作或从事一个新的项目等，
        2. 以上清楚之后,首先熟悉工作电脑,把自己工作的工具什么都检查安装
        3. 拉取项目:
            现有项目:
                需要知道公司使用的是什么平台例如：github,gitee,coding,gitlab等
                把自己相对应的账户邮箱发给项目领导，邀请你加入一下项目仓库（记得提前把自己的仓库删掉或者隐藏）
                加入成功之后,在本地拉取代码
                拉取代码之前 一定要先安装好git配置好git的账户密码（最好使用秘钥）
                拉取之后 尝试在本地跑一下项目
                需要配置代理的就配置一下
                项目可以运行之后，熟悉代码（一定要有耐心去看别人的代码，对照这运行的项目每个功能最后都大致过一遍）

            新项目：
                问领导新项目的类型,以及相关技术选型，听到自己没有用过的技术先去学，等领导把基础架构做好 等拉取代码
                如果全权交给你，你就选一套技术选型方案，然后和领导沟通有什么问题没
            
    :::