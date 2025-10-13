# Ubuntu Environment

## 1. 目录
- [1.环境配置的一些经验](#1ubuntu中c环境配置遇到的坑-90-是各个库版本不兼容)
- [2.自瞄环境配置](#3自瞄环境配置)  


## 2.环境配置的一些经验

### 1.ubuntu中c++环境配置遇到的坑 90% 是各个库版本不兼容

### 2.如何安装c++库

如果你学过cmake，就应该知道c++项目都是(应该80%以上的吧)通过cmake编译和管理的。如果你不了解cmake，可以参考[这里]()。

所以，如果你想安装c++库：  
#### 1.源码安装：   

<span style="color: rgba(242, 0, 255, 0.79); text-decoration: underline;">思路和你编译运行c++程序一样，只是要先下载源码</span>
 
一般来说，c++库都有github仓库，你可以直接下载源码，然后编译安装。

```bash
git clone '库的github地址'
```
例子：
```bash
git clone https://github.com/opencv/opencv.git
```

进入源码目录，执行
```bash
mkdir build
cd build
cmake .. 
make -j8 # 编译，-j8表示使用8个线程并行编译
sudo make install # 安装到系统目录
```
#### 2.包管理器安装：
如果你使用的是Ubuntu，你可以直接使用apt-get安装。
```bash
sudo apt-get install '库在apt-get中的名字'
```
<span style="color: rgba(102, 255, 0, 0.84); text-decoration: underline;">注：apt-get安装的库一般都比较老，版本比较低，如果想用最新版本，可以参考源码安装。  
名字不知道的话，可以问ai</span>  

例子：
```bash
sudo apt-get install libopencv-dev
```

### 3. 如何跑开源项目
一般来说，开源项目都有详细的安装说明，你可以参考。
在开源项目(github上)的readme中，一般都会有编译和运行的命令。


<span style="color: rgba(0, 162, 255, 0.7); text-decoration: underline;">思考： 在跑开源项目的时候，以及下面配置自瞄环境的时候 有各种不同的命令, 他们的作用是什么？，有其他方法吗？，相比于其他方法有什么优势(区别)</span>


## 3.自瞄环境配置

下面是老学长的环境配置（一点史，请见谅），可以参考：   
[老学长的环境配置](https://github.com/Aubrey-xiang/environment_configuration.git)
