
class BrowserChecks {

  /**
     * Checks url to contain
     * @param expectedTitle expected url
     */
  public checkUrlToContain(expectedUrl: string) {
    expect(browser).not.toHaveUrlContaining('expectedUrl', { message: `Page Url to not contain "${expectedUrl}"` });
  }
}
export const browserChecks = new BrowserChecks();
