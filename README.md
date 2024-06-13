# 在原有的專案中引入 Playwright 測試流程


>Playwright </br>
幾乎所有的操作都是異步的, 因此需要使用 await 來等待操作。這樣可以確保測試按預期的順序執行，並且在進行下一步操作之前，前一步操作已經完成。

> run 測試專案
1. npm init playwright@latest

2. npm run dev (啟動本地伺服器)

<!-- (擇一) -->
3. npx playwright test (運行測試, 跳出測試畫面,隨機自動關閉)

3. npx playwright test --ui (時間旅行調試,也可操作測試)



