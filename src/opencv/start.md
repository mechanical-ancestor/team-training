# 安装

## 官网(或github)下载  

一般下4.11, 4.10版

点这里：[官网](https://opencv.org/releases/)

下载压缩包后解压

## 编译安装

进入刚刚解压的opencv文件夹

打开终端：

与cmake管理c++项目一样
```bash
    mkdir build  
    cd ./build
    cmake ..
    make -j8
    sudo make install
```

## 配置环境变量
```bash
    sudo vim /etc/ld.so.conf
```
在文件末尾添加：
```bash
    include /usr/local/lib
 ```
```bash
    vim ~/.bashrc
```
    在文件末尾添加：
```bash
    PKG_CONFIG_PATH=$PKG_CONFIG_PATH:/usr/local/lib/pkgconfig 
    export PKG_CONFIG_PATH
```

软链接
```bash
    sudo cp -r /usr/local/iqenclude/opencv4/opencv2 /usr/local/include
```


## 一些错误  
- 1.如果已经下载了anaconda ，则cmake时可能会出现错误  
   解决方法：将anaconda文件夹中的lib改名为其他（eg:libs）,安装完成后改回来即可   

- 2.使用opencv时make后运行文件出现错误(并非安装时)
    (参考)[https://blog.csdn.net/m0_56140527/article/details/132353339]  
        a. vscode的问题,到官网下载vscode重新安装即可
        b.  或者终端输入"unset GTK_PATH"（暂时）



