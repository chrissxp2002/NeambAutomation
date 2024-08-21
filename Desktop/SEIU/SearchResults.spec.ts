import { test, expect } from '@playwright/test';
import { HomePage } from '../../Pages/SEIU/HomePage.ts'; 


//Search 'nea personal loan' and asserts that the first card is visible on screen.
test('SEIU_SearchResults', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.searchButton.click();
    await homePage.searchTextBox.click();
    await homePage.searchTextBox.fill('nea personal loan');
    await homePage.magnifierIconSearch.click();
    await expect(page.getByText('Benefit', { exact: true }).first(),"Search results card eyebrow not found").toBeVisible();
    await expect(page.getByRole('img', { name: 'Couple sitting in kitchen' }),"Search results card image not found").toBeVisible();
    await expect(page.locator('p').filter({ hasText: /^SEIU Personal Loan$/ }),"Search results card title not found").toBeVisible();
    await expect(page.getByText('Consolidate higher-interest').first(),"Search results card description not found").toBeVisible();
});
