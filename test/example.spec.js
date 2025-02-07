import { test, expect } from '@playwright/test';

test.describe('Website Navigation', () => {
  const baseURL = 'https://ruelabadam.com';

  test.beforeEach(async ({ page }) => {
    await page.goto(baseURL);
  });

  test('Home page loads successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/Ruel Abadam/i); 
  });

  test('Navigate to About page', async ({ page }) => {
    await page.click('text=About');
    await expect(page).toHaveTitle(/About - Ruel Abadam/i); 
  });

  test('Navigate to Podcast page', async ({ page }) => {
    await page.click('text=Podcasts');
    await expect(page).toHaveTitle(/Podcasts - Ruel Abadam/i); 
  });

  test('Navigate to Blog page', async ({ page }) => {
    await page.click('text=Blogs');
    await expect(page).toHaveTitle(/Blogs - Ruel Abadam/i); 
  });

  test('Navigate to Contact page', async ({ page }) => {
    await page.click('text=Contact Me');
    await expect(page).toHaveTitle(/Contact - Ruel Abadam/i);
  });

  test('Ensure all pages are accessible from each other', async ({ page }) => {
    const navLinks = ['About', 'Blogs', 'Podcasts', 'Contact'];

    for (const link of navLinks) {
      await page.click(`text=${link}`);
      await expect(page).toHaveURL(new RegExp(`${baseURL}/(${link.toLowerCase()})`));
      await page.goto(baseURL); // Go back to home for the next iteration
    }
  }); 
});