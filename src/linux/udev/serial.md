# Serial Device
诸如`/dev/ttyUSB0`或`/dev/ttyACM1`的设备

## Udev Rules
请参考 [`Allowing regular users to use devices`](https://wiki.archlinux.org/title/Udev#Allowing_regular_users_to_use_devices)

**示例串口设备规则**: `/etc/udev/rules.d/69-serial.rules`
```rules
KERNEL=="ttyACM*|ttyUSB*", MODE="0660", TAG+="uaccess"
```

> [!WARNING]
> - 上述规则只适用于基于systemd的系统
> - 只有序号在73之前的rules添加的`uaccess`标签[才有效](https://wiki.archlinux.org/title/Udev#Allowing_regular_users_to_use_devices)

## 基于usb总线的串口设备命名
如果有多个串口设备, 例如导航串口和视觉串口,
系统自动分配的`/dev/ttyUSB0`或`/dev/ttyACM1`后面的序号有时是随机的, 并不固定.

想固定设备名, 与其想怎么改名, 不如创建一个`新的设备`指向实际设备文件,
具体使用`Udev Rules`识别串口所在的usb总线, 然后创建一个自定义符号链接指向实际设备文件.

插上串口查看当前串口的usb总线号
```sh
udevadm info -a -n /dev/ttyUSB0 | grep 'ATTRS{busnum}'
# ATTRS{busnum}=="7"
udevadm info -a -n /dev/ttyUSB1 | grep 'ATTRS{busnum}'
# ATTRS{busnum}=="9"
```

**示例规则**: `/etc/udev/rules.d/99-serial-name.rules`
```rules
KERNEL=="tty", ATTRS{busnum}=="7" , SYMLINK+="serial_vision"
KERNEL=="tty", ATTRS{busnum}=="9" , SYMLINK+="serial_nav"
```
