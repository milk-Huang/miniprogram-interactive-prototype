# Evmars 微信小程序可交互原型

面向 **前后端协作** 的静态 HTML 原型（当前 **v0.3.1**），页面结构与 [Eview Connect 参考原型](https://jarliao.github.io/eview-connect-c-app-prototype/) 对齐。

**在线访问：** https://milk-huang.github.io/miniprogram-interactive-prototype/

---

## 页面结构（与参考原型一致）

1. **登录** — 多平台一键登录、账号/邮箱密码、协议  
2. **地图首页** — 全部设备位置、状态、围栏和告警  
3. **设备** — 我的设备、添加设备、设备状态  
4. **设备详情** — 概览、地图、轨迹、围栏、健康、告警、配置  
5. **消息** — 告警、分享邀请、系统通知  
6. **我的** — 资料、安全、通知、地区地图、帮助  

## 演示路径

- 登录 → **地图首页** → 点击设备标记 / 妈妈手表  
- 设备详情 → **地图** Tab：轨迹回放、新建围栏  
- 配置页复制 Home WiFi / Beacon  
- 添加设备：设备ID `100000000000001` 为新设备流程  

## 本地运行

```bash
sh scripts/dev.sh
```

| 文件 | 必需 |
|---|---|
| `index.html` | ✅ |
| `app.js` | ✅ |
| `styles.css` | ✅ |

变更记录见 [CHANGELOG.md](./CHANGELOG.md)。
