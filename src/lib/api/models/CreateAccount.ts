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
 * Message sent to server to create a new account
 * @export
 * @interface CreateAccount
 */
export interface CreateAccount {
    /**
     * 
     * @type {string}
     * @memberof CreateAccount
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateAccount
     */
    password?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateAccount
     */
    email?: string;
    /**
     * 
     * @type {number}
     * @memberof CreateAccount
     */
    acceptedTosVersion?: number;
    /**
     * Response from cloudflare turnstile request
     * @type {string}
     * @memberof CreateAccount
     */
    turnstileResponse?: string;
}

/**
 * Check if a given object implements the CreateAccount interface.
 */
export function instanceOfCreateAccount(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateAccountFromJSON(json: any): CreateAccount {
    return CreateAccountFromJSONTyped(json, false);
}

export function CreateAccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateAccount {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'username': !exists(json, 'username') ? undefined : json['username'],
        'password': !exists(json, 'password') ? undefined : json['password'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'acceptedTosVersion': !exists(json, 'acceptedTosVersion') ? undefined : json['acceptedTosVersion'],
        'turnstileResponse': !exists(json, 'turnstileResponse') ? undefined : json['turnstileResponse'],
    };
}

export function CreateAccountToJSON(value?: CreateAccount | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'username': value.username,
        'password': value.password,
        'email': value.email,
        'acceptedTosVersion': value.acceptedTosVersion,
        'turnstileResponse': value.turnstileResponse,
    };
}

