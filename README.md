# Evmars 运动健康小程序可交互原型

面向 **前后端协作** 的静态 HTML 原型（当前 **v0.3.0**）：确认运动健康页面流程、小程序路径、HTTP / 微信 API、DTO 字段与 i18n 文案。

**在线访问：** https://milk-huang.github.io/miniprogram-interactive-prototype/

**仓库：** https://github.com/milk-Huang/miniprogram-interactive-prototype

---

## 用途

| 给谁看 | 解决什么问题 |
|---|---|
| 后端 | 今日摘要、运动记录、健康数据等 HTTP 接口与 DTO |
| 前端 | 小程序 `pages/...` 路径、微信原生能力 |
| 全员 | 可点击走主流程，右栏看中/英文说明与推荐路径 |

## 三栏布局

| 区域 | 内容 |
|---|---|
| 左栏 | HTTP API · 微信原生 API · DTO · 缺口说明 |
| 中栏 | 模拟手机 UI（Evmars 运动健康） |
| 右栏 | 页面说明 · 小程序路径（语言切换在顶栏） |

## 页面结构（v0.3.0）

1. **登录** — 多平台一键登录、账号/邮箱密码、协议勾选  
2. **今日** — 活动圆环、步数/心率/睡眠、设备同步、本周摘要  
3. **运动** — 开始运动入口、历史记录列表  
4. **设备** — 穿戴设备列表、同步状态、添加设备  
5. **设备详情** — 概览、健康、运动、告警、设置  
6. **我的** — 资料、安全、通知、帮助  

> 原地图/消息 Tab 代码仍保留，已从底栏移除，供后续能力扩展参考。

## 演示路径

- 登录 → **今日**（圆环 + 指标 + 本周摘要）
- **运动** → 开始跑步 / 查看记录
- **设备** → 运动手表 → 健康 / 运动 Tab
- 添加设备：扫码默认可绑定；设备ID `100000000000001` 为新设备流程

URL 参数：`?view=demo` · `?lang=en` · `?platform=alipay` · `?login=account`

## 本地运行

```bash
sh scripts/dev.sh
# 或
npx --yes serve -l tcp://127.0.0.1:5000 .
```

浏览器打开终端提示地址。需能访问外网（加载 Lucide 图标 CDN）。

| 文件 | 必需 |
|---|---|
| `index.html` | ✅ |
| `app.js` | ✅ |
| `styles.css` + `styles-fitness.css` | ✅ |

## 迭代指南

| 改什么 | 改哪里 |
|---|---|
| 版本号 | `PROTOTYPE_VERSION`（当前 `0.3.0`） |
| 运动健康 UI | `styles-fitness.css` + `renderTodayHome` / `renderWorkoutTab` |
| 小程序路径 | `pagePathMap` |
| HTTP 接口 | `apiCatalog` / `apiPageMap` |
| 文案 | `LOCALES["zh-CN"]` / `LOCALES["en-US"]` |

变更记录见 [CHANGELOG.md](./CHANGELOG.md)。
