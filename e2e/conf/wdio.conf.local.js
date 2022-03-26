
exports.config = {
  specs: ['./features/*.feature'],
  capabilities: [{
    browserName: 'chrome',
    acceptInsecureCerts: true
  }],
  logLevel:'silent',
  bail: 0,
  baseUrl:'https://demo.nopcommerce.com/',
  waitforTimeout: 45000,
  connectionRetryCount: 3,
  framework: 'cucumber',

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
