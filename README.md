# Evmars 微信小程序可交互原型

面向 **前后端协作** 的静态 HTML 原型（当前 **v0.4.2**）。

| 链接 | 说明 |
|---|---|
| **原型在线演示** | https://milk-huang.github.io/miniprogram-interactive-prototype/ |
| **Eview 官网** | [eviewconnect.com](https://www.eviewconnect.com/) |
| **交互参考原型** | [Eview Connect C App](https://jarliao.github.io/eview-connect-c-app-prototype/) |
| **代码仓库** | https://github.com/milk-Huang/miniprogram-interactive-prototype |

---

## 底栏（5 Tab）

| Tab | 说明 |
|---|---|
| **今日** | 健康与安全摘要；仅展示需关注设备 |
| **地图** | 多设备位置、家人/宠物/物品筛选（无添加设备入口） |
| **设备** | 列表、分类筛选、添加设备 |
| **消息** | SOS、跌倒、围栏、分享 |
| **我的** | 账号、通知、设置 |

登录后默认进入 **今日**。

## 产品边界（对齐 [Eview 官网](https://www.eviewconnect.com/)）

- **有：** mPERS / SOS 手表、定位器、Beacon；SOS、GPS、跌倒检测、围栏、心率/步数/活跃  
- **无：** 手环、睡眠数据、跑步/健走/骑行等运动训练流  

UI 借鉴小米运动健康 **浅色卡片布局**（今日、二级页、登录统一）；登录页含动效视觉舞台。Mock 位置为中性英文占位，能力以官网为准。

## 演示路径

1. 登录（动效舞台）→ **今日**（指标 + 需关注设备）  
2. **地图** → 筛选家人/宠物/物品 → 标记进详情  
3. **设备** → 同筛选条件 → 妈妈手表 → 健康 / 告警  
4. **消息** → 跌倒 / 围栏确认  
5. 添加设备：设备ID `100000000000001`  

URL：`?view=demo` · `?lang=en` · `?platform=alipay`

## 本地运行

```bash
sh scripts/dev.sh
```

| 文件 | 必需 |
|---|---|
| `index.html` | ✅ |
| `app.js` | ✅ |
| `styles.css` + `styles-health.css` | ✅ |

变更见 [CHANGELOG.md](./CHANGELOG.md)。
