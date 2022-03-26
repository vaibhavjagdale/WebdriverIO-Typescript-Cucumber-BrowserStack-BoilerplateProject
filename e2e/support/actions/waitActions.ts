import {Logger} from '../logger';
const logger = Logger.Instance;

class WaitActions {
  /**
     * wait for element to be displayed
     * @param  {WebdriverIO.Element} element element
     */
  public async waitForDisplayed(element: any) {
    logger.log('file').info(`waiting for element to display:${await element.getText()}`);
    await element.waitForDisplayed({ timeout: 10000 });
  }
}
export const waitActions = new WaitActions();
