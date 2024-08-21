import { test, expect } from '@playwright/test';
import { HomePage } from '../../Pages/NEA/HomePage.ts'; 



//Validates the basic element of home hero block are present in screen
test('NEA_ValidateHeroElements', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await expect(page.getByRole('heading', { name: 'Benefits test and discounts' }).locator('span')).toBeVisible();
    await expect(page.getByText('We’re here to provide support').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Become a Member' })).toBeVisible();
    });


  test('NEA_ValidateCarouselElements', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await expect(page.locator('#slick-slide00').getByRole('link').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'NEA Customized Cash Rewards Credit Card and Amazon Gift Card with springtime' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Family enjoying a beach day' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Auto Insurance. Member' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Earn Cash Back. Maximize It.' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Life Insurance. No Cost To' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Get a Quote' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Apply Now', exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Confirm Beneficiaries' })).toBeVisible();
    });

