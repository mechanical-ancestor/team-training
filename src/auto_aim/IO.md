# 硬件IO通信相关问题

## 串口无权限问题(11.10)
```text
[2025-11-10 20:33:16.928] [error] [Gimbal] Failed to open serial: IO Exception (13): Permission denied, file /home/ma/code/MA_2026/io/serial/src/impl/unix.cc, line 151.
```

## ***解决方案***
### 列出所有设备
```bash
ls -l /dev/ttyUSB* /dev/ttyACM*
```

### 给予权限
> [!CAUTION]
> 该方法仅适用于Ubuntu或debian系统, 更加通用且现代的做法请使用[Udev Rules](../linux/udev/serial.md#udev-rules)

```bash
sudo usermod -aG dialout ma
```

## 电控遇到无故限位以及抖动问题(`11.12` )

***视觉发送的数据无异常***

- 分电板信号传输有问题，底盘电机控制can信号若有若无
- 限位问题来源于-180度到180度的切换导致甩头不跟随
- 电控云台抖动，多路can集中在一路，FiFo容量过多，优先级没有设定 (`11.15`补充:)

## 串口通信问题(11.30)

> [!TIP]
> 已解决(1.27)，问题来源
> 1. 串口硬件信号传输不稳定，
> 2. 头帧与中间数据重复导致读取错误
- 在雷神上读取串口数据稳定正常无crc报错，在我y7000p电脑上一半数据能正确读取，一半报crc错误



