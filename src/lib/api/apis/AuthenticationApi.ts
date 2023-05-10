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
  AuthSignIn,
  ErrorDetails,
  OAuthProviderList,
  SignInOk,
} from '../models';
import {
    AuthSignInFromJSON,
    AuthSignInToJSON,
    ErrorDetailsFromJSON,
    ErrorDetailsToJSON,
    OAuthProviderListFromJSON,
    OAuthProviderListToJSON,
    SignInOkFromJSON,
    SignInOkToJSON,
} from '../models';

export interface AuthSignInRequest {
    authSignIn?: AuthSignIn;
}

export interface AuthSignInOAuthRequest {
    provider?: string;
}

/**
 * AuthenticationApi - interface
 * 
 * @export
 * @interface AuthenticationApiInterface
 */
export interface AuthenticationApiInterface {
    /**
     * 
     * @summary 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApiInterface
     */
    authGetOAuthProvidersRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OAuthProviderList>>;

    /**
     * 
     */
    authGetOAuthProviders(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OAuthProviderList>;

    /**
     * 
     * @summary 
     * @param {AuthSignIn} [authSignIn] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApiInterface
     */
    authSignInRaw(requestParameters: AuthSignInRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SignInOk>>;

    /**
     * 
     */
    authSignIn(authSignIn?: AuthSignIn, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SignInOk>;

    /**
     * 
     * @summary 
     * @param {string} [provider] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApiInterface
     */
    authSignInOAuthRaw(requestParameters: AuthSignInOAuthRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SignInOk>>;

    /**
     * 
     */
    authSignInOAuth(provider?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SignInOk>;

    /**
     * 
     * @summary 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApiInterface
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
export class AuthenticationApi extends runtime.BaseAPI implements AuthenticationApiInterface {

    /**
     * 
     */
    async authGetOAuthProvidersRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OAuthProviderList>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/auth/oauth-providers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OAuthProviderListFromJSON(jsonValue));
    }

    /**
     * 
     */
    async authGetOAuthProviders(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OAuthProviderList> {
        const response = await this.authGetOAuthProvidersRaw(initOverrides);
        return await response.value();
    }

    /**
     * 
     */
    async authSignInRaw(requestParameters: AuthSignInRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SignInOk>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/auth/signin`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AuthSignInToJSON(requestParameters.authSignIn),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SignInOkFromJSON(jsonValue));
    }

    /**
     * 
     */
    async authSignIn(authSignIn?: AuthSignIn, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SignInOk> {
        const response = await this.authSignInRaw({ authSignIn: authSignIn }, initOverrides);
        return await response.value();
    }

    /**
     * 
     */
    async authSignInOAuthRaw(requestParameters: AuthSignInOAuthRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SignInOk>> {
        const queryParameters: any = {};

        if (requestParameters.provider !== undefined) {
            queryParameters['provider'] = requestParameters.provider;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/auth/oauth-signin`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SignInOkFromJSON(jsonValue));
    }

    /**
     * 
     */
    async authSignInOAuth(provider?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SignInOk> {
        const response = await this.authSignInOAuthRaw({ provider: provider }, initOverrides);
        return await response.value();
    }

    /**
     * 
     */
    async authSignOutRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

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
