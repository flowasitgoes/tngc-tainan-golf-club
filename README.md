# 台南高爾夫球俱樂部官方網站

## 🏌️ 關於專案

台南高爾夫俱樂部（TAINAN GOLF CLUB）官方形象網站，包含中文、英文、日文三種語言版本。

## 📁 專案結構

```
├── public/                 # 靜態資源根目錄
│   ├── index.html         # 首頁（語言選擇頁）
│   ├── sitepages/         # 所有內頁
│   │   ├── home.html      # 中文首頁
│   │   ├── en-home.html   # 英文首頁
│   │   ├── jp-home.html   # 日文首頁
│   │   ├── assets/        # 內頁資源文件夾
│   │   └── ...            # 其他頁面
│   ├── dist/              # 主要資源文件夾
│   │   ├── css/           # 樣式文件
│   │   ├── js/            # JavaScript 文件
│   │   ├── images/        # 圖片資源
│   │   └── libs/          # 第三方庫
│   ├── og-image-1024x600.jpg
│   └── site.webmanifest
├── server.js              # Express 開發伺服器
├── package.json           # 專案配置
└── vercel.json            # Vercel 部署配置

```

## 🚀 本地開發

### 安裝依賴

```bash
npm install
```

### 啟動開發伺服器

```bash
npm start
```

或

```bash
npm run dev
```

網站將在 `http://localhost:3000` 運行

## 📦 部署到 Vercel

### 方法一：使用 Vercel CLI

1. 安裝 Vercel CLI：
```bash
npm i -g vercel
```

2. 登入 Vercel：
```bash
vercel login
```

3. 部署專案：
```bash
vercel
```

4. 部署到生產環境：
```bash
vercel --prod
```

### 方法二：使用 Vercel Dashboard

1. 訪問 [https://vercel.com](https://vercel.com)
2. 點擊 "Add New Project"
3. 導入您的 Git 儲存庫（GitHub/GitLab/Bitbucket）
4. 或直接拖曳整個專案文件夾
5. Vercel 會自動識別配置並部署

### 方法三：連接 Git 自動部署

1. 將專案推送到 GitHub/GitLab/Bitbucket
2. 在 Vercel Dashboard 中導入該儲存庫
3. 每次推送到主分支都會自動部署

## 🌐 網站語言版本

- 🇹🇼 繁體中文：`/sitepages/home.html`
- 🇬🇧 English：`/sitepages/en-home.html`
- 🇯🇵 日本語：`/sitepages/jp-home.html`

## 📱 主要功能頁面

- 關於俱樂部（About）
- 球道介紹（Course）
- 餐飲服務（Catering）
- 設施介紹（Facilities）
- 活動資訊（Events）
- 價格資訊（Pricing）
- 聯絡我們（Contact）

## 🛠️ 技術棧

- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- jQuery
- AOS (Animate On Scroll)
- Owl Carousel
- SweetAlert2

## 📞 聯絡資訊

**台南高爾夫球俱樂部**
- 地址：712台南市新化區礁坑里100號
- 電話：+886 6 590 1666~8
- 傳真：+886 6 590 0240
- 預約：+886 6 580 1198

## 📄 授權

Copyright © 1976-2025 TAINAN GOLF CLUB. All rights reserved.

---

Designed & Powered by GolfLink Taiwan︱DexignZone Studio
# tngc-tainan-golf-club
