import { test, expect } from '@playwright/test';
import * as testData from '../../Pages/testData.ts';
import { LoginPage } from '../../Pages/SEIU/LoginPage.ts';
import { ProductPage } from '../../Pages/SEIU/ProductPage.ts';

test('SEIU_RegularLogin', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.Login(testData.SEIUUser941.username, testData.SEIUUser941.password);
  await loginPage.ClickLoginBtn();
  await expect(page.getByRole('link', { name: 'Stacey' })).toBeVisible();
});

test('SEIU_AJAXLogin', async ({ page }) => {
  const productPage = new ProductPage(page);
  await productPage.loadProduct("/benefits/seiu-college-benefit-program");
  await productPage.ClickMainCTA();
  const loginPage = new LoginPage(page);
  await loginPage.Login(testData.SEIUUser941.username, testData.SEIUUser941.password);
  await loginPage.ClickLoginAnchor();
  await expect(page.getByRole('link', { name: 'SEIU College Benefit' })).toBeVisible({timeout: 10000 } );  //element only existing for NEA Pet page.
});
