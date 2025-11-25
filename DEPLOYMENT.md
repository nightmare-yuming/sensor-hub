# GitHub Pages 部署指南

## 方式一：使用 GitHub Actions 自動部署（推薦）

### 步驟 1: 建立 GitHub Repository
1. 前往 GitHub 建立新的 repository
2. Repository 名稱建議：`sensor-hub` 或 `sensor-news-hub`
3. 設定為 Public（GitHub Pages 免費版需要 public repo）

### 步驟 2: 推送程式碼
```bash
# 在專案目錄中執行
cd C:\Users\user\.gemini\antigravity\scratch\sensor_hub

# 初始化 Git（如果還沒有）
git init

# 添加所有檔案
git add .

# 提交
git commit -m "Initial commit: Sensor Hub website"

# 連結到您的 GitHub repository（替換成您的 username 和 repo 名稱）
git remote add origin https://github.com/nightmare-yuming/sensor-hub.git

# 推送到 GitHub
git push -u origin main
```

### 步驟 3: 設定 GitHub Pages
1. 前往 Repository 的 **Settings** > **Pages**
2. 在 **Source** 選擇 **GitHub Actions**
3. 完成！推送後會自動建置和部署

### 步驟 4: 訪問網站
部署完成後，您的網站將可在以下網址訪問：
```
https://nightmare-yuming.github.io/sensor-hub/
```

---

## 方式二：手動建置並部署（類似您的 drone-news-hub）

如果您想要像 drone-news-hub 一樣手動控制部署：

### 步驟 1: 建置專案
```powershell
# 執行建置
.\build_project.ps1
```

這會在 `dist/` 目錄產生靜態 HTML/CSS/JS 檔案。

### 步驟 2: 建立 GitHub Repository
同上方式一的步驟 1。

### 步驟 3: 只推送 dist 目錄
```bash
# 進入 dist 目錄
cd dist

# 初始化 Git
git init

# 添加所有檔案
git add .

# 提交
git commit -m "Deploy Sensor Hub"

# 連結到 GitHub（使用 gh-pages 分支）
git remote add origin https://github.com/nightmare-yuming/sensor-hub.git

# 推送到 gh-pages 分支
git branch -M gh-pages
git push -u origin gh-pages
```

### 步驟 4: 設定 GitHub Pages
1. 前往 Repository 的 **Settings** > **Pages**
2. 在 **Source** 選擇 **Deploy from a branch**
3. 選擇 **gh-pages** 分支和 **/ (root)** 目錄
4. 點擊 **Save**

---

## 重要配置說明

### Repository 名稱與 base 路徑
如果您的 repository 名稱是 `sensor-hub`，需要修改 `vite.config.js`：

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/sensor-hub/', // 改成您的 repo 名稱
})
```

如果使用自訂網域或 `username.github.io` 作為 repo 名稱，則保持：
```javascript
base: './', // 或 base: '/'
```

---

## 自動化部署（每日更新）

已經設定好的 GitHub Actions 會：
1. ✅ 每次推送到 main 分支時自動部署
2. ✅ 每天 UTC 00:00 自動更新內容並重新部署

查看 `.github/workflows/deploy.yml` 和 `daily_update.yml` 了解詳情。

---

## 疑難排解

### 問題：頁面顯示 404
**解決**：檢查 `vite.config.js` 的 `base` 設定是否與 repository 名稱一致。

### 問題：CSS/JS 無法載入
**解決**：確認 `base` 路徑設定正確，並重新建置。

### 問題：路由無法運作
**解決**：GitHub Pages 不支援 SPA 路由，需要添加 404.html 處理（已在下方提供）。

---

## 推薦部署方式

建議使用 **方式一（GitHub Actions）**，因為：
- ✅ 自動化，推送即部署
- ✅ 支援每日自動更新
- ✅ 不需要手動建置
- ✅ 保持原始碼和建置產物分離
