# 分支
分支是git版本控制系统中重要的概念

## remote仓库
`remote`仓库是指托管在远程服务器上的仓库,
你本地的git仓库可以指定多个远程仓库

远程仓库可能包含多个分支, 如`remote/main`, `remote/dev`, 等.

### 添加仓库
```sh
git remote add <仓库名称> <url> 
```

### origin远程仓库
origin 一般表示默认的远程仓库,

#### 添加origin远程仓库
```sh
git remote add origin <url> 
```

### 默认上游分支
默认上游分支是分支的属性，
当在某个分支执行例如[push](workflow.md#推送)等命令时的默认远程分支。


### 设置远程推送URL
```sh
git remote set-url --push origin <url>
```

## local仓库
local仓库是指你本地的仓库

local仓库基本是remote仓库的一个镜像版本,

例如你如果有远程仓库`remote/main`,
那么你本地仓库的`main`分支就是`remote/main`的一个镜像版本.

之后你所有关于`main`分支的修改本地的修改和提交都发生在本地仓库的`main`分支上

所以你[push](workflow.md#推送)命令实际上是把本地的分支同步到远程仓库的对应分支上.
