const { test, expect } = require('@playwright/test');
const { TodoPage } = require('../pages/TodoPage');

test('Add todo using Page Object Model', async ({ page }) => {
  const todo = new TodoPage(page);

  await todo.open();
  await todo.addTodo('Learn POM');

  await expect(page.locator('.todo-list li')).toHaveText('Learn POM');
});
