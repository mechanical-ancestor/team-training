# cmake

## 写第一个CMakeList

```bash
    cmake_min_requried(VERSION 最低版本)
    project( 你的项目名 )
    add_executable( 可执行文件名字 源文件名)

```

例子：
```bash
    cmake_min_requried(VERSION 3.22)
    project( test )
    add_executable( task task.cpp)
```  


然后在项目下打开终端
```bash
    mkdir build
    cd ./build
    cmake ..  #将根据上级目录的 CMakeLists.txt 配置文件，在当前目录（通常是构建目录）生成适配本地环境的构建系统文件，为后续的编译、链接过程做准备
    make  # 编译
```
最后运行可执行文件
```bash
    ./可执行文件名字 #运行
```
例子：
```bash
    ./task
```

## camke链接库(如opencv)

以opencv为例
```bash
    cmake_min_requried(VERSION 3.22)
    project( 你的项目名 )
    # 查找 OpenCV 库
    find_package(OpenCV REQUIRED)  
    # 添加 OpenCV 头文件目录
    include_directories(${OpenCV_INCLUDE_DIRS})
    # 生成可执行文件
    add_executable( 可执行文件名字 源文件名)
    # 链接 OpenCV 库
    target_link_libraries( 可执行文件名字 ${OpenCV_LIBS})
```
然后 和上面的一样
