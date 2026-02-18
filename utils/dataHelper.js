function generateRandomTodo() {
  const random = Math.floor(Math.random() * 10000);
  return `Auto Todo ${random}`;
}

module.exports = { generateRandomTodo };
