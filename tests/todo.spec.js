const { test, expect } = require('@playwright/test');
const { TodoPage } = require('../pages/TodoPage');
const { todos } = require('../data/todoData');
const { generateRandomTodo } = require('../utils/dataHelper');


test.describe('Todo MVC - Mini Regression Suite', () => {
  for (const todoText of todos) {
    test(`User can add todo: ${todoText}`, async ({ page }) => {
      const todo = new TodoPage(page);

      await todo.open();
      await todo.addTodo(todoText);

      await expect(page.locator('.todo-list li').first()).toHaveText(todoText);
    });
  }

  test('User can mark first todo as completed', async ({ page }) => {
    const todo = new TodoPage(page);

    await todo.open();
    await todo.addTodo('Complete me');

    await todo.toggleFirstTodoComplete();
    const completed = await todo.firstTodoIsCompleted();

    expect(completed).toBe(true);
  });
});
test('User can add random todo', async ({ page }) => {
  const todo = new TodoPage(page);

  await todo.open();

  const randomText = generateRandomTodo();
  await todo.addTodo(randomText);

  await expect(page.locator('.todo-list li').first()).toHaveText(randomText);
});
