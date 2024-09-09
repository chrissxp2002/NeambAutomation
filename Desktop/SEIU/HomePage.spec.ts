import { test, expect } from '@playwright/test'; 
import { HomePage } from '../../Pages/SEIU/HomePage.ts';


//Validates the basic element of home hero block are present in screen
test('SEIU_ValidateHeroElements', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await expect(page.locator("//section[contains(@class,'desktop')]//h1")).toBeVisible();
    await expect(page.locator("(//section[contains(@class,'desktop')]//span)[2]")).toBeVisible();
    await expect(page.locator("//section[contains(@class,'desktop')]//a")).toBeVisible();
    });

  test('SEIU_ValidateCarouselElements', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      await expect(page.getByRole('link', { name: 'Rock guitarist playing solo' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Illustration of SEIU Rewards' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'A woman standing at Phi Phi' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Have Fun. For Less!' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Earn Unlimited Rewards.' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Life Is About the Journey.' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Search Tickets' })).toBeVisible();
      await expect(page.locator('#product_carousel_primary_action_button2')).toBeVisible();
      await expect(page.getByRole('link', { name: 'Book Your Trip' })).toBeVisible();
      });


