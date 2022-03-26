# WebdriverIO UI Automation with Cucumber+TypeScript+BrowserStack

![Alt text](https://www.fleekitsolutions.com/wp-content/uploads/2020/04/webdriverio.png)
![Alt text](https://www.pngkit.com/png/detail/223-2232011_cucumber-jvm-for-java-cucumber-testing-logo.png) 
![Alttext](https://getlogovector.com/wp-content/uploads/2020/10/browserstack-logo-vector.png)

Create a powerful boilerplate for UI Automation test with WebdriverIO and Cucumber+TypeScript+BrowserStack
## Features
- Integration of WebdriverIO+Cucumber+TypeScript+BrowserStack in single project
- Use Page Object Model for managing your test cases
- Well defined folder structured.
- Use log4js for logging
- Use eslint covering most of rules.


## Getting Started

These instructions will get you a copy of the project up and running on your local and BrowserStack for development and testing purposes.

## Prerequisites

1. Node and NPM. [Installation Guide](https://nodejs.org/en/download/)
2. VS code . [Installation guide](https://code.visualstudio.com/)

## Configuration of VS Code

Add below extensions to the VS code
1. vscode-icons
2. Prettier - Code formatter
3. Path Intellisense

## Project Setup

1. clone the repo using command git clone `git clone`
2. go to core folder and install all the dependencies with below command `npm install`

## Environment file configuration

 use .env file for BrowserStack credentils
 ```
BROWSERSTACK_KEY=
BROWSERSTACK_USER=
```

### Running the tests

- To run test on local `npm run local`
- To run test on browserstack `npm run browserstack`
