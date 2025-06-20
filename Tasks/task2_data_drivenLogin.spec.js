const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

test.use({ headless: false }); // this line for headless mode

// Read login data from JSON file
const loginDataPath = path.join(__dirname, 'login_data.json');
const loginData = JSON.parse(fs.readFileSync(loginDataPath, 'utf-8'));

test.describe('Data-driven login tests', () => {
  for (const { username, password } of loginData) {
    test(`Login attempt for user: ${username}`, async ({ page }) => {
      await page.goto('https://demoqa.com/login');
      await page.fill('#userName', username);
      await page.fill('#password', password);
      await page.click('#login');
      // Check if Logout button is visible
      const logoutButton = page.getByRole('button', { name: 'Log out' });
      let loginSuccess = false;
      try {
        await expect(logoutButton).toBeVisible({ timeout: 3000 });
        loginSuccess = true;
      } catch (e) {
        loginSuccess = false;
      }
      console.log(`User: ${username} | Login ${loginSuccess ? 'SUCCESS' : 'FAILED'}`);
    });
  }
});
