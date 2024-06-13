import { test, expect } from "@playwright/test";
// const { test, expect } = require('@playwright/test');

test.describe("首頁", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test.describe("畫面", () => {
    test("點擊START 按鈕 , 能看見count 的畫面,而且count 預設為0", async ({
      page,
    }) => {
      // 點擊START按鈕
      await page.click("[data-testid='start-button']");

      //等待count 的元素出現
      await page.waitForSelector("[data-testid='cypress-count']");
      // 獲取count 的文本內容
      const countText = await page.textContent("[data-testid='cypress-count']");
      //斷言 count 的文本內容 count:0
      expect(countText).toContain("count:0");
    });
  });

  test.describe("功能", () => {
    test("點擊 +1按鈕, count 增加", async ({ page }) => {
      await page.click("[data-testid='start-button']");

      //等待count 的元素出現
      await page.waitForSelector("[data-testid='cypress-count']");
      // 点击 +1 按钮
      await page.click("[data-testid='increment-button']");

      // 等待 count 更新
      await page.waitForFunction(() => {
        const countText = document.querySelector(
          "[data-testid='cypress-count']"
        ).textContent;
        return countText.includes("count:1");
      });

      // 获取更新后的 count 文本
      const countText = await page.textContent("[data-testid='cypress-count']");

      // 断言 count 是否增加到 1
      expect(countText).toContain("count:1");
    });

    test("點擊 +1按鈕, count 增加, 點擊 Alert 按鈕, 顯示 alert 彈出框, alert 框則顯示 1", async ({
      page,
    }) => {
      await page.click("[data-testid='start-button']");

      //等待count 的元素出現
      await page.waitForSelector("[data-testid='cypress-count']");
      // 点击 +1 按钮
      await page.click("[data-testid='increment-button']");

      // 等待 count 更新
      await page.waitForFunction(() => {
        const countText = document.querySelector(
          "[data-testid='cypress-count']"
        ).textContent;
        return countText.includes("count:1");
      });

      // 获取更新后的 count 文本
      const countText = await page.textContent("[data-testid='cypress-count']");

      // 断言 count 是否增加到 1
      expect(countText).toContain("count:1");

      //監聽 alert 彈出框
      page.once("dialog", async (dialog) => {
        //斷言alert框文本內容是否為1
        expect(dialog.message()).toBe("1");
        //關閉alert 框
        await dialog.accept();
      });

      //點擊 Alert 按鈕
      await page.click("[data-testid='alert-button']");
    });

    test("input 填寫 Hi!", async ({ page }) => {
      await page.click("[data-testid='start-button']");

      //等待輸入框出現
      await page.waitForSelector("[data-testid='cypress-input']");

      //填寫輸入框
      await page.fill("[data-testid='cypress-input']", "Hi!");

      //驗證輸入框的值是否為 "Hi!"
      const inputValue = await page.inputValue("[data-testid='cypress-input']");
      expect(inputValue).toBe("Hi!");
    });

    test("點擊BACK 按鈕回到 主畫面", async ({ page }) => {
      await page.click("[data-testid='start-button']");

      //等待back 的按鈕出現
      await page.waitForSelector("[data-testid='back-button']");

      //點擊BACK按鈕
      await page.click("[data-testid='back-button']");


      // 獲取title
      const title = await page.textContent("[data-testid='cypress-title']");

      // 断言 title是否有出現
      expect(title).toBe("Cypress Test");
    });
  });
});
