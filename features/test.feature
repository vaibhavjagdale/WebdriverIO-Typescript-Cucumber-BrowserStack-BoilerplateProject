
Feature: Sample test Cucumber WebdriverIO Typescript Boilerplate Project

Scenario: Verify Shopping cart
Given go to home page
And click on the computer section
And select Desktop catagory
And select the Lenovo PC option and add 2 units
And click on Add To Cart
When scroll to Shopping Cart
And click on Shopping cart
Then validate that my cart has "Lenovo IdeaCentre 600 All-in-One PC" item
Then validate that the Price of each item is "$500.00"
Then total amount is "$1000.00"