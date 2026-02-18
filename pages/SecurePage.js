class SecurePage {
  constructor(page) {
    this.page = page;
    this.header = page.locator('h2');
    this.logoutButton = page.locator('a.button.secondary.radius');
    this.flashMessage = page.locator('#flash');
  }

  async isLoaded() {
    // A reliable way to confirm we are on the secure page
    await this.header.waitFor({ state: 'visible' });
    const headerText = await this.header.innerText();
    return headerText.includes('Secure Area');
  }

  async logout() {
    await this.logoutButton.click();
  }

  async getMessageText() {
    const text = await this.flashMessage.innerText();
    return text.trim();
  }
}

module.exports = { SecurePage };
