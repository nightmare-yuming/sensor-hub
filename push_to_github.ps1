# 一鍵推送腳本
# 使用方法: .\push_to_github.ps1

Write-Host "=== Sensor Hub - GitHub 推送腳本 ===" -ForegroundColor Cyan
Write-Host ""

# 檢查是否已設定 remote
$remoteUrl = & "C:\Program Files\Git\cmd\git.exe" remote get-url origin 2>$null

if (-not $remoteUrl) {
    Write-Host "設定 GitHub repository 連結..." -ForegroundColor Yellow
    & "C:\Program Files\Git\cmd\git.exe" remote add origin https://github.com/nightmare-yuming/sensor-hub.git
    Write-Host "✓ 已連結到 GitHub repository" -ForegroundColor Green
}
else {
    Write-Host "✓ 已連結到: $remoteUrl" -ForegroundColor Green
}

Write-Host ""
Write-Host "推送到 GitHub..." -ForegroundColor Yellow

# 設定分支為 main
& "C:\Program Files\Git\cmd\git.exe" branch -M main

# 推送
& "C:\Program Files\Git\cmd\git.exe" push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "=== 推送成功！ ===" -ForegroundColor Green
    Write-Host ""
    Write-Host "接下來的步驟：" -ForegroundColor Cyan
    Write-Host "1. 前往 https://github.com/nightmare-yuming/sensor-hub/settings/pages"
    Write-Host "2. 在 Source 選擇 'GitHub Actions'"
    Write-Host "3. 等待部署完成（約 1-2 分鐘）"
    Write-Host "4. 訪問您的網站: https://nightmare-yuming.github.io/sensor-hub/"
    Write-Host ""
}
else {
    Write-Host ""
    Write-Host "=== 推送失敗 ===" -ForegroundColor Red
    Write-Host "請檢查："
    Write-Host "1. GitHub repository 是否已建立"
    Write-Host "2. 是否有權限推送"
    Write-Host "3. 網路連線是否正常"
    Write-Host ""
    Write-Host "詳細說明請參考 DEPLOYMENT_COMPLETE.md"
}
