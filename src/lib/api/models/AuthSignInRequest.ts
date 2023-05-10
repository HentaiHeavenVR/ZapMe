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

import { exists, mapValues } from '../runtime';
/**
 * Message sent to server to authenticate user using username and password
 * @export
 * @interface AuthSignInRequest
 */
export interface AuthSignInRequest {
    /**
     * Username or email address
     * @type {string}
     * @memberof AuthSignInRequest
     */
    usernameOrEmail: string;
    /**
     * Password
     * @type {string}
     * @memberof AuthSignInRequest
     */
    password: string;
    /**
     * Make this login persist for a longer period of time
     * @type {boolean}
     * @memberof AuthSignInRequest
     */
    rememberMe: boolean;
}

/**
 * Check if a given object implements the AuthSignInRequest interface.
 */
export function instanceOfAuthSignInRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "usernameOrEmail" in value;
    isInstance = isInstance && "password" in value;
    isInstance = isInstance && "rememberMe" in value;

    return isInstance;
}

export function AuthSignInRequestFromJSON(json: any): AuthSignInRequest {
    return AuthSignInRequestFromJSONTyped(json, false);
}

export function AuthSignInRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthSignInRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'usernameOrEmail': json['usernameOrEmail'],
        'password': json['password'],
        'rememberMe': json['rememberMe'],
    };
}

export function AuthSignInRequestToJSON(value?: AuthSignInRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'usernameOrEmail': value.usernameOrEmail,
        'password': value.password,
        'rememberMe': value.rememberMe,
    };
}

