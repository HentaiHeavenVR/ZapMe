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
 * @interface AuthSignIn
 */
export interface AuthSignIn {
    /**
     * Username or email address
     * @type {string}
     * @memberof AuthSignIn
     */
    usernameOrEmail?: string;
    /**
     * Password
     * @type {string}
     * @memberof AuthSignIn
     */
    password?: string;
    /**
     * Session name to remember this sign in by, e.g. "My home computer"
     * This is for the users to be able to see which devices they have logged in their user settings
     * @type {string}
     * @memberof AuthSignIn
     */
    sessionName?: string | null;
    /**
     * Make this login persist for a longer period of time
     * @type {boolean}
     * @memberof AuthSignIn
     */
    rememberMe?: boolean;
}

/**
 * Check if a given object implements the AuthSignIn interface.
 */
export function instanceOfAuthSignIn(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AuthSignInFromJSON(json: any): AuthSignIn {
    return AuthSignInFromJSONTyped(json, false);
}

export function AuthSignInFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthSignIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'usernameOrEmail': !exists(json, 'usernameOrEmail') ? undefined : json['usernameOrEmail'],
        'password': !exists(json, 'password') ? undefined : json['password'],
        'sessionName': !exists(json, 'sessionName') ? undefined : json['sessionName'],
        'rememberMe': !exists(json, 'rememberMe') ? undefined : json['rememberMe'],
    };
}

export function AuthSignInToJSON(value?: AuthSignIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'usernameOrEmail': value.usernameOrEmail,
        'password': value.password,
        'sessionName': value.sessionName,
        'rememberMe': value.rememberMe,
    };
}

