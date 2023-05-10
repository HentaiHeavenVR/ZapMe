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
 * Request sent to server to update account password
 * @export
 * @interface UpdatePassword
 */
export interface UpdatePassword {
    /**
     * 
     * @type {string}
     * @memberof UpdatePassword
     */
    passwordNew: string;
    /**
     * 
     * @type {string}
     * @memberof UpdatePassword
     */
    passwordCurrent: string;
}

/**
 * Check if a given object implements the UpdatePassword interface.
 */
export function instanceOfUpdatePassword(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "passwordNew" in value;
    isInstance = isInstance && "passwordCurrent" in value;

    return isInstance;
}

export function UpdatePasswordFromJSON(json: any): UpdatePassword {
    return UpdatePasswordFromJSONTyped(json, false);
}

export function UpdatePasswordFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdatePassword {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'passwordNew': json['password_new'],
        'passwordCurrent': json['password_current'],
    };
}

export function UpdatePasswordToJSON(value?: UpdatePassword | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'password_new': value.passwordNew,
        'password_current': value.passwordCurrent,
    };
}

