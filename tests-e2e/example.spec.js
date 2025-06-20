import { test, expect } from '@playwright/test';

test('calculates sum of 2 and 3 to equal 5', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.fill('#a', '2');
  await page.fill('#b', '3');
  await page.click('#sumButton');

  const result = await page.textContent('#result');
  expect(result).toBe('5');
});