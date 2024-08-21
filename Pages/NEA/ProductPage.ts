import { expect, type Locator, type Page } from '@playwright/test';
import * as testData from '../testData.ts';
import {BasePage} from '../BasePage.ts';


export class ProductPage extends BasePage{

    readonly mainCta: Locator; 

    constructor(page: Page) {
        super(page);
        this.mainCta = page.locator("#product_cta_sign_in_cold_button");


      }

      async loadProduct(productUrl) {
        await this.page.goto(testData.Url.neambBaseUrl + productUrl);
      }

      async ClickMainCTA() {
        await this.mainCta.click();
      }
    
}
