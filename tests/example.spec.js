const { test, expect } = require('@playwright/test');

test('Simple CI test', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});
