import { test, expect } from '@playwright/test';
import {GTMChecker} from '../../../Pages/GTMChecker.ts'
import { HomePage } from '../../../Pages/SEIU/HomePage.ts';


//Evaluates each menu in header have a navigation event attached
test('SEUIMB_ValidateGTMNavigationEvents', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  const gtm =  new GTMChecker(page);
  await gtm.validateLinksHaveEventAttached(homePage.allMainMenuLinks,"dataLayerPush({'event':'navigation");
});