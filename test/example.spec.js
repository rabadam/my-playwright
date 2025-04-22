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
    await page.click('text=Contact');
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

  test('Contact form submission and success message', async ({ page }) => {
    await page.click('text=Contact');
    await page.fill('input[name="g51-name"]', 'Test User');
    await page.fill('input[name="g51-email"]', 'test@example.com');
    await page.fill('textarea[name="g51-message"]', 'This is a test message');
    await page.click('button[type="submit"]');
    await expect(page.locator('#contact-form-success-header')).toBeVisible();
    await expect(page.locator('#contact-form-success-header')).toContainText('Your message has been sent');
  });
});