import { test, expect } from '@playwright/test';

test('Check if home page loads', async ({ page }) => {
  await page.goto('https://ruelabadam.com');
  await expect(page).toHaveTitle(/Ruel Abadam/i);
});