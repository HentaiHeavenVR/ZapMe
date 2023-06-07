/* tslint:disable */
/* eslint-disable */
/**
 * ZapMe
 * Open source application to control things
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AuthSignInRequest,
  ErrorDetails,
  SignInOk,
} from '../models';
import {
    AuthSignInRequestFromJSON,
    AuthSignInRequestToJSON,
    ErrorDetailsFromJSON,
    ErrorDetailsToJSON,
    SignInOkFromJSON,
    SignInOkToJSON,
} from '../models';

export interface AuthSignInOperationRequest {
    authSignInRequest?: AuthSignInRequest;
}

/**
 * AuthApi - interface
 * 
 * @export
 * @interface AuthApiInterface
 */
export interface AuthApiInterface {
    /**
     * 
     * @summary 
     * @param {AuthSignInRequest} [authSignInRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApiInterface
     */
    authSignInRaw(requestParameters: AuthSignInOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SignInOk>>;

    /**
     * 
     */
    authSignIn(authSignInRequest?: AuthSignInRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SignInOk>;

    /**
     * 
     * @summary 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApiInterface
     */
    authSignOutRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * 
     */
    authSignOut(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

}

/**
 * 
 */
export class AuthApi extends runtime.BaseAPI implements AuthApiInterface {

    /**
     * 
     */
    async authSignInRaw(requestParameters: AuthSignInOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SignInOk>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/v1/auth/signin`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AuthSignInRequestToJSON(requestParameters.authSignInRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SignInOkFromJSON(jsonValue));
    }

    /**
     * 
     */
    async authSignIn(authSignInRequest?: AuthSignInRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SignInOk> {
        const response = await this.authSignInRaw({ authSignInRequest: authSignInRequest }, initOverrides);
        return await response.value();
    }

    /**
     * 
     */
    async authSignOutRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/v1/auth/signout`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * 
     */
    async authSignOut(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.authSignOutRaw(initOverrides);
    }

}