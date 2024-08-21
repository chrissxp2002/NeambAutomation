import { expect, type Locator, type Page } from '@playwright/test';
export class BasePage{

    readonly page: Page; 
   
    constructor(page: Page) {
        this.page = page;  
      }

      async goto() {
      }


      /*async validateControlIsVisible(uiControl, timeout)
      {
        await expect(uiControl).toBeVisible();
      }

      async click(uiControl)
      {
        await uiControl.click();
      }

      async fill(uiControl, str)
      {
        await uiControl.fill(str);
      }
    */
}
