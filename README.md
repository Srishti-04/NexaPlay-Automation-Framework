# NexaPlay Automation Framework

![Playwright](https://img.shields.io/badge/Playwright-Automation-green)
![TypeScript](https://img.shields.io/badge/TypeScript-Framework-blue)
![NodeJS](https://img.shields.io/badge/Node.js-Runtime-brightgreen)
![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-orange)
![Status](https://img.shields.io/badge/Status-Active-success)

Modern end-to-end automation testing framework built using Playwright and TypeScript with support for UI Testing, API Testing, Cross-Browser Testing, Parallel Execution, Reporting, and CI/CD integration.

---

# Features

- UI Automation Testing
- API Automation Testing
- Page Object Model (POM)
- Cross-Browser Testing
- Parallel Test Execution
- HTML Reporting
- Failure Screenshots & Videos
- Reusable Utility Functions
- GitHub Actions CI/CD Integration
- TypeScript-based Scalable Framework

---

# Tech Stack

- Playwright
- TypeScript
- Node.js
- GitHub Actions

---

# Project Structure

```bash
NexaPlay-Automation-Framework
│
├── pages
│   ├── LoginPage.ts
│   └── InventoryPage.ts
│
├── tests
│   ├── login.spec.ts
│   └── api.spec.ts
│
├── utils
│   └── screenshotUtil.ts
│
├── test-data
│
├── playwright.config.ts
├── package.json
├── README.md
```

---

# Implemented Test Scenarios

## UI Automation

- Valid Login Test
- Add Product To Cart
- Cart Badge Validation
- Screenshot Capture Utility

## API Automation

- GET API Request Validation
- Status Code Verification
- JSON Response Validation

---

# Installation

Clone the repository:

```bash
git clone https://github.com/Srishti-04/NexaPlay-Automation-Framework.git
```

Navigate to the project directory:

```bash
cd NexaPlay-Automation-Framework
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

# Run Tests

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Open HTML report:

```bash
npx playwright show-report
```

---

# Reporting Features

- HTML Reports
- Failure Screenshots
- Failure Videos
- Trace Viewer Support

---

# CI/CD Integration

Integrated with GitHub Actions for automated test execution on every push and pull request.

---

# Cross Browser Support

- Chromium
- Firefox
- WebKit

---

# Future Enhancements

- Data-Driven Testing
- Environment Configuration
- Docker Integration
- Jenkins Integration
- Advanced Reporting Dashboard

---

# Author

Srishti Jaiswal
