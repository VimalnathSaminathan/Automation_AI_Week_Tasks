const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { DashboardPage } = require('../pages/DashboardPage');

test.use({ headless: false }); // this line for headless mode

test('POM Login: should show Logout button after successful login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await page.goto('https://demoqa.com/login');
  await loginPage.enterUsername('admin');
  await loginPage.enterPassword('Admin@123');
  await loginPage.clickLogin();

  // Validate that the Logout button is visible
  await dashboardPage.expectLogoutVisible();
  await expect(dashboardPage.logoutButton).toBeVisible();
}); 