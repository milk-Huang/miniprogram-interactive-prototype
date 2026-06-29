# Changelog

## [0.1.1] - 2026-06-29

### 优化

- 登录页：协议勾选后方可登录，符合小程序合规交互
- 按钮：微信绿 `#07c160`、默认白底描边，圆角 4px
- 弹窗：退出/解绑改为 `wx.showModal` 居中对话框
- 半屏页：底部弹层加拖拽条、左「取消」、底栏固定主按钮
- 添加设备：顶部 Tab 切换（扫码/IMEI/BLE）
- Toast：改为 `wx.showToast` 黑色半透明样式

## [0.1.0] - 2026-06-29

### 新增

- Evmars 品牌微信小程序可交互原型（三栏布局）
- 中英文切换（`zh-CN` / `en-US`）
- 左栏 HTTP API + 微信原生 API 分层展示
- 小程序页面路径 `pagePathMap`（随当前页动态显示）
- 微信登录 / 手机号登录 UI（替代 App 账号密码主流程）
- 建议 API：`/c/v1/auth/wechat/login`、`/c/v1/auth/wechat/phone`、订阅消息、微信支付
- Mock 设备名 i18n（`deviceDisplayName`）
- GitHub Pages 静态部署说明

### 说明

- 功能与交互基于 Eview Connect 参考原型，保留设备/地图/消息/我的等主流程
- `client_type` 默认为 `miniprogram`
- 推送方案标注为订阅消息，非 FCM/HMS
