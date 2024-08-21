import { test, expect } from '@playwright/test';
import {GTMChecker} from '../../../Pages/GTMChecker.ts'
import { HomePage } from '../../../Pages/NEA/HomePage.ts';



//Evaluates each link  in footer  have a navigation event attached
test('NEA_ValidateGTMNavigationEvents', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  const gtm =  new GTMChecker(page);
  await gtm.validateLinksHaveEventAttached(homePage.allFooterLinks,"dataLayerPush({'event':'navigation");
});