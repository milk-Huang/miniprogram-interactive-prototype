# Evmars 微信小程序可交互原型

面向 **前后端协作** 的静态 HTML 原型（当前 **v0.3.1**）：确认页面流程、小程序路径、HTTP / 微信 API、DTO 字段与 i18n 文案。

| 链接 | 说明 |
|---|---|
| **原型在线演示** | https://milk-huang.github.io/miniprogram-interactive-prototype/ |
| **交互参考原型** | [Eview Connect C App 原型](https://jarliao.github.io/eview-connect-c-app-prototype/)（页面流程与信息架构基线） |
| **Eview 官网** | [eviewconnect.com](https://www.eviewconnect.com/)（产品线、场景与能力边界） |
| **代码仓库** | https://github.com/milk-Huang/miniprogram-interactive-prototype |

---

## 产品定位（对齐官网）

依据 [Eview 官网](https://www.eviewconnect.com/)，小程序服务的设备与场景主要包括：

| 品类 | 典型能力 | 小程序侧重点 |
|---|---|---|
| **mPERS / SOS 手表** | SOS、GPS、跌倒检测 | 位置、告警、健康摘要、围栏 |
| **定位器类设备** | SOS、实时定位、紧急呼叫 | 地图、轨迹、在线状态、低电/离线提醒 |
| **智能家居 / Beacon** | 居家告警、协寻 | 配置、围栏、消息触达 |
| **平台与 App** | 实时追踪与告警 | 消息中心、分享、通知偏好 |

**官网场景：** 独立生活（老人看护）、儿童安全、孤独作业、远程健康监测（RPM）等。

**本原型不包含：**

- 手环类穿戴（公司无此产品线）
- **睡眠**监测与睡眠报告（设备/平台不提供睡眠数据）
- 跑步、健走、骑行等 **运动训练** 流程（非 mPERS 核心能力）

**健康相关仅保留设备实际可上报的监测项：** 心率、步数、活跃等基础指标 + AI/规则告警解释，页底须非医疗声明。

---

## UI 设计方向（参考小米运动健康，适配 Eview）

借鉴 [小米运动健康](https://www.mi.com/) 的 **卡片化健康看板** 与信息层级，但按 Eview 设备能力裁剪：

| 借鉴小米 | Eview 适配 |
|---|---|
| 今日健康摘要、大数字指标卡 | ✅ 步数 / 心率 / 活跃（有能力的手表） |
| 设备同步状态芯片 | ✅ 显示数据来源手表或定位器 |
| 睡眠、压力、运动课程 | ❌ 不做（无睡眠数据、非运动 App） |
| 手环生态 | ❌ 改为 **手表 + 定位器** 分组展示 |
| 白底圆角卡片 + 清晰 Tab | ✅ 适合小程序；安全告警用色区分 |

**建议目标信息架构（规划中，尚未全部落地）：**

```
底栏：今日 | 设备 | 消息 | 我的
        ↑ 健康+安全摘要（非运动训练）
地图 / 围栏 / 轨迹 → 设备详情 · 地图（保留参考原型能力）
SOS / 跌倒 / 围栏告警 → 消息 + 今日待处理
```

当前 **v0.3.1** 仍采用参考原型的 **地图 \| 设备 \| 消息 \| 我的** 底栏；向「今日健康看板」演进时见上表，以领导评审为准。

---

## 用途

| 给谁看 | 解决什么问题 |
|---|---|
| 后端 | 各页 HTTP 接口、请求/响应 DTO、UI 已有但接口未实现项 |
| 前端 | 小程序 `pages/...` 路径、微信原生能力 |
| 产品 / 设计 | 与官网品类一致的可点击流程，避免做出手环/睡眠/运动课等越界能力 |
| 全员 | 可点击走主流程，右栏看中/英文说明与推荐路径 |

## 三栏布局

| 区域 | 内容 |
|---|---|
| 左栏 | HTTP API · 微信原生 API · DTO · 缺口说明 |
| 中栏 | 模拟手机 UI（Evmars 品牌） |
| 右栏 | 页面说明 · 小程序路径（语言切换在顶栏） |

顶栏可切换 **开发** / **演示** 模式；`?view=demo` 仅显示手机 mock。

---

## 当前页面结构（v0.3.1）

1. **登录** — 多平台一键登录、账号/邮箱密码、协议  
2. **地图首页** — 全部设备位置、状态、围栏和告警  
3. **设备** — 我的设备、添加设备、设备状态  
4. **设备详情** — 概览、地图、轨迹、围栏、健康、告警、配置  
5. **消息** — 告警、分享邀请、系统通知  
6. **我的** — 资料、安全、通知、地区地图、帮助  

## 演示路径

- 登录 → **地图首页** → 点击设备标记 / 妈妈手表  
- 设备详情 → **地图** Tab：轨迹回放、新建围栏  
- **消息** → 跌倒 / 围栏 / 低电等待处理告警  
- 配置页复制 Home WiFi / Home Beacon  
- 添加设备：设备ID `100000000000001` 为新设备流程  

URL 参数：`?view=demo` · `?lang=en` · `?platform=alipay` · `?login=account`

## 本地运行

纯静态，无需 `npm install`：

```bash
git clone git@github.com:milk-Huang/miniprogram-interactive-prototype.git
cd miniprogram-interactive-prototype
sh scripts/dev.sh
# 或 npx --yes serve -l tcp://127.0.0.1:5000 .
```

| 文件 | 必需 |
|---|---|
| `index.html` | ✅ |
| `app.js` | ✅ |
| `styles.css` | ✅ |
| `styles-fitness.css` | ❌ 历史运动健康样式，当前未引用 |

## 迭代指南

| 改什么 | 改哪里 |
|---|---|
| 版本号 | `PROTOTYPE_VERSION` |
| 文案 / i18n | `LOCALES["zh-CN"]` / `LOCALES["en-US"]` |
| 小程序路径 | `pagePathMap` |
| HTTP 接口 | `apiCatalog` / `apiPageMap` |
| 健康看板 UI（规划） | 新建 `styles-health.css` + `renderTodayHome()` 等 |

变更记录见 [CHANGELOG.md](./CHANGELOG.md)。

## 参考

- 交互与页面流程：[Eview Connect C App 原型](https://jarliao.github.io/eview-connect-c-app-prototype/)
- 产品与场景定义：[Eview 官网](https://www.eviewconnect.com/)
- UI 气质参考：小米运动健康（仅借鉴布局与卡片层级，能力以官网为准）
