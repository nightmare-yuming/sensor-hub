# 快速部署指令

## 首次部署

```bash
# 1. 初始化 Git
git init

# 2. 添加所有檔案
git add .

# 3. 提交
git commit -m "Initial commit: Sensor Hub website"

# 4. 連結到 GitHub（替換成您的 repository URL）
git remote add origin https://github.com/nightmare-yuming/sensor-hub.git

# 5. 推送到 GitHub
git push -u origin main
```

## 更新部署

```bash
# 1. 添加變更
git add .

# 2. 提交
git commit -m "Update: 描述您的變更"

# 3. 推送
git push
```

## 設定 GitHub Pages

1. 前往 Repository 的 **Settings** > **Pages**
2. 在 **Source** 選擇 **GitHub Actions**
3. 完成！推送後會自動建置和部署

## 網站網址

部署完成後，您的網站將可在以下網址訪問：
```
https://nightmare-yuming.github.io/sensor-hub/
```

## 注意事項

如果您的 repository 名稱不是 `sensor-hub`，請修改 `vite.config.js` 中的 `base` 設定：

```javascript
base: '/您的repo名稱/',
```
