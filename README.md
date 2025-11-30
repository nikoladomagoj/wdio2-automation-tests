# 🚀 QA Automation Testing – Task

This project contains **automated end-to-end (E2E) tests** built with **WebdriverIO**  
to test the form functionality on [Swag Labs](https://www.saucedemo.com/).

It serves as an example of a **QA automation project** that tests login, product selection,  
checkout flow, and validation messages.

---

## 📖 Table of Contents

- 🧠 About  
- ⚙️ Technologies  
- 📁 Project Structure  
- 💡 Installation & Setup  
- 🧪 Test Scenarios  
- 🛠️ Troubleshooting 

---

## 🧠 About

This repository demonstrates **automated QA testing** using the **WebdriverIO** framework.  
The tests verify key functionalities of a demo web shop, including:

- Logging into the application  
- Adding products to the shopping cart  
- Completing the checkout process  
- Verifying “Thank You” and confirmation messages    


---

## ✨ Features

- 🔹 WebdriverIO E2E tests  
- 🔹 Page Object Model structure (POM)   
- 🔹 Automatic test execution in Chromium   

---

## ⚙️ Installation

### Prerequisites
Before running the tests, make sure you have the following installed on your system:
- Node.js v18+
- npm (comes with Node.js)
- Google Chrome browser

### Steps
```bash
# Clone the repository
git clone https://github.com/nikoladomagoj/wdio2-automation-tests.git

# Navigate to the project folder
cd <wdio2-automation-tests>

# Initialize npm (if not already done)
npm init -y

# Install dependencies
npm install

# Install WebdriverIO CLI as a development dependency
npm install --save-dev @wdio/cli

#Run the WebdriverIO configuration wizard (only needed once)
npx wdio config

# Run the E2E test suite
npx wdio run wdio.conf.js

# In your wdio.conf.js, make sure the capabilities section includes Chrome and enforces the classic WebDriver mode
capabilities: [{
browserName: 'chrome',
'wdio:enforceWebDriverClassic': true
}],

# In your tests folder, make sure your structure follows this pattern:
test/
 ├── pageobjects/
 │    └── demo.page.js
 ├── specs/
 │    └── demo.spec.js


