# Evmars 微信小程序可交互原型

面向 **前后端协作** 的静态可交互 HTML 原型：确认页面流程、小程序路径、HTTP 接口、微信原生能力与国际化文案。

在线访问（部署 GitHub Pages 后）：`https://<your-org>.github.io/evmars-miniapp/`

## 三栏说明

| 区域 | 作用 |
|---|---|
| 左栏 | **HTTP API** + **微信原生 API** + DTO + 缺口说明 |
| 中栏 | 模拟小程序 UI，可点击走流程 |
| 右栏 | 当前页说明、小程序 `pages/...` 路径、中/英切换 |

## 本地预览

```bash
# 任意静态服务器，例如：
npx --yes serve .
# 或
python3 -m http.server 8080
```

浏览器打开 `http://localhost:8080`（或对应端口）。

## GitHub Pages 部署

1. 推送本仓库到 GitHub
2. Settings → Pages → Source: `main` 分支，`/` root
3. 等待部署完成，访问 `https://<user>.github.io/evmars-miniapp/`

## 迭代约定

- 版本号：`app.js` 内 `PROTOTYPE_VERSION`
- 变更记录：见 [CHANGELOG.md](./CHANGELOG.md)
- 新增页面时同步更新：
  - `pagePathMap` — 小程序路径
  - `apiPageMap` / `wxApiPageMap` — 页面所需 API
  - `LOCALES` — 中英文文案 key

## 文件

| 文件 | 说明 |
|---|---|
| `index.html` | 三栏骨架 |
| `app.js` | 原型逻辑、Mock、API 目录、i18n |
| `styles.css` | 样式（含 Evmars 主题扩展） |

## 参考

基于 [Eview Connect C App 原型](https://jarliao.github.io/eview-connect-c-app-prototype/) 改造，适配微信小程序与 Evmars 品牌。
