class DashboardPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.logoutButton = page.getByRole('button', { name: 'Log out' });
  }

  async isLogoutVisible() {
    return await this.logoutButton.isVisible();
  }

  async expectLogoutVisible() {
    await this.logoutButton.waitFor({ state: 'visible', timeout: 5000 });
  }
}

module.exports = { DashboardPage }; 