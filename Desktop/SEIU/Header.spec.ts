import { test, expect } from '@playwright/test';
import * as testData from '../../Pages/testData.ts'
import { HomePage } from '../../Pages/SEIU/HomePage.ts';

let nea_Url;
let seiu_Url;

test.beforeAll(async () => {
  nea_Url =  testData.Url.neambBaseUrl;
  seiu_Url = testData.Url.seiumbBaseUrl;
});



//Validates the main logo image is present on screen.
test('SEIU_ValidateMainLogo', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await expect(homePage.mainLogo).toBeVisible();
});

//Validates the card logo image is present on screen.
test('SEIU_ValidateCardLogo', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await expect(homePage.cardLogo).toBeVisible();
});



//Search 'nea personal loan' and asserts that the first card is visible on screen.
test('SEIU_SearchResults', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.searchButton.click();
  await homePage.searchTextBox.click();
  await homePage.searchTextBox.fill('nea personal loan');
  await homePage.magnifierIconSearch.click();
  await expect(page.getByText('Benefit444', { exact: true }).first(),"Benefit tezt not found").toBeVisible();
  await expect(page.getByRole('img', { name: 'Couple sitting in kitchen' })).toBeVisible();
  await expect(page.locator('p').filter({ hasText: /^SEIU Personal Loan$/ })).toBeVisible();
  await expect(page.getByText('Consolidate higher-interest').first()).toBeVisible();
  await expect(page.getByText('Benefit', { exact: true }).first()).toBeVisible();
});




//Validate the login cta GTM event on SEIU Discount tickets product
test('SEIU_ValidateGTMEventOnProduct', async ({ page }) => {
  await page.goto(seiu_Url + '/benefits/seiu-discount-tickets-program');
  const clickBtn = await page.locator('#product_cta_sign_in_cold_button');
  const click_Attr = await clickBtn.getAttribute('onclick',{timeout: 10000 });
  await expect(click_Attr).toContain("dataLayerPush({'event':'login cta'");
});
