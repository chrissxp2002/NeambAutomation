import { expect, type Locator, type Page } from '@playwright/test';
export class GTMChecker{

    readonly page: Page; 
    constructor(page: Page) {
        this.page = page;   
      }


    async validateLinksHaveEventAttached(linksLocator,eventName) {
      const links = linksLocator;  
      const menuLinksCount = await links.count();
      for (let i = 0; i < menuLinksCount; i++) 
      {
        const menuLink = links.nth(i);
        const click_Attr = await menuLink.getAttribute('onclick',{timeout: 10000 });
        expect(click_Attr).toContain(eventName);
      }
    }

}



    
