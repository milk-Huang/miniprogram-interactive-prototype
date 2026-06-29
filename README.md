# Evmars 微信小程序可交互原型

面向 **前后端协作** 的静态 HTML 原型（当前 **v0.1.3**）：确认页面流程、小程序路径、HTTP / 微信 API、DTO 字段与 i18n 文案。

**在线访问：** https://milk-huang.github.io/miniprogram-interactive-prototype/

**仓库：** https://github.com/milk-Huang/miniprogram-interactive-prototype

---

## 用途

| 给谁看 | 解决什么问题 |
|---|---|
| 后端 | 当前页需要哪些 HTTP 接口、请求/响应 DTO、哪些 UI 已有但接口未实现 |
| 前端 | 小程序 `pages/...` 路径、微信原生能力（`wx.login`、`scanCode` 等） |
| 全员 | 可点击走主流程，右栏看中/英文说明与推荐路径 |

## 三栏布局

| 区域 | 内容 |
|---|---|
| 左栏 | HTTP API · 微信原生 API · DTO · 缺口说明 |
| 中栏 | 模拟手机 UI（Evmars 品牌） |
| 右栏 | 页面说明 · 小程序路径（语言切换在顶栏） |

## 布局模式

顶栏可切换 **开发** / **演示** 模式：

| 模式 | 说明 |
|---|---|
| **开发** | 默认三列；可单独折叠 API 或说明侧栏，手机自动放大 |
| **演示** | 仅显示手机 mock，适合对外演示流程 |

分享链接示例：

- 演示模式：`?view=demo`
- 英文界面：`?lang=en`
- 仅手机 + API：`?guide=0`（开发模式下隐藏说明栏）

## 页面结构

1. 登录 — 微信登录、手机号、协议勾选  
2. 地图 — 设备位置、围栏、告警  
3. 设备 — 列表、扫码 / IMEI / BLE 添加  
4. 设备详情 — 概览、地图、健康、告警、配置  
5. 消息 — 告警、分享邀请、系统通知  
6. 我的 — 资料、安全、通知、地区地图、帮助  

## 本地运行

纯静态，**无需** `npm install`、无构建步骤。克隆后即可运行：

```bash
git clone git@github.com:milk-Huang/miniprogram-interactive-prototype.git
cd miniprogram-interactive-prototype

npx --yes serve .
# 或
python3 -m http.server 8080
```

浏览器打开终端提示的地址（如 `http://localhost:3000`）。需能访问外网（加载 [Lucide](https://unpkg.com) 图标 CDN）。

### 运行所需文件

| 文件 | 必需 |
|---|---|
| `index.html` | ✅ |
| `app.js` | ✅ |
| `styles.css` | ✅ |
| `scripts/patch-app.js` | ❌ 仅开发补丁脚本 |

## GitHub Pages 部署

1. 仓库设为 **Public**（免费账号私有仓库无法开 Pages）  
2. Settings → Pages → Branch: `main`，Folder: `/ (root)`  
3. 保存后等待 1～3 分钟，访问上方在线地址  

后续 `git push` 即自动更新。

## 小程序交互约定（原型内）

| 场景 | 模拟组件 |
|---|---|
| 退出登录、解绑确认 | `wx.showModal` 垂直居中 + 全屏遮罩 |
| 添加设备、分享、设置等 | 底部半屏页（左「取消」、底栏主按钮） |
| 操作反馈 | `wx.showToast` 黑底居中 |
| 登录 | 微信绿按钮 + `getPhoneNumber` + 协议勾选 |

## 迭代指南

修改后更新以下位置（均在 `app.js`）：

| 改什么 | 改哪里 |
|---|---|
| 版本号 | `PROTOTYPE_VERSION` |
| 小程序路径 | `pagePathMap` |
| HTTP 接口 | `apiCatalog` / `suggestedApiCatalog` / `apiPageMap` |
| 微信能力 | `wxApiCatalog` / `wxApiPageMap` |
| 文案 | `LOCALES["zh-CN"]` / `LOCALES["en-US"]` |

变更记录见 [CHANGELOG.md](./CHANGELOG.md)。

## 文件说明

```
├── index.html          # 三栏页面骨架
├── app.js              # 逻辑、Mock、API 目录、i18n、渲染
├── styles.css          # 样式（含小程序按钮/弹窗组件）
├── CHANGELOG.md        # 版本变更
├── scripts/patch-app.js  # 可选：从参考原型生成补丁（非运行依赖）
└── README.md
```

## 参考

基于 [Eview Connect C App 原型](https://jarliao.github.io/eview-connect-c-app-prototype/) 改造，适配 **微信小程序** 与 **Evmars** 品牌。
