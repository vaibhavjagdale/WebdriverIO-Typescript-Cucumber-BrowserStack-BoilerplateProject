/* eslint-disable */
require('dotenv').config();

class BasePage {

  /**
     * openWebsite
     */
  public async openWebsite() {
    await browser.url(process.env.BASE_URL);
  }

  /**
     * getUrl
     */
  public async getUrl() {
    await browser.getUrl();
  }

  /**
    * @description : Go to URL with URI
    * @param:uri
    * @returns : Promise<void>
    */
  public async goToUrl(uri: string) {
    const url = await browser.getUrl();
    return browser.url(url + '/' + uri);
     
    }

  /**
    * @description : Go to URL with URI
    * @param:url
    * @returns : Promise<void>
    */
  public async goToFullUrl(url: string) {
    return browser.url(url);
  }

  /**
    * refresh the browser
    */
  public async browserRefresh() {
    return browser.refresh();
  }
}

export const basePage = new BasePage();
