import { test, expect } from '@playwright/test';
import * as testData from '../../Pages/testData.ts';
import {APICaller}  from '../../Pages/APICaller.ts';
import {RegistrationPage}  from '../../Pages/NEA/RegistrationPage.ts';
import { HomePage } from '../../Pages/NEA/HomePage.ts';




test.beforeAll(async ({request}) => {
    const api =  new APICaller(request);
    const accessToken = await api.GetAccessToken();
    await api.DeleteUser(accessToken,testData.NEA_Registration.regemail,"1");
    await api.DeleteUser(accessToken,testData.NEA_Registration.regemail,"2");
    await api.DeleteUser(accessToken,"user2@guerrillamail.de","1");
    await api.DeleteUser(accessToken,"user2@guerrillamail.de","2");
  });


test('NEA_Registration', async ({ page }) => {
    const registrationPage =  new RegistrationPage(page);
    await registrationPage.goto();
    await registrationPage.Register(testData.NEA_Registration.regemail);
    await expect(registrationPage.successMessage).toBeVisible();
    
    
    //duplicate registration
    const homePage =  new HomePage(page);
    await homePage.goto();
    await homePage.logOutUser();
    await registrationPage.goto();
    await registrationPage.Register("user2@guerrillamail.de");
    await expect(registrationPage.duplicateRegistrationAlertMessage).toBeVisible();
    await registrationPage.duplicateExistingMailCheck.click();
    await registrationPage.duplicateRegistrationPasswordTxt.click();
    await registrationPage.duplicateRegistrationPasswordTxt.fill(testData.NEA_Registration.regpassword);
    await registrationPage.duplicateRegistrationSubmitBtn.click();
    await registrationPage.duplicateRegistrationApplyBtn.click();
    await expect(registrationPage.duplicateRegistrationThankYouMessage).toBeVisible();


    });


