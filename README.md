# QA Automation Framework (Playwright) — Aneri Patel

A mini end-to-end UI automation framework built with **Playwright + JavaScript**, following real-world practices:
- **Page Object Model (POM)** for maintainable selectors/actions
- **Data-driven testing** (multiple inputs)
- **beforeEach()** for clean test setup
- Clear separation of **pages / tests / data / utils**

## Tech Stack
- Playwright
- JavaScript (Node.js)
- Git/GitHub

## Project Structure
qa-automation/
├── pages/ # Page Object Model files (selectors + reusable actions)
├── tests/ # Test spec files (actual test scenarios)
├── data/ # Test data (credentials, inputs)
├── utils/ # Reusable helper functions
├── package.json
└── playwright.config.js


---

## 🧠 Framework Design Principles

### 1️⃣ Page Object Model (POM)
All selectors and page actions are stored inside page classes.
This allows:
- Centralized selector management
- Cleaner test files
- Easy maintenance when UI changes

### 2️⃣ Separation of Concerns
- `pages/` → How to interact with the UI
- `tests/` → What to verify
- `data/` → Input test data
- `utils/` → Reusable helper logic

### 3️⃣ Reusability & Scalability
- Reusable page methods
- `beforeEach()` hooks for setup
- Data-driven testing with multiple inputs

---

## ✅ Implemented Test Coverage

### 🔐 Authentication Flow (the-internet.herokuapp.com)

- ✔ Valid user can login and logout
- ✔ Invalid password shows proper error message

### 📝 Todo MVC Demo (Playwright demo site)

- ✔ Add todo item
- ✔ Mark todo as completed
- ✔ Data-driven todo creation
- ✔ Random test data generation (utils)

---

## ▶️ How to Run Tests

### Install dependencies
```bash
npm install
