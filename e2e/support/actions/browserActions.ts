import {Logger} from '../logger';
const logger = Logger.Instance;

/**
 * Browser actions class
 */
class BrowserActions {

  /**
    * openWebsite
    */
  public async openWebsite() {
    let url = browser.options.baseUrl;
    logger.log('file').info(`opening website:${url}`);
    await browser.url(url);
  }
}
export const browserActions = new BrowserActions();
