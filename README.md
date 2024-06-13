# 在原有的專案中引入 Playwright 測試流程


>Playwright </br>
幾乎所有的操作都是異步的, 因此需要使用 await 來等待操作。這樣可以確保測試按預期的順序執行，並且在進行下一步操作之前，前一步操作已經完成。

> run 測試專案
1. npm init playwright@latest

2. npm run dev (啟動本地伺服器)

<!-- (擇一) -->
3. npx playwright test (運行測試, 跳出測試畫面,隨機自動關閉)

3. npx playwright test --ui (時間旅行調試,也可操作測試)



# E2E（End-to-End）
『模仿使用者操作流程』 需要run server </br>
> 這種測試涵蓋了應用程式的整個流程，包括前端和後端，通常會在真實的瀏覽器環境中執行。


- 畫面測試
  -  點擊START 按鈕 , 能看見count 的畫面,而且count 預設為0


- 功能測試
  -  點擊 +1按鈕, count 增加
  -  點擊 +1按鈕, count 增加, 點擊 Alert 按鈕, 顯示 alert 彈出框, alert 框則顯示 1
  -  input 填寫 Hi!
  -  點擊BACK 按鈕回到 主畫面


# 組件測試 
需要通過第三方的庫,才能實作 『組件測試』
