import { test, expect } from '@playwright/test';

test.describe('Sanity ChipsXP Application', () => {

  test('Frontend should load successfully', async ({ page }) => {
    const response = await page.goto('/');
    
    // Verify we get a successful 200 response
    expect(response?.status()).toBe(200);

    // Verify the page renders (e.g. looking for the Sanity Pagebuilder or similar text)
    // We'll just look for a generic body element to ensure it didn't crash
    await expect(page.locator('body')).toBeVisible();
  });

  test('Sanity Studio backend should load', async ({ page }) => {
    const response = await page.goto('/studio');
    
    // Verify we get a successful 200 response
    expect(response?.status()).toBe(200);

    // Verify the NextStudio container mounts
    // Sanity studio renders an element with id #sanity
    await expect(page.locator('#sanity')).toBeVisible({ timeout: 15000 });
  });

});
