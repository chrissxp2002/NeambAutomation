import { test, expect } from '@playwright/test';
import {GTMChecker} from '../../../Pages/GTMChecker.ts'
import { HomePage } from '../../../Pages/SEIU/HomePage.ts';


test('SEIU_ValidateGTMOnHeroCTA', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    const gtm =  new GTMChecker(page);
    await gtm.validateLinksHaveEventAttached(homePage.heroBtn,"dataLayerPush({'event':'hero");
  });

  test('SEIU_ValidateGTMOnCarouselCTA', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    const gtm =  new GTMChecker(page);
    await gtm.validateLinksHaveEventAttached(homePage.carouselBtn,"dataLayerPush({'position':'1','event':'multi-offer card'");
  });
