#### 移动端 | 8个有趣的API
- - -

1. 监听屏幕旋转变化：orientationchange

**定义**：将手机是否横屏情况暴露；

**使用**：
```javascript
screenOrientation () {
    let self = this;
    let orientation = screen.orientation || screen.mozOrientation || screen.msOrientation;
    window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", () => {
        self.angle = orientation.angle;
    });
}
```
| orientation.angle值 | 屏幕方向 |
| -- | -- |
| 0 | 竖屏 |
| 90 | 向左横屏 |
| -90/270 | 向右横屏 |
| 180 | 倒屏 |

**作用**：在横屏/竖屏时添加一些动作或样式改变
```javascript
/* 竖屏 */
@media screen and (orientation: portrait) {
    // some css code
}
/* 横屏 */
@media screen and (orientation: landscape) {
    // some css code
}
```

2. 电池状态：navigator.getBattery()

**定义**：将手机电池状态暴露

> 返回一个 `Promise` 对象，给出一个 `BatteryManager` 对象，对象中包含以下信息：
