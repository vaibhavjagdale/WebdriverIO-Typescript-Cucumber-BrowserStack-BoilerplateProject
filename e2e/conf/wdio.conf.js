/* eslint-disable */
require('module-alias/register');
require('dotenv').config();

exports.config = {
    specs: ['./features/*.feature'],
    maxInstances: 2,
    capabilities:[{
        "browserName": "chrome",
        "os": "Windows",
        "os_version": "10",
        "browserstack.debug": true,
        "browserstack.console": "errors",
        "build": 'Webdriverio Cucumber Typescript Browserstack',
        "resolution": "1920x1080",
        "project":'webdriverio-cucumber-typescript-browserstack'
    }],
    logLevel: 'silent',
    bail: 0,
    baseUrl: process.env.BASE_URL,
    waitforTimeout: 45000,
    services: ['browserstack'],
    user:  process.env.BROWSERSTACK_USER,
    key:  process.env.BROWSERSTACK_KEY,
    framework: 'cucumber',

    reporters: [
        'dot'
        ],

        cucumberOpts: {
            require: ['e2e/steps/*.ts'],
            backtrace: false,
            requireModule: [],
            dryRun: false,
            failFast: false,
            format: ['pretty'],
            snippets: true,
            source: true,
            profile: [],
            strict: false,
            tagExpression: '',
            timeout: 150000,
            ignoreUndefinedDefinitions: false
          },

     /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs        List of spec file paths that are to be run
     * @param {Object}         browser      instance of created browser/device session
     */
     before: async function (capabilities, specs) {
       await browser.maximizeWindow();
    }
};
