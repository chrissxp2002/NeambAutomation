import * as testData from './testData.ts';
import { expect, type Locator, type Page, type APIRequestContext  } from '@playwright/test';
export class APICaller{

    readonly request: APIRequestContext; 
    readonly connError;
    constructor(request: APIRequestContext) {
        this.request = request;
        this.connError =    "Connection to API Server " + testData.APIServer.Url + " could not be established";
      }


    async GetAccessToken() {
        const methodName = testData.APIServer.Url + '/token-management/v1/access-token';
        console.log("Attempting to connect to API server...");
        const response = await this.request.post(methodName, {
            headers: {
                Authorization: 'Basic d2Vic2l0ZXM6ZmZGRWxxbWROTkNwRzEyQQ==',
              }
      })
       expect(response.ok(),this.connError).toBeTruthy();
       const accessToken = (await (response.json())).data.accessToken;
       return accessToken;
      }


      async DeleteUser(token,userMail, unionId) {
        const methodName = testData.APIServer.Url + '/account-management/v1/delete-user';
        const response = await this.request.post(methodName, {
            headers: {
                Authorization: 'Bearer ' + token,
              },
        data: {
            username: userMail,
            unionId: unionId,
        }
      })
      expect(response.ok(),"Following user could not be deleted " + userMail + " API Method: "  + methodName  + " Error: "+ response.statusText()).toBeTruthy()
      }



}