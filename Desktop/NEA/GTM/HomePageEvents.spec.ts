import { test, expect } from '@playwright/test';
import {GTMChecker} from '../../../Pages/GTMChecker.ts'
import { HomePage } from '../../../Pages/NEA/HomePage.ts'; 



test('NEA_ValidateGTMOnHeroCTA', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    const gtm =  new GTMChecker(page);
    await gtm.validateLinksHaveEventAttached(homePage.heroBtn,"dataLayerPush({'event':'hero");
  });


  test('NEA_ValidateGTMOnCarouselCTA', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    const gtm =  new GTMChecker(page);
    await gtm.validateLinksHaveEventAttached(homePage.carouselBtn,"dataLayerPush({'position':'1','event':'multi-offer card'");
  });

  test('NEA_ValidateGTMOnJoinNowCTA', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    const gtm =  new GTMChecker(page);
    await gtm.validateLinksHaveEventAttached(homePage.joinNowBtn,"dataLayerPush({'event':'brand'");
  });


 