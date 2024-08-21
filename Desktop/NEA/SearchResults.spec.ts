import { test, expect } from '@playwright/test';
import { HomePage } from '../../Pages/NEA/HomePage.ts'; 


test('NEA_SearchResults', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.searchButton.click();
  await homePage.searchTextBox.click();
  await homePage.searchTextBox.fill('nea personal loan');
  await homePage.magnifierIconSearch.click();
  await expect(page.locator('.resultGtm > img').first(),"Search results card image not found").toBeVisible( {timeout: 10000 });
  await expect(page.locator('.title').first(),"Search results card title not found").toBeVisible({timeout: 10000 });
  await expect(page.locator('.hidden-xs > a').first(),"Search results card description not found").toBeVisible({timeout: 10000 });
  await expect(page.locator('.eye-brow').first(),"Search results card eyebrow link not found").toBeVisible({timeout: 10000 });
});


  