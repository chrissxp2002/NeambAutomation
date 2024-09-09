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
    //card 1
    await expect(page.locator('#slick-slide00').getByRole('link').first()).toBeVisible();
    await expect(page.locator("(//div[contains(@class,'slick-slide')]//h5)[1]")).toBeVisible();
    await expect(page.locator("(//div[contains(@class,'slick-slide')]//p)[1]")).toBeVisible();
    await expect(page.locator("(//div[contains(@class,'slick-slide')]//div[@class='footer']/a)[1]")).toBeVisible();
    //card 2
    await expect(page.locator("(//div[contains(@class,'slick-slide')]//h5)[2]")).toBeVisible();
    await expect(page.locator("(//div[contains(@class,'slick-slide')]//p)[2]")).toBeVisible();
    await expect(page.locator("(//div[contains(@class,'slick-slide')]//div[@class='footer']/a)[2]")).toBeVisible();
    //card 3
    await expect(page.locator("(//div[contains(@class,'slick-slide')]//h5)[3]")).toBeVisible();
    await expect(page.locator("(//div[contains(@class,'slick-slide')]//p)[3]")).toBeVisible();
    await expect(page.locator("(//div[contains(@class,'slick-slide')]//div[@class='footer']/a)[3]")).toBeVisible();
    //card 4
    await expect(page.locator("(//div[contains(@class,'slick-slide')]//h5)[4]")).toBeVisible();
    await expect(page.locator("(//div[contains(@class,'slick-slide')]//p)[4]")).toBeVisible();
    await expect(page.locator("(//div[contains(@class,'slick-slide')]//div[@class='footer']/a)[4]")).toBeVisible();

    });

