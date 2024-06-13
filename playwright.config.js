import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  // timeout: 3000000,
  // globalTimeout: 60000000,
  use: {
    baseURL: "http://localhost:5173",
    headless: false, //有測試畫面出來
  
  },

});
