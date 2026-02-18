class TodoPage {
  constructor(page) {
    this.page = page;
    this.newTodoInput = page.locator('.new-todo');
    this.todoItems = page.locator('.todo-list li');
    this.todoToggles = page.locator('.todo-list li .toggle');
    this.clearCompletedBtn = page.locator('button.clear-completed');
  }

  async open() {
    await this.page.goto('https://demo.playwright.dev/todomvc/');
  }

  async addTodo(text) {
    await this.newTodoInput.fill(text);
    await this.page.keyboard.press('Enter');
  }

  async toggleFirstTodoComplete() {
    await this.todoToggles.first().check();
  }

  async firstTodoText() {
    return await this.todoItems.first().innerText();
  }

  async firstTodoIsCompleted() {
    const classAttr = await this.todoItems.first().getAttribute('class');
    return (classAttr || '').includes('completed');
  }
}

module.exports = { TodoPage };
