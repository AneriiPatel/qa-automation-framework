const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { SecurePage } = require('../pages/SecurePage');
const { users } = require('../data/users');

test.describe('Auth Flow Regression Suite', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
  });

  test('@smoke Valid user can login and logout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const securePage = new SecurePage(page);

  await loginPage.open();

  // Start listening BEFORE triggering login
  const authResponsePromise = page.waitForResponse(res =>
    res.url().includes('/authenticate')
  );

  await loginPage.login(users.valid.username, users.valid.password);

  // Now assert backend response (303 redirect is expected here)
  const authResp = await authResponsePromise;
  expect(authResp.status()).toBe(303);

  // UI validations
  expect(await securePage.isLoaded()).toBe(true);
  await expect(page.locator('#flash')).toContainText('You logged into a secure area!');

  // Logout
  await securePage.logout();
  await expect(page.locator('#flash')).toContainText('You logged out of the secure area!');
});


  test('@regression Invalid password shows error message', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login(users.invalid.username, users.invalid.password);
    await expect(page.locator('#flash')).toContainText('Your password is invalid!');
  });

});
