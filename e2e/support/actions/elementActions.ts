import { elementChecks } from '../check/elementChecks' ;
import {Logger} from '../logger';
const logger = Logger.Instance;

class ElementActions {

  /**
   * Click the element
   * @param  {WebdriverIO.Element}   element clicking element
   */
  public async clickElement(element: WebdriverIO.Element) {
    logger.log('file').info(`clicking elemet:${await element.getText()}`);
    await elementChecks.isDisplayed(element);
    try {
      await element.click();
    } catch (Error) {
      if (Error.message.includes('not clickable at point')) {
        await element.scrollIntoView();
        return element.click();
      } else {
        return browser.execute('arguments[0].click();', element);
      }
    }
  }

  /**
   * Scroll Into View
   * @param  {WebdriverIO.Element}   element clicking element
   */
  public async scrollIntoView(element: WebdriverIO.Element) {
    logger.log('file').info(`scroll to element:${await element.getText()}`);
    await elementChecks.isDisplayed(element);
    await element.scrollIntoView();
  }

  /**
   * @description Clear the text box
   * @param  {WebdriverIO.Element}   element element
   */
  public async clearInputField(element: WebdriverIO.Element): Promise<void> {
    logger.log('file').info(`clearing input field:${await element.getText()}`);
    return element.clearValue();
  }

  /**
   * @description get element text
   * @param  {WebdriverIO.Element}   element element
   */
  public async getElementText(element: WebdriverIO.Element): Promise<string> {
    logger.log('file').info(`get element text:${await element.getText()}`);
    return (await element.getText()).toString();
  }

  /**
   * @description set value in text box
   * @param  {WebdriverIO.Element}   element element
   */
  public async setInputField(
    element: WebdriverIO.Element,
    text: any
  ): Promise<void> {
    logger.log('file').info(`set input field:${await element.getText()}`);
    return element.setValue(text);
  }
}
export const elementActions = new ElementActions();
