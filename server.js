const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 設置靜態文件目錄為 public 文件夾
app.use(express.static(path.join(__dirname, 'public')));

// 處理所有 HTML 路由
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 處理 sitepages 下的所有頁面
app.get('/sitepages/:page', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'sitepages', req.params.page));
});

// 404 處理
app.use((req, res) => {
  res.status(404).send('頁面不存在 - Page Not Found');
});

// 啟動伺服器
app.listen(PORT, () => {
  console.log(`🏌️  台南高爾夫球俱樂部網站運行中...`);
  console.log(`📍 本地地址: http://localhost:${PORT}`);
  console.log(`🌐 網路地址: http://127.0.0.1:${PORT}`);
  console.log(`\n按 Ctrl+C 停止伺服器\n`);
});
