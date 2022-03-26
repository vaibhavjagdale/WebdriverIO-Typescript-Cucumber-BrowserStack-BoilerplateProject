import { homePage }  from '../pages/homePage';
import {customWorld} from '../support/world';
import {browserActions} from '../support/actions/browserActions';
import {elementActions} from '../support/actions/elementActions';
import {elementChecks} from '../support/check/elementChecks';

class HomePageHelper {

  /**
     * openWebsite
     */
  public async openWebsite() {
    await browserActions.openWebsite();
  }

  /**
     * selectComputerSection
     */
  public async selectComputerSection() {
    await homePage.clickComputerSection();
  }

  /**
     * selctDesktopCatagory
     */
  public async selctDesktopCatagory() {
    await homePage.clickDesktopCatagory();
  }

  /**
     * selectLenovoPC
     */
  public async selectLenovoPC() {
    await homePage.clickLenovoPC();
  }

  /**
     * enterProductQuantity
     * @param units
     */
  public async enterProductQuantity(units: Number) {
    customWorld.sharedMap.set('productQuantityUnits', units);
    await homePage.enterProductQuantity(units);
    await browser.keys('Enter');
  }

  /**
     * clickAddCart
     */
  public async clickAddCart() {
    await homePage.clickAddToCartButton();
  }

  /**
     * clickShoppingCartLabel
     */
  public async clickShoppingCartLabel() {
    await homePage.clickShoppingCartLabel();
  }

  /**
     *  scrollToShoppingCart
     */
  public async  scrollToShoppingCart() {
    await elementActions.scrollIntoView(await homePage.shoppingCartLabel);
  }

  /**
     *  validateProductName
     */
  public async validateProductName() {
    const actualProductName= await homePage.getproductNameText();
    const expectedProductName= customWorld.sharedMap.get('productName');
    await elementChecks.compareTexts(actualProductName,expectedProductName);
  }

  /**
     *  validateUnitItemPrice
     */
  public async validateUnitItemPrice() {
    const actualUnitItemPrice= await homePage.getproductUnitPriceText();
    const expectedUnitItemPrice= customWorld.sharedMap.get('itemPrice');
    await elementChecks.compareTexts(actualUnitItemPrice,expectedUnitItemPrice);
  }

  /**
     *  validateTotalAmount
     */
  public async validateTotalAmount() {
    const expectedTotalAmount= '$1,000.00';
    const actualTotalAmount= await homePage.getproductSubTotalText();
    await elementChecks.compareTexts(actualTotalAmount,expectedTotalAmount);
  }
}


export const homePageHelper = new HomePageHelper();
