import {elementActions} from '../support/actions/elementActions';

class HomePage {

  get computerSectionLink () { return $('.notmobile a[href="/computers"]');}
  get desktopCatagoryLink () { return $('.title a[href="/desktops"]');}
  get lenovoPCLink() { return $('.product-title a[href="/lenovo-ideacentre-600-all-in-one-pc"]');}
  get productEnteredQuantityTextBox() { return $('#product_enteredQuantity_3');}
  get addToCartButton() { return $('#add-to-cart-button-3');}
  get shoppingCartLabel() { return $('.cart-label');}
  get productNameLabel() { return $('.product-name');}
  get productUnitPriceLabel() { return $('.product-unit-price');}
  get productSubTotalLabel() { return $('.product-subtotal');}

  /**
     * clickComputerSection
     */
  public async clickComputerSection() {
    await elementActions.clickElement(await this.computerSectionLink);
  }

  /**
     * clickDesktopCatagory
     */
  public async clickDesktopCatagory() {
    await elementActions.clickElement(await this.desktopCatagoryLink);
  }

  /**
     * enterProductQuantity
     * @param units
     */
  public async enterProductQuantity(units: Number) {
    await elementActions.clearInputField(await this.productEnteredQuantityTextBox);
    await elementActions.setInputField(await this.productEnteredQuantityTextBox,units);
  }

  /**
     * clickLenovoPC
     */
  public async clickLenovoPC() {
    await elementActions.clickElement(await this.lenovoPCLink);
  }

  /**
     * clickAddToCartButton
     */
  public async clickAddToCartButton() {
    await elementActions.clickElement(await this.addToCartButton);
  }

  /**
     * clickShoppingCartLabel
     */
  public async clickShoppingCartLabel() {
    await elementActions.clickElement(await this.shoppingCartLabel);
  }

  /**
     * getproductNameText
     */
  public async getproductNameText() {
    return this.productNameLabel.getText();
  }

  /**
     * getproductUnitPriceText
     */
  public async getproductUnitPriceText() {
    return this.productUnitPriceLabel.getText();
  }

  /**
     * getproductSubTotalText
     */
  public async getproductSubTotalText() {
    return this.productSubTotalLabel.getText();
  }
}

export const homePage = new HomePage();
