import { test, expect } from '@playwright/test';
import { HomePage } from '../../Pages/SEIU/HomePage.ts';



test('SEIU_ValidateFooterPersonalLoanLink', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await page.getByRole('link', { name: 'SEIU Personal Loan' }).click();
  await expect(page.getByRole('heading', { name: 'SEIU Personal Loan', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Apply Now' })).toBeVisible();
  });

test('SEIU_ValidateFooterGroupTermLifeLink', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await page.getByRole('link', { name: 'SEIU Group Term Life' }).click();
  await expect(page.getByRole('heading', { name: 'SEIU Group Term Life Insurance', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Enroll Now' })).toBeVisible();
  });

test('SEIU_ValidateFooterDiscountTicketsLink', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await page.getByRole('link', { name: 'SEIU Discount Tickets' }).click();
  await expect(page.getByRole('heading', { name: 'SEIU Discount Tickets Program', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Search Tickets' })).toBeVisible();
  });


test('SEIU_ValidateFooterCollegeBenefitProgramLink', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await page.getByRole('link', { name: 'SEIU College Benefit Program' }).click();
  await expect(page.getByRole('heading', { name: 'SEIU College Benefit Program', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Get Started' })).toBeVisible();
  });

test('SEIU_ValidateFooterHotelsLink', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await page.getByRole('link', { name: 'Hotels' }).click();
  await expect(page.getByRole('heading', { name: 'SEIU Travel: Hotels' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Book Your Room' })).toBeVisible();
});

test('SEIU_ValidateFooterAboutMemberBenefitsLink', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await page.getByRole('link', { name: 'About SEIU Member Benefits' }).click();
  await expect(page.getByRole('heading', { name: 'About SEIU Member Benefits' }).getByRole('strong')).toBeVisible();
  await expect(page.getByRole('img', { name: 'Diverse group of union members' })).toBeVisible();
  });
    
  
test('SEIU_ValidateFooterCreditCardLogo', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await expect(page.getByRole('contentinfo').getByText('SEIU Rewards Visa® Card', { exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'SEIU Rewards Visa Card' }).nth(3)).toBeVisible();
  await expect(page.getByRole('contentinfo').getByRole('link', { name: 'Learn More' })).toBeVisible();
  });

test('SEIU_ValidateFooterFacebookLogo', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await expect(page.getByRole('link', { name: '' })).toBeVisible();
  });

    
  
  


