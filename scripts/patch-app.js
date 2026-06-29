#!/usr/bin/env node
/**
 * 将参考原型 patch 为 Evmars 微信小程序可交互原型
 */
const fs = require("fs");
const path = require("path");

const appPath = path.join(__dirname, "../app.js");
let code = fs.readFileSync(appPath, "utf8");

const i18nBlock = `
const PROTOTYPE_VERSION = "0.1.0";

const LOCALES = {
  "zh-CN": {
    brand: { name: "Evmars", tagline: "智能设备管理", subtitle: "微信小程序 · 可交互原型 v" + PROTOTYPE_VERSION },
    demo: {
      kicker: "界面说明",
      pageInfo: "页面相关信息",
      requirements: "页面需求说明",
      pagePath: "小程序页面路径",
      recommended: "推荐点击路径",
      switchLocale: "切换语言",
      localeZh: "中文",
      localeEn: "English",
    },
    api: {
      kickerHttp: "HTTP 服务端 API",
      kickerWx: "微信原生能力",
      truthSource: "事实来源",
      truthDesc: "HTTP 接口按小程序 Repository/Service 合约列出；微信 API 标注需客户端调用的原生能力。建议接口仅反推 UI 缺口。",
      defined: "本页已定义 HTTP 接口",
      suggested: "UI 需要但尚未实现",
      wxDefined: "本页需调用的微信 API",
      gaps: "接口缺口说明",
      count: "个",
      requestDto: "请求 DTO",
      responseDto: "响应 DTO",
      codeNotImpl: "代码未实现",
      emptyDefined: "当前代码没有为这个页面定义可直接对应的 HTTP API。",
      emptySuggested: "当前原型页面没有额外反推出待实现服务器接口。",
      emptyWx: "当前页面不依赖额外微信原生 API。",
      purpose: "用途",
      repository: "调用链",
      dto: "DTO",
      source: "源码",
      uiEvidence: "UI 依据",
      currentStatus: "当前状态",
      wxPurpose: "场景",
      wxReturns: "返回值/回调",
      wxNeedBackend: "需后端配合",
    },
    nav: { map: "地图", devices: "设备", messages: "消息", mine: "我的" },
    navSub: {
      map: "查看设备位置、告警与围栏状态",
      devices: "我的设备、添加设备和状态总览",
      messages: "告警、分享邀请和系统通知",
      mine: "账号、安全、通知与帮助",
    },
    login: {
      hero: "统一管理定位、健康与设备安全",
      desc: "查看家人位置、健康状态和安全提醒，随时管理设备。",
      wechatLogin: "微信一键登录",
      wechatHint: "调用 wx.login 获取 code，服务端换取 session",
      phoneLogin: "手机号快捷登录",
      phoneHint: "button open-type=\"getPhoneNumber\"",
      guestDemo: "演示模式进入",
      agreements: "用户协议与隐私政策",
      agreementsHint: "登录前需勾选同意",
      agreePrefix: "我已阅读并同意",
      userAgreement: "《用户协议》",
      privacy: "《隐私政策》",
    },
    common: {
      back: "返回", close: "关闭", save: "保存", cancel: "取消", confirm: "确认",
      addDevice: "添加设备", sync: "同步", online: "在线", offline: "离线",
      allDevices: "全部设备", family: "家人", pet: "宠物", item: "物品",
    },
    toast: {
      wechatLogin: "wx.login 成功 → POST /c/v1/auth/wechat/login",
      phoneLogin: "getPhoneNumber → POST /c/v1/auth/wechat/phone",
      guest: "已进入地图首页（演示模式）",
      sync: "设备状态、告警和健康摘要已同步",
      scan: "wx.scanCode → POST /c/v1/device-bind/detect",
      subscribe: "wx.requestSubscribeMessage 已记录 templateId",
      share: "onShareAppMessage 分享 path 含 deviceId",
    },
    mock: {
      momWatch: "妈妈手表", pendant: "安全挂坠", worker: "作业定位器",
      dogCollar: "Milo 项圈", catTracker: "栗子定位器", luggage: "行李定位器",
      chatWelcome: "你好，我可以帮你解释告警、排查设备离线，也可以说明如何分享和配置设备。",
    },
  },
  "en-US": {
    brand: { name: "Evmars", tagline: "Smart Device Hub", subtitle: "WeChat Mini Program · Interactive Prototype v" + PROTOTYPE_VERSION },
    demo: {
      kicker: "Guide",
      pageInfo: "Page context",
      requirements: "Requirements",
      pagePath: "Mini program path",
      recommended: "Suggested walkthrough",
      switchLocale: "Language",
      localeZh: "中文",
      localeEn: "English",
    },
    api: {
      kickerHttp: "HTTP Server APIs",
      kickerWx: "WeChat Native APIs",
      truthSource: "Source of truth",
      truthDesc: "HTTP APIs follow mini program Repository/Service contracts; WeChat APIs mark native calls. Suggested APIs reflect UI gaps only.",
      defined: "Defined HTTP APIs on this page",
      suggested: "Required by UI but not implemented",
      wxDefined: "WeChat APIs needed on this page",
      gaps: "API gaps",
      count: "",
      requestDto: "Request DTO",
      responseDto: "Response DTO",
      codeNotImpl: "Not implemented",
      emptyDefined: "No HTTP API maps directly to this page in current code.",
      emptySuggested: "No additional server APIs inferred for this page.",
      emptyWx: "No extra WeChat native APIs for this page.",
      purpose: "Purpose",
      repository: "Call chain",
      dto: "DTO",
      source: "Source",
      uiEvidence: "UI evidence",
      currentStatus: "Current status",
      wxPurpose: "Scenario",
      wxReturns: "Returns / callback",
      wxNeedBackend: "Backend needed",
    },
    nav: { map: "Map", devices: "Devices", messages: "Messages", mine: "Me" },
    navSub: {
      map: "Device locations, alerts and geofences",
      devices: "My devices, add device and status",
      messages: "Alerts, share invites and system notices",
      mine: "Account, security, notifications and help",
    },
    login: {
      hero: "Location, health and device safety in one place",
      desc: "Track family locations, health and safety alerts, manage all devices.",
      wechatLogin: "WeChat sign in",
      wechatHint: "wx.login code → server session",
      phoneLogin: "Phone quick sign in",
      phoneHint: "button open-type=getPhoneNumber",
      guestDemo: "Enter demo mode",
      agreements: "Terms & Privacy",
      agreementsHint: "Must agree before login",
      agreePrefix: "I agree to",
      userAgreement: "Terms of Service",
      privacy: "Privacy Policy",
    },
    common: {
      back: "Back", close: "Close", save: "Save", cancel: "Cancel", confirm: "Confirm",
      addDevice: "Add device", sync: "Sync", online: "Online", offline: "Offline",
      allDevices: "All", family: "Family", pet: "Pet", item: "Items",
    },
    toast: {
      wechatLogin: "wx.login OK → POST /c/v1/auth/wechat/login",
      phoneLogin: "getPhoneNumber → POST /c/v1/auth/wechat/phone",
      guest: "Map home opened (demo mode)",
      sync: "Device status, alerts and health synced",
      scan: "wx.scanCode → POST /c/v1/device-bind/detect",
      subscribe: "wx.requestSubscribeMessage templateId saved",
      share: "onShareAppMessage path includes deviceId",
    },
    mock: {
      momWatch: "Mom's Watch", pendant: "Safety Pendant", worker: "Worker Tracker",
      dogCollar: "Milo Collar", catTracker: "Chestnut Tracker", luggage: "Luggage Tag",
      chatWelcome: "Hi! I can explain alerts, offline devices, sharing and configuration.",
    },
  },
};

function t(key) {
  const parts = key.split(".");
  let node = LOCALES[state.locale] || LOCALES["zh-CN"];
  for (const part of parts) {
    node = node?.[part];
    if (node === undefined) {
      node = LOCALES["zh-CN"];
      for (const p of parts) node = node?.[p];
      break;
    }
  }
  return typeof node === "string" ? node : key;
}

function deviceDisplayName(device) {
  const keys = {
    "dev-ev05-mom": "mock.momWatch",
    "dev-ev07b-pendant": "mock.pendant",
    "dev-ev04-worker": "mock.worker",
    "dev-ev201-dog": "mock.dogCollar",
    "dev-ev206-cat": "mock.catTracker",
    "dev-tag-luggage": "mock.luggage",
  };
  return t(keys[device.id] || "") || device.name;
}

const pagePathMap = {
  login: "pages/auth/login/index",
  "tab:map": "pages/map/index",
  "tab:devices": "pages/device/list/index",
  "tab:messages": "pages/message/index",
  "tab:mine": "pages/mine/index",
  detail: "pages/device/detail/index?deviceId={deviceId}&tab={detailTab}",
  "detail:overview": "pages/device/detail/index?deviceId={deviceId}&tab=overview",
  "detail:map": "pages/device/detail/index?deviceId={deviceId}&tab=map",
  "detail:health": "pages/device/detail/index?deviceId={deviceId}&tab=health",
  "detail:alarms": "pages/device/detail/index?deviceId={deviceId}&tab=alarms",
  "detail:config": "pages/device/detail/index?deviceId={deviceId}&tab=config",
  "modal:add-device": "pages/device/bind/index",
  "modal:share": "pages/device/share/index",
  "modal:edit-device": "pages/device/edit/index",
  "modal:geofence": "pages/geofence/edit/index",
  "modal:settings": "pages/mine/settings/index",
  "modal:chat": "pages/support/chat/index",
  "modal:h5": "pages/webview/index?url=help",
  "modal:logout-confirm": "— (dialog on current page)",
};

function getCurrentPageKey() {
  if (!state.loggedIn || state.route === "login") return "login";
  if (state.modal) return \`modal:\${state.modal}\`;
  if (state.route === "detail") return \`detail:\${state.detailTab}\`;
  return \`tab:\${state.tab}\`;
}

function getCurrentPagePath() {
  const key = getCurrentPageKey();
  let path = pagePathMap[key] || pagePathMap[state.route] || key;
  path = path.replace("{deviceId}", state.selectedDeviceId || "");
  path = path.replace("{detailTab}", state.detailTab || "overview");
  return path;
}

const wxApiCatalog = {
  wxLogin: {
    api: "wx.login",
    title: "微信登录凭证",
    purpose: "获取临时 login code，交给服务端换取 openid/session。",
    returns: "code, errMsg",
    needBackend: "POST /c/v1/auth/wechat/login",
  },
  getPhoneNumber: {
    api: "button open-type=getPhoneNumber",
    title: "手机号授权",
    purpose: "用户同意后获取加密手机号，绑定或注册 Evmars 账号。",
    returns: "encryptedData, iv, code",
    needBackend: "POST /c/v1/auth/wechat/phone",
  },
  scanCode: {
    api: "wx.scanCode",
    title: "扫码添加设备",
    purpose: "扫描设备二维码/条码，识别 IMEI 或绑定 token。",
    returns: "result, scanType, charSet",
    needBackend: "POST /c/v1/device-bind/detect",
  },
  openBluetooth: {
    api: "wx.openBluetoothAdapter",
    title: "蓝牙适配器",
    purpose: "添加设备时开启 BLE，扫描附近待绑定设备。",
    returns: "errMsg",
    needBackend: "detect 接口接收 BLE 广播数据",
  },
  startBleDiscovery: {
    api: "wx.startBluetoothDevicesDiscovery",
    title: "BLE 设备发现",
    purpose: "扫描 EV 系列设备蓝牙广播。",
    returns: "devices[] via onBluetoothDeviceFound",
    needBackend: "POST /c/v1/device-bind/detect",
  },
  chooseLocation: {
    api: "wx.chooseLocation / map 组件",
    title: "地图选点",
    purpose: "围栏编辑、地点搜索辅助。",
    returns: "latitude, longitude, name, address",
    needBackend: "GET /c/v1/places/search",
  },
  requestSubscribeMessage: {
    api: "wx.requestSubscribeMessage",
    title: "订阅消息",
    purpose: "告警、分享邀请等模板消息授权。",
    returns: "tmplIds accept/reject/ban",
    needBackend: "POST /c/v1/push/subscribe-message",
  },
  requestPayment: {
    api: "wx.requestPayment",
    title: "微信支付",
    purpose: "SIM 套餐续费、订单支付。",
    returns: "支付结果回调",
    needBackend: "POST /c/v1/orders/{id}/pay/wechat",
  },
  shareAppMessage: {
    api: "onShareAppMessage",
    title: "分享小程序",
    purpose: "分享设备给好友，path 携带 inviteToken。",
    returns: "title, path, imageUrl",
    needBackend: "POST /c/v1/devices/{id}/shares",
  },
  getLocation: {
    api: "wx.getLocation",
    title: "用户定位",
    purpose: "地图页展示「我的位置」、距离计算。",
    returns: "latitude, longitude",
    needBackend: "可选，纯客户端",
  },
  openSetting: {
    api: "wx.openSetting",
    title: "打开设置页",
    purpose: "引导用户开启位置、蓝牙、相机权限。",
    returns: "authSetting",
    needBackend: "—",
  },
};

const wxApiPageMap = {
  login: ["wxLogin", "getPhoneNumber"],
  "tab:map": ["getLocation", "chooseLocation", "requestSubscribeMessage"],
  "tab:devices": ["scanCode", "openBluetooth", "startBleDiscovery"],
  "tab:messages": ["requestSubscribeMessage"],
  "tab:mine": ["openSetting", "requestSubscribeMessage"],
  "detail:map": ["chooseLocation", "getLocation"],
  "detail:config": ["openBluetooth"],
  "modal:add-device": ["scanCode", "openBluetooth", "startBleDiscovery"],
  "modal:geofence": ["chooseLocation"],
  "modal:share": ["shareAppMessage"],
  "modal:settings": ["openSetting", "requestSubscribeMessage"],
  "modal:chat": [],
  "modal:service": ["requestPayment"],
};

function getWxApiPanelInfo() {
  const key = getCurrentPageKey();
  const detailKey = state.route === "detail" ? \`detail:\${state.detailTab}\` : key;
  const ids = wxApiPageMap[detailKey] || wxApiPageMap[key] || [];
  return ids.map((id) => (wxApiCatalog[id] ? { id, ...wxApiCatalog[id] } : null)).filter(Boolean);
}

function renderWxApiList(apis) {
  const L = LOCALES[state.locale] || LOCALES["zh-CN"];
  if (!apis.length) {
    return \`<div class="api-empty">\${L.api.emptyWx}</div>\`;
  }
  return \`
    <div class="api-list">
      \${apis.map((item, index) => \`
        <details class="api-item api-item-wx" \${index === 0 ? "open" : ""}>
          <summary>
            <span class="api-method method-wx">WX</span>
            <span class="api-summary-text">
              <strong>\${escapeHtml(item.title)}</strong>
              <code>\${escapeHtml(item.api)}</code>
            </span>
            <span class="api-chevron">\${icon("chevron-down")}</span>
          </summary>
          <div class="api-item-body">
            <p><strong>\${L.api.wxPurpose}</strong> \${escapeHtml(item.purpose)}</p>
            <p><strong>\${L.api.wxReturns}</strong> <code>\${escapeHtml(item.returns)}</code></p>
            <p><strong>\${L.api.wxNeedBackend}</strong> <code>\${escapeHtml(item.needBackend)}</code></p>
          </div>
        </details>
      \`).join("")}
    </div>
  \`;
}

function renderLocaleSwitcher() {
  const L = LOCALES[state.locale] || LOCALES["zh-CN"];
  return \`
    <div class="locale-bar" role="group" aria-label="\${L.demo.switchLocale}">
      <button type="button" class="locale-btn \${state.locale === "zh-CN" ? "active" : ""}" data-locale="zh-CN">\${L.demo.localeZh}</button>
      <button type="button" class="locale-btn \${state.locale === "en-US" ? "active" : ""}" data-locale="en-US">\${L.demo.localeEn}</button>
    </div>
  \`;
}
`;

// Insert i18n block before state
code = code.replace(
  "const state = {",
  i18nBlock + "\nconst state = {\n  locale: \"zh-CN\",",
);

// Update client_type in DTO
code = code.replace(
  'client_type:clientType:String = "android"',
  'client_type:clientType:String = "miniprogram"',
);

// Replace renderLogin
const newLogin = `function renderLogin() {
  const L = LOCALES[state.locale] || LOCALES["zh-CN"];
  return \`
    <div class="login-screen miniprogram-login">
      <div class="login-visual">
        <div class="login-map" aria-hidden="true"></div>
        <div class="brand-lockup">
          <div class="brand-mark">\${icon("radio-tower")}</div>
          <div>
            <strong>\${L.brand.name}</strong>
            <span>\${L.brand.tagline}</span>
          </div>
        </div>
        <div class="login-hero-copy">
          <h1>\${L.login.hero}</h1>
          <p>\${L.login.desc}</p>
        </div>
        <div class="mp-badge">\${icon("smartphone")} WeChat Mini Program</div>
      </div>
      <div class="login-form">
        <button class="primary-button wechat-login-btn" type="button" data-action="wechat-login">
          \${icon("message-circle")} \${L.login.wechatLogin}
        </button>
        <p class="login-hint">\${L.login.wechatHint}</p>
        <button class="secondary-button phone-login-btn" type="button" data-action="phone-login">
          \${icon("phone")} \${L.login.phoneLogin}
        </button>
        <p class="login-hint">\${L.login.phoneHint}</p>
        <div class="agreement-row">
          <label class="checkbox-row">
            <input type="checkbox" checked disabled />
            <span>\${L.login.agreePrefix} <button type="button" class="text-button inline" data-action="open-h5">\${L.login.userAgreement}</button> · <button type="button" class="text-button inline" data-action="toast-policy">\${L.login.privacy}</button></span>
          </label>
        </div>
        <button class="ghost-button demo-entry-btn" type="button" data-action="quick-demo">\${icon("play")} \${L.login.guestDemo}</button>
        <p class="version-note">\${L.brand.subtitle}</p>
      </div>
    </div>
  \`;
}`;

code = code.replace(/function renderLogin\(\) \{[\s\S]*?\n\}/, newLogin);

// Replace renderApiPanel
const newApiPanel = `function renderApiPanel() {
  if (!apiPanel) return;
  const L = LOCALES[state.locale] || LOCALES["zh-CN"];
  const info = getApiPanelInfo();
  const apis = (info.apiIds || []).map((id) => (apiCatalog[id] ? { id, ...apiCatalog[id] } : null)).filter(Boolean);
  const suggestedApis = (info.suggestedApiIds || [])
    .map((id) => (suggestedApiCatalog[id] ? { id, ...suggestedApiCatalog[id] } : null))
    .filter(Boolean);
  const wxApis = getWxApiPanelInfo();
  const pagePath = getCurrentPagePath();
  apiPanel.innerHTML = \`
    <section class="api-card api-card-primary">
      <div class="api-kicker">\${icon("server")} \${L.api.kickerHttp}</div>
      <h2>\${escapeHtml(info.title)}</h2>
      <p>\${escapeHtml(info.summary)}</p>
      <div class="page-path-badge">
        <strong>\${L.demo.pagePath}</strong>
        <code>\${escapeHtml(pagePath)}</code>
      </div>
      <div class="api-truth-note">
        <strong>\${L.api.truthSource}</strong>
        <span>\${L.api.truthDesc}</span>
      </div>
    </section>

    <section class="api-card">
      <div class="api-card-heading">
        <h3>\${L.api.defined}</h3>
        <span>\${apis.length} \${L.api.count}</span>
      </div>
      \${renderApiList(apis)}
    </section>

    \${suggestedApis.length ? \`
      <section class="api-card api-suggested-card">
        <div class="api-card-heading">
          <h3>\${L.api.suggested}</h3>
          <span>\${suggestedApis.length} \${L.api.count}</span>
        </div>
        \${renderApiList(suggestedApis, { suggested: true })}
      </section>
    \` : ""}

    <section class="api-card api-wx-card">
      <div class="api-kicker">\${icon("smartphone")} \${L.api.kickerWx}</div>
      <div class="api-card-heading">
        <h3>\${L.api.wxDefined}</h3>
        <span>\${wxApis.length} \${L.api.count}</span>
      </div>
      \${renderWxApiList(wxApis)}
    </section>

    \${renderApiGapList(info.gaps || [])}
  \`;
}`;

code = code.replace(/function renderApiPanel\(\) \{[\s\S]*?\n\}/, newApiPanel);

// Replace renderDemoPanel
const newDemoPanel = `function renderDemoPanel() {
  if (!demoPanel) return;
  const L = LOCALES[state.locale] || LOCALES["zh-CN"];
  const info = getDemoPanelInfo();
  const pagePath = getCurrentPagePath();
  demoPanel.innerHTML = \`
    \${renderLocaleSwitcher()}
    <div class="demo-card demo-card-primary">
      <div class="demo-kicker">\${L.demo.kicker}</div>
      <h1>\${info.title}</h1>
      <p>\${info.summary}</p>
      <div class="page-path-badge demo-path">
        <strong>\${L.demo.pagePath}</strong>
        <code>\${escapeHtml(pagePath)}</code>
      </div>
      <div class="tag-grid">
        \${info.tags.map((tag) => \`<span>\${tag}</span>\`).join("")}
      </div>
    </div>

    <div class="demo-card">
      <h2>\${L.demo.pageInfo}</h2>
      \${renderExplanationList(toPageInfoItems(info))}
    </div>

    <div class="demo-card">
      <h2>\${L.demo.requirements}</h2>
      \${renderExplanationList(toRequirementItems(info))}
    </div>
  \`;
}`;

code = code.replace(/function renderDemoPanel\(\) \{[\s\S]*?\n\}/, newDemoPanel);

// Update login panel info for mini program
code = code.replace(
  /function loginPanelInfo\(\) \{[\s\S]*?backend: \[[\s\S]*?\],\s*\};/,
  `function loginPanelInfo() {
  const isEn = state.locale === "en-US";
  return {
    title: isEn ? "Login" : "登录页",
    summary: isEn
      ? "WeChat mini program entry: wx.login + optional phone binding. Backend aligns on /c/v1/auth/wechat/*."
      : "微信小程序入口：wx.login 换取 session，可选手机号绑定。后端对齐 /c/v1/auth/wechat/* 接口。",
    tags: isEn ? ["WeChat login", "Phone auth", "Agreements"] : ["微信登录", "手机号授权", "协议确认"],
    goals: isEn
      ? ["User understands WeChat one-tap sign in.", "Phone binding flow is clear.", "Terms must be accepted before login.", "Brand shows Evmars device management, not B2B console."]
      : ["用户理解微信一键登录流程。", "手机号绑定入口清晰。", "登录前需勾选协议。", "品牌定位为 Evmars 设备管理，非 B 端后台。"],
    actions: isEn
      ? ["Tap WeChat sign in → map home.", "Tap phone sign in to see getPhoneNumber flow.", "Open terms from agreement links."]
      : ["点击微信登录进入地图首页。", "点击手机号登录查看 getPhoneNumber 流程。", "点击协议链接查看 H5 弹窗。"],
    review: isEn
      ? ["Confirm subscribe message templates for alerts.", "Region-specific map provider in mine settings."]
      : ["确认告警类订阅消息模板。", "「我的」中地区地图服务选择方案。"],
    backend: isEn
      ? ["POST /c/v1/auth/wechat/login", "POST /c/v1/auth/wechat/phone", "GET /c/v1/legal/agreements/*"]
      : ["POST /c/v1/auth/wechat/login", "POST /c/v1/auth/wechat/phone", "GET /c/v1/legal/agreements/*"],
  };
}`,
);

// Update renderShell titleMap
code = code.replace(
  `function renderShell() {
  const titleMap = {
    map: ["地图", "查看设备位置、告警与围栏状态"],
    devices: ["设备", "我的设备、添加设备和状态总览"],
    messages: ["消息", "告警、系统通知和服务提醒"],
    mine: ["我的", "账号、安全、通知和服务"],
  };
  const [title, subtitle] = titleMap[state.tab];`,
  `function renderShell() {
  const L = LOCALES[state.locale] || LOCALES["zh-CN"];
  const titleMap = {
    map: [L.nav.map, L.navSub.map],
    devices: [L.nav.devices, L.navSub.devices],
    messages: [L.nav.messages, L.navSub.messages],
    mine: [L.nav.mine, L.navSub.mine],
  };
  const [title, subtitle] = titleMap[state.tab];`,
);

// Update renderBottomNav
code = code.replace(
  `function renderBottomNav() {
  const nav = [
    ["map", "map", "地图"],
    ["devices", "radio-receiver", "设备"],
    ["messages", "bell", "消息"],
    ["mine", "user-round", "我的"],
  ];`,
  `function renderBottomNav() {
  const L = LOCALES[state.locale] || LOCALES["zh-CN"];
  const nav = [
    ["map", "map", L.nav.map],
    ["devices", "radio-receiver", L.nav.devices],
    ["messages", "bell", L.nav.messages],
    ["mine", "user-round", L.nav.mine],
  ];`,
);

// Update mapFilters
code = code.replace(
  `function mapFilters() {
  return [
    { id: "all", label: "全部设备" },
    { id: "family", label: "家人" },
    { id: "pet", label: "宠物" },
    { id: "item", label: "物品" },
  ];
}`,
  `function mapFilters() {
  const L = LOCALES[state.locale] || LOCALES["zh-CN"];
  return [
    { id: "all", label: L.common.allDevices },
    { id: "family", label: L.common.family },
    { id: "pet", label: L.common.pet },
    { id: "item", label: L.common.item },
  ];
}`,
);

// statusLabel i18n
code = code.replace(
  `function statusLabel(status) {
  return status === "online" ? "在线" : "离线";
}`,
  `function statusLabel(status) {
  const L = LOCALES[state.locale] || LOCALES["zh-CN"];
  return status === "online" ? L.common.online : L.common.offline;
}`,
);

// Device name in cards - replace device.name with deviceDisplayName(device) in key render functions
code = code.replace(/\$\{device\.name\}/g, "${deviceDisplayName(device)}");
code = code.replace(/\$\{getDevice\(\)\.name\}/g, "${deviceDisplayName(getDevice())}");

// Brand replacements
code = code.replace(/Eview Connect/g, "Evmars");
code = code.replace(/Eview Help/g, "Evmars Help");

// Add wechat auth APIs to suggested catalog (after suggestedApiCatalog opening)
const wechatAuthApis = `
  wechatLogin: {
    method: "POST",
    path: "/c/v1/auth/wechat/login",
    title: "微信小程序登录",
    purpose: "提交 wx.login 的 code，返回 Evmars 用户与 token。",
    uiEvidence: "renderLogin() 微信一键登录按钮 data-action=wechat-login。",
    currentStatus: "小程序 AuthApiService 待定义。",
    dto: "WechatLoginRequestDto / LoginResponseDto",
  },
  wechatPhone: {
    method: "POST",
    path: "/c/v1/auth/wechat/phone",
    title: "微信手机号绑定",
    purpose: "提交 getPhoneNumber 加密数据，绑定或创建账号。",
    uiEvidence: "renderLogin() 手机号快捷登录按钮。",
    currentStatus: "小程序 AuthApiService 待定义。",
    dto: "WechatPhoneRequestDto / LoginResponseDto",
  },
  subscribeMessage: {
    method: "POST",
    path: "/c/v1/push/subscribe-message",
    title: "记录订阅消息授权",
    purpose: "保存用户同意的 templateId，用于告警/分享模板消息。",
    uiEvidence: "消息页、我的页通知设置；小程序无 FCM。",
    currentStatus: "替代 Android pushRegister 的小程序方案。",
    dto: "SubscribeMessageRequestDto / ApiResponse<Unit>",
  },
  wechatPay: {
    method: "POST",
    path: "/c/v1/orders/{orderId}/pay/wechat",
    title: "微信支付下单",
    purpose: "生成 wx.requestPayment 所需参数。",
    uiEvidence: "我的服务续费 toast-renew。",
    currentStatus: "小程序支付接口待定义。",
    dto: "WechatPayRequestDto / WechatPayParamsDto",
  },
`;

code = code.replace(
  "const suggestedApiCatalog = {\n  authRefresh:",
  "const suggestedApiCatalog = {" + wechatAuthApis + "\n  authRefresh:",
);

// Update login apiPageMap
code = code.replace(
  `  login: {
    title: "登录页所需 API",
    summary: "上方列当前代码已经定义的账号密码登录；下方补 UI 已出现但代码未实现的登录能力。",
    apiIds: ["authLogin"],
    suggestedApiIds: ["authRefresh", "oauthStart", "oauthComplete", "passwordResetStart", "passwordResetConfirm", "agreementVersions", "agreementContent"],`,
  `  login: {
    title: "登录页所需 API",
    summary: "小程序以微信登录为主；账号密码登录可选。下方列 UI 已出现但待实现的接口。",
    apiIds: [],
    suggestedApiIds: ["wechatLogin", "wechatPhone", "authRefresh", "agreementVersions", "agreementContent"],`,
);

// Update login gaps
code = code.replace(
  `    gaps: [
      "当前 core:remote 没有 refresh token、找回密码、第三方 OAuth、协议版本确认接口。",
    ],
  },
  "tab:map":`,
  `    gaps: [
      "小程序不使用 FCM/HMS；推送改为订阅消息 + subscribe-message 接口。",
      "微信登录替代 OAuth start/complete；Apple/Google 不在小程序内提供。",
    ],
  },
  "tab:map":`,
);

// Update tab:mine suggested apis
code = code.replace(
  `"tab:mine": {
    title: "我的页所需 API",
    summary: "当前代码只落了登出、推送 token 和租户主题；个人资料、套餐、反馈等尚未有远端 Service。",
    apiIds: ["authLogout", "pushRegister", "pushUnregister", "tenantTheme"],
    suggestedApiIds: ["userProfile", "userProfileUpdate", "passwordChange", "accountDeleteRequest", "notificationPrefs", "notificationPrefsUpdate", "mapPreferenceUpdate", "serviceSubscriptions", "paymentMethods", "invoices", "feedbackSubmit", "agreementContent", "appVersionCheck"],`,
  `"tab:mine": {
    title: "我的页所需 API",
    summary: "小程序：登出、订阅消息、租户主题；个人资料、套餐、微信支付等待实现。",
    apiIds: ["authLogout", "tenantTheme"],
    suggestedApiIds: ["subscribeMessage", "userProfile", "userProfileUpdate", "notificationPrefs", "notificationPrefsUpdate", "mapPreferenceUpdate", "serviceSubscriptions", "wechatPay", "invoices", "feedbackSubmit", "agreementContent", "appVersionCheck"],`,
);

// Add new actions in handleAction
code = code.replace(
  `"quick-demo"() {
      state.loggedIn = true;
      state.route = "home";
      state.tab = "map";
      state.modal = null;
      showToast("已进入地图首页");
    },`,
  `"wechat-login"() {
      state.loggedIn = true;
      state.route = "home";
      state.tab = "map";
      state.modal = null;
      showToast(t("toast.wechatLogin"));
    },
    "phone-login"() {
      showToast(t("toast.phoneLogin"));
    },
    "quick-demo"() {
      state.loggedIn = true;
      state.route = "home";
      state.tab = "map";
      state.modal = null;
      showToast(t("toast.guest"));
    },`,
);

// Update reset chat welcome
code = code.replace(
  `state.chat = [{ role: "assistant", text: "你好，我可以帮你解释告警、排查设备离线，也可以说明如何分享和配置设备。" }];`,
  `state.chat = [{ role: "assistant", text: t("mock.chatWelcome") }];`,
);

// Update initial chat in state
code = code.replace(
  `  chat: [
    { role: "assistant", text: "你好，我可以帮你解释告警、排查设备离线，也可以说明如何分享和配置设备。" },
  ],`,
  `  chat: [],`,
);

// Fix chat init on first render - add after state definition patch for chat init in render
code = code.replace(
  "function render() {\n  app.dataset.theme = state.brandTheme;",
  `function render() {
  if (!state.chat.length) {
    state.chat = [{ role: "assistant", text: t("mock.chatWelcome") }];
  }
  app.dataset.theme = state.brandTheme;`,
);

// Bind locale switcher
code = code.replace(
  `function bindEvents() {
  document.querySelectorAll("[data-tab]").forEach((button) => {`,
  `function bindEvents() {
  document.querySelectorAll("[data-locale]").forEach((button) => {
    button.addEventListener("click", () => {
      state.locale = button.dataset.locale;
      render();
    });
  });

  document.querySelectorAll("[data-tab]").forEach((button) => {`,
);

// Remove login form handler dependency - keep but optional
// Update renderApiList empty messages to use i18n
code = code.replace(
  `function renderApiList(apis, options = {}) {
  if (!apis.length) {
    return \`<div class="api-empty">\${options.suggested ? "当前原型页面没有额外反推出待实现服务器接口。" : "当前代码没有为这个页面定义可直接对应的 HTTP API。"}</div>\`;
  }`,
  `function renderApiList(apis, options = {}) {
  const L = LOCALES[state.locale] || LOCALES["zh-CN"];
  if (!apis.length) {
    return \`<div class="api-empty">\${options.suggested ? L.api.emptySuggested : L.api.emptyDefined}</div>\`;
  }`,
);

// Update renderApiGapList title
code = code.replace(
  `<div class="api-card-heading"><h3>接口缺口说明</h3></div>`,
  `<div class="api-card-heading"><h3>\${(LOCALES[state.locale] || LOCALES["zh-CN"]).api.gaps}</h3></div>`,
);

// Fix renderApiGapList to use template - need to read that function
code = code.replace(
  /function renderApiGapList\(gaps\) \{[\s\S]*?\n\}/,
  `function renderApiGapList(gaps) {
  const L = LOCALES[state.locale] || LOCALES["zh-CN"];
  if (!gaps?.length) return "";
  return \`
    <section class="api-card api-gap-card">
      <div class="api-card-heading"><h3>\${L.api.gaps}</h3></div>
      <ul class="api-gap-list">
        \${gaps.map((gap) => \`<li>\${escapeHtml(gap)}</li>\`).join("")}
      </ul>
    </section>
  \`;
}`,
);

// Update header aria labels
code = code.replace(
  `aria-label="添加设备" title="添加设备"`,
  `aria-label="\${(LOCALES[state.locale]||LOCALES['zh-CN']).common.addDevice}" title="\${(LOCALES[state.locale]||LOCALES['zh-CN']).common.addDevice}"`,
);

fs.writeFileSync(appPath, code);
console.log("Patched app.js successfully, size:", fs.statSync(appPath).size);
