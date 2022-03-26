import * as chai from 'chai';
const expectChai = chai.expect;

class ElementChecks {

  /**
     * Check the expectedText and actualText are equal
     * @param actualText
     * @param expectedText
     */
  public  compareTexts(actualText: string,expectedText: string,message?: string) {
    expectChai(actualText).to.equal(expectedText,`Actual text to be "${actualText}" but found "${expectedText}"`);
  }

  /**
     * Check if the given element is (not) visible
     * @param  {String}   element   Element
     */
  public async isDisplayed (element: WebdriverIO.Element) {
    await expect(element).toBeDisplayed({ message: `Expected element "${element}" not to be displayed` });
  }

  /**
     * Check if the given selector is enabled
     * @param  {String}   selector   Element selector
     */
  public async isEnabled (element: WebdriverIO.Element) {
    await expect(element).toBeEnabled({ message: `Expected element "${element}" not to be enabled` });
  }

}
export const elementChecks = new ElementChecks();
