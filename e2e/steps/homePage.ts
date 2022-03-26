import { Given,When,Then} from '@cucumber/cucumber';
import { homePageHelper} from '../helpers/homePageHelper';
import {customWorld} from '../support/world';

Given(/^go to home page$/, async() => {
  await homePageHelper.openWebsite();
});

When(/^click on the computer section$/, async() => {
  await homePageHelper.selectComputerSection();
});

When(/^select Desktop catagory$/, async() => {
  await homePageHelper.selctDesktopCatagory();
});

When(/^select the Lenovo PC option and add (.*) units$/, async(units: Number) => {
  await homePageHelper.selectLenovoPC();
  await homePageHelper.enterProductQuantity(units);
});

When(/^click on Add To Cart$/, async() => {
  await homePageHelper.clickAddCart();
});

When(/^scroll to Shopping Cart$/, async() => {
  await homePageHelper.scrollToShoppingCart();
});

When(/^click on Shopping cart$/, async() => {
  await homePageHelper.clickShoppingCartLabel();
});

Then(/^validate that my cart has "([^"]*)" item$/, async(productName: string) => {
  customWorld.sharedMap.set('productName', productName);
  await homePageHelper.validateProductName();
});

Then(/^validate that the Price of each item is "([^"]*)"$/, async(itemPrice: string) => {
  customWorld.sharedMap.set('itemPrice', itemPrice);
  await homePageHelper.validateUnitItemPrice();
});

Then(/^total amount is "([^"]*)"$/, async(totalAmount: string) => {
  await homePageHelper.validateTotalAmount();
});
