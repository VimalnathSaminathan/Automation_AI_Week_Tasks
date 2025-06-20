const { test, expect } = require('@playwright/test');

test.use({ headless: false }); // this line for headless mode

test('Login flow: should show Logout button after successful login', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://demoqa.com/login');

  // Fill in username and password
  await page.fill('#userName', 'admin');
  await page.fill('#password', 'Admin@123');

  // Click the login button
  await page.click('#login');

  // Assert that the Logout button is visible
  await expect(page.getByRole('button', { name: 'Log out' })).toBeVisible();
}); 