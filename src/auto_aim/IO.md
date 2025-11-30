# 硬件IO通信相关问题

## 11.10 串口无权限问题
```
[2025-11-10 20:33:16.928] [error] [Gimbal] Failed to open serial: IO Exception (13): Permission denied, file /home/ma/code/MA_2026/io/serial/src/impl/unix.cc, line 151.
```
***解决方案***
### 1.列出所有设备
```bash
ls -l /dev/ttyUSB* /dev/ttyACM*
```

### 2.给予权限
```bash
sudo usermod -aG dialout ma
```

## 11.12 电控遇到无故限位以及抖动问题

***视觉发送的数据无异常***

### 1.分电板信号传输有问题，底盘电机控制can信号若有若无

### 2.限位问题来源于-180度到180度的切换导致甩头不跟随

### 3.11.15补充，电控云台抖动，多路can集中在一路，FiFo容量过多，优先级没有设定

## 11.30 串口通信问题

### 1.在雷神上读取串口数据稳定正常无crc报错，在我y7000p电脑上一半数据能正确读取，一半报crc错误

