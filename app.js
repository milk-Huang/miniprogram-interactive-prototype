const mock = {
  tenant: {
    id: "tenant-healthcare-demo",
    name: "安心康护服务中心",
    region: "全球服务",
  },
  user: {
    id: "u-zuobin",
    account: "zuobin",
    name: "zuobin",
    email: "zuobin@email.com",
    role: "设备拥有者",
  },
  devices: [
    {
      id: "dev-ev05-mom",
      name: "妈妈手表",
      model: "EV05",
      scenario: "老人看护 / 健康监测",
      status: "online",
      battery: 82,
      signal: "强",
      locateType: "GPS",
      location: "深圳湾 · 14:32",
      lastEvent: "疑似跌倒已触发 AI 预警",
      color: "blue",
      category: "family",
      categoryLabel: "家人",
      mapClass: "pin-a",
      icon: "watch",
      permission: "owner",
      metrics: { heart: 78, steps: 3824, active: 42 },
      hardware: {
        imei: "863450071234001",
        mac: "AC:23:3F:9A:31:05",
        firmware: "EV05_V1.4.7",
        hardware: "EV05-HW-R3",
        iccid: "8986043210042810932",
        sim: "中国移动 · 物联卡",
        bleVersion: "5.2",
        producedAt: "2025-03-18",
        activatedAt: "2025-08-12",
      },
    },
    {
      id: "dev-ev07b-pendant",
      name: "安全挂坠",
      model: "EV07B",
      scenario: "个人安全 / 紧急呼叫",
      status: "online",
      battery: 46,
      signal: "中",
      locateType: "WiFi",
      location: "家庭区域 · 14:28",
      lastEvent: "低电量提醒",
      color: "amber",
      category: "family",
      categoryLabel: "家人",
      mapClass: "pin-b",
      icon: "badge-alert",
      permission: "owner",
      metrics: { heart: 72, steps: 1900, active: 21 },
      hardware: {
        imei: "863450071234188",
        mac: "AC:23:3F:9B:22:F0",
        firmware: "EV07B_V2.1.0",
        hardware: "EV07B-HW-R5",
        iccid: "8986043210042810988",
        sim: "中国电信 · 物联卡",
        bleVersion: "5.0",
        producedAt: "2025-05-04",
        activatedAt: "2025-09-22",
      },
    },
    {
      id: "dev-ev04-worker",
      name: "作业定位器",
      model: "EV04",
      scenario: "孤独作业 / 位置安全",
      status: "offline",
      battery: 28,
      signal: "无",
      locateType: "LBS",
      location: "最后在线 · 32 分钟前",
      lastEvent: "设备离线",
      color: "coral",
      category: "family",
      categoryLabel: "家人",
      mapClass: "pin-c",
      icon: "hard-hat",
      permission: "viewer",
      metrics: { heart: 0, steps: 0, active: 0 },
      hardware: {
        imei: "863450071234236",
        mac: "AC:23:3F:9C:A8:10",
        firmware: "EV04_V1.2.3",
        hardware: "EV04-HW-R2",
        iccid: "8986043210042811046",
        sim: "中国联通 · 物联卡",
        bleVersion: "4.2",
        producedAt: "2024-11-09",
        activatedAt: "2025-02-15",
      },
    },
    {
      id: "dev-ev201-dog",
      name: "Milo 项圈",
      model: "EV201",
      scenario: "宠物安全 / 活动监测",
      status: "online",
      battery: 74,
      signal: "强",
      locateType: "GPS",
      location: "公园东门 · 14:31",
      lastEvent: "离开宠物围栏",
      color: "green",
      category: "pet",
      categoryLabel: "宠物",
      mapClass: "pin-d",
      icon: "paw-print",
      permission: "owner",
      metrics: { heart: 96, steps: 6400, active: 68 },
      hardware: {
        imei: "863450071234502",
        mac: "AC:23:3F:9D:50:A1",
        firmware: "EV201_V1.0.8",
        hardware: "EV201-HW-R1",
        iccid: "8986043210042811112",
        sim: "中国移动 · 物联卡",
        bleVersion: "5.0",
        producedAt: "2025-06-21",
        activatedAt: "2025-10-04",
      },
      pet: {
        species: "狗",
        breed: "金毛寻回犬",
        gender: "公",
        neutered: "已绝育",
        birthday: "2022-05-18",
        ageLabel: "3 岁 11 个月",
        weight: "28.4 kg",
        weightTrend: "近 30 天 +0.6 kg",
        vaccine: "狂犬疫苗 2026-02-10 已接种",
        nextVaccine: "2027-02 续打",
      },
    },
    {
      id: "dev-ev206-cat",
      name: "栗子定位器",
      model: "EV206",
      scenario: "宠物定位 / 健康活动",
      status: "online",
      battery: 68,
      signal: "中",
      locateType: "WiFi",
      location: "家附近 · 14:24",
      lastEvent: "活动量正常",
      color: "purple",
      category: "pet",
      categoryLabel: "宠物",
      mapClass: "pin-e",
      icon: "paw-print",
      permission: "owner",
      metrics: { heart: 104, steps: 2800, active: 35 },
      hardware: {
        imei: "863450071234627",
        mac: "AC:23:3F:9E:6C:23",
        firmware: "EV206_V1.0.5",
        hardware: "EV206-HW-R1",
        iccid: "8986043210042811235",
        sim: "中国移动 · 物联卡",
        bleVersion: "5.2",
        producedAt: "2025-07-30",
        activatedAt: "2025-11-12",
      },
      pet: {
        species: "猫",
        breed: "英国短毛猫",
        gender: "母",
        neutered: "已绝育",
        birthday: "2023-09-02",
        ageLabel: "2 岁 7 个月",
        weight: "4.6 kg",
        weightTrend: "近 30 天 +0.1 kg",
        vaccine: "猫三联 2025-12-08 已接种",
        nextVaccine: "2026-12 续打",
      },
    },
    {
      id: "dev-tag-luggage",
      name: "行李定位器",
      model: "EV-Tag",
      scenario: "物品防丢 / 位置提醒",
      status: "online",
      battery: 18,
      signal: "中",
      locateType: "Bluetooth",
      location: "机场到达层 · 14:20",
      lastEvent: "物品低电量",
      color: "blue",
      category: "item",
      categoryLabel: "物品",
      mapClass: "pin-f",
      icon: "package",
      permission: "owner",
      metrics: { heart: 0, steps: 0, active: 0 },
      hardware: {
        imei: "—",
        mac: "AC:23:3F:9F:88:14",
        firmware: "EV-Tag_V0.9.2",
        hardware: "EV-Tag-HW-R1",
        iccid: "—",
        sim: "无 SIM · 仅蓝牙",
        bleVersion: "5.2",
        producedAt: "2025-09-08",
        activatedAt: "2025-12-01",
      },
    },
  ],
  alarms: [
    {
      id: "a1",
      deviceId: "dev-ev05-mom",
      type: "疑似跌倒",
      severity: "high",
      time: "14:26",
      status: "待确认",
      description: "设备检测到跌倒姿态，5 分钟内位置未明显移动。",
      ai: "风险等级：中高。建议立即联系佩戴者确认状态，如无法联系，请通知紧急联系人。",
    },
    {
      id: "a2",
      deviceId: "dev-ev07b-pendant",
      type: "低电量",
      severity: "medium",
      time: "13:58",
      status: "未读",
      description: "当前电量 46%，预计 18 小时后进入低电模式。",
      ai: "建议今晚充电，并检查是否开启了高频定位模式。",
    },
    {
      id: "a3",
      deviceId: "dev-ev04-worker",
      type: "设备离线",
      severity: "medium",
      time: "13:42",
      status: "未处理",
      description: "设备已 32 分钟未上报数据。",
      ai: "可能原因包括网络弱、设备关机或电量不足。建议先尝试单次定位或联系使用者。",
    },
    {
      id: "a4",
      deviceId: "dev-ev201-dog",
      type: "离开围栏",
      severity: "high",
      time: "14:30",
      status: "待确认",
      description: "宠物已离开公园活动围栏，最近位置在公园东门。",
      ai: "建议立即查看实时位置，并开启高频定位；如 5 分钟内仍在围栏外，提醒附近家人协助寻找。",
    },
    {
      id: "a5",
      deviceId: "dev-tag-luggage",
      type: "低电量",
      severity: "medium",
      time: "14:12",
      status: "未读",
      description: "物品定位器电量低于 20%，建议尽快充电或更换电池。",
      ai: "低电量可能影响蓝牙扫描和离线找回能力，建议在下次出行前处理。",
    },
  ],
  track: [
    { time: "08:20", title: "离开 Home Zone", desc: "GPS · 精度 12m" },
    { time: "10:35", title: "到达社区中心", desc: "WiFi · 精度 34m" },
    { time: "14:26", title: "疑似跌倒事件", desc: "GPS · 精度 10m" },
  ],
  geofences: [
    { name: "Home Zone", shape: "圆形", trigger: "进出都提醒", status: "启用", radius: "300m", schedule: "全天" },
    { name: "社区中心", shape: "多边形", trigger: "离开提醒", status: "启用", radius: "6 个顶点", schedule: "工作日 09:00–17:00" },
    { name: "学校接送", shape: "圆形", trigger: "进入提醒", status: "启用", radius: "120m", schedule: "周一至周五 07:30 / 16:30" },
    { name: "禁入区域 · 河边", shape: "多边形", trigger: "进入立即报警", status: "暂停", radius: "8 个顶点", schedule: "全天" },
  ],
  healthRanges: {
    day: {
      label: "今日",
      bars: [12, 18, 24, 30, 22, 28, 16],
      labels: ["6", "9", "12", "15", "18", "21", "24"],
      summaryTitle: "今日活跃度",
      summary: "上午 9–12 点活动量集中，下午外出后活动减弱，建议下午 4 点后增加一次轻量散步。",
    },
    week: {
      label: "近 7 天",
      bars: [42, 56, 49, 62, 58, 47, 35],
      labels: ["一", "二", "三", "四", "五", "六", "日"],
      summaryTitle: "7 日活跃趋势",
      summary: "活动量较 7 日均值下降 23%，夜间心率波动偏高。结合定位看，上午外出时间减少，建议关注睡眠和日常活动状态。",
    },
    month: {
      label: "近 30 天",
      bars: [38, 45, 52, 47, 41, 39, 44, 56, 60, 58, 51, 48, 42, 36],
      labels: ["1", "3", "5", "8", "11", "14", "17", "20", "23", "26", "29", "30", "", ""],
      summaryTitle: "30 日健康趋势",
      summary: "本月平均活跃 47 分钟/天，比上月持平。第 12–18 天有连续 7 日下降，与雨天减少外出相关，本周已恢复。",
    },
  },
  shares: [
    { name: "Jason Chen", account: "jason.chen@email.com", permission: "查看 + 接收告警", status: "已接受" },
    { name: "Nina Chen", account: "nina.chen@email.com", permission: "仅查看", status: "待接受" },
  ],
  services: {
    autoRenew: true,
    paymentMethod: "Visa **** 4821",
    subscriptions: [
      { device: "妈妈手表 · EV05", plan: "标准 SIM 套餐 · 1GB/月", expireAt: "2026-08-12 到期", remaining: "剩余 642 MB · 18 天", status: "正常" },
      { device: "安全挂坠 · EV07B", plan: "基础 SIM 套餐 · 500MB/月", expireAt: "2026-05-22 到期", remaining: "剩余 38 MB · 4 天", status: "即将到期" },
      { device: "作业定位器 · EV04", plan: "高频上报套餐 · 2GB/月", expireAt: "2026-06-30 到期", remaining: "剩余 1.4 GB · 26 天", status: "正常" },
      { device: "Milo 项圈 · EV201", plan: "宠物追踪套餐 · 1GB/月", expireAt: "2026-09-04 到期", remaining: "剩余 812 MB · 41 天", status: "正常" },
    ],
    orders: [
      { id: "EV-O-2026-00284", desc: "安全挂坠 · 基础 SIM 套餐 · 12 个月", amount: "￥168", status: "待支付", time: "2026-04-25" },
      { id: "EV-O-2026-00231", desc: "妈妈手表 · 标准 SIM 套餐 · 12 个月", amount: "￥298", status: "已支付", time: "2026-03-12" },
      { id: "EV-O-2025-00917", desc: "Milo 项圈 · 宠物追踪套餐 · 12 个月", amount: "￥358", status: "已支付", time: "2025-09-04" },
    ],
  },
  incomingShares: [
    { device: "爸爸定位器", owner: "Michael Chen", permission: "查看 + 接收告警", status: "待确认" },
  ],
  systemMessages: [
    { title: "分享邀请", desc: "Michael Chen 邀请你查看爸爸定位器", status: "待确认", type: "share" },
    { title: "系统通知", desc: "国内地图与定位权限将在首次使用地图时申请", status: "未读", type: "system" },
  ],
  discoveredDevices: [
    { name: "EV05-9A31", model: "EV05", signal: "强", id: "imei 863450071234001" },
    { name: "EV07B-22F0", model: "EV07B", signal: "中", id: "imei 863450071234188" },
    { name: "EV04-A810", model: "EV04", signal: "弱", id: "imei 863450071234236" },
    { name: "EV201-PET", model: "EV201", signal: "强", id: "imei 863450071234502" },
    { name: "EV99 SmartBand", model: "EV99", signal: "强", id: "imei 863450071299990" },
  ],
  devicePlugins: {
    EV05: { tsl: "ev05.tsl v1.2.0", panel: "ev05.panel v3.4.1", provider: "Eview Official", enabled: ["定位", "健康", "围栏", "SIM"], extensible: "血氧（固件 V2.0+ 才支持）" },
    EV07B: { tsl: "ev07b.tsl v2.1.0", panel: "ev07b.panel v2.8.3", provider: "Eview Official", enabled: ["定位", "SOS", "围栏", "SIM"], extensible: "语音消息（固件 V2.2+ 才支持）" },
    EV04: { tsl: "ev04.tsl v1.2.3", panel: "ev04.panel v2.0.4", provider: "Eview Official", enabled: ["定位", "离线", "围栏", "SIM"], extensible: "工时统计（固件 V1.5+ 才支持）" },
    EV201: { tsl: "ev201.tsl v1.0.8", panel: "ev201.panel v1.6.0", provider: "Eview Official", enabled: ["定位", "围栏", "活动", "SIM"], extensible: "宠物体征（固件 V1.4+ 才支持）" },
    EV206: { tsl: "ev206.tsl v1.0.5", panel: "ev206.panel v1.5.2", provider: "Eview Official", enabled: ["定位", "围栏", "活动", "SIM"], extensible: "温度感知（固件 V1.3+ 才支持）" },
    "EV-Tag": { tsl: "evtag.tsl v0.9.2", panel: "evtag.panel v1.0.1", provider: "Eview Official", enabled: ["蓝牙", "防丢", "查找", "低电"], extensible: "离线协寻（App V2.0+ 才支持）" },
  },
  capabilityLibrary: [
    { model: "Eview EV05 智能手表", category: "人用", version: "v1.2.0" },
    { model: "Eview EV07B 安全挂坠", category: "人用", version: "v2.1.0" },
    { model: "Eview EV04 工业定位", category: "人用", version: "v1.2.3" },
    { model: "Eview EV201 宠物项圈", category: "宠物", version: "v1.0.8" },
    { model: "Eview EV206 宠物追踪", category: "宠物", version: "v1.0.5" },
    { model: "Eview EV-Tag 蓝牙物品", category: "物品", version: "v0.9.2" },
  ],
  brandThemes: [
    { id: "care", name: "安心康护服务中心", color: "绿色（默认）", hidden: "无", h5: "健康咨询（1 个）" },
    { id: "blue", name: "Global Care Partner", color: "蓝色", hidden: "服务套餐", h5: "帮助中心（2 个）" },
    { id: "pet", name: "PawTrack Club", color: "宠物绿", hidden: "工业设备", h5: "宠物护理（1 个）" },
  ],
  configs: {
    homeWifi: [
      { ssid: "Home_5G", strength: "强", source: "妈妈手表" },
      { ssid: "LivingRoom_IoT", strength: "中", source: "妈妈手表" },
    ],
    homeBeacon: [
      { name: "卧室信标", uuid: "FDA5-1201", source: "妈妈手表" },
      { name: "厨房信标", uuid: "FDA5-1202", source: "妈妈手表" },
    ],
  },
  emergencyContacts: [
    { name: "zuobin（本人）", relation: "本人", phone: "+86 138 0000 1234", priority: 1, triggers: "SOS · 跌倒 · 离线" },
    { name: "Jason Chen", relation: "配偶", phone: "+86 139 0000 5678", priority: 2, triggers: "SOS · 跌倒" },
    { name: "Michael Chen", relation: "兄弟", phone: "+86 137 0000 4321", priority: 3, triggers: "SOS" },
    { name: "社区医院 24h", relation: "医疗机构", phone: "+86 0755 1234 5678", priority: 4, triggers: "SOS · 跌倒未响应" },
  ],
  aiQuestions: [
    {
      q: "为什么设备离线？",
      a: "常见原因包括设备关机、电量不足、SIM 网络弱或处于室内弱信号区域。建议先查看最后位置，再尝试单次定位；如果仍无响应，请联系佩戴者或检查设备电量。",
    },
    {
      q: "怎么把设备分享给家人？",
      a: "进入设备详情，点击分享，输入家人的邮箱或账号，选择权限后发送邀请。对方接受后即可查看设备位置或接收告警。",
    },
    {
      q: "怎么配置 Home WiFi？",
      a: "进入设备配置，选择 Home WiFi。可以手动添加，也可以从已配置设备复制。复制前需要确认目标设备支持 Home WiFi 能力。",
    },
  ],
  configCategories: [
    { id: "info", icon: "circle-gauge", title: "设备信息", desc: "IMEI、MAC、固件、ICCID、激活时间" },
    { id: "home", icon: "house-wifi", title: "Home WiFi / Home Beacon", desc: "家庭 WiFi、信标、配置复制" },
    { id: "location", icon: "map-pinned", title: "定位与上报", desc: "定位方式、上报间隔、AGPS" },
    { id: "alerts", icon: "shield-alert", title: "告警阈值", desc: "跌倒、离线、低电量、超速" },
    { id: "call", icon: "phone-call", title: "SOS 与联系人", desc: "紧急联系人、白名单、按键" },
    { id: "sensor", icon: "heart-pulse", title: "健康传感器", desc: "心率、步数、运动检测" },
    { id: "ble", icon: "bluetooth-connected", title: "蓝牙连接 / 固件升级", desc: "近场连接、参数同步、设备升级" },
    { id: "network", icon: "router", title: "网络与 SIM", desc: "网络连接和 SIM 状态" },
  ],
};


const PROTOTYPE_VERSION = "0.2.0";

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
    layout: {
      toolbar: "布局",
      devMode: "开发",
      demoMode: "演示",
      exitDemo: "退出演示",
      apiPanel: "API",
      guidePanel: "说明",
      expandApi: "展开 API",
      expandGuide: "展开说明",
      version: "原型",
    },
    guide: {
      intro: "面向前后端协作：确认页面流程、小程序路径、HTTP 接口、微信原生能力与 i18n。",
      structureTitle: "页面结构",
      structure: [
        "登录页：微信登录、手机号、协议",
        "地图首页：设备位置、状态、围栏、告警",
        "设备页：列表、扫码/BLE 添加",
        "设备详情：概览、地图、健康、告警、配置",
        "消息：告警、分享邀请、系统通知",
        "我的：资料、安全、通知、地区地图、帮助",
      ],
      pathTitle: "推荐点击路径",
      paths: [
        "微信登录 → 地图首页",
        "点击地图标记 → 单设备地图",
        "扫码添加 → 绑定流程",
        "「妈妈手表」→ 设备详情各 Tab",
        "配置页复制 Home WiFi / Beacon",
        "我的 → 资料 / 通知 / 地区地图",
        "分享、设备管理、AI 客服弹窗",
      ],
    },
    api: {
      kickerHttp: "HTTP 服务端 API",
      kickerWx: "微信原生能力",
      truthSource: "事实来源",
      truthDesc: "按 OpenAPI 风格列出本页 HTTP 接口：方法、路径、请求/响应结构；小程序通过 wx.request 调用，须配置 request 合法域名。",
      defined: "本页 HTTP 接口",
      suggested: "规划中接口",
      wxDefined: "本页需调用的微信 API",
      gaps: "补充说明",
      count: "个",
      requestBody: "请求体",
      responseBody: "响应体",
      schemaTitle: "数据结构",
      method: "方法",
      pathLabel: "路径",
      auth: "认证",
      authDefault: "Bearer Token（登录后）",
      response: "响应",
      codeNotImpl: "待实现",
      emptyDefined: "本页暂无已定义 HTTP 接口。",
      emptySuggested: "本页暂无额外规划接口。",
      emptyWx: "本页不依赖额外微信原生 API。",
      emptySchema: "暂无字段定义。",
      purpose: "说明",
      uiEvidence: "页面场景",
      currentStatus: "状态",
      statusPlanned: "规划中",
      suggestedNote: "路径与字段供前后端评审，落地前需确认。",
      note: "备注",
      wxPurpose: "场景",
      wxReturns: "返回值/回调",
      wxNeedBackend: "需后端配合",
      mpAdaptKicker: "小程序落地清单",
      mpTechKicker: "技术与 API 适配",
      mpTechTitle: "小程序请求层与域名合规",
      mpTechSummary: "小程序通过 wx.request 调用下方 HTTP 接口；须统一封装请求层，并在微信公众平台配置 request 合法域名。",
      mpTechDomainTitle: "request 合法域名（必配）",
      mpTechClientTitle: "请求层规范",
      mpDomainNote: "该接口所属域名须预先配置为微信公众平台 request 合法域名，否则正式版请求会被拦截。",
      mpTechRules: {
        domain: [
          "配置入口：微信公众平台 → 开发管理 → 开发设置 → 服务器域名 → request 合法域名",
          "必须 HTTPS，不支持 HTTP",
          "域名不可带端口号（如 api.example.com:443 无效）",
          "域名须已完成 ICP 备案",
          "仅填写域名，不含路径：GET https://api.evmars.com/c/v1/devices → 填写 api.evmars.com",
          "开发版可勾选「不校验合法域名」；体验版 / 正式版未配置会直接失败",
        ],
        client: [
          "统一封装 wx.request：Base URL、Authorization、超时与错误处理",
          "按页面拆分 services（如 device、alert、auth）",
          "页面用 setData 驱动视图更新",
          "401 / 网络异常 / 业务错误码统一 Toast 或重试",
        ],
      },
      mpTechExample: "示例：GET https://api.evmars.com/c/v1/devices",
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
      phoneLogin: "手机号快捷登录",
      guestDemo: "演示模式进入",
      agreePrefix: "我已阅读并同意",
      userAgreement: "《用户协议》",
      privacy: "《隐私政策》",
      agreeRequired: "请先阅读并同意用户协议与隐私政策",
      openTypePhone: "open-type=\"getPhoneNumber\"",
    },
    common: {
      back: "返回", close: "关闭", save: "保存", cancel: "取消", confirm: "确定",
      addDevice: "添加设备", sync: "同步", online: "在线", offline: "离线",
      allDevices: "全部设备", family: "家人", pet: "宠物", item: "物品",
      submit: "提交", done: "完成",
    },
    dialog: {
      logoutTitle: "提示",
      logoutContent: "确定退出登录？",
      logoutConfirm: "退出",
      unbindTitle: "提示",
      unbindContent: "解绑后设备将从账号移除，是否继续？",
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
    layout: {
      toolbar: "Layout",
      devMode: "Dev",
      demoMode: "Demo",
      exitDemo: "Exit demo",
      apiPanel: "API",
      guidePanel: "Guide",
      expandApi: "Show API",
      expandGuide: "Show guide",
      version: "Prototype",
    },
    guide: {
      intro: "For FE/BE alignment: flows, mini program paths, HTTP & WeChat APIs, i18n keys.",
      structureTitle: "Page structure",
      structure: [
        "Login: WeChat, phone, agreements",
        "Map home: locations, status, geofences, alerts",
        "Devices: list, scan/BLE bind",
        "Device detail: overview, map, health, alerts, config",
        "Messages: alerts, share invites, system notices",
        "Me: profile, security, notifications, map region, help",
      ],
      pathTitle: "Suggested walkthrough",
      paths: [
        "WeChat login → map home",
        "Tap map pin → single-device map",
        "Scan to add → bind flow",
        "Mom's Watch → all detail tabs",
        "Config: copy Home WiFi / Beacon",
        "Me → profile / notifications / map",
        "Share, device mgmt, AI support modals",
      ],
    },
    api: {
      kickerHttp: "HTTP Server APIs",
      kickerWx: "WeChat Native APIs",
      truthSource: "Source of truth",
      truthDesc: "HTTP APIs in OpenAPI style: method, path, request/response schemas. Call via wx.request; configure request合法域名 for release.",
      defined: "HTTP APIs on this page",
      suggested: "Planned APIs",
      wxDefined: "WeChat APIs needed on this page",
      gaps: "Notes",
      count: "",
      requestBody: "Request body",
      responseBody: "Response body",
      schemaTitle: "Schema",
      method: "Method",
      pathLabel: "Path",
      auth: "Auth",
      authDefault: "Bearer token (after login)",
      response: "Response",
      codeNotImpl: "Planned",
      emptyDefined: "No HTTP APIs defined for this page.",
      emptySuggested: "No additional planned APIs for this page.",
      emptyWx: "No extra WeChat native APIs for this page.",
      emptySchema: "No fields defined.",
      purpose: "Description",
      uiEvidence: "Page scenario",
      currentStatus: "Status",
      statusPlanned: "Planned",
      suggestedNote: "Path and fields need backend review before implementation.",
      note: "Note",
      wxPurpose: "Scenario",
      wxReturns: "Returns / callback",
      wxNeedBackend: "Backend needed",
      mpAdaptKicker: "Mini program checklist",
      mpTechKicker: "Tech & API adaptation",
      mpTechTitle: "Mini program request layer & domains",
      mpTechSummary: "Call HTTP APIs below via wx.request with a shared client layer; configure request合法域名 in WeChat MP Admin.",
      mpTechDomainTitle: "request合法域名 (required)",
      mpTechClientTitle: "Client conventions",
      mpDomainNote: "The API host must be added as request合法域名 before release, or requests will be blocked.",
      mpTechRules: {
        domain: [
          "WeChat MP Admin → Development → Dev settings → Server domains → request合法域名",
          "HTTPS only; HTTP is rejected",
          "No port in domain (api.example.com:8080 is invalid)",
          "Domain must have ICP filing (备案)",
          "Domain only, no path: GET https://api.evmars.com/c/v1/devices → api.evmars.com",
          "Dev builds may skip validation; trial/release builds fail without配置",
        ],
        client: [
          "Wrap wx.request: base URL, Authorization, timeout, errors",
          "Split services by domain (device, alert, auth, …)",
          "Update views via setData only",
          "Unified toast/retry for 401, network and business errors",
        ],
      },
      mpTechExample: "Example: GET https://api.evmars.com/c/v1/devices",
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
      phoneLogin: "Phone quick sign in",
      guestDemo: "Enter demo mode",
      agreePrefix: "I agree to",
      userAgreement: "Terms of Service",
      privacy: "Privacy Policy",
      agreeRequired: "Please agree to Terms and Privacy Policy first",
      openTypePhone: "open-type=\"getPhoneNumber\"",
    },
    common: {
      back: "Back", close: "Close", save: "Save", cancel: "Cancel", confirm: "OK",
      addDevice: "Add device", sync: "Sync", online: "Online", offline: "Offline",
      allDevices: "All", family: "Family", pet: "Pet", item: "Items",
      submit: "Submit", done: "Done",
    },
    dialog: {
      logoutTitle: "Notice",
      logoutContent: "Sign out now?",
      logoutConfirm: "Sign out",
      unbindTitle: "Notice",
      unbindContent: "Device will be removed. Continue?",
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
  if (state.modal) return `modal:${state.modal}`;
  if (state.route === "detail") return `detail:${state.detailTab}`;
  return `tab:${state.tab}`;
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
    purpose: "围栏编辑、地点搜索；map 组件默认腾讯底图（GCJ-02）。",
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
  wxShowModal: {
    api: "wx.showModal",
    title: "模态对话框",
    purpose: "二次确认场景：退出登录、解绑设备等。居中弹窗 + 全屏遮罩，非底部弹层。",
    returns: "confirm / cancel",
    needBackend: "确认后调用 HTTP API（如 auth/logout）",
  },
  openSetting: {
    api: "wx.openSetting",
    title: "打开设置页",
    purpose: "引导用户开启位置、蓝牙、相机权限。",
    returns: "authSetting",
    needBackend: "—",
  },
  getMenuButtonBoundingClientRect: {
    api: "wx.getMenuButtonBoundingClientRect",
    title: "胶囊按钮位置",
    purpose: "自定义导航栏时计算右上角胶囊占位，操作按钮右侧预留约 90px 安全区。",
    returns: "top, right, bottom, left, width, height",
    needBackend: "—",
  },
  onPullDownRefresh: {
    api: "onPullDownRefresh / wx.stopPullDownRefresh",
    title: "下拉刷新",
    purpose: "地图总览页下拉同步设备最新位置，比右上角刷新更符合用户习惯。",
    returns: "页面 json 配置 enablePullDownRefresh: true",
    needBackend: "devicesList / deviceLatestLocations",
  },
  openLocation: {
    api: "wx.openLocation",
    title: "打开微信地图导航",
    purpose: "设备详情页唤起微信内置地图导航，无需自研导航能力。",
    returns: "latitude, longitude, name, address, scale",
    needBackend: "—",
  },
};

const wxApiPageMap = {
  login: ["wxLogin", "getPhoneNumber"],
  "tab:map": ["getLocation", "getMenuButtonBoundingClientRect", "onPullDownRefresh", "openSetting", "requestSubscribeMessage", "shareAppMessage"],
  "tab:devices": ["scanCode", "openBluetooth", "startBleDiscovery"],
  "tab:messages": ["requestSubscribeMessage"],
  "tab:mine": ["openSetting", "requestSubscribeMessage", "wxShowModal"],
  "detail:map": ["chooseLocation", "getLocation", "openLocation"],
  "detail:config": ["openBluetooth"],
  "modal:add-device": ["scanCode", "openBluetooth", "startBleDiscovery"],
  "modal:geofence": ["chooseLocation"],
  "modal:share": ["shareAppMessage"],
  "modal:settings": ["openSetting", "requestSubscribeMessage"],
  "modal:chat": [],
  "modal:service": ["requestPayment"],
};

const mpAdaptationPageMap = {
  global: {
    title: "通用小程序适配",
    summary: "原型按 375px 设计，落地须统一 rpx（750rpx 满屏）；HTTP 请求封装 wx.request，配置 request 合法域名（HTTPS、备案、无端口）。",
    items: [
      { title: "尺寸单位", desc: "布局与字号统一使用 rpx，避免 px 在不同屏宽错位。", status: "todo" },
      { title: "请求层", desc: "wx.request 统一封装 Base URL、Token、错误码与网络异常。", status: "todo" },
      { title: "合法域名", desc: "GET /c/v1/devices 等接口的 HTTPS 域名须在微信公众平台配置 request 合法域名（备案、无端口）。", status: "todo" },
      { title: "请求封装", desc: "wx.request 统一 Base URL、Token、错误处理；开发版可跳过域名校验，正式版不可。", status: "todo" },
      { title: "原生 TabBar", desc: "4 个 Tab 符合 ≤5 限制，建议用 app.json tabBar，性能优于自定义。", status: "demo" },
    ],
  },
  login: {
    title: "登录与合规",
    summary: "协议默认不勾选；登录前展示《用户协议》《隐私政策》入口。",
    items: [
      { title: "协议勾选", desc: "未勾选不可登录，符合审核要求。", status: "done" },
      { title: "微信登录", desc: "wx.login + getPhoneNumber 换服务端 session。", status: "demo" },
    ],
  },
  "tab:map": {
    title: "地图页系统适配",
    summary: "自定义顶栏须避让胶囊；底部固定元素加 safe-area-inset-bottom；补全权限/加载/空/错态。",
    items: [
      { title: "胶囊避让", desc: "标题行仅放标题 + 胶囊；操作按钮下移到页面内第二行，避免与胶囊同高。", status: "demo" },
      { title: "定位权限", desc: "首次进入轻量引导；拒绝后隐藏地图、保留列表与「去开启权限」。", status: "demo", demo: "?location=denied" },
      { title: "边界态", desc: "骨架屏 / 空设备引导添加 / 网络错误重试。", status: "demo", demo: "?map=loading|error|empty" },
      { title: "列表地图联动", desc: "点击设备卡高亮地图标记；重叠标记可放大或弹出列表。", status: "demo" },
      { title: "下拉刷新", desc: "onPullDownRefresh 同步最新位置。", status: "demo" },
      { title: "地图底图", desc: "国内用原生 map（腾讯底图、GCJ-02）；海外 Google 仅 web-view。", status: "todo" },
      { title: "扫码添加", desc: "右上角 + 优先 wx.scanCode 绑定设备。", status: "demo" },
      { title: "订阅与分享", desc: "告警订阅消息；地图/详情 onShareAppMessage 分享给家人。", status: "todo" },
    ],
  },
  "tab:devices": {
    title: "设备页适配",
    summary: "顶栏操作避开胶囊；添加设备首选扫码。",
    items: [
      { title: "胶囊避让", desc: "与地图页一致，自定义导航栏右侧留白。", status: "demo" },
      { title: "扫码绑定", desc: "wx.scanCode → POST /c/v1/device-bind/detect。", status: "demo" },
    ],
  },
  "tab:messages": {
    title: "消息页适配",
    summary: "告警触达优先订阅消息，触达率高于 App 推送。",
    items: [
      { title: "订阅消息", desc: "越围栏/低电/离线引导 wx.requestSubscribeMessage。", status: "todo" },
    ],
  },
  "tab:mine": {
    title: "合规入口",
    summary: "我的页须提供解绑、账号注销、协议与隐私政策入口。",
    items: [
      { title: "设备解绑", desc: "设备编辑弹窗内解绑，wx.showModal 二次确认。", status: "done" },
      { title: "账号注销", desc: "账号与安全 → 申请注销。", status: "done" },
      { title: "协议隐私", desc: "登录页与关于页可查看用户协议、隐私政策。", status: "demo" },
      { title: "位置合规", desc: "隐私政策单独说明位置收集；后台定位需额外申请。", status: "todo" },
    ],
  },
  "detail:map": {
    title: "设备地图详情",
    summary: "导航用 wx.openLocation，勿自研路线规划。",
    items: [
      { title: "唤起导航", desc: "wx.openLocation 打开微信内置地图。", status: "todo" },
    ],
  },
};

function renderMpTechAdaptationCard() {
  const L = LOCALES[state.locale] || LOCALES["zh-CN"];
  const t = L.api;
  if (!t.mpTechRules) return "";
  return `
    <section class="api-card api-tech-card">
      <div class="api-kicker">${icon("shield-alert")} ${escapeHtml(t.mpTechKicker)}</div>
      <h3>${escapeHtml(t.mpTechTitle)}</h3>
      <p>${escapeHtml(t.mpTechSummary)}</p>
      <div class="api-domain-example">
        <strong>${escapeHtml(t.mpTechExample)}</strong>
      </div>
      <div class="api-tech-block">
        <h4>${escapeHtml(t.mpTechDomainTitle)}</h4>
        <ul class="api-gap-list">
          ${t.mpTechRules.domain.map((rule) => `<li>${escapeHtml(rule)}</li>`).join("")}
        </ul>
      </div>
      <div class="api-tech-block">
        <h4>${escapeHtml(t.mpTechClientTitle)}</h4>
        <ul class="api-gap-list">
          ${t.mpTechRules.client.map((rule) => `<li>${escapeHtml(rule)}</li>`).join("")}
        </ul>
      </div>
    </section>
  `;
}

function getMpAdaptationInfo() {
  const key = getCurrentPageKey();
  const detailKey = state.route === "detail" ? `detail:${state.detailTab}` : key;
  return mpAdaptationPageMap[detailKey] || mpAdaptationPageMap[key] || mpAdaptationPageMap.global;
}

function renderMpAdaptationCard() {
  const info = getMpAdaptationInfo();
  if (!info?.items?.length) return "";
  const label = state.locale === "en-US" ? "Mini program checklist" : "小程序落地清单";
  return `
    <section class="api-card api-adapt-card">
      <div class="api-kicker">${icon("clipboard-check")} ${label}</div>
      <h3>${escapeHtml(info.title)}</h3>
      <p>${escapeHtml(info.summary)}</p>
      <ul class="mp-adapt-list">
        ${info.items.map((item) => `
          <li class="mp-adapt-item status-${item.status}">
            <span class="mp-adapt-badge">${item.status === "done" ? "已实现" : item.status === "demo" ? "原型演示" : "待开发"}</span>
            <strong>${escapeHtml(item.title)}</strong>
            <span>${escapeHtml(item.desc)}</span>
            ${item.demo ? `<code>${escapeHtml(item.demo)}</code>` : ""}
          </li>
        `).join("")}
      </ul>
    </section>
  `;
}

function getWxApiPanelInfo() {
  const key = getCurrentPageKey();
  const detailKey = state.route === "detail" ? `detail:${state.detailTab}` : key;
  const ids = wxApiPageMap[detailKey] || wxApiPageMap[key] || [];
  return ids.map((id) => (wxApiCatalog[id] ? { id, ...wxApiCatalog[id] } : null)).filter(Boolean);
}

function renderWxApiList(apis) {
  const L = LOCALES[state.locale] || LOCALES["zh-CN"];
  if (!apis.length) {
    return `<div class="api-empty">${L.api.emptyWx}</div>`;
  }
  return `
    <div class="api-list">
      ${apis.map((item, index) => `
        <details class="api-item api-item-wx" ${index === 0 ? "open" : ""}>
          <summary>
            <span class="api-method method-wx">WX</span>
            <span class="api-summary-text">
              <strong>${escapeHtml(item.title)}</strong>
              <code>${escapeHtml(item.api)}</code>
            </span>
            <span class="api-chevron">${icon("chevron-down")}</span>
          </summary>
          <div class="api-item-body">
            <p><strong>${L.api.wxPurpose}</strong> ${escapeHtml(item.purpose)}</p>
            <p><strong>${L.api.wxReturns}</strong> <code>${escapeHtml(item.returns)}</code></p>
            <p><strong>${L.api.wxNeedBackend}</strong> <code>${escapeHtml(item.needBackend)}</code></p>
          </div>
        </details>
      `).join("")}
    </div>
  `;
}

function renderLocaleSwitcher() {
  const L = LOCALES[state.locale] || LOCALES["zh-CN"];
  return `
    <div class="locale-bar" role="group" aria-label="${L.demo.switchLocale}">
      <button type="button" class="locale-btn ${state.locale === "zh-CN" ? "active" : ""}" data-locale="zh-CN">${L.demo.localeZh}</button>
      <button type="button" class="locale-btn ${state.locale === "en-US" ? "active" : ""}" data-locale="en-US">${L.demo.localeEn}</button>
    </div>
  `;
}

const state = {
  locale: "zh-CN",
  loggedIn: false,
  route: "login",
  tab: "map",
  detailTab: "overview",
  selectedDeviceId: "dev-ev05-mom",
  modal: null,
  mapFilter: "all",
  healthRange: "week",
  brandTheme: "care",
  addMode: "scan",
  configCategory: "home",
  settingsPanel: "profile",
  agreedToTerms: false,
  dialog: null,
  toast: "",
  chat: [],
  viewMode: "dev",
  apiPanelOpen: true,
  demoPanelOpen: true,
  locationPermission: "unknown",
  mapLoadState: "ready",
  highlightedMapDeviceId: null,
  pullRefreshing: false,
  pendingLocationGuide: false,
};

const app = document.getElementById("app");
const apiPanel = document.getElementById("api-panel");
const demoPanel = document.getElementById("demo-panel");
const prototypeStage = document.getElementById("prototype-stage");
const layoutToolbar = document.getElementById("layout-toolbar");

function initFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const view = params.get("view");
  if (view === "demo") {
    state.viewMode = "demo";
    state.apiPanelOpen = false;
    state.demoPanelOpen = false;
  } else if (view === "dev") {
    state.viewMode = "dev";
  }
  const lang = params.get("lang");
  if (lang === "en") state.locale = "en-US";
  if (lang === "zh") state.locale = "zh-CN";
  if (params.has("api")) state.apiPanelOpen = params.get("api") !== "0";
  if (params.has("guide")) state.demoPanelOpen = params.get("guide") !== "0";
  if (params.get("location") === "denied") state.locationPermission = "denied";
  const mapState = params.get("map");
  if (mapState === "loading" || mapState === "error" || mapState === "empty") {
    state.mapLoadState = mapState;
  }
}

function syncUrl() {
  const params = new URLSearchParams();
  if (state.viewMode === "demo") {
    params.set("view", "demo");
  } else {
    if (!state.apiPanelOpen) params.set("api", "0");
    if (!state.demoPanelOpen) params.set("guide", "0");
  }
  if (state.locale === "en-US") params.set("lang", "en");
  if (state.locationPermission === "denied") params.set("location", "denied");
  if (state.mapLoadState !== "ready") params.set("map", state.mapLoadState);
  const qs = params.toString();
  const next = qs ? `${window.location.pathname}?${qs}` : window.location.pathname;
  history.replaceState(null, "", next);
}

function applyLayoutState() {
  if (!prototypeStage) return;
  const isDemo = state.viewMode === "demo";
  const apiOpen = !isDemo && state.apiPanelOpen;
  const guideOpen = !isDemo && state.demoPanelOpen;

  prototypeStage.classList.toggle("mode-demo", isDemo);
  prototypeStage.classList.toggle("mode-dev", !isDemo);
  prototypeStage.classList.toggle("api-collapsed", !apiOpen);
  prototypeStage.classList.toggle("demo-collapsed", !guideOpen);
  prototypeStage.classList.toggle("api-open", apiOpen);
  prototypeStage.classList.toggle("demo-open", guideOpen);
  document.body.classList.toggle("is-demo-mode", isDemo);

  renderLayoutToolbar();
  syncUrl();
}

function renderLayoutToolbar() {
  if (!layoutToolbar) return;
  const L = LOCALES[state.locale] || LOCALES["zh-CN"];
  const isDemo = state.viewMode === "demo";

  if (isDemo) {
    layoutToolbar.className = "layout-toolbar layout-toolbar--demo";
    layoutToolbar.innerHTML = `
      <div class="layout-toolbar-group layout-toolbar-group--demo" role="group">
        <button type="button" class="layout-chip demo-exit-chip" data-action="set-view-dev" title="${L.layout.exitDemo}">
          ${icon("minimize-2")}<span>${L.layout.exitDemo}</span>
        </button>
      </div>
      <div class="layout-toolbar-group" role="group" aria-label="${L.demo.switchLocale}">
        <button type="button" class="layout-chip ${state.locale === "zh-CN" ? "active" : ""}" data-locale="zh-CN">${L.demo.localeZh}</button>
        <button type="button" class="layout-chip ${state.locale === "en-US" ? "active" : ""}" data-locale="en-US">${L.demo.localeEn}</button>
      </div>
    `;
    return;
  }

  layoutToolbar.className = "layout-toolbar";
  layoutToolbar.innerHTML = `
    <div class="layout-toolbar-brand">
      <strong>Evmars</strong>
      <span>${L.layout.version} v${PROTOTYPE_VERSION}</span>
    </div>
    <div class="layout-toolbar-actions">
      <div class="layout-toolbar-group" role="group" aria-label="${L.layout.toolbar}">
        <button type="button" class="layout-chip ${!isDemo ? "active" : ""}" data-action="set-view-dev">${L.layout.devMode}</button>
        <button type="button" class="layout-chip ${isDemo ? "active" : ""}" data-action="set-view-demo">${L.layout.demoMode}</button>
      </div>
      <div class="layout-toolbar-group ${isDemo ? "hidden" : ""}" role="group" aria-label="${L.layout.toolbar}">
        <button type="button" class="layout-chip ${state.apiPanelOpen ? "active" : ""}" data-action="toggle-api-panel">${L.layout.apiPanel}</button>
        <button type="button" class="layout-chip ${state.demoPanelOpen ? "active" : ""}" data-action="toggle-demo-panel">${L.layout.guidePanel}</button>
      </div>
      <div class="layout-toolbar-group" role="group" aria-label="${L.demo.switchLocale}">
        <button type="button" class="layout-chip ${state.locale === "zh-CN" ? "active" : ""}" data-locale="zh-CN">${L.demo.localeZh}</button>
        <button type="button" class="layout-chip ${state.locale === "en-US" ? "active" : ""}" data-locale="en-US">${L.demo.localeEn}</button>
      </div>
    </div>
  `;
}

function $(selector, root = document) {
  return root.querySelector(selector);
}

function getDevice(id = state.selectedDeviceId) {
  return mock.devices.find((device) => device.id === id) || mock.devices[0];
}

function deviceAlarms(deviceId) {
  return mock.alarms.filter((alarm) => alarm.deviceId === deviceId);
}

function deviceIcon(device) {
  return device.icon || (device.model === "EV05" ? "watch" : device.model === "EV07B" ? "badge-alert" : "radio-receiver");
}

function devicePlace(device) {
  return device.location.split(" · ")[0] || device.location;
}

function isUrgentDevice(device) {
  return deviceAlarms(device.id).some((alarm) => alarm.severity === "high");
}

function isLowBatteryDevice(device) {
  return device.battery <= 30 || deviceAlarms(device.id).some((alarm) => alarm.type.includes("低电"));
}

function mapFilters() {
  const L = LOCALES[state.locale] || LOCALES["zh-CN"];
  return [
    { id: "all", label: L.common.allDevices },
    { id: "family", label: L.common.family },
    { id: "pet", label: L.common.pet },
    { id: "item", label: L.common.item },
  ];
}

function filteredMapDevices() {
  if (state.mapFilter === "all") return mock.devices;
  return mock.devices.filter((device) => device.category === state.mapFilter);
}

function mapFilterLabel() {
  return mapFilters().find((filter) => filter.id === state.mapFilter)?.label || "全部设备";
}

function shouldExpandMapPin(device) {
  return state.mapFilter !== "all" || isUrgentDevice(device) || isLowBatteryDevice(device) || device.status === "offline";
}

function icon(name) {
  return `<i data-lucide="${name}"></i>`;
}

/** 模拟 wx.showModal 居中对话框（非底部弹层） */
function renderMpDialog({ title, content, confirmAction, cancelAction = "close-dialog", confirmText, cancelText, confirmDanger = false }) {
  const L = LOCALES[state.locale] || LOCALES["zh-CN"];
  return `
    <div class="mp-dialog-mask" data-action="${cancelAction}" role="presentation">
      <div class="mp-dialog" role="alertdialog" aria-modal="true" aria-labelledby="mp-dialog-title">
        <div class="mp-dialog-title" id="mp-dialog-title">${escapeHtml(title)}</div>
        <div class="mp-dialog-content">${escapeHtml(content)}</div>
        <div class="mp-dialog-footer">
          <button type="button" class="mp-dialog-btn cancel" data-action="${cancelAction}">${escapeHtml(cancelText || L.common.cancel)}</button>
          <button type="button" class="mp-dialog-btn ${confirmDanger ? "warn" : "confirm"}" data-action="${confirmAction}">${escapeHtml(confirmText || L.common.confirm)}</button>
        </div>
      </div>
    </div>
  `;
}

/** 模拟小程序底部弹层 page-container / 半屏页 */
function wrapMpSheet(title, bodyHtml, footerHtml = "") {
  const L = LOCALES[state.locale] || LOCALES["zh-CN"];
  return `
    <div class="modal-backdrop" data-action="close-modal">
      <section class="bottom-sheet mp-sheet" role="dialog" aria-modal="true" data-sheet>
        <div class="mp-sheet-handle" aria-hidden="true"></div>
        <div class="mp-sheet-header">
          <button type="button" class="mp-nav-text" data-action="close-modal">${L.common.cancel}</button>
          <h2 class="mp-sheet-title">${title}</h2>
          <span class="mp-sheet-spacer" aria-hidden="true"></span>
        </div>
        <div class="mp-sheet-body">${bodyHtml}</div>
        ${footerHtml ? `<div class="mp-sheet-footer safe-bottom">${footerHtml}</div>` : ""}
      </section>
    </div>
  `;
}

function mpBtn(type, label, action, extraClass = "") {
  const cls = ["mp-btn", `mp-btn-${type}`, extraClass].filter(Boolean).join(" ");
  return `<button type="button" class="${cls}" data-action="${action}">${label}</button>`;
}

function renderMpToast(message) {
  return `<div class="mp-toast" role="status"><span>${escapeHtml(message)}</span></div>`;
}

function renderDialog() {
  const L = LOCALES[state.locale] || LOCALES["zh-CN"];
  if (state.dialog === "logout-confirm") {
    return renderMpDialog({
      title: L.dialog.logoutTitle,
      content: L.dialog.logoutContent,
      confirmAction: "logout",
      confirmDanger: true,
      confirmText: L.dialog.logoutConfirm,
    });
  }
  if (state.dialog === "unbind-confirm") {
    return renderMpDialog({
      title: L.dialog.unbindTitle,
      content: L.dialog.unbindContent,
      confirmAction: "unbind-device-confirm",
      confirmDanger: true,
      confirmText: L.common.confirm,
    });
  }
  return "";
}

function statusLabel(status) {
  const L = LOCALES[state.locale] || LOCALES["zh-CN"];
  return status === "online" ? L.common.online : L.common.offline;
}

function statusClass(status) {
  return status === "online" ? "online" : "offline";
}

function devicePluginInfo(device) {
  return mock.devicePlugins[device.model] || mock.devicePlugins.EV05;
}

function currentBrandTheme() {
  return mock.brandThemes.find((theme) => theme.id === state.brandTheme) || mock.brandThemes[0];
}

function nextBrandTheme() {
  const currentIndex = mock.brandThemes.findIndex((theme) => theme.id === state.brandTheme);
  return mock.brandThemes[(currentIndex + 1) % mock.brandThemes.length];
}

function oauthProviders() {
  return [
    { id: "wechat", name: "微信", icon: "message-circle-more", hint: "微信授权", bound: true, account: "weixin · zuobin" },
    { id: "apple", name: "Apple", icon: "apple", hint: "Apple ID", bound: false, account: "未绑定" },
    { id: "google", name: "Google", icon: "chrome", hint: "Google 账号", bound: false, account: "未绑定" },
  ];
}

function renderOauthBrandIcon(provider) {
  if (provider.id === "google") {
    return `<span class="oauth-brand-icon ${provider.id}"><b>G</b></span>`;
  }
  return `<span class="oauth-brand-icon ${provider.id}">${icon(provider.icon)}</span>`;
}

const dtoCatalog = {
  LoginRequestDto: dto("AuthDtos.kt", `account:account:String; password:password:String; client_type:clientType:String = "miniprogram"; app_key:appKey:String = "evmars_c_app"`),
  LoginResponseDto: dto("AuthDtos.kt", "user:user:UserDto; token:token:TokenDto"),
  TokenDto: dto("AuthDtos.kt", "access_token:accessToken:String; refresh_token:refreshToken:String; expires_at_ms:expiresAtMs:Long"),
  UserDto: dto("AuthDtos.kt", "id:id:String; display_name:displayName:String; email:email:String; phone:phone:String?; avatar_url:avatarUrl:String?; tenant_id:tenantId:String; tenant_name:tenantName:String; role:role:String"),

  DeviceDto: dto("DeviceDtos.kt", "id:id:String; name:name:String; product_key:productKey:String; category:category:String; imei:imei:String; owner_id:ownerId:String; shared_from_id:sharedFromId:String?; tenant_id:tenantId:String; state:state:DeviceStateDto; latest_location:latestLocation:LocationDto?; nickname:nickname:String?; ble_identity:bleIdentity:DeviceBleIdentityDto? = null"),
  DeviceStateDto: dto("DeviceDtos.kt", "online:online:String; battery:battery:Int; signal_strength:signalStrength:Int; locate_method:locateMethod:String; firmware_version:firmwareVersion:String; iccid:iccid:String?; last_seen_ms:lastSeenMs:Long"),
  LocationDto: dto("DeviceDtos.kt", "lat:lat:Double; lng:lng:Double"),
  DeviceBleIdentityDto: dto("DeviceDtos.kt", "address:address:String; name:name:String? = null; product_key:productKey:String? = null; imei:imei:String? = null; module_id:moduleId:String? = null; gatt_profile:gattProfile:String = DeviceBleIdentity.EVIEW_UART_PROFILE; rssi:rssi:Int? = null; battery_percent:batteryPercent:Int? = null; manufacturer_data_hex:manufacturerDataHex:String? = null"),

  ProductManifestDto: dto("ManifestDtos.kt", "product_key:productKey:String; display_name:displayName:String; category:category:String; tsl_version:tslVersion:String; panel_version:panelVersion:String; min_firmware_version:minFirmwareVersion:String; supported_capabilities:supportedCapabilities:List<String>"),
  PanelManifestDto: dto("ManifestDtos.kt", "product_key:productKey:String; tabs:tabs:List<PanelTabDto>"),
  PanelTabDto: dto("ManifestDtos.kt", "key:key:String; display_name:displayName:String; visible:visible:Boolean; security_level:securityLevel:String"),
  BrandThemeDto: dto("ManifestDtos.kt", "tenant_id:tenantId:String; tenant_name:tenantName:String; primary_color:primaryColor:Long; accent_color:accentColor:Long; hidden_features:hiddenFeatures:List<String>; custom_h5_entries:customH5Entries:List<H5EntryDto>"),
  H5EntryDto: dto("ManifestDtos.kt", "key:key:String; title:title:String; url:url:String; icon:icon:String?"),

  LatLngDto: dto("LocationDtos.kt", "lat:lat:Double; lng:lng:Double"),
  TrackPointDto: dto("LocationDtos.kt", "timestamp_ms:timestampMs:Long; location:location:LatLngDto; speed_kmh:speedKmh:Double?; accuracy:accuracy:Int?; locate_method:locateMethod:String"),
  TrackDto: dto("LocationDtos.kt", "device_id:deviceId:String; start_ms:startMs:Long; end_ms:endMs:Long; points:points:List<TrackPointDto>; distance_meters:distanceMeters:Int"),
  LocationRefreshRequestDto: dto("LocationDtos.kt", `mode:mode:String = "SINGLE"`),
  LocationRefreshDto: dto("LocationDtos.kt", "device_id:deviceId:String; status:status:String; requested_at_ms:requestedAtMs:Long; location:location:LatLngDto?; locate_method:locateMethod:String?; accuracy_meters:accuracyMeters:Int?; message:message:String?"),
  GeofenceDto: dto("LocationDtos.kt", "id:id:String; device_id:deviceId:String; name:name:String; center:center:LatLngDto; radius_meters:radiusMeters:Int; type:type:String; enabled:enabled:Boolean; trigger:trigger:String? = null; polygon:polygon:List<LatLngDto>? = null; vertices:vertices:List<LatLngDto>? = null"),
  PlaceSearchResultDto: dto("LocationDtos.kt", "id:id:String; title:title:String; address:address:String; location:location:LatLngDto; provider:provider:String; distance_meters:distanceMeters:Int? = null"),

  AlertDto: dto("AlertDtos.kt", "id:id:String; device_id:deviceId:String; device_name:deviceName:String; type:type:String; level:level:String; title:title:String; description:description:String; timestamp_ms:timestampMs:Long; status:status:String; location:location:LatLngDto?"),
  UnreadAlertCountDto: dto("AlertDtos.kt", "count:count:Int"),

  HealthSummaryDto: dto("HealthDtos.kt", "device_id:deviceId:String; heart_rate:heartRate:HealthMetricDto?; blood_oxygen:bloodOxygen:HealthMetricDto?; temperature:temperature:HealthMetricDto?; steps:steps:HealthMetricDto?; activity_minutes:activityMinutes:Int?; score:score:HealthScoreDto?"),
  HealthMetricDto: dto("HealthDtos.kt", "id:id:String; device_id:deviceId:String; type:type:String; value:value:Double; unit:unit:String; timestamp_ms:timestampMs:Long; status:status:String"),
  HealthScoreDto: dto("HealthDtos.kt", "device_id:deviceId:String; score:score:Int; level:level:String; factors:factors:List<String>; suggestions:suggestions:List<String>; updated_ms:updatedMs:Long"),
  ChartDataPointDto: dto("HealthDtos.kt", "timestamp_ms:timestampMs:Long; value:value:Double; is_anomaly:isAnomaly:Boolean = false"),

  ShareDto: dto("ShareDtos.kt", "id:id:String; device_id:deviceId:String; device_name:deviceName:String; owner_id:ownerId:String; owner_name:ownerName:String; shared_to_id:sharedToId:String?; shared_to_account:sharedToAccount:String; permission:permission:String; status:status:String; created_ms:createdMs:Long"),
  CreateShareRequestDto: dto("ShareDtos.kt", "shared_to_account:sharedToAccount:String; permission:permission:String"),

  DetectDeviceRequestDto: dto("DeviceBindDtos.kt", "method:method:String; raw_value:rawValue:String? = null; identifier:identifier:String? = null; identifier_type:identifierType:String? = null; product_key:productKey:String? = null; display_name:displayName:String? = null; ble_identity:bleIdentity:DeviceBleIdentityDto? = null"),
  AddDeviceCandidateDto: dto("DeviceBindDtos.kt", "candidate_id:candidateId:String; method:method:String; product_key:productKey:String; product_name:productName:String; imei:imei:String; owner_name:ownerName:String; default_group:defaultGroup:String; permission_summary:permissionSummary:String; product_manifest:productManifest:ProductManifestDto; panel_manifest:panelManifest:PanelManifestDto; provider:provider:String; effective_capabilities:effectiveCapabilities:List<String>; extensible_capabilities:extensibleCapabilities:List<String>; ble_identity:bleIdentity:DeviceBleIdentityDto? = null"),
  BoundDevicePreviewDto: dto("DeviceBindDtos.kt", "device_id:deviceId:String; product_key:productKey:String; product_name:productName:String; imei:imei:String; tsl_version:tslVersion:String; panel_version:panelVersion:String; provider:provider:String; online:online:Boolean; bound_at_ms:boundAtMs:Long; ble_identity:bleIdentity:DeviceBleIdentityDto? = null"),
  DeviceBindBleIdentityDto: dto("DeviceBindDtos.kt", "address:address:String; name:name:String? = null; product_key:productKey:String? = null; imei:imei:String? = null; module_id:moduleId:String? = null; gatt_profile:gattProfile:String = DeviceBleIdentity.EVIEW_UART_PROFILE; rssi:rssi:Int? = null; battery_percent:batteryPercent:Int? = null; manufacturer_data_hex:manufacturerDataHex:String? = null", "DeviceBleIdentityDto"),

  AiHealthAnalysisDto: dto("AiDtos.kt", "device_id:deviceId:String; summary:summary:String; highlights:highlights:List<String>; anomalies:anomalies:List<String>; suggestions:suggestions:List<String>; updated_ms:updatedMs:Long"),
  AiAlertExplainDto: dto("AiDtos.kt", "alert_id:alertId:String; risk_level:riskLevel:String; cause:cause:String; context:context:List<String>; recommended_actions:recommendedActions:List<String>; should_notify_contact:shouldNotifyContact:Boolean; should_contact_support:shouldContactSupport:Boolean"),
  AiInsightDto: dto("AiDtos.kt", "id:id:String; device_id:deviceId:String; title:title:String; description:description:String; level:level:String; timestamp_ms:timestampMs:Long"),
  AiAnswerRequestDto: dto("AiDtos.kt", `question:question:String; channel:channel:String = "android_app"; scenario:scenario:String = "SUPPORT_CHAT"; mode:mode:String = "NORMAL"; user_id:userId:String? = null; tenant_id:tenantId:String? = null; locale:locale:String? = null; device_id:deviceId:String? = null; alert_id:alertId:String? = null; conversation_id:conversationId:String? = null`),
  AiAnswerResponseDto: dto("AiDtos.kt", "answer:answer:String; related_knowledge_ids:relatedKnowledgeIds:List<String>; scenario:scenario:String? = null; mode:mode:String? = null; should_handoff_to_human:shouldHandoffToHuman:Boolean? = null; safety_level:safetyLevel:String? = null; trace_id:traceId:String? = null"),

  KnowledgeItemDto: dto("KnowledgeDtos.kt", "id:id:String; category:category:String; title:title:String; summary:summary:String; content:content:String; language:language:String"),
  QuickQuestionDto: dto("KnowledgeDtos.kt", "id:id:String; text:text:String"),

  RegisterPushTokenRequestDto: dto("PushDtos.kt", "user_id:userId:String; tenant_id:tenantId:String; installation_id:installationId:String; provider_id:providerId:String; provider_kind:providerKind:String; token:token:String; package_name:packageName:String; app_version:appVersion:String; locale:locale:String; region:region:String; device_brand:deviceBrand:String"),
  RegisterPushTokenResponseDto: dto("PushDtos.kt", "provider_id:providerId:String?; provider_kind:providerKind:String?; token_synced:tokenSynced:Boolean?; server_token_id:serverTokenId:String?; expires_at_ms:expiresAtMs:Long?; reason:reason:String?"),
  UnregisterPushTokenResponseDto: dto("PushDtos.kt", "removed:removed:Boolean?"),
};

Object.entries(dtoCatalog).forEach(([name, schema]) => {
  schema.name = schema.name || name;
});

const apiCatalog = {
  authLogin: {
    method: "POST",
    path: "/c/v1/auth/login",
    title: "账号登录",
    purpose: "提交账号和密码，返回当前用户与登录态。",
    repository: "AccountRepository.login -> RemoteAccountRepository.login",
    dto: "LoginRequestDto / LoginResponseDto",
    source: "AuthApiService.kt",
  },
  authLogout: {
    method: "POST",
    path: "/c/v1/auth/logout",
    title: "退出登录",
    purpose: "退出当前会话；当前代码只定义 logout，没有 refresh token 接口。",
    repository: "AccountRepository.logout -> RemoteAccountRepository.logout",
    dto: "ApiResponse<Unit>",
    source: "AuthApiService.kt",
  },
  devicesList: {
    method: "GET",
    path: "/c/v1/devices",
    title: "我的设备列表",
    purpose: "获取当前用户可管理和可查看的设备，用于地图总览、设备首页和详情入口。",
    repository: "DeviceRepository.listMyDevices -> RemoteDeviceRepository.listMyDevices",
    dto: "List<DeviceDto>",
    source: "DeviceApiService.kt",
  },
  deviceDetail: {
    method: "GET",
    path: "/c/v1/devices/{deviceId}",
    title: "设备详情",
    purpose: "获取单台设备基础信息、状态、最近位置和权限相关展示数据。",
    repository: "DeviceRepository.deviceById -> RemoteDeviceRepository.deviceById",
    dto: "DeviceDto",
    source: "DeviceApiService.kt",
  },
  productManifest: {
    method: "GET",
    path: "/c/v1/products/{productKey}/manifest",
    title: "产品物模型 Manifest",
    purpose: "按产品型号读取能力、配置和扩展信息，供页面决定展示哪些模块。",
    repository: "ManifestRepository.productManifest -> RemoteManifestRepository.productManifest",
    dto: "ProductManifestDto",
    source: "ManifestApiService.kt",
  },
  panelManifest: {
    method: "GET",
    path: "/c/v1/products/{productKey}/panel",
    title: "设备面板 Manifest",
    purpose: "读取设备详情 Tab、可见性和安全等级配置。",
    repository: "ManifestRepository.panelManifest -> RemoteManifestRepository.panelManifest",
    dto: "PanelManifestDto",
    source: "ManifestApiService.kt",
  },
  tenantTheme: {
    method: "GET",
    path: "/c/v1/tenant/theme",
    title: "租户品牌主题",
    purpose: "读取品牌主题、隐藏功能和 H5 入口配置。",
    repository: "ManifestRepository.currentBrandTheme -> RemoteManifestRepository.currentBrandTheme",
    dto: "BrandThemeDto",
    source: "ManifestApiService.kt",
  },
  track: {
    method: "GET",
    path: "/c/v1/devices/{deviceId}/track",
    title: "历史轨迹",
    purpose: "读取单台设备轨迹，供设备地图页和轨迹回放使用。",
    repository: "LocationRepository.trackOf -> RemoteLocationRepository.trackOf",
    dto: "TrackDto",
    source: "LocationApiService.kt",
  },
  locationRefresh: {
    method: "POST",
    path: "/c/v1/devices/{deviceId}/location/refresh",
    title: "单次定位刷新",
    purpose: "请求设备立即刷新位置，返回定位请求状态和可能的新位置。",
    repository: "LocationRepository.requestImmediateLocation -> RemoteLocationRepository.requestImmediateLocation",
    dto: "LocationRefreshRequestDto / LocationRefreshDto",
    source: "LocationApiService.kt",
  },
  geofencesList: {
    method: "GET",
    path: "/c/v1/devices/{deviceId}/geofences",
    title: "设备围栏列表",
    purpose: "读取单台设备安全围栏，用于地图页围栏展示。",
    repository: "LocationRepository.fencesOf -> RemoteLocationRepository.fencesOf",
    dto: "List<GeofenceDto>",
    source: "LocationApiService.kt",
  },
  placesSearch: {
    method: "GET",
    path: "/c/v1/places/search?q=&near_lat=&near_lng=&limit=",
    title: "地点搜索",
    purpose: "按关键词和附近坐标搜索地点，服务围栏编辑或地图检索。",
    repository: "LocationRepository.searchPlaces -> RemoteLocationRepository.searchPlaces",
    dto: "List<PlaceSearchResultDto>",
    source: "LocationApiService.kt",
  },
  geofenceUpsert: {
    method: "POST",
    path: "/c/v1/devices/{deviceId}/geofences",
    title: "新增或更新围栏",
    purpose: "保存设备围栏。当前代码用 upsertFence 统一新增和编辑。",
    repository: "LocationRepository.upsertFence -> RemoteLocationRepository.upsertFence",
    dto: "GeofenceDto",
    source: "LocationApiService.kt",
  },
  geofenceDelete: {
    method: "DELETE",
    path: "/c/v1/devices/{deviceId}/geofences/{fenceId}",
    title: "删除围栏",
    purpose: "删除单台设备指定围栏。",
    repository: "LocationRepository.deleteFence -> RemoteLocationRepository.deleteFence",
    dto: "ApiResponse<Unit>",
    source: "LocationApiService.kt",
  },
  alertsList: {
    method: "GET",
    path: "/c/v1/alerts",
    title: "全部告警",
    purpose: "获取当前用户全部告警消息，用于消息页。",
    repository: "AlertRepository.listAlerts -> RemoteAlertRepository.listAlerts",
    dto: "List<AlertDto>",
    source: "AlertApiService.kt",
  },
  deviceAlerts: {
    method: "GET",
    path: "/c/v1/devices/{deviceId}/alerts",
    title: "设备告警列表",
    purpose: "获取单台设备告警，用于设备详情概览和告警页。",
    repository: "AlertRepository.alertsByDevice -> RemoteAlertRepository.alertsByDevice",
    dto: "List<AlertDto>",
    source: "AlertApiService.kt",
  },
  alertDetail: {
    method: "GET",
    path: "/c/v1/alerts/{alertId}",
    title: "告警详情",
    purpose: "获取单条告警详情，供告警详情、AI 解释上下文使用。",
    repository: "AlertRepository.alertById -> RemoteAlertRepository.alertById",
    dto: "AlertDto",
    source: "AlertApiService.kt",
  },
  alertUnreadCount: {
    method: "GET",
    path: "/c/v1/alerts/unread-count",
    title: "未读告警数量",
    purpose: "读取未读数量，用于首页、底部消息提醒和消息页角标。",
    repository: "AlertRepository.unreadAlertCount -> RemoteAlertRepository.unreadAlertCount",
    dto: "UnreadAlertCountDto",
    source: "AlertApiService.kt",
  },
  healthSummary: {
    method: "GET",
    path: "/c/v1/devices/{deviceId}/health/summary",
    title: "健康摘要",
    purpose: "读取单台设备健康摘要。无健康能力的设备由数据和 Manifest 决定降级显示。",
    repository: "HealthRepository.healthSummary -> RemoteHealthRepository.healthSummary",
    dto: "HealthSummaryDto",
    source: "HealthApiService.kt",
  },
  healthChart: {
    method: "GET",
    path: "/c/v1/devices/{deviceId}/health/chart?type=&range_hours=",
    title: "健康趋势图",
    purpose: "按指标类型和时间范围读取健康图表点。",
    repository: "HealthRepository.chartSeries -> RemoteHealthRepository.chartSeries",
    dto: "List<ChartDataPointDto>",
    source: "HealthApiService.kt",
  },
  sharesList: {
    method: "GET",
    path: "/c/v1/devices/{deviceId}/shares",
    title: "设备分享列表",
    purpose: "读取单台设备已分享关系。",
    repository: "ShareRepository.sharesOf -> RemoteShareRepository.sharesOf",
    dto: "List<ShareDto>",
    source: "ShareApiService.kt",
  },
  shareCreate: {
    method: "POST",
    path: "/c/v1/devices/{deviceId}/shares",
    title: "创建设备分享",
    purpose: "给账号创建待接受的分享邀请。",
    repository: "ShareRepository.createShare -> RemoteShareRepository.createShare",
    dto: "CreateShareRequestDto / ShareDto",
    source: "ShareApiService.kt",
  },
  deviceBindDetect: {
    method: "POST",
    path: "/c/v1/device-bind/detect",
    title: "识别待绑定设备",
    purpose: "扫码、IMEI 或 BLE 原始信息统一识别为候选设备。",
    repository: "DeviceBindRepository.detect -> RemoteDeviceBindRepository.detect",
    dto: "DetectDeviceRequestDto / AddDeviceCandidateDto",
    source: "DeviceBindApiService.kt",
  },
  deviceBindPreparePanel: {
    method: "POST",
    path: "/c/v1/device-bind/{candidateId}/prepare-panel",
    title: "准备设备面板",
    purpose: "绑定前准备候选设备的 Manifest 和面板信息。",
    repository: "DeviceBindRepository.preparePanel -> RemoteDeviceBindRepository.preparePanel",
    dto: "AddDeviceCandidateDto",
    source: "DeviceBindApiService.kt",
  },
  deviceBindBind: {
    method: "POST",
    path: "/c/v1/device-bind/{candidateId}/bind",
    title: "执行设备绑定",
    purpose: "把候选设备绑定到当前用户，返回绑定成功后的设备预览。",
    repository: "DeviceBindRepository.bind -> RemoteDeviceBindRepository.bind",
    dto: "BoundDevicePreviewDto",
    source: "DeviceBindApiService.kt",
  },
  deviceBindPreviews: {
    method: "GET",
    path: "/c/v1/device-bind/previews",
    title: "已绑定预览",
    purpose: "读取绑定完成后的预览设备列表。",
    repository: "DeviceBindRepository.listBoundPreviews -> RemoteDeviceBindRepository.listBoundPreviews",
    dto: "List<BoundDevicePreviewDto>",
    source: "DeviceBindApiService.kt",
  },
  aiHealthAnalysis: {
    method: "GET",
    path: "/c/v1/ai/devices/{deviceId}/health-analysis",
    title: "AI 健康分析",
    purpose: "获取单台设备健康 AI 分析。",
    repository: "AiRepository.aiHealthAnalysis -> RemoteAiRepository.aiHealthAnalysis",
    dto: "AiHealthAnalysisDto",
    source: "AiApiService.kt",
  },
  aiAlertExplain: {
    method: "GET",
    path: "/c/v1/ai/alerts/{alertId}/explain",
    title: "AI 告警解释",
    purpose: "获取告警的 AI 解释和建议。",
    repository: "AiRepository.aiAlertExplain -> RemoteAiRepository.aiAlertExplain",
    dto: "AiAlertExplainDto",
    source: "AiApiService.kt",
  },
  aiInsights: {
    method: "GET",
    path: "/c/v1/ai/insights",
    title: "首页 AI 洞察",
    purpose: "获取首页或 AI 页使用的风险洞察和建议。",
    repository: "AiRepository.homeInsights -> RemoteAiRepository.homeInsights",
    dto: "List<AiInsightDto>",
    source: "AiApiService.kt",
  },
  aiAnswer: {
    method: "POST",
    path: "/c/v1/ai/answer",
    title: "AI 客服问答",
    purpose: "提交问题和上下文，返回 AI 问答结果。",
    repository: "AiRepository.aiAnswer -> RemoteAiRepository.aiAnswer",
    dto: "AiAnswerRequestDto / AiAnswerResponseDto",
    source: "AiApiService.kt",
  },
  knowledgeList: {
    method: "GET",
    path: "/c/v1/knowledge",
    title: "知识库列表",
    purpose: "读取帮助中心和客服可用知识库条目。",
    repository: "KnowledgeRepository.listKnowledge -> RemoteKnowledgeRepository.listKnowledge",
    dto: "List<KnowledgeItemDto>",
    source: "KnowledgeApiService.kt",
  },
  knowledgeDetail: {
    method: "GET",
    path: "/c/v1/knowledge/{id}",
    title: "知识库详情",
    purpose: "读取单条帮助内容详情。",
    repository: "KnowledgeRepository.knowledgeById -> RemoteKnowledgeRepository.knowledgeById",
    dto: "KnowledgeItemDto",
    source: "KnowledgeApiService.kt",
  },
  knowledgeSearch: {
    method: "GET",
    path: "/c/v1/knowledge/search?q=",
    title: "知识库搜索",
    purpose: "按关键词搜索帮助内容。",
    repository: "KnowledgeRepository.searchKnowledge -> RemoteKnowledgeRepository.searchKnowledge",
    dto: "List<KnowledgeItemDto>",
    source: "KnowledgeApiService.kt",
  },
  quickQuestions: {
    method: "GET",
    path: "/c/v1/knowledge/quick-questions",
    title: "快捷问题",
    purpose: "获取 AI 客服预置问题。",
    repository: "KnowledgeRepository.quickQuestions -> RemoteKnowledgeRepository.quickQuestions",
    dto: "List<QuickQuestionDto>",
    source: "KnowledgeApiService.kt",
  },
  pushRegister: {
    method: "POST",
    path: "/c/v1/push/register-token",
    title: "注册推送 Token",
    purpose: "把 FCM/HMS/厂商推送 token 同步给服务端。",
    repository: "PushRepository.registerToken -> RemotePushRepository.registerToken",
    dto: "RegisterPushTokenRequestDto / RegisterPushTokenResponseDto",
    source: "PushApiService.kt",
  },
  pushUnregister: {
    method: "DELETE",
    path: "/c/v1/push/register-token?installation_id=&provider_id=",
    title: "注销推送 Token",
    purpose: "退出登录、账号切换或 token 失效时注销推送 token。",
    repository: "PushRepository.unregisterToken -> RemotePushRepository.unregisterToken",
    dto: "UnregisterPushTokenResponseDto",
    source: "PushApiService.kt",
  },
};

const apiDtoMap = {
  authLogin: { request: ["LoginRequestDto"], response: ["LoginResponseDto", "UserDto", "TokenDto"] },
  authLogout: { response: ["ApiResponse<Unit>"] },
  devicesList: { response: ["DeviceDto", "DeviceStateDto", "LocationDto", "DeviceBleIdentityDto"] },
  deviceDetail: { response: ["DeviceDto", "DeviceStateDto", "LocationDto", "DeviceBleIdentityDto"] },
  productManifest: { response: ["ProductManifestDto"] },
  panelManifest: { response: ["PanelManifestDto", "PanelTabDto"] },
  tenantTheme: { response: ["BrandThemeDto", "H5EntryDto"] },
  track: { response: ["TrackDto", "TrackPointDto", "LatLngDto"] },
  locationRefresh: { request: ["LocationRefreshRequestDto"], response: ["LocationRefreshDto", "LatLngDto"] },
  geofencesList: { response: ["GeofenceDto", "LatLngDto"] },
  placesSearch: { response: ["PlaceSearchResultDto", "LatLngDto"] },
  geofenceUpsert: { request: ["GeofenceDto", "LatLngDto"], response: ["GeofenceDto", "LatLngDto"] },
  geofenceDelete: { response: ["ApiResponse<Unit>"] },
  alertsList: { response: ["AlertDto", "LatLngDto"] },
  deviceAlerts: { response: ["AlertDto", "LatLngDto"] },
  alertDetail: { response: ["AlertDto", "LatLngDto"] },
  alertUnreadCount: { response: ["UnreadAlertCountDto"] },
  healthSummary: { response: ["HealthSummaryDto", "HealthMetricDto", "HealthScoreDto"] },
  healthChart: { response: ["ChartDataPointDto"] },
  sharesList: { response: ["ShareDto"] },
  shareCreate: { request: ["CreateShareRequestDto"], response: ["ShareDto"] },
  deviceBindDetect: { request: ["DetectDeviceRequestDto", "DeviceBindBleIdentityDto"], response: ["AddDeviceCandidateDto", "ProductManifestDto", "PanelManifestDto", "PanelTabDto", "DeviceBindBleIdentityDto"] },
  deviceBindPreparePanel: { response: ["AddDeviceCandidateDto", "ProductManifestDto", "PanelManifestDto", "PanelTabDto", "DeviceBindBleIdentityDto"] },
  deviceBindBind: { response: ["BoundDevicePreviewDto", "DeviceBindBleIdentityDto"] },
  deviceBindPreviews: { response: ["BoundDevicePreviewDto", "DeviceBindBleIdentityDto"] },
  aiHealthAnalysis: { response: ["AiHealthAnalysisDto"] },
  aiAlertExplain: { response: ["AiAlertExplainDto"] },
  aiInsights: { response: ["AiInsightDto"] },
  aiAnswer: { request: ["AiAnswerRequestDto"], response: ["AiAnswerResponseDto"] },
  knowledgeList: { response: ["KnowledgeItemDto"] },
  knowledgeDetail: { response: ["KnowledgeItemDto"] },
  knowledgeSearch: { response: ["KnowledgeItemDto"] },
  quickQuestions: { response: ["QuickQuestionDto"] },
  pushRegister: { request: ["RegisterPushTokenRequestDto"], response: ["RegisterPushTokenResponseDto"] },
  pushUnregister: { response: ["UnregisterPushTokenResponseDto"] },
};

const suggestedDtoCatalog = {
  TokenRefreshRequestDto: dto("建议 DTO（UI 需求，代码未实现）", "refresh_token:refreshToken:String; client_type:clientType:String = \"android\""),
  TokenRefreshResponseDto: dto("建议 DTO（UI 需求，代码未实现）", "token:token:TokenDto; user:user:UserDto? = null"),
  ThirdPartyLoginStartRequestDto: dto("建议 DTO（UI 需求，代码未实现）", "provider:provider:String; redirect_uri:redirectUri:String? = null; locale:locale:String? = null; device_id:deviceId:String? = null"),
  ThirdPartyLoginStartResponseDto: dto("建议 DTO（UI 需求，代码未实现）", "provider:provider:String; auth_url:authUrl:String?; state:state:String; nonce:nonce:String?; expires_at_ms:expiresAtMs:Long"),
  ThirdPartyLoginCompleteRequestDto: dto("建议 DTO（UI 需求，代码未实现）", "provider:provider:String; code:code:String? = null; state:state:String? = null; id_token:idToken:String? = null; access_token:accessToken:String? = null"),
  PasswordResetStartRequestDto: dto("建议 DTO（UI 需求，代码未实现）", "account:account:String; channel:channel:String = \"email_or_sms\"; locale:locale:String? = null"),
  PasswordResetStartResponseDto: dto("建议 DTO（UI 需求，代码未实现）", "reset_id:resetId:String; masked_target:maskedTarget:String; expires_at_ms:expiresAtMs:Long"),
  PasswordResetConfirmRequestDto: dto("建议 DTO（UI 需求，代码未实现）", "reset_id:resetId:String; verify_code:verifyCode:String; new_password:newPassword:String"),
  AgreementVersionDto: dto("建议 DTO（UI 需求，代码未实现）", "key:key:String; title:title:String; version:version:String; url:url:String; required:required:Boolean; updated_ms:updatedMs:Long"),
  AgreementContentDto: dto("建议 DTO（UI 需求，代码未实现）", "key:key:String; title:title:String; version:version:String; content_html:contentHtml:String; updated_ms:updatedMs:Long"),
  UserProfileDto: dto("建议 DTO（UI 需求，代码未实现）", "id:id:String; display_name:displayName:String; email:email:String?; phone:phone:String?; avatar_url:avatarUrl:String?; region:region:String; locale:locale:String"),
  UserProfileUpdateRequestDto: dto("建议 DTO（UI 需求，代码未实现）", "display_name:displayName:String? = null; email:email:String? = null; phone:phone:String? = null; region:region:String? = null; avatar_url:avatarUrl:String? = null"),
  PasswordChangeRequestDto: dto("建议 DTO（UI 需求，代码未实现）", "old_password:oldPassword:String? = null; verify_code:verifyCode:String? = null; new_password:newPassword:String"),
  LoginDeviceDto: dto("建议 DTO（UI 需求，代码未实现）", "id:id:String; device_name:deviceName:String; platform:platform:String; last_login_ms:lastLoginMs:Long; location:location:String?; current:current:Boolean"),
  OAuthBindingRequestDto: dto("建议 DTO（UI 需求，代码未实现）", "provider:provider:String; code:code:String? = null; state:state:String? = null; id_token:idToken:String? = null"),
  OAuthBindingDto: dto("建议 DTO（UI 需求，代码未实现）", "provider:provider:String; bound:bound:Boolean; account_label:accountLabel:String?; bound_at_ms:boundAtMs:Long?"),
  AccountDeleteRequestDto: dto("建议 DTO（UI 需求，代码未实现）", "reason:reason:String? = null; verify_code:verifyCode:String? = null; confirm_devices:confirmDevices:Boolean; confirm_data_policy:confirmDataPolicy:Boolean"),
  NotificationPreferenceDto: dto("建议 DTO（UI 需求，代码未实现）", "channel:channel:String; enabled:enabled:Boolean; quiet_start:quietStart:String? = null; quiet_end:quietEnd:String? = null; severity_min:severityMin:String? = null"),
  NotificationPreferenceSaveRequestDto: dto("建议 DTO（UI 需求，代码未实现）", "preferences:preferences:List<NotificationPreferenceDto>; quiet_hours:quietHours:String? = null"),
  MapPreferenceDto: dto("建议 DTO（UI 需求，代码未实现）", "region:region:String; provider:provider:String; location_permission:locationPermission:String; coordinate_system:coordinateSystem:String? = null"),
  AppVersionCheckDto: dto("建议 DTO（UI 需求，代码未实现）", "latest_version:latestVersion:String; min_supported_version:minSupportedVersion:String; force_update:forceUpdate:Boolean; release_notes:releaseNotes:String; download_url:downloadUrl:String?"),
  FeedbackRequestDto: dto("建议 DTO（UI 需求，代码未实现）", "type:type:String; content:content:String; device_id:deviceId:String? = null; attachments:attachments:List<String> = emptyList()"),
  SupportTicketDto: dto("建议 DTO（UI 需求，代码未实现）", "ticket_id:ticketId:String; status:status:String; created_ms:createdMs:Long; reply_channel:replyChannel:String"),
  ServiceSubscriptionDto: dto("建议 DTO（UI 需求，代码未实现）", "id:id:String; device_id:deviceId:String; device_name:deviceName:String; plan_id:planId:String; plan_name:planName:String; status:status:String; expire_at_ms:expireAtMs:Long; remaining:remaining:String"),
  ServicePlanDto: dto("建议 DTO（UI 需求，代码未实现）", "id:id:String; name:name:String; price_cents:priceCents:Long; currency:currency:String; duration_days:durationDays:Int; features:features:List<String>"),
  RenewSubscriptionRequestDto: dto("建议 DTO（UI 需求，代码未实现）", "plan_id:planId:String; payment_method_id:paymentMethodId:String? = null; auto_renew:autoRenew:Boolean = false"),
  PaymentMethodDto: dto("建议 DTO（UI 需求，代码未实现）", "id:id:String; type:type:String; display_name:displayName:String; default:default:Boolean; available:available:Boolean"),
  InvoiceDto: dto("建议 DTO（UI 需求，代码未实现）", "id:id:String; order_id:orderId:String; title:title:String; amount_cents:amountCents:Long; status:status:String; download_url:downloadUrl:String?"),
  NotificationItemDto: dto("建议 DTO（UI 需求，代码未实现）", "id:id:String; type:type:String; title:title:String; body:body:String; status:status:String; timestamp_ms:timestampMs:Long; related_id:relatedId:String? = null"),
  MessageReadRequestDto: dto("建议 DTO（UI 需求，代码未实现）", "message_ids:messageIds:List<String>; read_at_ms:readAtMs:Long"),
  ShareInvitationActionRequestDto: dto("建议 DTO（UI 需求，代码未实现）", "action:action:String; note:note:String? = null"),
  SharePermissionUpdateRequestDto: dto("建议 DTO（UI 需求，代码未实现）", "permission:permission:String"),
  AlertActionRequestDto: dto("建议 DTO（UI 需求，代码未实现）", "status:status:String; note:note:String? = null; handled_at_ms:handledAtMs:Long? = null"),
  AlertFeedbackRequestDto: dto("建议 DTO（UI 需求，代码未实现）", "feedback:feedback:String; reason:reason:String? = null; corrected_status:correctedStatus:String? = null"),
  DeviceEventDto: dto("建议 DTO（UI 需求，代码未实现）", "id:id:String; device_id:deviceId:String; type:type:String; title:title:String; description:description:String; timestamp_ms:timestampMs:Long; severity:severity:String? = null"),
  LatestDeviceLocationDto: dto("建议 DTO（UI 需求，代码未实现）", "device_id:deviceId:String; device_name:deviceName:String; location:location:LatLngDto; locate_method:locateMethod:String; online:online:Boolean; timestamp_ms:timestampMs:Long"),
  DeviceProfileUpdateRequestDto: dto("建议 DTO（UI 需求，代码未实现）", "name:name:String? = null; nickname:nickname:String? = null; avatar_url:avatarUrl:String? = null; remark:remark:String? = null"),
  EmergencyContactDto: dto("建议 DTO（UI 需求，代码未实现）", "id:id:String? = null; name:name:String; relation:relation:String; phone:phone:String; priority:priority:Int; scenarios:scenarios:List<String>"),
  DeviceUnbindRequestDto: dto("建议 DTO（UI 需求，代码未实现）", "verify_code:verifyCode:String? = null; keep_history:keepHistory:Boolean; reason:reason:String? = null"),
  DeviceCommandRequestDto: dto("建议 DTO（UI 需求，代码未实现）", "command:command:String; channel:channel:String = \"api\"; payload:payload:Map<String, String> = emptyMap()"),
  DeviceCommandResponseDto: dto("建议 DTO（UI 需求，代码未实现）", "command_id:commandId:String; status:status:String; channel:channel:String; message:message:String? = null"),
  DeviceConfigDto: dto("建议 DTO（UI 需求，代码未实现）", "category:category:String; values:values:Map<String, String>; version:version:String? = null; updated_ms:updatedMs:Long? = null"),
  DeviceConfigSaveRequestDto: dto("建议 DTO（UI 需求，代码未实现）", "category:category:String; values:values:Map<String, String>; channel:channel:String = \"api\""),
  DeviceConfigOperationDto: dto("建议 DTO（UI 需求，代码未实现）", "operation_id:operationId:String; status:status:String; category:category:String; device_ack_ms:deviceAckMs:Long? = null; message:message:String? = null"),
  FirmwareVersionDto: dto("建议 DTO（UI 需求，代码未实现）", "current_version:currentVersion:String; latest_version:latestVersion:String; upgrade_available:upgradeAvailable:Boolean; size_bytes:sizeBytes:Long? = null; release_notes:releaseNotes:String? = null"),
  FirmwareUpgradeRequestDto: dto("建议 DTO（UI 需求，代码未实现）", "target_version:targetVersion:String; channel:channel:String = \"api_or_ble\"; force:force:Boolean = false"),
  H5SessionRequestDto: dto("建议 DTO（UI 需求，代码未实现）", "entry_key:entryKey:String; device_id:deviceId:String? = null; redirect_url:redirectUrl:String? = null"),
  H5SessionDto: dto("建议 DTO（UI 需求，代码未实现）", "url:url:String; token:token:String; expires_at_ms:expiresAtMs:Long"),
  AiStreamRequestDto: dto("建议 DTO（UI 需求，代码未实现）", "question:question:String; conversation_id:conversationId:String? = null; device_id:deviceId:String? = null; alert_id:alertId:String? = null"),
  AiStreamChunkDto: dto("建议 DTO（UI 需求，代码未实现）", "conversation_id:conversationId:String; chunk:chunk:String; done:done:Boolean; trace_id:traceId:String? = null"),
  PetProfileUpdateRequestDto: dto("建议 DTO（UI 需求，代码未实现）", "name:name:String? = null; breed:breed:String? = null; birthday:birthday:String? = null; weight_kg:weightKg:Double? = null; vaccine_notes:vaccineNotes:String? = null"),
  PetProfileDto: dto("建议 DTO（UI 需求，代码未实现）", "device_id:deviceId:String; name:name:String; breed:breed:String?; birthday:birthday:String?; weight_kg:weightKg:Double?; vaccine_notes:vaccineNotes:String?"),
};

Object.entries(suggestedDtoCatalog).forEach(([name, schema]) => {
  schema.name = schema.name || name;
});

const suggestedApiCatalog = {
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

  authRefresh: {
    method: "POST",
    path: "/c/v1/auth/refresh",
    title: "刷新登录态",
    purpose: "登录返回了 refresh_token，正式 App 需要在 access token 过期时续期。",
    uiEvidence: "登录后所有页面都依赖登录态；当前 LoginResponseDto.TokenDto 已包含 refresh_token。",
    currentStatus: "AuthApiService.kt 未定义 refresh 接口。",
    dto: "TokenRefreshRequestDto / TokenRefreshResponseDto",
  },
  oauthStart: {
    method: "POST",
    path: "/c/v1/auth/oauth/{provider}/start",
    title: "第三方登录发起",
    purpose: "登录页有微信、Apple、Google 入口，需要服务端生成 state、nonce 或授权跳转信息。",
    uiEvidence: "renderLogin() 渲染第三方登录卡片，data-action=\"toast-oauth\"。",
    currentStatus: "AuthApiService.kt 未定义微信、Apple、Google OAuth 登录接口。",
    dto: "ThirdPartyLoginStartRequestDto / ThirdPartyLoginStartResponseDto",
  },
  oauthComplete: {
    method: "POST",
    path: "/c/v1/auth/oauth/{provider}/complete",
    title: "第三方登录换取账号登录态",
    purpose: "客户端拿到 SDK 授权结果后交给后端校验，并返回 Evmars 用户与 token。",
    uiEvidence: "toast-oauth 提示“调起 SDK 授权 → 绑定到 Evmars 账号”。",
    currentStatus: "AuthApiService.kt 只有账号密码登录，没有 OAuth complete。",
    dto: "ThirdPartyLoginCompleteRequestDto / LoginResponseDto",
  },
  passwordResetStart: {
    method: "POST",
    path: "/c/v1/auth/password/reset/start",
    title: "找回密码发起",
    purpose: "忘记密码入口需要发送邮箱或手机号验证码。",
    uiEvidence: "登录页 data-action=\"toast-forgot-password\"。",
    currentStatus: "AuthApiService.kt 未定义找回密码接口。",
    dto: "PasswordResetStartRequestDto / PasswordResetStartResponseDto",
  },
  passwordResetConfirm: {
    method: "POST",
    path: "/c/v1/auth/password/reset/confirm",
    title: "找回密码确认",
    purpose: "校验验证码并提交新密码。",
    uiEvidence: "toast-forgot-password 提示“通过邮箱或手机号验证码重置”。",
    currentStatus: "AuthApiService.kt 未定义重置确认接口。",
    dto: "PasswordResetConfirmRequestDto",
  },
  agreementVersions: {
    method: "GET",
    path: "/c/v1/legal/agreements/versions",
    title: "协议版本清单",
    purpose: "登录页与关于页需要展示用户协议、隐私政策、权限说明的当前版本。",
    uiEvidence: "登录页协议与隐私入口；关于与协议设置页。",
    currentStatus: "core:remote 未见 legal/agreement Service。",
    dto: "List<AgreementVersionDto>",
  },
  agreementContent: {
    method: "GET",
    path: "/c/v1/legal/agreements/{key}",
    title: "协议或隐私政策详情",
    purpose: "打开用户协议、隐私政策、权限说明的正文内容。",
    uiEvidence: "open-h5、toast-policy、关于与协议页都需要正文内容。",
    currentStatus: "KnowledgeApiService 可读知识库，但没有独立协议详情接口。",
    dto: "AgreementContentDto",
  },
  userProfile: {
    method: "GET",
    path: "/c/v1/account/profile",
    title: "读取账号资料",
    purpose: "账号资料设置页需要读取昵称、邮箱、手机号和地区。",
    uiEvidence: "renderProfileSettings() 展示昵称、邮箱、手机号、国家/地区。",
    currentStatus: "core:remote 未见 Account/Profile Service。",
    dto: "UserProfileDto",
  },
  userProfileUpdate: {
    method: "PATCH",
    path: "/c/v1/account/profile",
    title: "保存账号资料",
    purpose: "保存账号资料设置页的编辑结果。",
    uiEvidence: "renderProfileSettings() 的“保存资料”按钮。",
    currentStatus: "core:remote 未见用户资料更新接口。",
    dto: "UserProfileUpdateRequestDto / UserProfileDto",
  },
  passwordChange: {
    method: "POST",
    path: "/c/v1/account/password/change",
    title: "修改密码",
    purpose: "账号安全页需要通过旧密码或验证码修改密码。",
    uiEvidence: "renderSecuritySettings() 的“修改密码”。",
    currentStatus: "core:remote 未见修改密码接口。",
    dto: "PasswordChangeRequestDto",
  },
  loginDevices: {
    method: "GET",
    path: "/c/v1/account/login-devices",
    title: "登录设备列表",
    purpose: "展示最近登录设备并支持异常退出。",
    uiEvidence: "renderSecuritySettings() 的“登录设备”。",
    currentStatus: "core:remote 未见登录设备接口。",
    dto: "List<LoginDeviceDto>",
  },
  oauthBind: {
    method: "POST",
    path: "/c/v1/account/oauth/{provider}/bind",
    title: "绑定第三方账号",
    purpose: "账号安全页的第三方账号绑定需要将 OAuth 授权绑定到当前用户。",
    uiEvidence: "renderSecuritySettings() 渲染第三方账号绑定列表。",
    currentStatus: "core:remote 未见第三方账号绑定接口。",
    dto: "OAuthBindingRequestDto / OAuthBindingDto",
  },
  oauthUnbind: {
    method: "DELETE",
    path: "/c/v1/account/oauth/{provider}",
    title: "解绑第三方账号",
    purpose: "已绑定第三方账号需要支持解绑，并校验账号回退登录方式。",
    uiEvidence: "toast-oauth-bind 提示“解绑前确认账号回退方式”。",
    currentStatus: "core:remote 未见第三方账号解绑接口。",
    dto: "OAuthBindingDto",
  },
  accountDeleteRequest: {
    method: "POST",
    path: "/c/v1/account/delete-request",
    title: "申请注销账号",
    purpose: "账号注销需要确认设备、分享和数据处理策略。",
    uiEvidence: "renderSecuritySettings() 的“申请注销”。",
    currentStatus: "core:remote 未见账号注销接口。",
    dto: "AccountDeleteRequestDto",
  },
  notificationPrefs: {
    method: "GET",
    path: "/c/v1/account/notification-preferences",
    title: "读取通知偏好",
    purpose: "通知设置页需要读取各类告警、系统通知和免打扰时段。",
    uiEvidence: "renderNotificationSettings() 的通知开关与免打扰时段。",
    currentStatus: "PushApiService 只有 token 注册/注销，没有偏好接口。",
    dto: "List<NotificationPreferenceDto>",
  },
  notificationPrefsUpdate: {
    method: "PUT",
    path: "/c/v1/account/notification-preferences",
    title: "保存通知偏好",
    purpose: "保存用户对通知类型和免打扰时段的设置。",
    uiEvidence: "renderNotificationSettings() 的“保存通知设置”。",
    currentStatus: "core:remote 未见通知偏好保存接口。",
    dto: "NotificationPreferenceSaveRequestDto / List<NotificationPreferenceDto>",
  },
  mapPreferenceUpdate: {
    method: "PUT",
    path: "/c/v1/account/map-preferences",
    title: "保存地区与地图偏好",
    purpose: "同步用户选择的地区、地图服务和定位权限偏好。",
    uiEvidence: "renderMapSettings() 的地区、地图服务、定位权限。",
    currentStatus: "当前地图 provider 选择更像本地偏好 + SDK 适配，core:remote 未见保存接口。",
    dto: "MapPreferenceDto",
  },
  appVersionCheck: {
    method: "GET",
    path: "/c/v1/app/version?platform=android&version=",
    title: "App 版本检查",
    purpose: "关于页需要检查当前 App 是否为最新版本。",
    uiEvidence: "renderAboutSettings() 的“版本检查”。",
    currentStatus: "core:remote 未见版本检查接口。",
    dto: "AppVersionCheckDto",
  },
  feedbackSubmit: {
    method: "POST",
    path: "/c/v1/support/feedback",
    title: "提交意见反馈",
    purpose: "意见反馈页需要把问题类型、描述和设备上下文提交给客服侧。",
    uiEvidence: "renderFeedbackSettings() 的“提交反馈”。",
    currentStatus: "core:remote 未见反馈或工单接口。",
    dto: "FeedbackRequestDto / SupportTicketDto",
  },
  serviceSubscriptions: {
    method: "GET",
    path: "/c/v1/services/subscriptions",
    title: "套餐订阅列表",
    purpose: "我的服务页需要展示每台设备 SIM 套餐、有效期和流量状态。",
    uiEvidence: "renderServiceSettings() 的“套餐订阅”。",
    currentStatus: "core:remote 未见 services/billing Service。",
    dto: "List<ServiceSubscriptionDto>",
  },
  servicePlans: {
    method: "GET",
    path: "/c/v1/services/plans",
    title: "可选套餐列表",
    purpose: "续费和更换套餐前需要展示可购买套餐。",
    uiEvidence: "toast-change-plan 提示“套餐目录”。",
    currentStatus: "core:remote 未见套餐目录接口。",
    dto: "List<ServicePlanDto>",
  },
  subscriptionRenew: {
    method: "POST",
    path: "/c/v1/services/subscriptions/{subscriptionId}/renew",
    title: "续费或更换套餐",
    purpose: "创建续费订单并关联支付方式。",
    uiEvidence: "renderServiceSettings() 的“续费”“更换套餐”。",
    currentStatus: "core:remote 未见续费接口。",
    dto: "RenewSubscriptionRequestDto",
  },
  paymentMethods: {
    method: "GET",
    path: "/c/v1/payments/methods",
    title: "支付方式列表",
    purpose: "展示微信、支付宝、Stripe、PayPal 等支付方式可用状态。",
    uiEvidence: "toast-payment-method 提示支付方式。",
    currentStatus: "core:remote 未见支付方式接口。",
    dto: "List<PaymentMethodDto>",
  },
  invoices: {
    method: "GET",
    path: "/c/v1/billing/invoices",
    title: "发票列表",
    purpose: "发票管理需要展示历史发票并支持下载。",
    uiEvidence: "renderServiceSettings() 的“发票管理”。",
    currentStatus: "core:remote 未见发票接口。",
    dto: "List<InvoiceDto>",
  },
  notificationsList: {
    method: "GET",
    path: "/c/v1/notifications",
    title: "系统通知列表",
    purpose: "消息页除告警外还需要系统通知和分享邀请消息。",
    uiEvidence: "renderMessagesTab() 展示系统通知和分享邀请。",
    currentStatus: "AlertApiService 只覆盖告警，core:remote 未见通知分页接口。",
    dto: "List<NotificationItemDto>",
  },
  messageMarkRead: {
    method: "POST",
    path: "/c/v1/messages/read",
    title: "标记消息已读",
    purpose: "消息页需要把系统通知或邀请消息标为已读。",
    uiEvidence: "消息页 data-action=\"mark-read\"。",
    currentStatus: "core:remote 未见消息已读接口。",
    dto: "MessageReadRequestDto",
  },
  shareInvitationAction: {
    method: "POST",
    path: "/c/v1/shares/invitations/{invitationId}/action",
    title: "处理分享邀请",
    purpose: "接受或拒绝别人分享给我的设备。",
    uiEvidence: "消息页 data-action=\"accept-share\" / \"reject-share\"。",
    currentStatus: "ShareApiService 只有 sharesOf/createShare。",
    dto: "ShareInvitationActionRequestDto / ShareDto",
  },
  shareUpdate: {
    method: "PATCH",
    path: "/c/v1/devices/{deviceId}/shares/{shareId}",
    title: "修改分享权限",
    purpose: "设备分享弹窗需要调整已分享用户的权限。",
    uiEvidence: "renderShareModal() 有权限选择和更新提示。",
    currentStatus: "ShareApiService 未定义 update permission。",
    dto: "SharePermissionUpdateRequestDto / ShareDto",
  },
  shareRevoke: {
    method: "DELETE",
    path: "/c/v1/devices/{deviceId}/shares/{shareId}",
    title: "取消设备分享",
    purpose: "撤销已分享用户的设备访问权限。",
    uiEvidence: "设备分享弹窗 data-action=\"revoke-share\"。",
    currentStatus: "ShareApiService 未定义 revoke。",
    dto: "ApiResponse<Unit>",
  },
  shareResend: {
    method: "POST",
    path: "/c/v1/devices/{deviceId}/shares/{shareId}/resend",
    title: "重发分享邀请",
    purpose: "重新发送未接受的分享邀请。",
    uiEvidence: "设备分享弹窗 data-action=\"resend-share\"。",
    currentStatus: "ShareApiService 未定义 resend。",
    dto: "ShareDto",
  },
  recentEvents: {
    method: "GET",
    path: "/c/v1/devices/{deviceId}/events/recent",
    title: "设备最近事件",
    purpose: "概览页需要聚合告警、状态变化和健康异常作为最近事件。",
    uiEvidence: "设备概览页展示最近事件时间线。",
    currentStatus: "当前代码没有独立最近事件 Service。",
    dto: "List<DeviceEventDto>",
  },
  deviceLatestLocations: {
    method: "GET",
    path: "/c/v1/devices/locations/latest",
    title: "全部设备最新位置",
    purpose: "地图总览可以一次性刷新全部设备的位置点。",
    uiEvidence: "地图首页展示多设备位置和状态。",
    currentStatus: "当前最新位置随 DeviceDto 返回，未见独立批量位置接口。",
    dto: "List<LatestDeviceLocationDto>",
  },
  alertMarkRead: {
    method: "POST",
    path: "/c/v1/alerts/{alertId}/read",
    title: "标记告警已读",
    purpose: "告警页需要区分未读和已读，并同步消息角标。",
    uiEvidence: "消息页和告警页都有已读诉求。",
    currentStatus: "AlertApiService 未定义 mark-read。",
    dto: "AlertActionRequestDto",
  },
  alertAck: {
    method: "POST",
    path: "/c/v1/alerts/{alertId}/ack",
    title: "确认或处理告警",
    purpose: "告警处理后需要提交确认、忽略或处理结果。",
    uiEvidence: "告警页需求说明包含已处理和处理结果。",
    currentStatus: "AlertApiService 未定义 ack/ignore。",
    dto: "AlertActionRequestDto / AlertDto",
  },
  alertFeedback: {
    method: "POST",
    path: "/c/v1/alerts/{alertId}/feedback",
    title: "告警误报反馈",
    purpose: "用户可以反馈误报或修正处理结果，供规则和 AI 改进。",
    uiEvidence: "告警缺口说明包含误报反馈。",
    currentStatus: "AlertApiService 未定义 feedback。",
    dto: "AlertFeedbackRequestDto / AlertDto",
  },
  deviceProfileUpdate: {
    method: "PATCH",
    path: "/c/v1/devices/{deviceId}",
    title: "编辑设备资料",
    purpose: "设备管理弹窗需要保存设备名称、使用者、备注等。",
    uiEvidence: "renderEditDeviceModal() 的“保存设备”。",
    currentStatus: "DeviceApiService 只有列表和详情，没有写接口。",
    dto: "DeviceProfileUpdateRequestDto / DeviceDto",
  },
  emergencyContactsSave: {
    method: "PUT",
    path: "/c/v1/devices/{deviceId}/emergency-contacts",
    title: "保存紧急联系人",
    purpose: "设备管理弹窗需要维护紧急联系人及触发场景。",
    uiEvidence: "renderEditDeviceModal() 展示紧急联系人能力。",
    currentStatus: "DeviceApiService 未见 emergency contacts 接口。",
    dto: "List<EmergencyContactDto>",
  },
  deviceUnbind: {
    method: "POST",
    path: "/c/v1/devices/{deviceId}/unbind",
    title: "解绑设备",
    purpose: "拥有者可以解绑设备，正式版需要二次确认和数据保留策略。",
    uiEvidence: "renderEditDeviceModal() 的“解绑设备”。",
    currentStatus: "DeviceApiService 未见解绑接口。",
    dto: "DeviceUnbindRequestDto",
  },
  deviceCommand: {
    method: "POST",
    path: "/c/v1/devices/{deviceId}/commands",
    title: "设备指令下发",
    purpose: "查找设备、响铃、远程同步等动作需要指令下发。",
    uiEvidence: "设备详情 data-action=\"toast-find\"、toast-channel。",
    currentStatus: "core:remote 未见通用设备命令接口；部分配置更偏 BLE/协议边界。",
    dto: "DeviceCommandRequestDto / DeviceCommandResponseDto",
  },
  deviceConfigRead: {
    method: "GET",
    path: "/c/v1/devices/{deviceId}/config",
    title: "读取设备配置",
    purpose: "配置页打开分类时需要读取当前参数。",
    uiEvidence: "配置分类弹窗包含 WiFi、定位、告警、传感器、网络与 SIM 等字段。",
    currentStatus: "core:remote 未见设备配置读取接口。",
    dto: "List<DeviceConfigDto>",
  },
  deviceConfigSave: {
    method: "PUT",
    path: "/c/v1/devices/{deviceId}/config",
    title: "保存并下发设备配置",
    purpose: "保存配置后等待设备确认下发结果。",
    uiEvidence: "save-config 提示“等待设备确认下发结果”。",
    currentStatus: "core:remote 未见配置保存/下发接口；需要继续核对 core:device-config、core:protocol、core:ble。",
    dto: "DeviceConfigSaveRequestDto / DeviceConfigOperationDto",
  },
  configOperationStatus: {
    method: "GET",
    path: "/c/v1/devices/{deviceId}/config-operations/{operationId}",
    title: "配置下发状态",
    purpose: "保存配置后轮询设备确认、失败原因或超时状态。",
    uiEvidence: "配置保存 Toast 已强调“等待设备确认”。",
    currentStatus: "core:remote 未见配置操作状态接口。",
    dto: "DeviceConfigOperationDto",
  },
  otaCheck: {
    method: "GET",
    path: "/c/v1/devices/{deviceId}/firmware/check",
    title: "检查 OTA 固件",
    purpose: "BLE/配置页需要检查设备固件版本是否可升级。",
    uiEvidence: "配置 BLE 分类 data-action=\"ota-check\"。",
    currentStatus: "core:remote 未见 OTA HTTP 接口。",
    dto: "FirmwareVersionDto",
  },
  otaStart: {
    method: "POST",
    path: "/c/v1/devices/{deviceId}/firmware/upgrade",
    title: "发起 OTA 升级",
    purpose: "有新固件时发起升级任务，通道可能是 API、BLE 或组合。",
    uiEvidence: "配置页 BLE 分类预留 OTA 固件检查。",
    currentStatus: "core:remote 未见 OTA 发起接口。",
    dto: "FirmwareUpgradeRequestDto / DeviceConfigOperationDto",
  },
  h5Session: {
    method: "POST",
    path: "/c/v1/h5/session",
    title: "H5 登录态交换",
    purpose: "帮助中心、协议页或设备说明 H5 需要安全拿到一次性登录态和上下文。",
    uiEvidence: "renderH5Modal() 模拟在线 H5 帮助中心。",
    currentStatus: "core:remote 未见 H5 session 交换接口。",
    dto: "H5SessionRequestDto / H5SessionDto",
  },
  aiSupportStream: {
    method: "POST",
    path: "/c/v1/ai/answer/stream",
    title: "AI 客服流式问答",
    purpose: "正式客服聊天如果要边生成边展示，需要服务端 SSE 或等价流式接口。",
    uiEvidence: "ChatRepository.askStream 目前是本地 chunk 模拟；聊天弹窗有连续对话体验。",
    currentStatus: "AiApiService.kt 只有 /c/v1/ai/answer。",
    dto: "AiStreamRequestDto / AiStreamChunkDto",
  },
  petProfileUpdate: {
    method: "PATCH",
    path: "/c/v1/devices/{deviceId}/pet-profile",
    title: "保存宠物档案",
    purpose: "宠物设备需要保存品种、生日、体重、疫苗记录等档案。",
    uiEvidence: "健康页 data-action=\"toast-pet-edit\"。",
    currentStatus: "core:remote 未见宠物档案接口。",
    dto: "PetProfileUpdateRequestDto / PetProfileDto",
  },
};

const suggestedApiDtoMap = {
  authRefresh: { request: ["TokenRefreshRequestDto"], response: ["TokenRefreshResponseDto", "TokenDto", "UserDto"] },
  oauthStart: { request: ["ThirdPartyLoginStartRequestDto"], response: ["ThirdPartyLoginStartResponseDto"] },
  oauthComplete: { request: ["ThirdPartyLoginCompleteRequestDto"], response: ["LoginResponseDto", "UserDto", "TokenDto"] },
  passwordResetStart: { request: ["PasswordResetStartRequestDto"], response: ["PasswordResetStartResponseDto"] },
  passwordResetConfirm: { request: ["PasswordResetConfirmRequestDto"], response: ["ApiResponse<Unit>"] },
  agreementVersions: { response: ["AgreementVersionDto"] },
  agreementContent: { response: ["AgreementContentDto"] },
  userProfile: { response: ["UserProfileDto"] },
  userProfileUpdate: { request: ["UserProfileUpdateRequestDto"], response: ["UserProfileDto"] },
  passwordChange: { request: ["PasswordChangeRequestDto"], response: ["ApiResponse<Unit>"] },
  loginDevices: { response: ["LoginDeviceDto"] },
  oauthBind: { request: ["OAuthBindingRequestDto"], response: ["OAuthBindingDto"] },
  oauthUnbind: { response: ["OAuthBindingDto"] },
  accountDeleteRequest: { request: ["AccountDeleteRequestDto"], response: ["ApiResponse<Unit>"] },
  notificationPrefs: { response: ["NotificationPreferenceDto"] },
  notificationPrefsUpdate: { request: ["NotificationPreferenceSaveRequestDto", "NotificationPreferenceDto"], response: ["NotificationPreferenceDto"] },
  mapPreferenceUpdate: { request: ["MapPreferenceDto"], response: ["MapPreferenceDto"] },
  appVersionCheck: { response: ["AppVersionCheckDto"] },
  feedbackSubmit: { request: ["FeedbackRequestDto"], response: ["SupportTicketDto"] },
  serviceSubscriptions: { response: ["ServiceSubscriptionDto"] },
  servicePlans: { response: ["ServicePlanDto"] },
  subscriptionRenew: { request: ["RenewSubscriptionRequestDto"], response: ["ServiceSubscriptionDto"] },
  paymentMethods: { response: ["PaymentMethodDto"] },
  invoices: { response: ["InvoiceDto"] },
  notificationsList: { response: ["NotificationItemDto"] },
  messageMarkRead: { request: ["MessageReadRequestDto"], response: ["ApiResponse<Unit>"] },
  shareInvitationAction: { request: ["ShareInvitationActionRequestDto"], response: ["ShareDto"] },
  shareUpdate: { request: ["SharePermissionUpdateRequestDto"], response: ["ShareDto"] },
  shareRevoke: { response: ["ApiResponse<Unit>"] },
  shareResend: { response: ["ShareDto"] },
  recentEvents: { response: ["DeviceEventDto"] },
  deviceLatestLocations: { response: ["LatestDeviceLocationDto", "LatLngDto"] },
  alertMarkRead: { request: ["AlertActionRequestDto"], response: ["ApiResponse<Unit>"] },
  alertAck: { request: ["AlertActionRequestDto"], response: ["AlertDto"] },
  alertFeedback: { request: ["AlertFeedbackRequestDto"], response: ["AlertDto"] },
  deviceProfileUpdate: { request: ["DeviceProfileUpdateRequestDto"], response: ["DeviceDto"] },
  emergencyContactsSave: { request: ["EmergencyContactDto"], response: ["EmergencyContactDto"] },
  deviceUnbind: { request: ["DeviceUnbindRequestDto"], response: ["ApiResponse<Unit>"] },
  deviceCommand: { request: ["DeviceCommandRequestDto"], response: ["DeviceCommandResponseDto"] },
  deviceConfigRead: { response: ["DeviceConfigDto"] },
  deviceConfigSave: { request: ["DeviceConfigSaveRequestDto"], response: ["DeviceConfigOperationDto"] },
  configOperationStatus: { response: ["DeviceConfigOperationDto"] },
  otaCheck: { response: ["FirmwareVersionDto"] },
  otaStart: { request: ["FirmwareUpgradeRequestDto"], response: ["DeviceConfigOperationDto"] },
  h5Session: { request: ["H5SessionRequestDto"], response: ["H5SessionDto"] },
  aiSupportStream: { request: ["AiStreamRequestDto"], response: ["AiStreamChunkDto"] },
  petProfileUpdate: { request: ["PetProfileUpdateRequestDto"], response: ["PetProfileDto"] },
};

const apiPageMap = {
  login: {
    title: "登录页所需 API",
    summary: "小程序以微信登录为主；账号密码登录可选。HTTP 域名须预先配置 request 合法域名。",
    apiIds: [],
    suggestedApiIds: ["wechatLogin", "wechatPhone", "authRefresh", "agreementVersions", "agreementContent"],
    gaps: [
      "POST /c/v1/auth/wechat/login 等接口域名须为 HTTPS 且已备案，并在微信公众平台配置 request 合法域名。",
      "小程序不使用 FCM/HMS；推送改为订阅消息 + subscribe-message 接口。",
      "微信登录替代 OAuth start/complete；Apple/Google 不在小程序内提供。",
    ],
  },
  "tab:map": {
    title: "地图页所需 API",
    summary: "地图总览依赖设备列表、未读告警与租户主题；须配置 request 合法域名，通过 wx.request 调用。",
    apiIds: ["devicesList", "alertUnreadCount", "productManifest", "tenantTheme", "aiInsights"],
    suggestedApiIds: ["deviceLatestLocations", "mapPreferenceUpdate"],
    gaps: [
      "request 合法域名：HTTPS、已备案、不可带端口，否则正式版请求被拦截。",
      "国内统一原生 map + GCJ-02；海外 Google Maps 仅能 web-view 嵌套。",
      "定位权限拒绝后降级为列表；首次授权前须告知用途。",
      "设备密集时地图标记易重叠，需列表联动高亮或聚合方案。",
    ],
  },
  "tab:devices": {
    title: "设备首页所需 API",
    summary: "核心接口 GET /c/v1/devices；域名须配置为 request 合法域名。",
    apiIds: ["devicesList", "alertUnreadCount", "productManifest", "deviceBindPreviews"],
    suggestedApiIds: ["deviceLatestLocations"],
    gaps: [
      "添加设备相关接口见「添加设备流程」弹窗说明。",
    ],
  },
  "tab:messages": {
    title: "消息页所需 API",
    summary: "告警列表、未读数量与告警详情；分享邀请处理接口待补齐。",
    apiIds: ["alertsList", "alertUnreadCount", "alertDetail", "aiAlertExplain"],
    suggestedApiIds: ["notificationsList", "messageMarkRead", "shareInvitationAction", "alertMarkRead"],
    gaps: [
      "消息已读、分享邀请接受/拒绝、系统通知分页接口待定义。",
      "分享管理缺少 accept / reject / revoke / 修改权限接口。",
    ],
  },
  "tab:ai": {
    title: "AI 助手页所需 API",
    summary: "健康分析、告警解释、AI 问答与知识库检索。",
    apiIds: ["aiInsights", "aiHealthAnalysis", "aiAlertExplain", "aiAnswer", "quickQuestions", "knowledgeList"],
    suggestedApiIds: ["aiSupportStream", "feedbackSubmit"],
    gaps: [
      "流式问答接口待定义；当前原型以分片模拟，最终仍调用 /c/v1/ai/answer。",
    ],
  },
  "tab:mine": {
    title: "我的页所需 API",
    summary: "登出、订阅消息、租户主题；个人资料与支付相关接口待实现。",
    apiIds: ["authLogout", "tenantTheme"],
    suggestedApiIds: ["subscribeMessage", "userProfile", "userProfileUpdate", "notificationPrefs", "notificationPrefsUpdate", "mapPreferenceUpdate", "serviceSubscriptions", "wechatPay", "invoices", "feedbackSubmit", "agreementContent", "appVersionCheck"],
    gaps: [
      "用户资料更新、修改密码、账号注销、反馈、套餐/支付/发票、协议详情等待定义。",
    ],
  },
  "detail:overview": {
    title: "设备概览所需 API",
    summary: "设备详情、告警、健康摘要、AI 分析与面板配置。",
    apiIds: ["deviceDetail", "deviceAlerts", "healthSummary", "aiHealthAnalysis", "productManifest", "panelManifest", "sharesList"],
    suggestedApiIds: ["recentEvents", "deviceCommand"],
    gaps: [
      "「最近事件」暂无独立接口，由告警与健康数据聚合展示。",
    ],
  },
  "detail:map": {
    title: "设备地图所需 API",
    summary: "轨迹、围栏、单次定位与地点搜索。",
    apiIds: ["deviceDetail", "track", "locationRefresh", "geofencesList", "geofenceUpsert", "geofenceDelete", "placesSearch"],
    suggestedApiIds: ["deviceCommand"],
    gaps: [
      "轨迹查询建议补充 start / end / limit 参数。",
    ],
  },
  "detail:health": {
    title: "健康页所需 API",
    summary: "健康摘要、图表数据与 AI 健康分析。",
    apiIds: ["healthSummary", "healthChart", "aiHealthAnalysis", "productManifest", "panelManifest"],
    suggestedApiIds: ["petProfileUpdate"],
    gaps: [
      "宠物活动数据是否独立接口待产品确认。",
    ],
  },
  "detail:alarms": {
    title: "告警页所需 API",
    summary: "告警列表、详情、未读数量与 AI 解释。",
    apiIds: ["deviceAlerts", "alertDetail", "alertUnreadCount", "aiAlertExplain"],
    suggestedApiIds: ["alertMarkRead", "alertAck", "alertFeedback"],
    gaps: [
      "告警已读、确认、忽略、误报反馈等操作接口待定义。",
    ],
  },
  "detail:config": {
    title: "配置页所需 API",
    summary: "设备详情与 Manifest；远程配置读写与 OTA 待补齐。",
    apiIds: ["deviceDetail", "productManifest", "panelManifest", "locationRefresh"],
    suggestedApiIds: ["deviceConfigRead", "deviceConfigSave", "configOperationStatus", "deviceCommand", "otaCheck", "otaStart"],
    gaps: [
      "设备配置读取、保存、下发状态、OTA、SIM/APN 等 HTTP 接口待定义。",
      "近场配置可走 BLE，与 HTTP 配置链路需产品确认边界。",
    ],
  },
  "modal:add-device": {
    title: "添加设备流程 API",
    summary: "扫码/BLE/IMEI 识别、面板准备与绑定确认。",
    apiIds: ["deviceBindDetect", "deviceBindPreparePanel", "deviceBindBind", "deviceBindPreviews"],
    gaps: [
      "BLE 扫描为本地能力；detect 接口接收扫码或 BLE 识别结果。",
    ],
  },
  "modal:share": {
    title: "设备分享 API",
    summary: "分享列表与创建分享；邀请处理待补齐。",
    apiIds: ["sharesList", "shareCreate"],
    suggestedApiIds: ["shareUpdate", "shareRevoke", "shareResend", "shareInvitationAction"],
    gaps: [
      "重发、取消分享、修改权限、接受/拒绝邀请接口待定义。",
    ],
  },
  "modal:edit-device": {
    title: "设备管理 API",
    summary: "设备详情读取；资料编辑与解绑待实现。",
    apiIds: ["deviceDetail", "sharesList"],
    suggestedApiIds: ["deviceProfileUpdate", "emergencyContactsSave", "deviceUnbind", "petProfileUpdate"],
    gaps: [
      "编辑设备资料、紧急联系人、解绑设备接口待定义。",
    ],
  },
  "modal:geofence": {
    title: "安全围栏 API",
    summary: "围栏列表、增删改与地点搜索。",
    apiIds: ["geofencesList", "geofenceUpsert", "geofenceDelete", "placesSearch"],
    gaps: [
      "多边形围栏字段需与后端 Geofence 模型对齐。",
    ],
  },
  "modal:config-category": {
    title: "配置分类 API",
    summary: "Manifest 与设备详情作为能力依据；远程配置读写待实现。",
    apiIds: ["deviceDetail", "productManifest", "panelManifest"],
    suggestedApiIds: ["deviceConfigRead", "deviceConfigSave", "configOperationStatus", "deviceCommand", "otaCheck", "otaStart"],
    gaps: [
      "配置读取、保存、下发状态接口待定义。",
    ],
  },
  "modal:h5": {
    title: "帮助中心 / H5 API",
    summary: "知识库列表、详情与搜索。",
    apiIds: ["knowledgeList", "knowledgeDetail", "knowledgeSearch", "quickQuestions"],
    suggestedApiIds: ["agreementVersions", "agreementContent", "h5Session", "feedbackSubmit"],
    gaps: [
      "协议版本、隐私政策详情、H5 登录态交换接口待定义。",
    ],
  },
  "modal:chat": {
    title: "AI 客服 API",
    summary: "快捷问题、知识库检索与 AI 问答。",
    apiIds: ["quickQuestions", "knowledgeList", "knowledgeSearch", "knowledgeDetail", "aiAnswer"],
    suggestedApiIds: ["aiSupportStream", "feedbackSubmit"],
    gaps: [
      "流式问答接口待定义；当前以分片模拟。",
    ],
  },
  "modal:ai": {
    title: "AI 分析结果 API",
    summary: "告警解释与健康分析。",
    apiIds: ["alertDetail", "aiAlertExplain", "healthSummary", "aiHealthAnalysis"],
    suggestedApiIds: ["alertFeedback"],
    gaps: [
      "规则引擎结果详情暂无独立接口，与 AI 解释合并返回。",
    ],
  },
  "modal:logout-confirm": {
    title: "退出登录 API",
    summary: "会话退出与推送 token 注销。",
    apiIds: ["authLogout", "pushUnregister"],
    suggestedApiIds: ["authRefresh"],
    gaps: [
      "Token 刷新失效策略待与后端确认。",
    ],
  },
};

function render() {
  if (!state.chat.length) {
    state.chat = [{ role: "assistant", text: t("mock.chatWelcome") }];
  }
  if (
    state.loggedIn
    && state.route === "home"
    && state.tab === "map"
    && state.pendingLocationGuide
    && state.locationPermission === "unknown"
    && !state.modal
    && !state.dialog
  ) {
    state.pendingLocationGuide = false;
    state.modal = "location-guide";
  }
  app.dataset.theme = state.brandTheme;
  if (!state.loggedIn || state.route === "login") {
    app.innerHTML = renderLogin();
  } else if (state.route === "detail") {
    app.innerHTML = renderDetail();
  } else {
    app.innerHTML = renderShell();
  }
  if (state.modal) {
    app.insertAdjacentHTML("beforeend", renderModal());
  }
  if (state.dialog) {
    app.insertAdjacentHTML("beforeend", renderDialog());
  }
  if (state.toast) {
    app.insertAdjacentHTML("beforeend", renderMpToast(state.toast));
  }
  renderApiPanel();
  renderDemoPanel();
  applyLayoutState();
  bindEvents();
  refreshIcons();
}

function renderApiPanel() {
  if (!apiPanel) return;
  const L = LOCALES[state.locale] || LOCALES["zh-CN"];
  const info = getApiPanelInfo();
  const apis = (info.apiIds || []).map((id) => (apiCatalog[id] ? { id, ...apiCatalog[id] } : null)).filter(Boolean);
  const suggestedApis = (info.suggestedApiIds || [])
    .map((id) => (suggestedApiCatalog[id] ? { id, ...suggestedApiCatalog[id] } : null))
    .filter(Boolean);
  const wxApis = getWxApiPanelInfo();
  const pagePath = getCurrentPagePath();
  apiPanel.innerHTML = `
    <section class="api-card api-card-primary">
      <div class="api-kicker">${icon("server")} ${L.api.kickerHttp}</div>
      <h2>${escapeHtml(info.title)}</h2>
      <p>${escapeHtml(info.summary)}</p>
      <div class="page-path-badge">
        <strong>${L.demo.pagePath}</strong>
        <code>${escapeHtml(pagePath)}</code>
      </div>
      <div class="api-truth-note">
        <strong>${L.api.truthSource}</strong>
        <span>${L.api.truthDesc}</span>
      </div>
    </section>

    ${renderMpTechAdaptationCard()}

    <section class="api-card">
      <div class="api-card-heading">
        <h3>${L.api.defined}</h3>
        <span>${apis.length} ${L.api.count}</span>
      </div>
      ${renderApiList(apis)}
    </section>

    ${suggestedApis.length ? `
      <section class="api-card api-suggested-card">
        <div class="api-card-heading">
          <h3>${L.api.suggested}</h3>
          <span>${suggestedApis.length} ${L.api.count}</span>
        </div>
        ${renderApiList(suggestedApis, { suggested: true })}
      </section>
    ` : ""}

    <section class="api-card api-wx-card">
      <div class="api-kicker">${icon("smartphone")} ${L.api.kickerWx}</div>
      <div class="api-card-heading">
        <h3>${L.api.wxDefined}</h3>
        <span>${wxApis.length} ${L.api.count}</span>
      </div>
      ${renderWxApiList(wxApis)}
    </section>

    ${renderMpAdaptationCard()}

    ${renderApiGapList(info.gaps || [])}
  `;
}

function getApiPanelInfo() {
  if (!state.loggedIn || state.route === "login") return apiPageMap.login;
  if (state.dialog === "logout-confirm") return apiPageMap["modal:logout-confirm"];
  if (state.modal === "settings") return settingsApiPanelInfo();
  if (state.modal) return apiPageMap[`modal:${state.modal}`] || apiPageMap[`tab:${state.tab}`];
  if (state.route === "detail") return apiPageMap[`detail:${state.detailTab}`] || apiPageMap["detail:overview"];
  return apiPageMap[`tab:${state.tab}`] || apiPageMap["tab:devices"];
}

function settingsApiPanelInfo() {
  const titleMap = {
    profile: "账号资料设置 API",
    security: "账号安全设置 API",
    notifications: "通知设置 API",
    map: "地区与地图服务 API",
    service: "我的服务 API",
    feedback: "意见反馈 API",
    about: "关于与协议 API",
  };
  const apiMap = {
    profile: ["authLogin"],
    security: ["authLogout", "pushUnregister"],
    notifications: ["pushRegister", "pushUnregister"],
    map: ["tenantTheme"],
    service: [],
    feedback: [],
    about: ["knowledgeList", "knowledgeDetail"],
  };
  const suggestedApiMap = {
    profile: ["userProfile", "userProfileUpdate"],
    security: ["passwordChange", "loginDevices", "oauthBind", "oauthUnbind", "accountDeleteRequest", "passwordResetStart", "passwordResetConfirm"],
    notifications: ["notificationPrefs", "notificationPrefsUpdate"],
    map: ["mapPreferenceUpdate"],
    service: ["serviceSubscriptions", "servicePlans", "subscriptionRenew", "paymentMethods", "invoices"],
    feedback: ["feedbackSubmit", "aiSupportStream"],
    about: ["agreementVersions", "agreementContent", "appVersionCheck"],
  };
  const gapMap = {
    profile: ["用户资料读取/更新接口待定义。"],
    security: ["修改密码、登录设备列表、第三方账号绑定、账号注销接口待定义。"],
    notifications: ["通知偏好保存接口待定义。"],
    map: ["地图服务与地区偏好配置接口待定义。"],
    service: ["套餐、续费、支付方式、发票接口待定义。"],
    feedback: ["意见反馈提交或客服工单接口待定义。"],
    about: ["协议版本、隐私政策、权限说明、版本检查接口待定义。"],
  };
  const panel = state.settingsPanel || "profile";
  return {
    title: titleMap[panel] || "设置 API",
    summary: "按设置弹窗列出相关 HTTP 接口；未标注的为规划中接口。",
    apiIds: apiMap[panel] || [],
    suggestedApiIds: suggestedApiMap[panel] || [],
    gaps: gapMap[panel] || ["当前设置项相关接口待补充。"],
  };
}

function formatSchemaName(name) {
  if (!name) return "";
  if (name === "ApiResponse<Unit>") return "{ code, message, data }";
  return String(name)
    .replace(/^List<(.+)>$/, "$1[]")
    .replace(/Dto$/g, "");
}

function normalizeResponseType(type) {
  if (!type) return "";
  return String(type)
    .split(/\s*\/\s*/)
    .map((part) => formatSchemaName(part.trim()))
    .join(" / ");
}

function renderApiList(apis, options = {}) {
  const L = LOCALES[state.locale] || LOCALES["zh-CN"];
  if (!apis.length) {
    return `<div class="api-empty">${options.suggested ? L.api.emptySuggested : L.api.emptyDefined}</div>`;
  }
  return `
    <div class="api-list">
      ${apis.map((api, index) => renderApiDetails(api, index === 0, options)).join("")}
    </div>
  `;
}

function renderApiDetails(api, open, options = {}) {
  const method = escapeHtml(api.method);
  const suggested = Boolean(options.suggested);
  return `
    <details class="api-item ${suggested ? "api-item-suggested" : ""}" ${open ? "open" : ""}>
      <summary>
        <span class="api-method method-${method.toLowerCase()}">${method}</span>
        <span class="api-summary-text">
          <strong>${escapeHtml(api.title)}${suggested ? `<span class="api-kind-badge">${escapeHtml((LOCALES[state.locale] || LOCALES["zh-CN"]).api.codeNotImpl)}</span>` : ""}</strong>
          <code>${escapeHtml(api.path)}</code>
        </span>
        <span class="api-chevron">${icon("chevron-down")}</span>
      </summary>
      <div class="api-item-body">
        <p>${escapeHtml(api.purpose)}</p>
        ${suggested ? renderSuggestedApiMeta(api) : renderImplementedApiMeta(api)}
        ${renderDtoSection(api.id, { suggested })}
      </div>
    </details>
  `;
}

function renderImplementedApiMeta(api) {
  const L = LOCALES[state.locale] || LOCALES["zh-CN"];
  const domainNote = api.path?.startsWith("/c/v1")
    ? `<div class="api-mp-domain-note"><strong>${escapeHtml(L.api.mpDomainNote)}</strong></div>`
    : "";
  const auth = api.auth || L.api.authDefault;
  return `
    <dl class="api-meta">
      <div><dt>${escapeHtml(L.api.method)}</dt><dd>${escapeHtml(api.method)}</dd></div>
      <div><dt>${escapeHtml(L.api.pathLabel)}</dt><dd><code>${escapeHtml(api.path)}</code></dd></div>
      <div><dt>${escapeHtml(L.api.auth)}</dt><dd>${escapeHtml(auth)}</dd></div>
      ${api.dto ? `<div><dt>${escapeHtml(L.api.response)}</dt><dd>${escapeHtml(normalizeResponseType(api.dto))}</dd></div>` : ""}
    </dl>
    ${domainNote}
  `;
}

function renderSuggestedApiMeta(api) {
  const L = LOCALES[state.locale] || LOCALES["zh-CN"];
  return `
    <dl class="api-meta api-meta-suggested">
      <div><dt>${escapeHtml(L.api.method)}</dt><dd>${escapeHtml(api.method)}</dd></div>
      <div><dt>${escapeHtml(L.api.pathLabel)}</dt><dd><code>${escapeHtml(api.path)}</code></dd></div>
      <div><dt>${escapeHtml(L.api.currentStatus)}</dt><dd>${escapeHtml(L.api.statusPlanned)}</dd></div>
      ${api.dto ? `<div><dt>${escapeHtml(L.api.response)}</dt><dd>${escapeHtml(normalizeResponseType(api.dto))}</dd></div>` : ""}
      <div><dt>${escapeHtml(L.api.note)}</dt><dd>${escapeHtml(L.api.suggestedNote)}</dd></div>
    </dl>
  `;
}

function renderDtoSection(apiId, options = {}) {
  const L = LOCALES[state.locale] || LOCALES["zh-CN"];
  const dtoInfo = options.suggested ? suggestedApiDtoMap[apiId] : apiDtoMap[apiId];
  if (!dtoInfo) return "";
  const requestHtml = renderDtoGroup(L.api.requestBody, dtoInfo.request || [], options);
  const responseHtml = renderDtoGroup(L.api.responseBody, dtoInfo.response || [], options);
  if (!requestHtml && !responseHtml) return "";
  return `
    <div class="dto-section ${options.suggested ? "dto-section-suggested" : ""}">
      <div class="dto-section-title">${icon("braces")} ${escapeHtml(L.api.schemaTitle)}</div>
      ${requestHtml}
      ${responseHtml}
    </div>
  `;
}

function renderDtoGroup(title, dtoNames, options = {}) {
  const uniqueNames = [...new Set(dtoNames || [])];
  if (!uniqueNames.length) return "";
  return `
    <div class="dto-group">
      <div class="dto-group-title">${escapeHtml(title)}</div>
      ${uniqueNames.map((dtoName) => renderDtoClass(dtoName, options)).join("")}
    </div>
  `;
}

function renderDtoClass(dtoName, options = {}) {
  const L = LOCALES[state.locale] || LOCALES["zh-CN"];
  const schema = options.suggested ? (suggestedDtoCatalog[dtoName] || dtoCatalog[dtoName]) : dtoCatalog[dtoName];
  const displayName = formatSchemaName(dtoName);
  if (!schema) {
    return `
      <details class="dto-class">
        <summary>
          <strong>${escapeHtml(displayName)}</strong>
        </summary>
        <div class="dto-empty">${escapeHtml(L.api.emptySchema)}</div>
      </details>
    `;
  }
  return `
    <details class="dto-class">
      <summary>
        <strong>${escapeHtml(displayName || schema.name)}</strong>
        <span>${schema.fields.length} fields</span>
      </summary>
      <div class="dto-fields">
        <div class="dto-field dto-field-head">
          <span>字段</span>
          <span>类型</span>
          <span>默认</span>
        </div>
        ${schema.fields.map(renderDtoField).join("")}
      </div>
    </details>
  `;
}

function renderDtoField(field) {
  return `
    <div class="dto-field">
      <code>${escapeHtml(field.wire)}</code>
      <code>${escapeHtml(field.type)}</code>
      <span>${field.defaultValue ? escapeHtml(field.defaultValue) : "—"}</span>
    </div>
  `;
}

function dto(source, fieldSpec, displayName = "") {
  return {
    name: displayName,
    source,
    fields: parseDtoFields(fieldSpec),
  };
}

function parseDtoFields(fieldSpec) {
  return fieldSpec
    .split(";")
    .map((item) => item.trim())
    .filter(Boolean)
    .map((item) => {
      const parts = item.match(/^([^:]+):([^:]+):(.+)$/);
      const wire = parts?.[1]?.trim() || "";
      const name = parts?.[2]?.trim() || "";
      const typeWithDefault = parts?.[3]?.trim() || "";
      const defaultParts = typeWithDefault.match(/^(.+?)\s=\s(.+)$/);
      return {
        wire,
        name,
        type: defaultParts ? defaultParts[1].trim() : typeWithDefault,
        defaultValue: defaultParts ? defaultParts[2].trim() : "",
      };
    });
}

function renderApiGapList(gaps) {
  const L = LOCALES[state.locale] || LOCALES["zh-CN"];
  if (!gaps?.length) return "";
  return `
    <section class="api-card api-gap-card">
      <div class="api-card-heading"><h3>${L.api.gaps}</h3></div>
      <ul class="api-gap-list">
        ${gaps.map((gap) => `<li>${escapeHtml(gap)}</li>`).join("")}
      </ul>
    </section>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderDemoPanel() {
  if (!demoPanel) return;
  const L = LOCALES[state.locale] || LOCALES["zh-CN"];
  const info = getDemoPanelInfo();
  const pagePath = getCurrentPagePath();
  demoPanel.innerHTML = `
    <div class="demo-card demo-card-primary">
      <div class="demo-kicker">${L.demo.kicker}</div>
      <h1>${info.title}</h1>
      <p>${info.summary}</p>
      <div class="page-path-badge demo-path">
        <strong>${L.demo.pagePath}</strong>
        <code>${escapeHtml(pagePath)}</code>
      </div>
      <div class="tag-grid">
        ${info.tags.map((tag) => `<span>${tag}</span>`).join("")}
      </div>
    </div>

    <div class="demo-card">
      <h2>${L.demo.pageInfo}</h2>
      ${renderExplanationList(toPageInfoItems(info))}
    </div>

    <div class="demo-card">
      <h2>${L.demo.requirements}</h2>
      ${renderExplanationList(toRequirementItems(info))}
    </div>

    <div class="demo-card">
      <h2>${L.guide.structureTitle}</h2>
      ${renderExplanationList(L.guide.structure)}
    </div>

    <div class="demo-card">
      <h2>${L.guide.pathTitle}</h2>
      ${renderExplanationList(L.guide.paths)}
    </div>
  `;
}

function renderExplanationList(items) {
  return `<ol class="demo-steps">${items.map((item) => `<li>${item}</li>`).join("")}</ol>`;
}

function toPageInfoItems(info) {
  return (info.goals || []).map((item) =>
    item
      .replace(/^确认/, "")
      .replace(/是否清楚/g, "需要清楚")
      .replace(/是否足够/g, "需要足够")
      .replace(/。$/, "。"),
  );
}

function toRequirementItems(info) {
  const source = info.requirements || info.review || [];
  return source.map((item) =>
    item
      .replace(/^是否需要/, "需要评估是否")
      .replace(/^是否/, "需要明确是否")
      .replace(/^哪些/, "需要明确哪些")
      .replace(/^不同/, "需要支持不同"),
  );
}

function getDemoPanelInfo() {
  if (!state.loggedIn || state.route === "login") return loginPanelInfo();
  if (state.dialog) return dialogPanelInfo();
  if (state.modal) return modalPanelInfo();
  if (state.route === "detail") return detailPanelInfo();
  return tabPanelInfo();
}

function dialogPanelInfo() {
  if (state.dialog === "logout-confirm") return logoutPanelInfo();
  if (state.dialog === "unbind-confirm") return editDevicePanelInfo();
  return logoutPanelInfo();
}

function loginPanelInfo() {
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
}

function tabPanelInfo() {
  const panelMap = {
    map: {
      title: "地图页",
      summary: "地图页用于集中查看所有设备的当前位置、在线状态、告警状态和安全围栏，是定位类设备最高频的总览入口。",
      tags: ["全局地图", "全部设备", "围栏总览"],
      goals: [
        "确认用户能一眼看懂所有设备当前分布、在线状态和异常设备。",
        "确认地图上的设备标记能区分正常、低电、离线和紧急状态。",
        "确认家人、宠物、物品筛选能点击，并且筛选结果、地图标记和设备定位卡同步变化。",
      ],
      actions: [
        "点击地图上的设备标记进入该设备地图详情。",
        "点击筛选结果中的设备定位卡进入单台设备详情。",
        "点击右上角添加按钮打开添加设备流程。",
      ],
      review: [
        "地图页应该作为全局位置总览，不替代单台设备的轨迹、围栏和配置详情。",
        "自定义顶栏须通过 getMenuButtonBoundingClientRect 避让右上角胶囊，操作区右侧预留约 90px。",
        "定位权限：首次轻量引导；拒绝后隐藏地图、保留设备列表并提供「去开启权限」。",
        "列表与地图联动：点击设备卡居中高亮标记；标记重叠时放大地图或弹出设备列表。",
        "补全加载骨架屏、无设备空状态（引导添加）、网络错误重试；支持下拉刷新。",
        "国内用原生 map（腾讯底图、GCJ-02）；海外 Google 仅能通过 web-view 实现。",
        "可点击区域热区 ≥ 44px，筛选标签与卡片需 hover-class 点击态。",
      ],
      backend: [
        "全部设备最新位置、设备状态、围栏范围、告警状态、设备分类。",
        "request 合法域名配置；按页面拆分 services 封装 wx.request。",
        "订阅消息推送告警；onShareAppMessage 分享设备给家人。",
      ],
    },
    devices: {
      title: "设备首页",
      summary: "这是用户每天打开 App 后最先看到的页面，用来快速确认设备在线状态、告警数量和添加设备入口。",
      tags: ["设备列表", "添加设备", "状态总览"],
      goals: [
        "确认用户能一眼看懂有几台设备、几台在线、有没有待处理提醒。",
        "确认设备卡片信息足够判断电量、定位方式、信号和最近事件。",
        "确认添加设备入口足够明显，能承接扫码、IMEI 和 BLE 绑定。",
      ],
      actions: [
        "点击顶部扫码按钮或添加设备卡片，打开添加设备流程。",
        "点击妈妈手表进入设备详情。",
        "点击待处理提醒进入消息页。",
      ],
      review: [
        "首页只放高频信息，避免塞太多设置入口。",
        "共享设备和自有设备后续可考虑分组或用权限标签区分。",
        "离线设备要突出但不能造成误报恐慌。",
      ],
      backend: [
        "设备列表、设备状态、最后位置、最后告警、分享权限、未读提醒数量。",
        "实时刷新方案需要确认使用推送触发、轮询还是 WebSocket。",
      ],
    },
    messages: {
      title: "消息页",
      summary: "消息页聚合设备告警、分享邀请和系统通知，负责把待处理事项从首页引导到具体处理动作。",
      tags: ["告警消息", "分享邀请", "系统通知"],
      goals: [
        "确认待处理消息和普通告警分层清晰。",
        "确认分享邀请能完成接受、拒绝的闭环。",
        "确认设备告警可以进入 AI 解释，帮助用户理解风险。",
      ],
      actions: [
        "点击接受或拒绝分享邀请。",
        "点击设备告警查看 AI 预警解释。",
        "标记系统通知已读。",
      ],
      review: [
        "是否需要按设备、消息类型、已读状态筛选。",
        "高风险告警是否需要置顶、二次确认或紧急联系人入口。",
        "分享邀请的权限说明需要和服务端权限字段一致。",
      ],
      backend: [
        "消息分页、已读状态、分享邀请处理、推送 Token 注册。",
        "国内需要调研 FCM、HMS 和厂商推送组合。",
      ],
    },
    ai: {
      title: "AI 助手页",
      summary: "AI 页用于承接健康分析、预警解释和客服问答，展示后续 AI 功能落地的入口形态。",
      tags: ["健康分析", "预警解释", "AI 客服"],
      goals: [
        "确认 AI 能力不是孤立功能，而是服务设备、健康和告警处理。",
        "确认用户能从 AI 页进入具体设备的健康或告警详情。",
        "确认 AI 客服适合处理离线、定位不准、分享和配置问题。",
      ],
      actions: [
        "点击 AI 健康分析进入设备健康页。",
        "点击 AI 预警解释进入告警页。",
        "点击 AI 客服打开问答弹窗。",
      ],
      review: [
        "AI 结果需要区分规则判断和模型解释，避免过度承诺。",
        "高风险告警建议保留人工确认和紧急联系人路径。",
        "AI 客服后续要考虑转人工和工单记录。",
      ],
      backend: [
        "健康数据聚合、告警上下文、AI 问答上下文、客服工单接口。",
        "需要明确哪些数据可以给 AI 使用，以及隐私授权边界。",
      ],
    },
    mine: {
      title: "我的页",
      summary: "我的页是账号、通知、地区地图、帮助反馈和协议版本的设置中心，负责补齐正式 App 的个人中心能力。",
      tags: ["账号设置", "通知偏好", "合规入口"],
      goals: [
        "确认账号资料、账号安全、通知设置和帮助关于分组是否清楚。",
        "确认地图与定位放在这里表达的是地区、地图服务和权限设置，不是查看设备位置。",
        "确认退出登录放在底部且有二次确认，减少误触。",
      ],
      actions: [
        "点击账号资料编辑昵称、邮箱、手机号和地区。",
        "点击通知设置查看告警推送和免打扰。",
        "点击关于与协议查看协议、隐私、权限和版本入口。",
      ],
      review: [
        "账号注销、隐私政策和权限说明是正式上线前必须补齐的合规项。",
        "通知设置需要和消息中心、推送能力联动。",
        "地区与地图服务要和国内无 GMS 方案保持一致。",
      ],
      backend: [
        "用户资料、修改密码、账号注销、通知偏好、地区设置、版本检查。",
        "地图服务选择可能影响定位 SDK、坐标转换和隐私授权。",
      ],
    },
  };
  return panelMap[state.tab] || panelMap.devices;
}

function detailPanelInfo() {
  const device = getDevice();
  const panelMap = {
    overview: {
      title: `${deviceDisplayName(device)} · 概览`,
      summary: "概览页把设备状态、健康摘要、AI 风险和最近事件放在一起，用来判断用户是否能快速理解当前设备是否安全。",
      tags: [device.model, "设备概览", "AI 摘要"],
      goals: [
        "确认状态、电量、定位方式和健康指标是否足够支撑快速判断。",
        "确认 AI 今日摘要不会抢占告警处理，但能给用户下一步建议。",
        "确认最近事件能引导用户进入告警页。",
      ],
      actions: [
        "点击定位发送单次定位指令。",
        "点击分享打开设备分享弹窗。",
        "点击查看全部进入告警列表。",
      ],
      review: [
        "不同设备型号的指标差异需要动态配置，不能所有设备都显示心率。",
        "分享给我的设备要限制管理类操作。",
        "AI 风险文案需要避免医疗诊断式表达。",
      ],
      backend: [
        "设备详情、实时状态、健康指标、最近事件、AI 摘要。",
        "设备能力矩阵决定哪些模块显示。",
      ],
    },
    map: {
      title: `${deviceDisplayName(device)} · 地图`,
      summary: "地图页展示实时位置、轨迹回放和安全围栏，是定位类设备最核心的业务页面。",
      tags: ["实时定位", "轨迹回放", "安全围栏"],
      goals: [
        "确认用户能区分实时位置、历史轨迹和围栏管理。",
        "确认轨迹时间筛选和关键点展示足够清楚。",
        "确认新建围栏流程能表达圆形、多边形和提醒条件。",
      ],
      actions: [
        "点击实时定位触发单次定位。",
        "点击轨迹回放查看时间筛选。",
        "点击新增围栏打开围栏编辑弹窗。",
      ],
      review: [
        "国内地图方案和海外地图方案需要保持体验一致。",
        "轨迹回放要处理无数据、弱网和坐标偏移。",
        "围栏触发规则要避免误报和重复推送。",
      ],
      backend: [
        "实时位置、历史轨迹、围栏列表、新增 / 编辑 / 删除围栏。",
        "国内坐标系、海外 Google Maps、无 GMS 设备定位能力要提前评估。",
      ],
    },
    health: {
      title: `${deviceDisplayName(device)} · 健康`,
      summary: "健康页展示心率、步数、活跃趋势和 AI 健康分析，适合 EV05 等人用健康监测设备。",
      tags: ["健康数据", "趋势图", "AI 分析"],
      goals: [
        "确认健康指标和趋势图是否对普通用户可理解。",
        "确认 AI 分析能解释异常趋势，但不替代医疗判断。",
        "确认无健康能力的设备后续能隐藏该页或降级显示。",
      ],
      actions: [
        "查看 7 日活跃趋势。",
        "阅读 AI 健康分析说明。",
        "从 AI 页跳转到健康页演示跨页面联动。",
      ],
      review: [
        "不同设备支持的健康传感器不同，要基于设备能力展示。",
        "健康报告后续可扩展日报、周报和家人提醒。",
        "健康数据属于敏感数据，隐私授权要明确。",
      ],
      backend: [
        "健康数据日报 / 周报、趋势聚合、异常判断规则。",
        "AI 健康分析需要设备数据、历史基线和用户授权。",
      ],
    },
    alarms: {
      title: `${deviceDisplayName(device)} · 告警`,
      summary: "告警页用于查看跌倒、离线、低电量等事件，并通过 AI 给出风险解释和处理建议。",
      tags: ["设备告警", "风险解释", "待处理"],
      goals: [
        "确认告警严重程度、状态和说明足够清楚。",
        "确认 AI 解释能帮助用户处理，而不是只展示结果。",
        "确认告警和消息中心之间的关系清楚。",
      ],
      actions: [
        "点击告警卡片打开 AI 分析结果。",
        "查看待确认、未读、未处理等状态。",
        "从消息页进入同一告警解释路径。",
      ],
      review: [
        "高风险告警是否需要确认处理、联系紧急联系人、记录处理结果。",
        "告警状态要和推送、消息已读状态区分。",
        "AI 解释需要可追溯的规则依据。",
      ],
      backend: [
        "告警列表、告警详情、已读 / 已处理、AI 解释上下文。",
        "推送到达、重复告警合并和告警状态同步。",
      ],
    },
    config: {
      title: `${deviceDisplayName(device)} · 配置`,
      summary: "配置页把 C 端常用设置和技术验证能力分组，包括 Home WiFi / Home Beacon、定位、告警、联系人、蓝牙和网络状态。",
      tags: ["设备配置", "Home WiFi", "Home Beacon"],
      goals: [
        "确认配置分类是否能覆盖历史 APP 的主要设置能力。",
        "确认普通用户能理解常用配置，技术验证入口不会干扰主流程。",
        "确认配置复制可以表达设备间能力复用。",
      ],
      actions: [
        "点击 Home WiFi / Home Beacon 分类查看配置。",
        "点击蓝牙连接 / 固件升级查看近场配置弹窗。",
        "点击复制 Home WiFi / Home Beacon 模拟复制到其他设备。",
      ],
      review: [
        "哪些配置开放给 C 端用户，哪些只给技术人员，需要产品权限定义。",
        "配置下发要显示设备确认结果，避免用户以为保存即生效。",
        "分享用户是否允许改配置，需要权限控制。",
      ],
      backend: [
        "设备配置读取、配置保存、配置下发状态、设备能力矩阵。",
        "BLE 近场读写、远程指令、OTA 升级需要分技术链路验证。",
      ],
    },
  };
  return panelMap[state.detailTab] || panelMap.overview;
}

function modalPanelInfo() {
  const modalMap = {
    "add-device": addDevicePanelInfo(),
    share: sharePanelInfo(),
    "edit-device": editDevicePanelInfo(),
    geofence: geofencePanelInfo(),
    "config-category": configCategoryPanelInfo(),
    settings: settingsPanelInfo(),
    h5: h5PanelInfo(),
    chat: chatPanelInfo(),
    ai: aiResultPanelInfo(),
  };
  return modalMap[state.modal] || tabPanelInfo();
}

function addDevicePanelInfo() {
  return {
    title: "添加设备流程",
    summary: "弹窗用于验证扫码、手动 IMEI 和 BLE 扫描三种绑定路径，覆盖历史 APP 的添加设备能力。",
    tags: ["扫码绑定", "IMEI", "BLE 扫描"],
    goals: [
      "确认用户能理解三种添加方式的差异。",
      "确认 BLE 扫描可以承接近场绑定和参数读取。",
      "确认绑定前校验提示不会显得太技术化。",
    ],
    actions: [
      "切换扫码、IMEI、BLE 三个分段按钮。",
      "点击模拟扫码成功或连接 BLE 设备。",
      "关闭弹窗返回设备首页。",
    ],
    review: [
      "扫码和手动 IMEI 是普通用户主路径，BLE 更偏现场辅助。",
      "绑定失败原因要给用户可执行的解释。",
      "设备是否属于当前可绑定范围需要后端校验。",
    ],
    backend: [
      "IMEI 校验、设备是否已绑定、设备型号能力、绑定设备、BLE 设备发现。",
      "绑定成功后需要刷新设备列表和权限数据。",
    ],
  };
}

function sharePanelInfo() {
  return {
    title: "设备分享",
    summary: "分享弹窗用于验证设备拥有者把查看或告警权限分享给家人的完整流程。",
    tags: ["分享邀请", "权限控制", "家庭协作"],
    goals: [
      "确认分享账号、权限选择、已有分享列表三块信息清楚。",
      "确认已分享用户可以修改权限或取消分享。",
      "确认用户能理解拥有者和被分享用户权限不同。",
    ],
    actions: [
      "选择权限后点击发送邀请。",
      "查看已有分享列表。",
      "尝试修改权限或取消分享。",
    ],
    review: [
      "权限项要和服务端真实权限字段一致。",
      "被分享用户是否能接收告警、查看轨迹、修改配置，需要明确边界。",
      "分享邀请还需要在消息页完成接受或拒绝。",
    ],
    backend: [
      "分享列表、发起邀请、接受 / 拒绝邀请、修改权限、取消分享。",
      "设备详情接口需要返回当前用户对设备的权限。",
    ],
  };
}

function editDevicePanelInfo() {
  const device = getDevice();
  return {
    title: `${deviceDisplayName(device)} · 设备管理`,
    summary: "设备管理弹窗用于编辑设备名称、使用者、紧急联系人和备注，同时承接解绑设备。",
    tags: ["设备资料", "联系人", "解绑"],
    goals: [
      "确认设备管理和设备配置不是同一个概念。",
      "确认紧急联系人适合放在设备资料或 SOS 设置中。",
      "确认分享设备不能随意编辑或解绑。",
    ],
    actions: [
      "修改设备名称或紧急联系人。",
      "点击保存查看反馈。",
      "拥有者可点击解绑设备。",
    ],
    review: [
      "解绑是高风险操作，正式版需要二次确认。",
      "设备名称、使用者和联系人是否需要按型号区分字段。",
      "编辑权限必须受当前用户权限控制。",
    ],
    backend: [
      "设备资料编辑、紧急联系人、解绑设备、权限校验。",
      "解绑前要确认分享关系和历史数据保留策略。",
    ],
  };
}

function geofencePanelInfo() {
  return {
    title: "安全围栏编辑",
    summary: "围栏弹窗用于验证用户创建或编辑安全区域时，能否理解区域形状、范围和提醒条件。",
    tags: ["圆形围栏", "多边形围栏", "进出提醒"],
    goals: [
      "确认地图编辑区域和表单字段的关系清楚。",
      "确认用户知道围栏用于进出区域提醒。",
      "确认保存后需要等待服务同步。",
    ],
    actions: [
      "填写围栏名称。",
      "选择圆形或多边形。",
      "选择提醒条件并保存围栏。",
    ],
    review: [
      "多边形围栏在移动端编辑复杂，可能第一版先做圆形。",
      "围栏半径最小值、最大值和重复围栏规则需要定义。",
      "围栏误报会直接影响用户信任。",
    ],
    backend: [
      "围栏新增、编辑、删除、启停、触发记录。",
      "坐标系转换和服务端围栏判断需要和地图方案联动。",
    ],
  };
}

function configCategoryPanelInfo() {
  const category = mock.configCategories.find((item) => item.id === state.configCategory) || mock.configCategories[0];
  return {
    title: category.title,
    summary: `当前打开的是“${category.title}”配置分类，用来验证配置项是否按用户认知分组，而不是照搬历史工具 APP 的技术菜单。`,
    tags: ["配置分类", "设备能力", category.title],
    goals: [
      "确认这个分类名称和字段用户能理解。",
      "确认保存配置后的反馈符合设备下发流程。",
      "确认不同型号设备可以按能力显示或隐藏配置项。",
    ],
    actions: [
      "查看当前分类里的字段。",
      "点击保存配置。",
      "返回配置页打开其他分类对比。",
    ],
    review: [
      "配置项需要分 C 端常用设置和技术验证设置。",
      "保存配置不等于设备已生效，需要展示下发状态。",
      "Home WiFi / Home Beacon 等专业术语按业务保留英文。",
    ],
    backend: [
      "配置读取、保存、下发、设备确认结果、设备能力矩阵。",
      "BLE、远程指令和服务端配置需要统一状态模型。",
    ],
  };
}

function settingsPanelInfo() {
  const panelMap = {
    profile: "账号资料",
    security: "账号与安全",
    notifications: "通知设置",
    map: "地区与地图服务",
    service: "我的服务",
    feedback: "意见反馈",
    about: "关于与协议",
  };
  const title = panelMap[state.settingsPanel] || "账号资料";
  return {
    title,
    summary: `当前打开的是“${title}”设置弹窗，用来验证我的页是否具备正式 App 必需的账号、通知、合规和支持能力。`,
    tags: ["我的页", "设置弹窗", title],
    goals: [
      "确认该设置是否从我的页入口自然进入。",
      "确认字段数量适合弹窗承载，不需要单独页面。",
      "确认保存、提交或查看协议的操作反馈明确。",
    ],
    actions: [
      "查看当前设置项。",
      "点击保存、提交或检查更新。",
      "关闭弹窗回到我的页继续查看其他设置。",
    ],
    review: [
      "账号安全、账号注销、隐私政策是上线前重点。",
      "通知设置要和消息页、推送能力保持一致。",
      "地区与地图服务要明确是 App 设置，不是设备地图详情。",
    ],
    backend: [
      "用户资料、通知偏好、地区地图配置、反馈提交、协议版本、账号注销。",
      "设置项需要和权限申请、隐私授权、版本发布流程联动。",
    ],
  };
}

function h5PanelInfo() {
  return {
    title: "帮助中心",
    summary: "帮助中心弹窗模拟可由 H5 承接的内容，适合承载 FAQ、协议、设备说明和客服入口。",
    tags: ["H5 内容", "帮助中心", "协议入口"],
    goals: [
      "确认哪些内容适合用 H5 跨端复用。",
      "确认 H5 能从设备上下文进入对应说明。",
      "确认在线客服能和 AI 客服衔接。",
    ],
    actions: [
      "点击设备使用说明。",
      "点击服务协议与隐私政策。",
      "点击联系在线客服进入 AI 客服。",
    ],
    review: [
      "H5 适合低频内容和运营内容，不适合高频原生设备操作。",
      "小程序后续也可复用帮助、协议、客服、简单设备列表。",
      "H5 与原生之间需要定义登录态、设备上下文和跳转边界。",
    ],
    backend: [
      "帮助内容、协议版本、客服入口、H5 登录态和设备上下文传递。",
    ],
  };
}

function chatPanelInfo() {
  return {
    title: "AI 客服",
    summary: "AI 客服用于回答设备离线、定位不准、分享和配置问题，是用户遇到问题时的低门槛入口。",
    tags: ["AI 问答", "故障排查", "客服"],
    goals: [
      "确认预置问题能覆盖高频设备问题。",
      "确认 AI 回复给出可执行步骤。",
      "确认后续可以扩展转人工客服。",
    ],
    actions: [
      "点击预置问题。",
      "输入问题并发送。",
      "从帮助中心或 AI 页进入客服。",
    ],
    review: [
      "AI 客服需要知道当前设备上下文，否则回答会泛泛。",
      "涉及高风险告警时要引导用户联系紧急联系人。",
      "客服记录是否进入消息中心或工单系统需要定义。",
    ],
    backend: [
      "AI 问答上下文、设备状态、FAQ 知识库、工单创建、转人工。",
    ],
  };
}

function aiResultPanelInfo() {
  return {
    title: "AI 分析结果",
    summary: "AI 分析弹窗展示告警或健康事件的解释方式，重点验证用户是否能理解风险和下一步处理建议。",
    tags: ["AI 解释", "风险建议", "告警处理"],
    goals: [
      "确认 AI 说明不是只给结论，而是解释原因和建议。",
      "确认用户能从弹窗回到告警或设备详情。",
      "确认 AI 表述不过度承诺。",
    ],
    actions: [
      "阅读分析结果。",
      "关闭弹窗返回当前页面。",
      "结合告警卡片说明处理路径。",
    ],
    review: [
      "高风险事件要保留人工确认和紧急联系人动作。",
      "AI 解释要能追溯到设备状态和规则。",
      "健康分析不能写成医疗诊断。",
    ],
    backend: [
      "告警上下文、健康数据、规则引擎结果、AI 总结接口。",
    ],
  };
}

function logoutPanelInfo() {
  return {
    title: "退出登录确认",
    summary: "退出登录弹窗用于避免用户在我的页误触退出，属于账号安全和基础体验的一部分。",
    tags: ["二次确认", "账号安全", "退出登录"],
    goals: [
      "确认退出登录不会被误触。",
      "确认用户知道退出后需要重新登录。",
      "确认取消动作清晰可见。",
    ],
    actions: [
      "点击退出登录返回登录页。",
      "点击取消或关闭保留当前登录状态。",
    ],
    review: [
      "退出登录和账号注销必须区分。",
      "退出时是否注销推送 Token 要由服务端和 App 共同处理。",
    ],
    backend: [
      "退出登录、Token 清理、推送 Token 注销、会话失效。",
    ],
  };
}

function renderLogin() {
  const L = LOCALES[state.locale] || LOCALES["zh-CN"];
  const canLogin = state.agreedToTerms;
  const disabledCls = canLogin ? "" : " mp-btn-disabled";
  return `
    <div class="login-screen miniprogram-login">
      <div class="login-visual">
        <div class="login-map" aria-hidden="true"></div>
        <div class="brand-lockup">
          <div class="brand-mark">${icon("radio-tower")}</div>
          <div>
            <strong>${L.brand.name}</strong>
            <span>${L.brand.tagline}</span>
          </div>
        </div>
        <div class="login-hero-copy">
          <h1>${L.login.hero}</h1>
          <p>${L.login.desc}</p>
        </div>
      </div>
      <div class="login-form mp-login-actions safe-bottom">
        <label class="mp-agreement">
          <input type="checkbox" data-action="toggle-agreement" ${state.agreedToTerms ? "checked" : ""} />
          <span>${L.login.agreePrefix}
            <button type="button" class="mp-link" data-action="open-h5">${L.login.userAgreement}</button>
            <button type="button" class="mp-link" data-action="toast-policy">${L.login.privacy}</button>
          </span>
        </label>
        <button type="button" class="mp-btn mp-btn-wechat mp-btn-block${disabledCls}" data-action="wechat-login" ${canLogin ? "" : "disabled"}>
          ${icon("message-circle")} ${L.login.wechatLogin}
        </button>
        <button type="button" class="mp-btn mp-btn-default mp-btn-block mp-btn-phone${disabledCls}" data-action="phone-login" ${canLogin ? "" : "disabled"}>
          <span class="mp-open-type">${L.login.openTypePhone}</span>
          ${icon("phone")} ${L.login.phoneLogin}
        </button>
        <button type="button" class="mp-text-link" data-action="quick-demo">${L.login.guestDemo}</button>
        <p class="version-note">${L.brand.subtitle}</p>
      </div>
    </div>
  `;
}

function renderShell() {
  const L = LOCALES[state.locale] || LOCALES["zh-CN"];
  const titleMap = {
    map: L.nav.map,
    devices: L.nav.devices,
    messages: L.nav.messages,
    mine: L.nav.mine,
  };
  const title = titleMap[state.tab];
  return `
    ${renderHeader(title)}
    <div class="screen-body">
      ${state.tab === "map" ? renderGlobalMap() : ""}
      ${state.tab === "devices" ? renderDevices() : ""}
      ${state.tab === "messages" ? renderMessages() : ""}
      ${state.tab === "mine" ? renderMine() : ""}
    </div>
    ${renderBottomNav()}
  `;
}

function renderMpCapsule() {
  return `
    <div class="mp-capsule-mock" aria-hidden="true" title="wx.getMenuButtonBoundingClientRect()">
      <span class="mp-capsule-dot"></span>
      <span class="mp-capsule-divider"></span>
      <span class="mp-capsule-ring"></span>
    </div>
  `;
}

function renderHeader(title, back = false) {
  const L = LOCALES[state.locale] || LOCALES["zh-CN"];
  const showAddDevice = !back && ["map", "devices"].includes(state.tab);
  const showRefresh = back || state.tab !== "mine";
  const showPageActions = showAddDevice || showRefresh;
  const pageActionsClass = back ? "header-page-actions is-detail" : "header-page-actions";
  return `
    <header class="app-header mp-custom-nav">
      <div class="status-bar"><span>09:41</span><span>${icon("wifi")} ${icon("battery-medium")}</span></div>
      <div class="mp-nav-bar${back ? " has-back" : ""}">
        ${back ? `<button class="back-button hoverable" type="button" data-action="back" aria-label="返回">${icon("chevron-left")}</button>` : ""}
        <h1 class="mp-nav-title">${title}</h1>
        ${renderMpCapsule()}
      </div>
      ${showPageActions ? `
        <div class="${pageActionsClass}">
          ${showAddDevice ? `<button class="icon-button hoverable" type="button" data-action="open-add-device" aria-label="${L.common.addDevice}" title="${L.common.addDevice}">${icon("plus")}</button>` : ""}
          ${showRefresh ? `<button class="icon-button hoverable" type="button" data-action="toast-sync" aria-label="同步数据" title="同步">${icon("refresh-cw")}</button>` : ""}
        </div>
      ` : ""}
    </header>
  `;
}

function renderBottomNav() {
  const L = LOCALES[state.locale] || LOCALES["zh-CN"];
  const nav = [
    ["map", "map", L.nav.map],
    ["devices", "radio-receiver", L.nav.devices],
    ["messages", "bell", L.nav.messages],
    ["mine", "user-round", L.nav.mine],
  ];
  return `
    <nav class="bottom-nav mp-tabbar" aria-label="底部导航">
      ${nav
        .map(
          ([tab, iconName, label]) => `
            <button class="nav-button ${state.tab === tab ? "active" : ""}" type="button" data-tab="${tab}" aria-current="${state.tab === tab ? "page" : "false"}">
              ${icon(iconName)}
              <span class="nav-label">${label}</span>
            </button>
          `,
        )
        .join("")}
    </nav>
  `;
}

function renderGlobalMap() {
  const isDemoEmpty = state.mapLoadState === "empty";
  const devices = isDemoEmpty ? [] : filteredMapDevices();
  const locationDenied = state.locationPermission === "denied";
  const isLoading = state.mapLoadState === "loading" || state.pullRefreshing;
  const isError = state.mapLoadState === "error";
  const showEmpty = isDemoEmpty || (state.mapFilter === "all" && !devices.length && state.mapLoadState === "ready");

  return `
    <section class="section map-home-section">
      <div class="mp-pull-refresh ${state.pullRefreshing ? "refreshing" : ""}" aria-label="下拉刷新">
        <span>${state.pullRefreshing ? "正在刷新设备位置…" : "下拉刷新最新位置 · onPullDownRefresh"}</span>
        ${!state.pullRefreshing ? `<button class="mp-link-btn hoverable" type="button" data-action="pull-refresh">模拟下拉</button>` : ""}
      </div>
      <div class="category-filter" aria-label="设备筛选">
        ${mapFilters().map((filter) => `
          <button class="hoverable ${state.mapFilter === filter.id ? "active" : ""}" type="button" data-map-filter="${filter.id}">
            ${filter.label}
          </button>
        `).join("")}
      </div>
      <div class="map-result-panel">
        <div class="map-result-header">
          <div>
            <strong>${mapFilterLabel()} · ${devices.length} 台</strong>
            <span>${locationDenied ? "定位未授权，仅展示设备列表" : "点击设备卡高亮地图标记，点击标记进入详情"}</span>
          </div>
        </div>
        <div class="map-device-strip compact" aria-label="筛选后的设备">
          ${showEmpty ? renderMapEmptyState() : devices.length ? devices.map(renderMapDeviceCard).join("") : `<div class="map-empty-card">当前筛选无设备</div>`}
        </div>
      </div>
      ${locationDenied ? renderLocationDeniedMap() : renderGlobalMapCard(devices, isLoading, isError)}
    </section>
  `;
}

function renderMapEmptyState() {
  return `
    <div class="map-empty-state">
      <strong>${icon("radio-receiver")} 还没有绑定设备</strong>
      <p>添加第一台设备后即可在地图查看位置与安全状态</p>
      <button class="mp-btn mp-btn-primary hoverable" type="button" data-action="open-add-device">${icon("plus")} 添加设备</button>
    </div>
  `;
}

function renderLocationDeniedMap() {
  return `
    <div class="global-map-card location-denied-card" role="region" aria-label="定位权限未开启">
      <div class="location-denied-body">
        ${icon("map-pin-off")}
        <strong>未开启位置权限</strong>
        <p>无法展示您与设备的相对位置。设备列表仍可使用，开启权限后可恢复地图。</p>
        <button class="mp-btn mp-btn-primary hoverable" type="button" data-action="open-location-settings">${icon("settings")} 去开启权限</button>
        <button class="mp-link-btn hoverable" type="button" data-action="request-location">重新授权</button>
      </div>
    </div>
  `;
}

function renderGlobalMapCard(devices, isLoading, isError) {
  return `
    <div class="global-map-card ${isLoading ? "is-loading" : ""} ${isError ? "is-error" : ""}" role="img" aria-label="全局地图">
      ${isLoading ? `<div class="map-skeleton" aria-busy="true"><span></span><span></span><span></span></div>` : ""}
      ${isError ? `
        <div class="map-state-overlay error">
          <strong>${icon("wifi-off")} 加载失败</strong>
          <p>网络异常，无法获取设备位置</p>
          <button class="mp-btn mp-btn-default hoverable" type="button" data-action="retry-map-load">重试</button>
        </div>
      ` : ""}
      ${!isLoading && !isError ? `
        <div class="global-zone zone-home"></div>
        <div class="global-zone zone-school"></div>
        <div class="global-road road-one"></div>
        <div class="global-road road-two"></div>
        ${devices.map(renderGlobalMapPin).join("")}
        <button class="map-fab layer hoverable" type="button" data-action="toast-map-layer" aria-label="地图图层">${icon("layers")}</button>
        <div class="map-provider-note">${icon("map")} 原生 map · 腾讯底图 · GCJ-02 · ${state.highlightedMapDeviceId ? "已高亮选中设备" : "实时 10 分钟前"}</div>
      ` : ""}
    </div>
  `;
}

function renderGlobalMapPin(device) {
  const alarms = deviceAlarms(device.id);
  const severityClass = device.status === "offline" ? "offline" : alarms.some((alarm) => alarm.severity === "high") ? "urgent" : alarms.length ? "warning" : "";
  const statusText = alarms[0]?.type || statusLabel(device.status);
  const expandedClass = shouldExpandMapPin(device) ? "expanded" : "compact-pin";
  const highlighted = state.highlightedMapDeviceId === device.id;
  return `
    <button class="global-map-pin hoverable ${device.mapClass} ${severityClass} category-${device.category} ${expandedClass} ${highlighted ? "highlighted" : ""}" type="button" data-open-device="${device.id}" data-detail-tab="map" aria-label="${deviceDisplayName(device)} ${devicePlace(device)} ${statusText}">
      <span>${icon(deviceIcon(device))}</span>
      <strong>${deviceDisplayName(device)}</strong>
      <small>${devicePlace(device)} · ${statusText}</small>
    </button>
  `;
}

function renderMapDeviceCard(device) {
  const alarms = deviceAlarms(device.id);
  const highlighted = state.highlightedMapDeviceId === device.id;
  return `
    <div class="map-device-card-wrap ${highlighted ? "highlighted" : ""}">
      <button class="map-device-card hoverable ${device.status} ${alarms.length ? "has-alert" : ""}" type="button" data-action="highlight-map-device" data-device-id="${device.id}">
        <div class="map-device-avatar ${device.color}">${icon(deviceIcon(device))}</div>
        <div>
          <strong>${deviceDisplayName(device)}</strong>
          <span>${device.categoryLabel} · ${statusLabel(device.status)} · ${devicePlace(device)}</span>
          <small>${device.battery}% · ${device.model}${alarms[0] ? ` · ${alarms[0].type}` : ""}</small>
        </div>
      </button>
      <button class="map-card-open hoverable" type="button" data-action="open-device-from-card" data-open-device="${device.id}" data-detail-tab="map" aria-label="进入详情">${icon("chevron-right")}</button>
    </div>
  `;
}

function renderDevices() {
  const onlineCount = mock.devices.filter((device) => device.status === "online").length;
  const alertCount = mock.alarms.filter((alarm) => alarm.status !== "已处理").length;
  return `
    <section class="section">
      <div class="home-summary">
        <button class="summary-tile" type="button" data-action="toast-sync">
          ${icon("activity")}
          <span>在线设备</span>
          <strong>${onlineCount}/${mock.devices.length}</strong>
        </button>
        <button class="summary-tile" type="button" data-tab="messages">
          ${icon("bell")}
          <span>待处理提醒</span>
          <strong>${alertCount}</strong>
        </button>
      </div>
      <div class="device-list">
        ${mock.devices.length
          ? mock.devices.map(renderDeviceCard).join("")
          : `<button class="add-device-card" type="button" data-action="open-add-device">
              <span>${icon("scan-line")}</span>
              <div>
                <strong>添加你的第一台设备</strong>
                <small>扫码、输入 IMEI 或 BLE 扫描绑定人、宠物和物品设备</small>
              </div>
              ${icon("chevron-right")}
            </button>`}
      </div>
    </section>
  `;
}

function renderDeviceCard(device) {
  return `
    <button class="device-card ${device.status}" type="button" data-open-device="${device.id}">
      <div class="device-top">
        <div class="device-name">
          <strong>${deviceDisplayName(device)}</strong>
          <span>${device.model} · ${device.scenario}</span>
        </div>
        <span class="status-pill ${statusClass(device.status)}">${statusLabel(device.status)}</span>
      </div>
      <div class="device-meta-grid">
        <span>${icon("battery-medium")}<strong>${device.battery}%</strong><small>电量</small></span>
        <span>${icon("navigation")}<strong>${device.locateType}</strong><small>定位</small></span>
        <span>${icon("signal")}<strong>${device.signal}</strong><small>信号</small></span>
      </div>
      <div class="device-bottom">
        <span>${device.location}</span>
        <span>${device.lastEvent}</span>
      </div>
    </button>
  `;
}

function renderDetail() {
  const device = getDevice();
  return `
    ${renderHeader(device.name, true)}
    <div class="screen-body with-detail-tabs">
      ${renderDeviceHero(device)}
      <div class="tab-strip" aria-label="设备详情标签">
        ${[
          ["overview", "概览"],
          ["map", "地图"],
          ["health", "健康"],
          ["alarms", "告警"],
          ["config", "配置"],
        ]
          .map(([tab, label]) => `<button class="tab-button ${state.detailTab === tab ? "active" : ""}" type="button" data-detail-tab="${tab}">${label}</button>`)
          .join("")}
      </div>
      ${state.detailTab === "overview" ? renderOverview(device) : ""}
      ${state.detailTab === "map" ? renderMap(device) : ""}
      ${state.detailTab === "health" ? renderHealth(device) : ""}
      ${state.detailTab === "alarms" ? renderAlarmSection(device) : ""}
      ${state.detailTab === "config" ? renderConfig(device) : ""}
    </div>
    ${renderBottomNav()}
  `;
}

function renderDeviceHero(device) {
  return `
    <section class="detail-hero">
      <div class="detail-hero-top">
        <div>
          <h2>${deviceDisplayName(device)}</h2>
          <p>${device.permission === "owner" ? "我的设备" : "分享给我的设备"} · ${device.location}</p>
        </div>
        <div class="device-avatar ${device.color}">${icon(deviceIcon(device))}</div>
      </div>
      <div class="device-stats">
        <div class="stat-tile"><span>状态</span><strong>${statusLabel(device.status)}</strong></div>
        <div class="stat-tile"><span>电量</span><strong>${device.battery}%</strong></div>
        <div class="stat-tile"><span>定位</span><strong>${device.locateType}</strong></div>
      </div>
      <div class="quick-grid">
        <button class="quick-action" type="button" data-action="toast-locate">${icon("crosshair")}定位</button>
        <button class="quick-action" type="button" data-action="toast-find">${icon("volume-2")}查找</button>
        <button class="quick-action" type="button" data-action="open-share">${icon("share-2")}分享</button>
        <button class="quick-action" type="button" data-action="open-edit-device">${icon("settings-2")}管理</button>
      </div>
    </section>
  `;
}

function renderOverview(device) {
  const alarms = deviceAlarms(device.id);
  return `
    <section class="section">
      <div class="metric-grid">
        <div class="metric-card"><span>心率</span><strong>${device.metrics.heart || "--"}</strong><small>bpm · 今日平均</small></div>
        <div class="metric-card"><span>步数</span><strong>${device.metrics.steps || "--"}</strong><small>较 7 日均值 -23%</small></div>
        <div class="metric-card"><span>活跃</span><strong>${device.metrics.active || "--"}</strong><small>分钟 · 今日</small></div>
        <div class="metric-card"><span>AI 风险</span><strong>${alarms.length ? "中高" : "正常"}</strong><small>${alarms[0]?.type || "暂无异常"}</small></div>
      </div>
    </section>
    <section class="section">
      <div class="insight-card warning">
        <h3>${icon("sparkles")}AI 今日摘要</h3>
        <p>今日活动量较过去 7 天平均值下降，夜间心率波动略高。建议关注休息状态，必要时提醒用户进行轻量活动。</p>
      </div>
    </section>
    <section class="section">
      <div class="section-header">
        <h2>最近事件</h2>
        <button class="text-button" type="button" data-detail-tab="alarms">查看全部</button>
      </div>
      <div class="card-list">
        ${(alarms.length ? alarms : mock.alarms.slice(0, 1)).map(renderAlarmCard).join("")}
      </div>
    </section>
  `;
}

function renderMap(device) {
  return `
    <section class="section">
      <div class="map-card" role="img" aria-label="模拟地图，展示设备位置、轨迹和围栏">
        <div class="geofence"></div>
        <div class="track-line"></div>
        <div class="map-pin main">${icon("map-pin")}</div>
        <div class="map-pin alert">${icon("triangle-alert")}</div>
        <div class="map-caption">
          <span>${deviceDisplayName(device)} · ${device.locateType}</span>
          <span>原生 map · 腾讯底图 · GCJ-02</span>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="map-action-grid">
        <button class="quick-action compact hoverable" type="button" data-action="toast-locate">${icon("crosshair")}实时定位</button>
        <button class="quick-action compact hoverable" type="button" data-action="toast-open-location">${icon("navigation")}微信导航</button>
        <button class="quick-action compact hoverable" type="button" data-action="toast-track">${icon("route")}轨迹回放</button>
        <button class="quick-action compact hoverable" type="button" data-action="open-geofence">${icon("shield-plus")}新增围栏</button>
      </div>
    </section>
    <section class="section">
      <div class="section-header">
        <div>
          <h2>轨迹回放</h2>
          <p>支持按今天、昨天、自定义时间查询</p>
        </div>
        <span class="pill">3 个关键点</span>
      </div>
      <div class="segmented-control" aria-label="轨迹时间筛选">
        <button class="active" type="button">今天</button>
        <button type="button">昨天</button>
        <button type="button">自定义</button>
      </div>
      <div class="timeline">
        ${mock.track.map((item) => `
          <div class="timeline-item">
            <div class="timeline-time">${item.time}</div>
            <div><strong>${item.title}</strong><span>${item.desc}</span></div>
          </div>
        `).join("")}
      </div>
    </section>
    <section class="section">
      <div class="section-header">
        <div>
          <h2>安全围栏</h2>
          <p>圆形 / 多边形，支持进出提醒</p>
        </div>
        <button class="text-button" type="button" data-action="open-geofence">新建</button>
      </div>
      <div class="card-list">
        ${mock.geofences.map((fence) => `
          <button class="list-card" type="button" data-action="open-geofence">
            <div class="list-row">
              <div>
                <strong>${fence.name}</strong>
                <span>${fence.shape} · ${fence.radius} · ${fence.trigger}</span>
                <small>${fence.schedule}</small>
              </div>
              <span class="status-pill ${fence.status === "启用" ? "online" : "warning"}">${fence.status}</span>
            </div>
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function renderHealth(device) {
  if (device.category === "pet") return renderPetHealth(device);
  if (device.category === "item") return renderItemHealth(device);
  const range = mock.healthRanges[state.healthRange] || mock.healthRanges.week;
  return `
    <section class="section">
      <div class="metric-grid">
        <div class="metric-card"><span>平均心率</span><strong>${device.metrics.heart || "--"}</strong><small>bpm</small></div>
        <div class="metric-card"><span>步数</span><strong>${device.metrics.steps || "--"}</strong><small>今日</small></div>
      </div>
    </section>
    <section class="section">
      ${renderHealthRangeTabs()}
      <div class="chart-card">
        <div class="section-header">
          <div>
            <h2>${range.summaryTitle}</h2>
            <p>${range.label}活动分钟数</p>
          </div>
        </div>
        <div class="bar-chart" aria-label="${range.summaryTitle}">
          ${range.bars.map((height) => `<div class="bar" style="height:${height + 30}px"></div>`).join("")}
        </div>
        <div class="chart-labels">${range.labels.map((label) => `<span>${label}</span>`).join("")}</div>
      </div>
    </section>
    <section class="section">
      <div class="insight-card">
        <h3>${icon("brain")}AI 健康分析</h3>
        <p>${range.summary}</p>
      </div>
    </section>
  `;
}

function renderHealthRangeTabs() {
  const ranges = [
    ["day", "日"],
    ["week", "周"],
    ["month", "月"],
  ];
  return `
    <div class="segmented-control" aria-label="健康数据周期">
      ${ranges.map(([id, label]) => `<button class="${state.healthRange === id ? "active" : ""}" type="button" data-health-range="${id}">${label}</button>`).join("")}
    </div>
  `;
}

function renderPetHealth(device) {
  const range = mock.healthRanges[state.healthRange] || mock.healthRanges.week;
  const pet = device.pet;
  return `
    ${pet ? `
    <section class="section">
      <div class="pet-profile-card">
        <div class="pet-profile-head">
          <div class="device-avatar ${device.color}">${icon("paw-print")}</div>
          <div>
            <strong>${deviceDisplayName(device)}</strong>
            <span>${pet.species} · ${pet.breed} · ${pet.gender}${pet.neutered ? ` · ${pet.neutered}` : ""}</span>
          </div>
          <button class="small-icon-button" type="button" data-action="toast-pet-edit" aria-label="编辑档案">${icon("pencil")}</button>
        </div>
        <div class="pet-profile-grid">
          <div><span>年龄</span><strong>${pet.ageLabel}</strong><small>${pet.birthday}</small></div>
          <div><span>体重</span><strong>${pet.weight}</strong><small>${pet.weightTrend}</small></div>
          <div><span>最近疫苗</span><strong>${pet.vaccine}</strong><small>${pet.nextVaccine}</small></div>
        </div>
      </div>
    </section>
    ` : ""}
    <section class="section">
      <div class="metric-grid">
        <div class="metric-card"><span>今日活动</span><strong>${device.metrics.active || "--"}</strong><small>分钟</small></div>
        <div class="metric-card"><span>活动步数</span><strong>${device.metrics.steps || "--"}</strong><small>宠物运动量</small></div>
        <div class="metric-card"><span>围栏状态</span><strong>${deviceAlarms(device.id).length ? "异常" : "正常"}</strong><small>${deviceAlarms(device.id)[0]?.type || "未离开安全区域"}</small></div>
        <div class="metric-card"><span>定位频率</span><strong>高</strong><small>围栏外自动提高</small></div>
      </div>
    </section>
    <section class="section">
      ${renderHealthRangeTabs()}
      <div class="chart-card">
        <div class="section-header">
          <div>
            <h2>${range.label}活动趋势</h2>
            <p>用于判断宠物运动量和异常活动</p>
          </div>
        </div>
        <div class="bar-chart" aria-label="宠物${range.label}活动趋势">
          ${range.bars.map((height) => `<div class="bar" style="height:${height + 24}px"></div>`).join("")}
        </div>
        <div class="chart-labels">${range.labels.map((label) => `<span>${label}</span>`).join("")}</div>
      </div>
    </section>
    <section class="section">
      <div class="insight-card">
        <h3>${icon("sparkles")}AI 宠物分析</h3>
        <p>${deviceAlarms(device.id)[0]?.ai || "宠物活动量处于正常范围，定位点集中在常用活动区域。后续可扩展体重、疫苗、喂养和活动日报。"}</p>
      </div>
    </section>
  `;
}

function renderItemHealth(device) {
  return `
    <section class="section">
      <div class="metric-grid">
        <div class="metric-card"><span>电量</span><strong>${device.battery}%</strong><small>${device.battery <= 30 ? "建议处理" : "状态正常"}</small></div>
        <div class="metric-card"><span>连接方式</span><strong>${device.locateType}</strong><small>最近位置来源</small></div>
        <div class="metric-card"><span>离身提醒</span><strong>${deviceAlarms(device.id).length ? "有提醒" : "正常"}</strong><small>${device.lastEvent}</small></div>
        <div class="metric-card"><span>最后位置</span><strong>${device.status === "online" ? "可用" : "离线"}</strong><small>${device.location}</small></div>
      </div>
    </section>
    <section class="section">
      <div class="insight-card warning">
        <h3>${icon("package")}物品状态</h3>
        <p>物品类设备重点展示位置、连接状态、低电量和离身提醒，不展示人用健康指标。</p>
      </div>
    </section>
  `;
}

function renderAlarmSection(device) {
  const alarms = deviceAlarms(device.id);
  return `
    <section class="section">
      <div class="card-list">
        ${(alarms.length ? alarms : mock.alarms).map(renderAlarmCard).join("")}
      </div>
    </section>
    <section class="section">
      <div class="insight-card danger">
        <h3>${icon("sparkles")}AI 预警解释</h3>
        <p>${alarms[0]?.ai || "当前设备暂无高风险事件。AI 会结合位置、状态、历史行为和健康数据解释告警原因。"}</p>
      </div>
    </section>
  `;
}

function renderAlarmCard(alarm) {
  const pillClass = alarm.severity === "high" ? "offline" : "warning";
  return `
    <button class="list-card alarm-card ${alarm.severity}" type="button" data-action="alarm-ai" data-alarm-id="${alarm.id}">
      <div class="alarm-card-top">
        <strong>${alarm.type}</strong>
        <span class="status-pill ${pillClass}">${alarm.status}</span>
      </div>
      <div class="alarm-card-body">
        <span>${alarm.time} · ${alarm.description}</span>
        ${icon("chevron-right")}
      </div>
    </button>
  `;
}

function renderConfig(device) {
  const plugin = devicePluginInfo(device);
  return `
    <section class="section">
      <div class="section-header">
        <div>
          <h2>设备配置</h2>
          <p>管理设备连接、定位、告警、联系人和家庭配置</p>
        </div>
      </div>
      <div class="plugin-summary-card">
        <div class="plugin-summary-head">
          <span class="settings-icon">${icon("puzzle")}</span>
          <div>
            <strong>设备插件</strong>
            <small>${plugin.tsl} · ${plugin.panel}</small>
          </div>
        </div>
        <div class="plugin-chip-row">
          ${plugin.enabled.map((item) => `<span class="mini-chip">${item}</span>`).join("")}
        </div>
        <button class="ghost-button full-width" type="button" data-action="toast-panel-update">${icon("refresh-cw")}检查面板更新</button>
      </div>
      <div class="config-category-grid">
        ${mock.configCategories.map((item) => `
          <button class="config-category-card" type="button" data-config-category="${item.id}">
            ${icon(item.icon)}
            <div><strong>${item.title}</strong><span>${item.desc}</span></div>
          </button>
        `).join("")}
      </div>
    </section>
    <section class="section">
      <div class="config-list">
        <div class="config-card">
          <h3>${icon("wifi")}Home WiFi</h3>
          ${mock.configs.homeWifi.map((wifi) => `
            <div class="config-row"><div><strong>${wifi.ssid}</strong><span>来源：${wifi.source} · 信号${wifi.strength}</span></div><span class="mini-chip">可复制</span></div>
          `).join("")}
        </div>
        <div class="config-card">
          <h3>${icon("bluetooth")}Home Beacon</h3>
          ${mock.configs.homeBeacon.map((beacon) => `
            <div class="config-row"><div><strong>${beacon.name}</strong><span>${beacon.uuid} · 来源：${beacon.source}</span></div><span class="mini-chip">可复制</span></div>
          `).join("")}
        </div>
        <div class="config-card">
          <h3>${icon("copy")}复制配置到其他设备</h3>
          <p>将当前设备保存的 Home WiFi 和 Home Beacon 配置复制到其他兼容设备。</p>
          <div class="copy-box">
            <div class="field">
              <label for="target-device">目标设备</label>
              <select id="target-device">
                ${mock.devices.filter((item) => item.id !== device.id).map((item) => `<option>${item.name} · ${item.model}</option>`).join("")}
              </select>
            </div>
            <button class="primary-button" type="button" data-action="copy-config">${icon("copy-check")}复制 Home WiFi / Home Beacon</button>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="danger-zone">
        <div>
          <strong>设备管理</strong>
          <span>编辑名称、使用者信息，或解绑当前设备</span>
        </div>
        <button class="ghost-button" type="button" data-action="open-edit-device">${icon("settings-2")}管理</button>
      </div>
    </section>
  `;
}

function renderMessages() {
  return `
    <section class="section">
      <div class="section-header">
        <div>
          <h2>待处理</h2>
          <p>分享邀请、系统通知和设备提醒</p>
        </div>
      </div>
      <div class="card-list">
        ${mock.systemMessages.map((message) => `
          <div class="list-card message-card">
            <div class="message-card-top">
              <strong>${message.title}</strong>
              <span class="status-pill ${message.type === "share" ? "warning" : "info"}">${message.status}</span>
            </div>
            <p class="message-desc">${message.desc}</p>
            <div class="inline-actions">
              ${message.type === "share"
                ? `<button class="mp-link-btn hoverable" type="button" data-action="accept-share">接受</button><button class="mp-link-btn warn hoverable" type="button" data-action="reject-share">拒绝</button>`
                : `<button class="mp-link-btn hoverable" type="button" data-action="mark-read">标为已读</button>`}
            </div>
          </div>
        `).join("")}
      </div>
    </section>
    <section class="section">
      <div class="section-header">
        <div>
          <h2>设备告警</h2>
          <p>跌倒、离线、低电量等消息</p>
        </div>
      </div>
      <div class="card-list">
        ${mock.alarms.map(renderAlarmCard).join("")}
      </div>
    </section>
  `;
}

function renderAiHome() {
  return `
    <section class="section">
      <div class="ai-grid">
        <button class="list-card" type="button" data-action="ai-health">
          <div class="list-row"><div><strong>AI 健康分析</strong><span>生成日报、周报和趋势解释</span></div>${icon("chevron-right")}</div>
        </button>
        <button class="list-card" type="button" data-action="ai-alert">
          <div class="list-row"><div><strong>AI 预警解释</strong><span>解释跌倒、离线、低电量等事件</span></div>${icon("chevron-right")}</div>
        </button>
        <button class="list-card" type="button" data-action="open-chat">
          <div class="list-row"><div><strong>AI 客服</strong><span>排查定位不准、设备离线、分享和配置问题</span></div>${icon("chevron-right")}</div>
        </button>
      </div>
    </section>
    <section class="section">
      <div class="insight-card">
        <h3>${icon("sparkles")}AI 服务摘要</h3>
        <p>健康分析、告警解释和客服建议会优先结合设备状态、历史行为与健康趋势生成。</p>
      </div>
    </section>
  `;
}

function renderMine() {
  const mineGroups = [
    {
      title: "账号",
      items: [
        ["profile", "user-round-pen", "账号资料", "头像、昵称、邮箱和手机号"],
        ["security", "shield-check", "账号与安全", "修改密码、登录设备和账号注销"],
      ],
    },
    {
      title: "通知与地区",
      items: [
        ["notifications", "bell-ring", "通知设置", "告警推送、系统通知和免打扰"],
        ["map", "map-pinned", "地区与地图服务", "国家/地区、地图显示和定位权限"],
      ],
    },
    {
      title: "服务与套餐",
      items: [
        ["service", "credit-card", "我的服务", "SIM 套餐、订单、支付方式和发票"],
      ],
    },
    {
      title: "帮助与关于",
      items: [
        ["help", "circle-help", "帮助中心", "设备说明、常见问题和在线客服"],
        ["feedback", "message-square-text", "意见反馈", "提交问题、建议或联系人工客服"],
        ["about", "file-check-2", "关于与协议", "用户协议、隐私政策和版本信息"],
      ],
    },
  ];
  return `
    <section class="section">
      <div class="profile-card">
        <div class="profile-avatar">${icon("user-round")}</div>
        <div>
          <strong>${mock.user.name}</strong>
          <span>${mock.user.account} · ${mock.user.email}</span>
        </div>
        <button class="small-icon-button" type="button" data-action="open-settings" data-settings="profile" aria-label="编辑资料">${icon("pencil")}</button>
      </div>
    </section>
    ${mineGroups.map((group) => `
      <section class="section">
        <div class="settings-group-title">${group.title}</div>
        <div class="settings-list">
          ${group.items.map(([panel, iconName, title, desc]) => renderSettingsItem(panel, iconName, title, desc)).join("")}
        </div>
      </section>
    `).join("")}
    ${renderCapabilityLibrary()}
    ${renderBrandThemeDemo()}
    <section class="section">
      <button class="logout-card" type="button" data-action="logout-confirm">
        <div>
          <strong>退出登录</strong>
          <span>退出后需要重新登录账号</span>
        </div>
        ${icon("log-out")}
      </button>
    </section>
  `;
}

function renderCapabilityLibrary() {
  return `
    <section class="section">
      <div class="manifest-card">
        <div class="section-header compact">
          <div>
            <h2>设备能力库</h2>
            <p>${mock.capabilityLibrary.length} 个产品已接入</p>
          </div>
          <span class="mini-chip">manifest</span>
        </div>
        <div class="capability-list">
          ${mock.capabilityLibrary.map((item) => `
            <div class="capability-row">
              <strong>${item.model}</strong>
              <span>${item.category} · ${item.version}</span>
            </div>
          `).join("")}
        </div>
        <div class="inline-actions">
          <button class="ghost-button" type="button" data-action="toast-supported-models">${icon("list-checks")}支持的设备型号清单</button>
          <button class="ghost-button" type="button" data-action="toast-third-party-device">${icon("plug-zap")}接入第三方设备</button>
        </div>
      </div>
    </section>
  `;
}

function renderBrandThemeDemo() {
  const theme = currentBrandTheme();
  return `
    <section class="section">
      <div class="brand-theme-card">
        <div class="section-header compact">
          <div>
            <h2>品牌主题</h2>
            <p>模拟客户定制 App 外观和 H5 入口</p>
          </div>
          <span class="theme-dot"></span>
        </div>
        <div class="info-list theme-info-list">
          ${[
            ["当前品牌", theme.name],
            ["主题色", theme.color],
            ["隐藏功能", theme.hidden],
            ["自定义 H5 入口", theme.h5],
          ].map(([label, value]) => `
            <div class="info-row">
              <span>${label}</span>
              <strong>${value}</strong>
            </div>
          `).join("")}
        </div>
        <button class="ghost-button full-width" type="button" data-action="switch-brand-theme">${icon("paintbrush")}切换品牌主题</button>
      </div>
    </section>
  `;
}

function renderSettingsItem(panel, iconName, title, desc) {
  const action = panel === "help" ? "open-h5" : "open-settings";
  const settingsAttr = panel === "help" ? "" : ` data-settings="${panel}"`;
  return `
    <button class="settings-item" type="button" data-action="${action}"${settingsAttr}>
      <span class="settings-icon">${icon(iconName)}</span>
      <div>
        <strong>${title}</strong>
        <small>${desc}</small>
      </div>
      ${icon("chevron-right")}
    </button>
  `;
}

function renderModal() {
  if (state.modal === "location-guide") return renderLocationGuideModal();
  if (state.modal === "share") return renderShareModal();
  if (state.modal === "add-device") return renderAddDeviceModal();
  if (state.modal === "edit-device") return renderEditDeviceModal();
  if (state.modal === "geofence") return renderGeofenceModal();
  if (state.modal === "config-category") return renderConfigCategoryModal();
  if (state.modal === "settings") return renderSettingsModal();
  if (state.modal === "h5") return renderH5Modal();
  if (state.modal === "chat") return renderChatModal();
  if (state.modal === "ai") return renderAiModal();
  return "";
}

function renderLocationGuideModal() {
  const body = `
    <p>需要位置权限以展示您与设备的相对位置。我们仅在您使用地图时获取<strong>前台定位</strong>，不会在后台持续追踪。</p>
    <div class="panel-card">
      <h3>${icon("shield-check")}合规说明</h3>
      <p>首次授权前明确告知用途；《隐私政策》单独说明位置信息的收集与存储规则。后台定位需额外向微信申请。</p>
    </div>
  `;
  const footer = `
    <div class="mp-sheet-footer-row">
      ${mpBtn("default", "暂不开启", "deny-location")}
      ${mpBtn("primary", `${icon("map-pin")} 允许使用位置`, "request-location")}
    </div>
  `;
  return wrapMpSheet("开启位置权限", body, footer);
}

function renderShareModal() {
  const device = getDevice();
  const body = `
    <div class="field">
      <label for="share-account">家人账号</label>
      <input id="share-account" type="email" value="jason.chen@email.com" />
    </div>
    <div class="field">
      <label for="share-permission">权限</label>
      <select id="share-permission">
        <option>查看 + 接收告警</option>
        <option>仅查看</option>
        <option>协助管理</option>
      </select>
    </div>
    <section class="section">
      <div class="section-header"><h2>已有分享</h2></div>
      <div class="card-list">
        ${mock.shares.map((share) => `
          <div class="list-card">
            <div class="share-row"><div><strong>${share.name}</strong><span>${share.account} · ${share.permission}</span></div><span class="status-pill info">${share.status}</span></div>
            <div class="inline-actions">
              <button class="mp-link-btn" type="button" data-action="resend-share">${share.status === "待接受" ? "重新发送" : "修改权限"}</button>
              <button class="mp-link-btn warn" type="button" data-action="revoke-share">取消分享</button>
            </div>
          </div>
        `).join("")}
      </div>
    </section>
    <section class="section">
      <div class="panel-card">
        <h3>${icon("shield-check")}权限说明</h3>
        <p>设备拥有者可管理配置、分享和解绑；被分享用户默认只能查看位置和接收告警。</p>
      </div>
    </section>
  `;
  const footer = mpBtn("primary", `${icon("send")} 发送邀请`, "send-share", "mp-btn-block");
  return wrapMpSheet(`分享 ${deviceDisplayName(device)}`, body, footer);
}

function renderAddDeviceModal() {
  const body = `
    <div class="mp-tabs" role="tablist" aria-label="添加设备方式">
      <button class="mp-tab ${state.addMode === "scan" ? "active" : ""}" type="button" data-add-mode="scan" role="tab">${icon("scan-line")}扫码</button>
      <button class="mp-tab ${state.addMode === "imei" ? "active" : ""}" type="button" data-add-mode="imei" role="tab">${icon("keyboard")}IMEI</button>
      <button class="mp-tab ${state.addMode === "ble" ? "active" : ""}" type="button" data-add-mode="ble" role="tab">${icon("bluetooth")}BLE</button>
    </div>
    ${renderAutoPanelDownload()}
    ${renderAddDeviceContent()}
    <div class="panel-card">
      <h3>${icon("badge-check")}绑定前确认</h3>
      <p>系统会自动确认设备是否可用、是否已被其他账号绑定，以及当前账号是否可以添加这台设备。</p>
    </div>
  `;
  const footer = renderAddDeviceFooter();
  return wrapMpSheet("添加设备", body, footer);
}

function renderAddDeviceFooter() {
  if (state.addMode === "imei") {
    return mpBtn("primary", `${icon("badge-check")} 校验并绑定`, "bind-device", "mp-btn-block");
  }
  if (state.addMode === "ble") {
    return mpBtn("default", `${icon("bluetooth")} 连接并识别`, "connect-ble", "mp-btn-block");
  }
  return mpBtn("primary", `${icon("scan-line")} 扫码添加`, "toast-scan", "mp-btn-block");
}

function renderAddDeviceContent() {
  if (state.addMode === "imei") {
    return `
      <div class="sheet-section">
        <div class="field">
          <label for="manual-imei">设备 IMEI</label>
          <input id="manual-imei" inputmode="numeric" value="863450071234001" />
        </div>
        <div class="field">
          <label for="device-name">设备名称</label>
          <input id="device-name" value="妈妈手表" />
        </div>
      </div>
    `;
  }
  if (state.addMode === "ble") {
    return `
      <div class="sheet-section">
        <div class="scan-status">
          ${icon("bluetooth-searching")}
          <div><strong>已发现附近设备</strong><span>用于近场绑定、参数读取和出厂配置验证</span></div>
        </div>
        <div class="card-list">
          ${mock.discoveredDevices.map((device) => `
            <div class="list-card">
              <div class="list-row">
                <div><strong>${device.name}</strong><span>${device.model} · ${device.id} · 信号${device.signal}</span></div>
                <button class="mp-btn mp-btn-default mp-btn-mini" type="button" data-action="connect-ble">${icon("link")}连接</button>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }
  return `
    <div class="sheet-section">
      <div class="qr-placeholder">
        ${icon("scan-qr-code")}
        <strong>扫描设备二维码</strong>
        <span>调用 wx.scanCode，识别 IMEI 后进入绑定</span>
      </div>
    </div>
  `;
}

function renderAutoPanelDownload() {
  const steps = [
    "识别到设备型号 EV99 SmartBand",
    "物模型 ev99.tsl 已下载",
    "设备面板已就绪",
  ];
  return `
    <div class="plugin-download-card">
      <div class="plugin-detail-title">
        ${icon("package-check")}
        <div><strong>新型号面板准备</strong><span>添加新设备无需更新 App</span></div>
      </div>
      <div class="download-step-list">
        ${steps.map((step) => `
          <div class="download-step">${icon("check")}<span>${step}</span></div>
        `).join("")}
      </div>
    </div>
  `;
}

function renderEditDeviceModal() {
  const device = getDevice();
  const isOwner = device.permission === "owner";
  const body = `
    <div class="form-grid">
      <div class="field">
        <label for="edit-device-name">设备名称</label>
        <input id="edit-device-name" value="${deviceDisplayName(device)}" />
      </div>
      <div class="field">
        <label for="edit-device-user">使用者</label>
        <input id="edit-device-user" value="${device.model === "EV04" ? "作业人员" : "家庭成员"}" />
      </div>
      <div class="field">
        <label for="edit-phone">紧急联系人手机号</label>
        <input id="edit-phone" value="+86 138 0000 1234" />
      </div>
      <div class="field">
        <label for="edit-note">备注</label>
        <textarea id="edit-note" rows="3">${device.scenario}</textarea>
      </div>
    </div>
    <div class="panel-card ${isOwner ? "" : "muted-panel"}">
      <h3>${icon(isOwner ? "shield-check" : "lock")}当前权限</h3>
      <p>${isOwner ? "你是设备拥有者，可以编辑资料、分享设备、修改配置和解绑设备。" : "这是分享给你的设备，只能查看位置、健康和告警，不能修改配置或解绑。"}</p>
    </div>
  `;
  const footer = `
    ${mpBtn("primary", `${icon("save")} 保存`, "save-device", "mp-btn-block")}
    ${isOwner ? mpBtn("default", `${icon("unlink")} 解绑设备`, "unbind-device", "mp-btn-block mp-btn-warn-outline") : ""}
  `;
  return wrapMpSheet("设备管理", body, footer);
}

function renderGeofenceModal() {
  const body = `
    <div class="mini-map-editor">
      <div class="geofence draft"></div>
      <div class="map-pin main">${icon("map-pin")}</div>
      <span>拖动地图选择区域 · wx.chooseLocation</span>
    </div>
    <div class="form-grid">
      <div class="field">
        <label for="fence-name">围栏名称</label>
        <input id="fence-name" value="Home Zone" />
      </div>
      <div class="field">
        <label for="fence-shape">围栏形状</label>
        <select id="fence-shape"><option>圆形</option><option>多边形</option></select>
      </div>
      <div class="field">
        <label for="fence-radius">半径 / 范围</label>
        <input id="fence-radius" value="300m" />
      </div>
      <div class="field">
        <label for="fence-trigger">提醒条件</label>
        <select id="fence-trigger"><option>进出都提醒</option><option>离开提醒</option><option>进入提醒</option></select>
      </div>
    </div>
  `;
  const footer = mpBtn("primary", `${icon("shield-check")} 保存围栏`, "save-geofence", "mp-btn-block");
  return wrapMpSheet("安全围栏", body, footer);
}

function renderConfigCategoryModal() {
  const category = mock.configCategories.find((item) => item.id === state.configCategory) || mock.configCategories[0];
  const isReadOnly = category.id === "info";
  const body = renderConfigCategoryContent(category.id);
  const footer = isReadOnly ? "" : mpBtn("primary", `${icon("save")} 保存配置`, "save-config", "mp-btn-block");
  return wrapMpSheet(category.title, body, footer);
}

function renderCallContent() {
  return `
    <div class="config-list">
      <div class="config-card">
        <div class="section-header">
          <div>
            <h3>${icon("contact")}紧急联系人</h3>
            <p>按优先级依次拨打，触发场景独立配置</p>
          </div>
          <button class="text-button" type="button" data-action="toast-add-contact">${icon("plus")}添加</button>
        </div>
        <div class="contact-list">
          ${mock.emergencyContacts.map((contact) => `
            <button class="contact-row" type="button" data-action="toast-edit-contact">
              <div class="contact-priority">${contact.priority}</div>
              <div class="contact-info">
                <strong>${contact.name}</strong>
                <span>${contact.relation} · ${contact.phone}</span>
                <small>触发：${contact.triggers}</small>
              </div>
              ${icon("chevron-right")}
            </button>
          `).join("")}
        </div>
      </div>

      <div class="config-card">
        <h3>${icon("phone-call")}通话与按键</h3>
        <div class="form-grid">
          <div class="field"><label for="call-mode">来电策略</label><select id="call-mode"><option>仅白名单可呼入</option><option>所有号码可呼入</option></select></div>
          <div class="field"><label for="button-action">按键行为</label><select id="button-action"><option>长按 SOS</option><option>短按报位置</option><option>双击拨打优先联系人</option></select></div>
          <div class="field"><label for="sos-mode">SOS 触发后</label><select id="sos-mode"><option>依次拨打全部联系人</option><option>仅拨打第一位</option><option>同时短信全部</option></select></div>
        </div>
      </div>
    </div>
  `;
}

function renderNetworkContent(device) {
  const hw = device.hardware || {};
  const sub = mock.services.subscriptions.find((item) => item.device.startsWith(device.name));
  return `
    <div class="config-list">
      ${sub ? `
      <div class="config-card">
        <h3>${icon("sim-card")}本设备 SIM 套餐</h3>
        <div class="info-list">
          <div class="info-row"><span>当前套餐</span><strong>${sub.plan}</strong></div>
          <div class="info-row"><span>剩余流量</span><strong>${sub.remaining}</strong></div>
          <div class="info-row"><span>到期时间</span><strong>${sub.expireAt}</strong></div>
          <div class="info-row"><span>套餐状态</span><strong>${sub.status}</strong></div>
        </div>
        <div class="sheet-actions">
          <button class="primary-button" type="button" data-action="toast-renew">${icon("refresh-cw")}立即续费</button>
          <button class="ghost-button" type="button" data-action="open-settings" data-settings="service">${icon("credit-card")}查看全部订单</button>
        </div>
      </div>
      ` : `
      <div class="panel-card muted-panel">
        <h3>${icon("sim-card")}无 SIM 套餐</h3>
        <p>当前设备未绑定 SIM 套餐或不需要 SIM（仅蓝牙设备）。</p>
      </div>
      `}

      <div class="config-card">
        <h3>${icon("router")}网络与 APN 参数</h3>
        <div class="form-grid">
          <div class="field"><label for="apn">APN</label><input id="apn" value="iot.provider" /></div>
          <div class="field"><label for="server">服务器地址</label><input id="server" value="evmars.example.com" /></div>
          <div class="field"><label for="iccid">ICCID</label><input id="iccid" value="${hw.iccid || "—"}" readonly /></div>
        </div>
      </div>

      <button class="list-card" type="button" data-action="toast-channel">
        <div class="list-row">
          <div>
            <strong>指令下发通道</strong>
            <span>API（默认） · BLE 近场 · SMS 短信备用</span>
            <small>设备离线或弱网时自动切换到 BLE 或 SMS</small>
          </div>
          ${icon("chevron-right")}
        </div>
      </button>
    </div>
  `;
}

function renderPluginDetailCard(device) {
  const plugin = devicePluginInfo(device);
  const rows = [
    ["物模型版本", plugin.tsl],
    ["面板版本", plugin.panel],
    ["提供方", plugin.provider],
    ["生效能力", `${plugin.enabled.join(" / ")}（${plugin.enabled.length} 类）`],
    ["可扩展能力", plugin.extensible],
  ];
  return `
    <div class="plugin-detail-card">
      <div class="plugin-detail-title">
        ${icon("puzzle")}
        <div><strong>设备插件</strong><span>按物模型和面板版本动态展示能力</span></div>
      </div>
      <div class="info-list plugin-info-list">
        ${rows.map(([label, value]) => `
          <div class="info-row">
            <span>${label}</span>
            <strong>${value}</strong>
          </div>
        `).join("")}
      </div>
      <button class="ghost-button full-width" type="button" data-action="toast-panel-update">${icon("refresh-cw")}检查面板更新</button>
    </div>
  `;
}

function renderConfigCategoryContent(id) {
  const device = getDevice();
  const hw = device.hardware || {};
  const content = {
    info: `
      <div class="info-list">
        ${[
          ["IMEI", hw.imei || "—"],
          ["MAC 地址", hw.mac || "—"],
          ["固件版本", hw.firmware || "—"],
          ["硬件版本", hw.hardware || "—"],
          ["ICCID", hw.iccid || "—"],
          ["SIM 运营商", hw.sim || "—"],
          ["蓝牙版本", hw.bleVersion || "—"],
          ["生产日期", hw.producedAt || "—"],
          ["激活日期", hw.activatedAt || "—"],
        ].map(([label, value]) => `
          <div class="info-row">
            <span>${label}</span>
            <strong>${value}</strong>
          </div>
        `).join("")}
      </div>
      ${renderPluginDetailCard(device)}
      <div class="panel-card">
        <h3>${icon("info")}说明</h3>
        <p>设备信息为只读字段，用于售后排查、配件匹配和 OTA 兼容性确认。BLE 近场连接时可读取最新硬件状态。</p>
      </div>
    `,
    home: `
      <div class="config-list">
        <div class="config-card">
          <h3>${icon("wifi")}Home WiFi</h3>
          <div class="field"><label for="wifi-ssid">SSID</label><input id="wifi-ssid" value="Home_5G" /></div>
          <div class="field"><label for="wifi-password">密码</label><input id="wifi-password" type="password" value="12345678" /></div>
        </div>
        <div class="config-card">
          <h3>${icon("bluetooth")}Home Beacon</h3>
          <div class="field"><label for="beacon-id">Beacon UUID</label><input id="beacon-id" value="FDA5-1201" /></div>
          <button class="ghost-button full-width" type="button" data-action="copy-config">${icon("copy-check")}从其他设备复制</button>
        </div>
      </div>
    `,
    location: `
      <div class="form-grid">
        <div class="field"><label for="loc-mode">定位方式</label><select id="loc-mode"><option>GPS + WiFi + LBS 自动</option><option>GPS 优先</option><option>省电定位</option></select></div>
        <div class="field"><label for="upload-interval">上报间隔</label><select id="upload-interval"><option>5 分钟</option><option>1 分钟</option><option>15 分钟</option></select></div>
        <div class="field"><label for="agps">AGPS</label><select id="agps"><option>开启</option><option>关闭</option></select></div>
        <div class="field"><label for="map-engine">地图方案</label><select id="map-engine"><option>小程序原生 map（腾讯底图）</option><option>海外 web-view + Google</option></select></div>
      </div>
    `,
    alerts: `
      <div class="toggle-list">
        ${[
          ["跌倒告警", "灵敏度：中"],
          ["低电量告警", "阈值：20%"],
          ["离线告警", "超过 30 分钟未上报"],
          ["超速告警", "超过 80km/h"],
        ].map(([title, desc]) => `<label class="toggle-row"><span><strong>${title}</strong><small>${desc}</small></span><input type="checkbox" checked /></label>`).join("")}
      </div>
    `,
    call: renderCallContent(),
    sensor: `
      <div class="toggle-list">
        ${[
          ["心率采集", "每 30 分钟采集一次"],
          ["步数统计", "每日 00:00 重置"],
          ["运动检测", "用于跌倒和久坐判断"],
          ["灵敏度", "中等灵敏度"],
        ].map(([title, desc]) => `<label class="toggle-row"><span><strong>${title}</strong><small>${desc}</small></span><input type="checkbox" checked /></label>`).join("")}
      </div>
    `,
    ble: `
      <div class="config-list">
        <div class="scan-status">${icon("bluetooth-connected")}<div><strong>蓝牙已就绪</strong><span>用于近场读取、写入配置和设备升级</span></div></div>
        <button class="ghost-button full-width" type="button" data-action="connect-ble">${icon("download")}读取当前参数</button>
        <button class="ghost-button full-width" type="button" data-action="ota-check">${icon("upload-cloud")}检查 OTA 固件</button>
      </div>
    `,
    network: renderNetworkContent(device),
  };
  return content[id] || content.home;
}

function renderSettingsModal() {
  const panelMap = {
    profile: ["账号资料", renderProfileSettings()],
    security: ["账号与安全", renderSecuritySettings()],
    notifications: ["通知设置", renderNotificationSettings()],
    map: ["地区与地图服务", renderMapSettings()],
    service: ["我的服务", renderServiceSettings()],
    feedback: ["意见反馈", renderFeedbackSettings()],
    about: ["关于与协议", renderAboutSettings()],
  };
  const [title, content] = panelMap[state.settingsPanel] || panelMap.profile;
  return wrapMpSheet(title, content);
}

function renderProfileSettings() {
  return `
    <div class="form-grid">
      <div class="field"><label for="profile-account">账号</label><input id="profile-account" value="${mock.user.account}" readonly /></div>
      <div class="field"><label for="profile-name">昵称</label><input id="profile-name" value="${mock.user.name}" /></div>
      <div class="field"><label for="profile-email">邮箱</label><input id="profile-email" type="email" value="${mock.user.email}" /></div>
      <div class="field"><label for="profile-phone">手机号</label><input id="profile-phone" value="+86 138 0000 1234" /></div>
      <div class="field"><label for="profile-region">国家 / 地区</label><select id="profile-region"><option>中国大陆</option><option>中国香港</option><option>美国</option><option>欧洲</option></select></div>
    </div>
    <button class="mp-btn mp-btn-primary mp-btn-block" type="button" data-action="save-settings">${icon("save")}保存资料</button>
  `;
}

function renderSecuritySettings() {
  const oauthBindings = oauthProviders();
  return `
    <div class="card-list">
      <button class="list-card" type="button" data-action="toast-change-password"><div class="list-row"><div><strong>修改密码</strong><span>通过旧密码或邮箱验证码修改</span></div>${icon("chevron-right")}</div></button>
      <button class="list-card" type="button" data-action="toast-bind-email"><div class="list-row"><div><strong>邮箱与手机号</strong><span>用于登录、找回密码和接收安全通知</span></div>${icon("chevron-right")}</div></button>
      <button class="list-card" type="button" data-action="toast-login-devices"><div class="list-row"><div><strong>登录设备</strong><span>查看最近登录记录，发现异常可退出</span></div>${icon("chevron-right")}</div></button>
    </div>

    <div class="oauth-section">
      <div class="settings-group-title">第三方账号绑定</div>
      <div class="oauth-account-list">
      ${oauthBindings.map((item) => `
        <button class="oauth-provider-card account ${item.id}" type="button" data-action="toast-oauth-bind" data-provider="${item.id}">
          <div class="oauth-provider-main">
            ${renderOauthBrandIcon(item)}
            <span class="oauth-provider-text">
              <strong>${item.name}</strong>
              <small>${item.bound ? item.account : "绑定后可用于快捷登录"}</small>
            </span>
          </div>
          <span class="oauth-status ${item.bound ? "bound" : "unbound"}">${item.bound ? "已绑定" : "未绑定"}</span>
        </button>
      `).join("")}
      </div>
    </div>

    <div class="danger-zone account-danger">
      <div><strong>注销账号</strong><span>注销前需要确认设备、分享和数据处理方式</span></div>
      <button class="danger-button" type="button" data-action="toast-delete-account">${icon("trash-2")}申请注销</button>
    </div>
  `;
}

function renderNotificationSettings() {
  const rows = [
    ["SOS 紧急呼叫", "始终推送，建议保持开启"],
    ["跌倒告警", "设备检测到疑似跌倒时提醒"],
    ["设备离线", "超过 30 分钟未上报时提醒"],
    ["低电量", "电量低于 20% 时提醒"],
    ["系统通知", "服务更新、协议变更和账号安全提醒"],
  ];
  return `
    <div class="toggle-list">
      ${rows.map(([title, desc]) => `<label class="toggle-row"><span><strong>${title}</strong><small>${desc}</small></span><input type="checkbox" checked /></label>`).join("")}
    </div>
    <div class="form-grid">
      <div class="field"><label for="quiet-hours">免打扰时段</label><select id="quiet-hours"><option>22:00 - 08:00</option><option>关闭</option><option>自定义</option></select></div>
    </div>
    <button class="mp-btn mp-btn-primary mp-btn-block" type="button" data-action="save-settings">${icon("save")}保存通知设置</button>
  `;
}

function renderMapSettings() {
  return `
    <div class="form-grid">
      <div class="field"><label for="map-region">当前使用地区</label><select id="map-region"><option>中国大陆</option><option>海外</option></select></div>
      <div class="field"><label for="map-provider">地图服务</label><select id="map-provider"><option>小程序原生 map（腾讯底图、GCJ-02）</option><option>海外 web-view 嵌套 Google</option></select></div>
      <div class="field"><label for="location-permission">定位权限</label><select id="location-permission"><option>使用 App 期间允许</option><option>始终允许</option><option>暂不允许</option></select></div>
    </div>
    <div class="panel-card">
      <h3>${icon("map")}说明</h3>
      <p>这里用于管理 App 自身的地图显示、地区和权限。查看设备位置仍然在设备详情的地图页完成。</p>
    </div>
    <button class="mp-btn mp-btn-primary mp-btn-block" type="button" data-action="save-settings">${icon("save")}保存地图设置</button>
  `;
}

function renderServiceSettings() {
  const svc = mock.services;
  return `
    <div class="section-header">
      <div>
        <h2>套餐订阅</h2>
        <p>每台设备的 SIM 套餐与流量状态</p>
      </div>
    </div>
    <div class="card-list">
      ${svc.subscriptions.map((sub) => `
        <div class="list-card">
          <div class="list-row">
            <div>
              <strong>${sub.device}</strong>
              <span>${sub.plan}</span>
              <small>${sub.expireAt} · ${sub.remaining}</small>
            </div>
            <span class="status-pill ${sub.status === "正常" ? "online" : "warning"}">${sub.status}</span>
          </div>
          <div class="inline-actions">
            <button class="ghost-button" type="button" data-action="toast-renew">${icon("refresh-cw")}续费</button>
            <button class="text-button" type="button" data-action="toast-change-plan">更换套餐</button>
          </div>
        </div>
      `).join("")}
    </div>

    <div class="section-header" style="margin-top:14px;">
      <div>
        <h2>订单与发票</h2>
        <p>支付记录、待支付订单和发票申请</p>
      </div>
    </div>
    <div class="card-list">
      ${svc.orders.map((order) => `
        <div class="list-card">
          <div class="list-row">
            <div>
              <strong>${order.desc}</strong>
              <span>${order.id} · ${order.time}</span>
            </div>
            <div class="order-meta">
              <strong>${order.amount}</strong>
              <span class="status-pill ${order.status === "已支付" ? "online" : "warning"}">${order.status}</span>
            </div>
          </div>
        </div>
      `).join("")}
    </div>

    <div class="section-header" style="margin-top:14px;">
      <div>
        <h2>支付与续费</h2>
        <p>支付方式与自动续费</p>
      </div>
    </div>
    <div class="card-list">
      <button class="list-card" type="button" data-action="toast-payment-method">
        <div class="list-row">
          <div><strong>支付方式</strong><span>当前：${svc.paymentMethod}</span></div>
          ${icon("chevron-right")}
        </div>
      </button>
      <label class="toggle-row">
        <span><strong>自动续费</strong><small>到期前 7 天自动扣款，可随时关闭</small></span>
        <input type="checkbox" ${svc.autoRenew ? "checked" : ""} />
      </label>
      <button class="list-card" type="button" data-action="toast-invoice">
        <div class="list-row">
          <div><strong>发票管理</strong><span>申请电子发票或下载历史发票</span></div>
          ${icon("chevron-right")}
        </div>
      </button>
    </div>

    <div class="panel-card">
      <h3>${icon("info")}说明</h3>
      <p>SIM 套餐属于设备级服务，每台设备独立计费。这里聚合所有设备的订阅、订单和支付方式。设备配置 → 网络与 SIM 中也可查看本设备的当前状态并直接续费。</p>
    </div>
  `;
}

function renderFeedbackSettings() {
  return `
    <div class="form-grid">
      <div class="field"><label for="feedback-type">问题类型</label><select id="feedback-type"><option>设备离线或定位不准</option><option>账号与登录</option><option>分享与权限</option><option>其他建议</option></select></div>
      <div class="field"><label for="feedback-content">问题描述</label><textarea id="feedback-content" rows="4">设备偶尔定位不准，希望帮忙排查。</textarea></div>
    </div>
    <div class="sheet-actions">
      <button class="primary-button" type="button" data-action="send-feedback">${icon("send")}提交反馈</button>
      <button class="ghost-button" type="button" data-action="open-chat">${icon("bot")}AI 客服</button>
    </div>
  `;
}

function renderAboutSettings() {
  return `
    <div class="about-version">
      <div class="brand-mark">${icon("radio-tower")}</div>
      <div><strong>Evmars</strong><span>版本 0.1.0 Prototype</span></div>
    </div>
    <div class="card-list">
      <button class="list-card" type="button" data-action="toast-policy"><div class="list-row"><div><strong>用户协议</strong><span>查看账号、设备和服务使用条款</span></div>${icon("chevron-right")}</div></button>
      <button class="list-card" type="button" data-action="toast-policy"><div class="list-row"><div><strong>隐私政策</strong><span>查看个人信息和设备数据使用说明</span></div>${icon("chevron-right")}</div></button>
      <button class="list-card" type="button" data-action="toast-permissions"><div class="list-row"><div><strong>权限说明</strong><span>位置、蓝牙、相机、通知权限用途</span></div>${icon("chevron-right")}</div></button>
      <button class="list-card" type="button" data-action="toast-version"><div class="list-row"><div><strong>检查更新</strong><span>当前已是最新版本</span></div>${icon("refresh-cw")}</div></button>
    </div>
  `;
}

function renderH5Modal() {
  const device = getDevice();
  const body = `
    <div class="h5-shell">
      <div class="h5-topbar"><span>Evmars Help</span><span>在线</span></div>
      <div class="h5-content">
        <div class="panel-card">
          <h3>${icon("file-question")}设备帮助中心</h3>
          <p>查看设备离线、定位不准、配置、分享和服务协议相关帮助。</p>
        </div>
        <button class="list-card" type="button" data-action="h5-open-device">
          <div class="list-row">
            <div><strong>${deviceDisplayName(device)} 使用说明</strong><span>绑定、定位、充电和告警说明</span></div>
            ${icon("chevron-right")}
          </div>
        </button>
        <button class="list-card" type="button" data-action="toast-policy">
          <div class="list-row">
            <div><strong>服务协议与隐私政策</strong><span>查看账号、设备和数据使用说明</span></div>
            ${icon("chevron-right")}
          </div>
        </button>
        <button class="list-card" type="button" data-action="open-chat">
          <div class="list-row">
            <div><strong>联系在线客服</strong><span>获取设备问题排查建议</span></div>
            ${icon("chevron-right")}
          </div>
        </button>
      </div>
    </div>
  `;
  return wrapMpSheet("帮助中心", body);
}

function renderChatModal() {
  const body = `
    <div class="chat-shell">
      ${state.chat.map((message) => `<div class="chat-message ${message.role === "user" ? "user" : ""}">${message.text}</div>`).join("")}
    </div>
    <div class="section">
      <div class="tag-grid">
        ${mock.aiQuestions.map((item, index) => `<button class="mp-btn mp-btn-default mp-btn-mini" type="button" data-question="${index}">${item.q}</button>`).join("")}
      </div>
      <div class="chat-input-row">
        <input id="chat-input" type="text" value="为什么设备离线？" aria-label="输入问题" />
        <button class="icon-button" type="button" data-action="send-chat" aria-label="发送">${icon("send")}</button>
      </div>
    </div>
  `;
  return wrapMpSheet("AI 客服", body);
}

function renderAiModal() {
  const body = `
    <div class="insight-card warning">
      <h3>${icon("sparkles")}规则引擎 + AI 解释</h3>
      <p>系统已结合位置、健康、告警和历史行为生成解释，并给出下一步处理建议。</p>
    </div>
  `;
  const footer = mpBtn("primary", "知道了", "close-modal", "mp-btn-block");
  return wrapMpSheet("AI 分析结果", body, footer);
}

function bindEvents() {
  document.querySelectorAll("[data-locale]").forEach((button) => {
    button.addEventListener("click", () => {
      state.locale = button.dataset.locale;
      render();
    });
  });

  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.tab = button.dataset.tab;
      state.route = "home";
      state.modal = null;
      render();
    });
  });

  document.querySelectorAll("[data-open-device]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedDeviceId = button.dataset.openDevice;
      state.detailTab = button.dataset.detailTab || "overview";
      state.route = "detail";
      state.loggedIn = true;
      render();
    });
  });

  document.querySelectorAll("[data-detail-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.detailTab = button.dataset.detailTab;
      render();
    });
  });

  document.querySelectorAll("[data-map-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.mapFilter = button.dataset.mapFilter;
      render();
    });
  });

  document.querySelectorAll("[data-health-range]").forEach((button) => {
    button.addEventListener("click", () => {
      state.healthRange = button.dataset.healthRange;
      render();
    });
  });

  document.querySelectorAll("[data-add-mode]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      state.addMode = button.dataset.addMode;
      render();
    });
  });

  document.querySelectorAll("[data-config-category]").forEach((button) => {
    button.addEventListener("click", () => {
      state.configCategory = button.dataset.configCategory;
      state.modal = "config-category";
      render();
    });
  });

  const agreementInput = document.querySelector(".mp-agreement input[type='checkbox']");
  if (agreementInput) {
    agreementInput.addEventListener("change", () => {
      state.agreedToTerms = agreementInput.checked;
      render();
    });
  }

  document.querySelectorAll(".mp-dialog").forEach((el) => {
    el.addEventListener("click", (e) => e.stopPropagation());
  });

  document.querySelectorAll(".mp-dialog-mask").forEach((mask) => {
    mask.addEventListener("click", (e) => {
      if (e.target === mask) {
        state.dialog = null;
        render();
      }
    });
  });

  const loginForm = document.querySelector("[data-form='login']");
  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      state.loggedIn = true;
      state.route = "home";
      state.tab = "map";
      state.pendingLocationGuide = true;
      state.locationPermission = "unknown";
      render();
    });
  }

  document.querySelectorAll(".map-card-open").forEach((button) => {
    button.addEventListener("click", (event) => event.stopPropagation());
  });

  document.querySelectorAll("[data-action]").forEach((element) => {
    element.addEventListener("click", (event) => {
      const action = element.dataset.action;
      if (element.closest("[data-sheet]") && action !== "close-modal") {
        event.stopPropagation();
      }
      handleAction(action, element, event);
    });
  });

  document.querySelectorAll("[data-question]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = mock.aiQuestions[Number(button.dataset.question)];
      state.chat.push({ role: "user", text: item.q }, { role: "assistant", text: item.a });
      render();
    });
  });
}

function handleAction(action, element, event) {
  const actions = {
    "set-view-dev"() {
      state.viewMode = "dev";
      state.apiPanelOpen = true;
      state.demoPanelOpen = true;
      render();
    },
    "set-view-demo"() {
      state.viewMode = "demo";
      state.modal = null;
      state.dialog = null;
      render();
    },
    "toggle-api-panel"() {
      if (state.viewMode === "demo") {
        state.viewMode = "dev";
        state.apiPanelOpen = true;
        state.demoPanelOpen = false;
      } else {
        state.apiPanelOpen = !state.apiPanelOpen;
      }
      render();
    },
    "toggle-demo-panel"() {
      if (state.viewMode === "demo") {
        state.viewMode = "dev";
        state.demoPanelOpen = true;
        state.apiPanelOpen = false;
      } else {
        state.demoPanelOpen = !state.demoPanelOpen;
      }
      render();
    },
    reset() {
      state.loggedIn = false;
      state.route = "login";
      state.tab = "map";
      state.detailTab = "overview";
      state.modal = null;
      state.mapFilter = "all";
      state.healthRange = "week";
      state.brandTheme = "care";
      state.addMode = "scan";
      state.configCategory = "home";
      state.settingsPanel = "profile";
      state.agreedToTerms = false;
      state.dialog = null;
      state.chat = [{ role: "assistant", text: t("mock.chatWelcome") }];
      state.locationPermission = "unknown";
      state.mapLoadState = "ready";
      state.highlightedMapDeviceId = null;
      state.pullRefreshing = false;
      state.pendingLocationGuide = false;
      render();
    },
    "wechat-login"() {
      if (!state.agreedToTerms) {
        showToast(t("login.agreeRequired"));
        return;
      }
      state.loggedIn = true;
      state.route = "home";
      state.tab = "map";
      state.modal = null;
      state.pendingLocationGuide = true;
      state.locationPermission = "unknown";
      showToast(t("toast.wechatLogin"));
      render();
    },
    "phone-login"() {
      if (!state.agreedToTerms) {
        showToast(t("login.agreeRequired"));
        return;
      }
      showToast(t("toast.phoneLogin"));
    },
    "quick-demo"() {
      state.loggedIn = true;
      state.route = "home";
      state.tab = "map";
      state.modal = null;
      state.pendingLocationGuide = true;
      state.locationPermission = "unknown";
      showToast(t("toast.guest"));
      render();
    },
    back() {
      state.route = "home";
      render();
    },
    "open-share"() {
      state.modal = "share";
      render();
    },
    "open-add-device"() {
      state.modal = "add-device";
      state.addMode = "scan";
      render();
    },
    "open-edit-device"() {
      state.modal = "edit-device";
      render();
    },
    "open-geofence"() {
      state.modal = "geofence";
      render();
    },
    "open-settings"() {
      state.settingsPanel = element.dataset.settings || "profile";
      state.modal = "settings";
      render();
    },
    "open-h5"() {
      state.modal = "h5";
      render();
    },
    "open-chat"() {
      state.modal = "chat";
      render();
    },
    "close-modal"() {
      const isBackdrop = element.classList.contains("modal-backdrop");
      const isSheetAction = element.closest(".mp-sheet-footer, .mp-nav-text");
      if (isSheetAction || !isBackdrop || event?.target === element) {
        state.modal = null;
        render();
      }
    },
    "close-dialog"() {
      state.dialog = null;
      render();
    },
    "toast-sync"() {
      showToast("设备状态、告警和健康摘要已同步");
    },
    "request-location"() {
      state.locationPermission = "granted";
      state.modal = null;
      showToast("已授权位置权限，地图已恢复");
      render();
    },
    "deny-location"() {
      state.locationPermission = "denied";
      state.modal = null;
      showToast("已拒绝位置权限，地图已降级为列表模式");
      render();
    },
    "open-location-settings"() {
      showToast("wx.openSetting：请在设置中开启位置信息");
    },
    "highlight-map-device"() {
      state.highlightedMapDeviceId = element.dataset.deviceId || null;
      showToast("地图已居中并高亮该设备标记");
      render();
    },
    "open-device-from-card"() {
      state.selectedDeviceId = element.dataset.openDevice;
      state.detailTab = element.dataset.detailTab || "overview";
      state.route = "detail";
      render();
    },
    "pull-refresh"() {
      state.pullRefreshing = true;
      render();
      window.setTimeout(() => {
        state.pullRefreshing = false;
        state.mapLoadState = "ready";
        showToast("设备位置已更新");
        render();
      }, 1200);
    },
    "retry-map-load"() {
      state.mapLoadState = "loading";
      render();
      window.setTimeout(() => {
        state.mapLoadState = "ready";
        showToast("设备位置加载成功");
        render();
      }, 1000);
    },
    "toast-scan"() {
      showToast(t("toast.scan"));
    },
    "toast-track"() {
      showToast("已切换到轨迹回放，正式版按时间查询历史轨迹");
    },
    "toast-map-layer"() {
      showToast("地图图层：正式版支持地图、卫星和围栏显示切换");
    },
    "toast-locate"() {
      showToast("已发送单次定位指令，等待设备上报");
    },
    "toast-open-location"() {
      showToast("wx.openLocation：唤起微信内置地图导航至设备位置");
    },
    "toast-find"() {
      showToast("已发送查找设备指令");
    },
    "send-share"() {
      state.modal = null;
      showToast("分享邀请已发送，等待对方接受");
    },
    "resend-share"() {
      showToast("分享权限已更新，待服务端同步");
    },
    "revoke-share"() {
      showToast("已取消该用户的设备分享权限");
    },
    "accept-share"() {
      showToast("已接受分享邀请，设备会出现在首页列表");
    },
    "reject-share"() {
      showToast("已拒绝分享邀请");
    },
    "mark-read"() {
      showToast("消息已标为已读");
    },
    "bind-device"() {
      state.modal = null;
      showToast("设备校验通过，已进入绑定成功流程");
    },
    "connect-ble"() {
      showToast("BLE 已连接，正在读取设备参数");
    },
    "save-device"() {
      state.modal = null;
      showToast("设备资料已保存");
    },
    "unbind-device"() {
      state.dialog = "unbind-confirm";
      render();
    },
    "unbind-device-confirm"() {
      state.dialog = null;
      state.modal = null;
      showToast("设备已解绑");
    },
    "save-geofence"() {
      state.modal = null;
      showToast("安全围栏已保存，等待服务端同步");
    },
    "save-config"() {
      state.modal = null;
      showToast("配置已保存，等待设备确认下发结果");
    },
    "save-settings"() {
      state.modal = null;
      showToast("设置已保存");
    },
    "send-feedback"() {
      state.modal = null;
      showToast("反馈已提交，客服会在消息中心回复");
    },
    "logout-confirm"() {
      state.dialog = "logout-confirm";
      render();
    },
    "toast-change-password"() {
      showToast("修改密码流程：邮箱验证码 + 新密码");
    },
    "toast-bind-email"() {
      showToast("邮箱和手机号绑定需要验证码确认");
    },
    "toast-login-devices"() {
      showToast("登录设备列表将在正式版本展示");
    },
    "toast-delete-account"() {
      showToast("账号注销需要确认设备、分享和数据处理方式");
    },
    "toast-permissions"() {
      showToast("权限说明包含位置、蓝牙、相机和通知用途");
    },
    "toast-version"() {
      showToast("当前已是最新版本");
    },
    "ota-check"() {
      showToast("已检查固件版本，当前设备为最新版本");
    },
    "copy-config"() {
      showToast("Home WiFi / Home Beacon 配置已复制到目标设备");
    },
    "alarm-ai"() {
      state.modal = "ai";
      render();
    },
    "ai-health"() {
      state.selectedDeviceId = "dev-ev05-mom";
      state.route = "detail";
      state.detailTab = "health";
      render();
    },
    "ai-alert"() {
      state.selectedDeviceId = "dev-ev05-mom";
      state.route = "detail";
      state.detailTab = "alarms";
      render();
    },
    "send-chat"() {
      const input = document.getElementById("chat-input");
      const text = input?.value?.trim() || "为什么设备离线？";
      const answer = mock.aiQuestions.find((item) => item.q === text)?.a || mock.aiQuestions[0].a;
      state.chat.push({ role: "user", text }, { role: "assistant", text: answer });
      render();
    },
    "h5-open-device"() {
      state.modal = null;
      state.route = "detail";
      state.detailTab = "overview";
      showToast("已打开设备使用说明");
    },
    "toast-research"() {
      showToast("地图与定位设置将在正式版本中提供");
    },
    "toast-policy"() {
      showToast("服务协议与隐私政策将在正式版本中打开详情页");
    },
    "toast-pet-edit"() {
      showToast("宠物档案编辑：品种、生日、体重、疫苗记录可在正式版本完善");
    },
    "toast-panel-update"() {
      showToast("面板检查：物模型与面板版本已是当前型号最新版本");
    },
    "toast-supported-models"() {
      showToast("支持型号清单：按 manifest 下发，可扩展更多设备型号");
    },
    "toast-third-party-device"() {
      showToast("第三方设备接入：预留 AB 协议以外的产品物模型入口");
    },
    "switch-brand-theme"() {
      const next = nextBrandTheme();
      state.brandTheme = next.id;
      showToast(`已切换品牌主题：${next.name}`);
    },
    "toast-forgot-password"() {
      showToast("找回密码：通过邮箱或手机号验证码重置，将在正式版本完成");
    },
    "toast-renew"() {
      showToast("跳转支付：续费订单已生成，正式版接入微信支付/支付宝/Stripe");
    },
    "toast-change-plan"() {
      showToast("更换套餐：可在套餐目录中选择更高或更低档套餐");
    },
    "toast-payment-method"() {
      showToast("支付方式：支持微信、支付宝、Stripe 卡片、PayPal");
    },
    "toast-invoice"() {
      showToast("发票管理：电子发票申请和历史发票下载入口");
    },
    "toast-add-contact"() {
      showToast("添加紧急联系人：姓名、关系、手机号、优先级和触发场景");
    },
    "toast-edit-contact"() {
      showToast("编辑紧急联系人：可调整优先级、触发场景或删除");
    },
    "toast-channel"() {
      showToast("指令通道：API（默认）/ BLE 近场 / SMS 短信备用，根据设备状态自动选择");
    },
    "toast-oauth"() {
      const labelMap = { wechat: "微信", apple: "Apple", google: "Google" };
      const label = labelMap[element.dataset.provider] || "第三方";
      showToast(`${label} 登录：调起 SDK 授权 → 绑定到 Evmars 账号`);
    },
    "toast-oauth-bind"() {
      const labelMap = { wechat: "微信", apple: "Apple", google: "Google" };
      const label = labelMap[element.dataset.provider] || "第三方";
      showToast(`${label} 账号：绑定后可一键登录，解绑前确认账号回退方式`);
    },
    logout() {
      state.loggedIn = false;
      state.route = "login";
      state.modal = null;
      state.dialog = null;
      state.agreedToTerms = false;
      render();
    },
  };
  actions[action]?.();
}

function showToast(message) {
  state.toast = message;
  render();
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    state.toast = "";
    render();
  }, 2600);
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

initFromUrl();
render();
