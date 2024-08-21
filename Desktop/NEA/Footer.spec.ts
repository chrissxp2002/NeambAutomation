import { test, expect } from '@playwright/test';
import { HomePage } from '../../Pages/NEA/HomePage.ts'; 



test('NEA_ValidateFooterMoneyLink', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await page.getByRole('link', { name: 'Money' }).click();
  await expect(page.getByRole('heading', { name: 'Solutions to help give you' })).toBeVisible();
  });

test('NEA_ValidateFooterRetirementLink', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await page.getByRole('link', { name: 'Retirement' }).click();
  await expect(page.getByText('Invest in Yourself with the')).toBeVisible();
  });


test('NEA_ValidateFooterLifeAndAccidentInsuranceLink', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await page.getByRole('link', { name: 'Life & Accident Insurance' }).click();
    await expect(page.getByRole('heading', { name: 'Affordable coverage to help' })).toBeVisible();
  });

test('NEA_ValidateFooterHealthAndWellnessLink', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await page.getByRole('link', { name: 'Health & Wellness' }).click();
    await expect(page.getByRole('heading', { name: 'Insurance protection so you' })).toBeVisible();
    });

  
test('NEA_ValidateFooterAutoAndHomeInsuranceLink', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await page.getByRole('link', { name: 'Auto & Home Insurance' }).click();
  await expect(page.getByRole('heading', { name: 'Auto and home insurance just' })).toBeVisible();
  });

test('NEA_ValidateFooterShoppingAndDiscountsLink', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await page.getByRole('link', { name: 'Shopping & Discounts' }).click();
  await expect(page.getByRole('heading', { name: 'Save on everyday essentials' })).toBeVisible();
  });

test('NEA_ValidateFooterTravelLink', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await page.getByRole('link', { name: 'Travel' }).click();
  await expect(page.getByRole('heading', { name: 'NEA Travel Program: Where can' })).toBeVisible();
  });

  test('NEA_ValidateFooterNoCostBenefitsLink', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await page.getByRole('link', { name: 'No-Cost Benefits' }).nth(1).click();
    await expect(page.getByRole('heading', { name: 'No-Cost Benefits just for you.' }).locator('span').first()).toBeVisible();
    await expect(page.getByText('just for you.').first()).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Did you know that there are' })).toBeVisible();
  });

    test('NEA_ValidateFooterHardshipAssistanceLink', async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      await page.getByRole('link', { name: 'Hardship Assistance' }).click();
      await expect(page.getByRole('heading', { name: 'NEA Member Assistance' })).toBeVisible();
  });

  test('NEA_ValidateFooterAccountAccessLink', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await page.getByRole('link', { name: 'Account Access' }).click();
    await expect(page.getByRole('heading', { name: 'Profile & Password' })).toBeVisible();
});


test('NEA_ValidateFooterManageSuscriptionsLink', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await page.getByRole('link', { name: 'Manage Subscriptions' }).click();
  await expect(page.getByRole('heading', { name: 'Permissions & Subscriptions' })).toBeVisible();
});

test('NEA_ValidateFooterProfileAndPasswordLink', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await page.getByRole('link', { name: 'Profile & Password' }).click();
  await expect(page.getByRole('heading', { name: 'Profile & Password' })).toBeVisible();
});

test('NEA_ValidateFooterPayMyInsuranceLink', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await page.getByRole('link', { name: 'Pay My Insurance Bill' }).click();
  await expect(page.getByRole('heading', { name: 'Manage Products & Services' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Using the links on this page' })).toBeVisible();
});

test('NEA_ValidateFooterFAQsLink', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await page.getByRole('link', { name: 'FAQs' }).click();
  await expect(page.getByRole('heading', { name: 'Frequently Asked Questions' })).toBeVisible();
  await expect(page.getByText('Your Account').nth(1)).toBeVisible();
});

test('NEA_ValidateFooterContactUsLink', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await page.getByRole('link', { name: 'Contact Us' }).click();
  await expect(page.getByRole('link', { name: 'English' })).toBeVisible();
  await expect(page.getByRole('group').getByRole('link', { name: 'Español' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'We always like to hear from' })).toBeVisible();
  await expect(page.getByText('Please let us know how we can')).toBeVisible();
  await expect(page.getByPlaceholder('First Name')).toBeVisible();
  await expect(page.getByPlaceholder('Last Name')).toBeVisible();
});

test('NEA_ValidateFooterSocialLinks', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await expect(page.getByRole('link', { name: '' })).toBeVisible();
  await expect(page.getByRole('link', { name: '' })).toBeVisible();
});

test('NEA_ValidateFooterCreditCardLogo', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await expect(page.getByRole('link', { name: 'footer-logo' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'NEA Customized Cash Rewards Credit Card', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'NEA® Customized Cash Rewards Visa Signature® Credit Card' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'APPLY NOW', exact: true })).toBeVisible();
});

