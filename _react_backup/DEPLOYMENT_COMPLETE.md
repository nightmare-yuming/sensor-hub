# 🚀 Sensor Hub - 部署完成指南

## ✅ 已完成的步驟

1. ✅ Git 已安裝
2. ✅ 本地 Git repository 已初始化
3. ✅ 所有檔案已提交到本地 repository
4. ✅ 所有部署檔案已準備完成

## 📋 接下來的步驟（需要您的操作）

### 步驟 1: 建立 GitHub Repository

1. 前往 GitHub: https://github.com/new
2. Repository 名稱輸入: `sensor-hub`
3. 描述（可選）: `現代化的感測器技術資訊平台`
4. 選擇 **Public**
5. **不要**勾選 "Add a README file"、"Add .gitignore" 或 "Choose a license"（我們已經有了）
6. 點擊 **Create repository**

### 步驟 2: 推送程式碼到 GitHub

建立 repository 後，GitHub 會顯示指令。請在專案目錄執行以下指令：

```powershell
# 確保在專案目錄
cd C:\Users\user\.gemini\antigravity\scratch\sensor_hub

# 連結到 GitHub repository
& "C:\Program Files\Git\cmd\git.exe" remote add origin https://github.com/nightmare-yuming/sensor-hub.git

# 推送到 GitHub
& "C:\Program Files\Git\cmd\git.exe" branch -M main
& "C:\Program Files\Git\cmd\git.exe" push -u origin main
```

**注意**: 如果 GitHub 要求登入，請使用您的 GitHub 帳號密碼或 Personal Access Token。

### 步驟 3: 設定 GitHub Pages

1. 前往您的 repository: https://github.com/nightmare-yuming/sensor-hub
2. 點擊 **Settings** (設定)
3. 在左側選單點擊 **Pages**
4. 在 **Source** 下拉選單選擇 **GitHub Actions**
5. 完成！

### 步驟 4: 等待部署完成

1. 前往 **Actions** 標籤頁
2. 您會看到 "Deploy to GitHub Pages" workflow 正在執行
3. 等待綠色勾勾出現（約 1-2 分鐘）
4. 部署完成後，您的網站將可在以下網址訪問：

```
https://nightmare-yuming.github.io/sensor-hub/
```

## 🔧 如果遇到問題

### 問題 1: Git push 要求登入
**解決方案**: 
- 使用 Personal Access Token 代替密碼
- 前往 GitHub Settings > Developer settings > Personal access tokens > Tokens (classic)
- 生成新的 token，勾選 `repo` 權限
- 使用 token 作為密碼

### 問題 2: 頁面顯示 404
**解決方案**:
- 確認 GitHub Pages 已啟用
- 檢查 Actions 是否成功執行
- 等待 5-10 分鐘讓 DNS 生效

### 問題 3: CSS/JS 無法載入
**解決方案**:
- 確認 `vite.config.js` 中的 `base` 設定為 `'./'`
- 重新建置並推送

## 📝 未來更新網站

當您想更新網站內容時：

```powershell
# 1. 修改檔案後，添加變更
& "C:\Program Files\Git\cmd\git.exe" add .

# 2. 提交變更
& "C:\Program Files\Git\cmd\git.exe" commit -m "Update: 描述您的變更"

# 3. 推送到 GitHub
& "C:\Program Files\Git\cmd\git.exe" push
```

推送後，GitHub Actions 會自動重新建置和部署！

## 🎉 恭喜！

您的 Sensor Hub 網站已準備好部署到 GitHub Pages！

---

**需要協助？** 請參考 `DEPLOYMENT.md` 獲取更詳細的說明。
