# 此文档为自瞄算法相关文档（开源来源于同济25自瞄开源）

## 代码结构
```text
sp_vision_25
├── assets         // 包含demo素材、网络权重等
│   └── ...
├── calibration    // 标定相关程序
│   ├── calibrate_camera.cpp             // 相机内参标定程序
│   ├── calibrate_handeye.cpp            // 手眼标定程序
│   ├── calibrate_robotworld_handeye.cpp // 手眼标定程序（同时计算标定板位置）
│   └── capture.cpp                      // 相机标定数据采集程序
├── CMakeLists.txt // CMake配置文件
├── configs        // 每台机器人的YAML配置文件
│   └── ...
├── io             // 硬件抽象层，见3.4软件架构
│   └── ...
├── src            // 应用层，见3.4软件架构
│   └── ...
├── tasks          // 功能层，见3.4软件架构
│   ├── auto_aim       // 自瞄相关算法实现
│   │   └── ...
│   ├── auto_buff      // 打符相关算法实现
│   │   └── ...
│   └── omniperception // 全向感知相关算法实现
│   │   └── ...
├── tests
│   ├── auto_aim_test.cpp         // 自瞄录制视频测试程序
│   ├── auto_buff_test.cpp        // 打符录制视频测试程序
│   ├── camera_detect_test.cpp    // 识别器测试程序（工业相机）
│   ├── camera_test.cpp           // 相机测试程序
│   ├── camera_thread_test.cpp    // 相机线程测试程序
│   ├── cboard_test.cpp           // C板测试程序
│   ├── detector_video_test.cpp   // 识别器测试程序（视频）
│   ├── dm_test.cpp               // 达妙IMU测试程序
│   ├── fire_test.cpp             // 开火测试程序
│   ├── gimbal_response_test.cpp  // 云台响应测试程序
│   ├── gimbal_test.cpp           // 云台通信测试程序
│   ├── handeye_test.cpp          // 手眼标定测试程序
│   ├── minimum_vision_system.cpp // 最小视觉系统测试程序
│   ├── multi_usbcamera_test.cpp  // 多USB摄像头测试程序
│   ├── planner_test_offline.cpp  // 规划器测试程序（离线）
│   ├── planner_test.cpp          // 规划器测试程序（实车）
│   ├── publish_test.cpp          // ROS发送测试程序
│   ├── subscribe_test.cpp        // ROS接收测试程序
│   ├── topic_loop_test.cpp       // ROS话题循环测试程序
│   ├── usbcamera_detect_test.cpp // 识别器测试程序（USB相机）
│   ├── usbcamera_test.cpp        // USB相机测试程序
│   └── ...
└── tools          // 工具层，见3.4软件架构
    ├── crc.hpp                    // CRC校验
    ├── exiter.hpp                 // 退出检测
    ├── extended_kalman_filter.hpp // 扩展卡尔曼滤波器
    ├── img_tools.hpp              // 图像处理工具
    ├── logger.hpp                 // 日志记录器
    ├── math_tools.hpp             // 数学工具
    ├── plotter.hpp                // 曲线图绘制工具
    ├── recorder.hpp               // 视频录制器
    ├── thread_safe_queue.hpp      // 线程安全队列
    ├── trajectory.hpp             // 弹道解算
    ├── yaml.hpp                   // YAML配置文件解析器
    └── ...
```  

## 1.相关测试程序

### 1.Cboard_cboard_test硬件通信测试程序（后续会改名字）

#### 1.Can口通信测试，需在Cboard.cpp中默认初始化SocketCAN的实例，在yaml文件配置canid

#### 2.串口通信测试

## 2.标定

## 3.相机连接

## 4.硬件通信



## 5.自瞄代码运行

## 6.调试问题

### 10.26
#### 1.
修复无开火指令问题：上位机给下位机发的是角度，获取的云台姿态来源于陀螺仪，是弧度，修改后可正常发送

### 11-12月

#### 1.
新增前哨站算法，修改卡尔曼滤波部分，利用矩阵的l和h两个维度作为前哨站两个不同高低差，雅可比矩阵增加dz_dl,dz_dh,扩展卡尔曼会自适应不同高低差变化

#### 2.
删除同济冗余代码，ROS2,多线程，多余测试等，修复一些warning警告问题，如数据类型不统一等

#### 3.
增加哨兵脱锁算法，目前置于Cboard.cpp中，当锁定一帧目标时脱锁会延迟3秒后再进入扫描模式

#### 4.
修改crc高地位，适应电控校验数据

#### 5.
问题：目前已测试GPU推理加速在Y7000p中，效果不如cpu，暂未查询到原因，准备更改OPENVINIO为ORT

#### 6.
使用SSH连接远程终端时，跑无debug程序终止原因是因为在yolo识别部分有imshow，目前已注释

