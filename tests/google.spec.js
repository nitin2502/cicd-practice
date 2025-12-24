 const { test, expect } = require('@playwright/test');

 test('Google homepage title test', async ({ page }) => {
   await page.goto('https://www.google.com');
   await expect(page).toHaveTitle(/Google/);
 });
