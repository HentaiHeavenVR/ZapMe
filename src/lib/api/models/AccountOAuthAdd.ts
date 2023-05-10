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
 * Request sent to server to add a oauth connection to a account
 * @export
 * @interface AccountOAuthAdd
 */
export interface AccountOAuthAdd {
    /**
     * 
     * @type {string}
     * @memberof AccountOAuthAdd
     */
    oauthCode: string;
}

/**
 * Check if a given object implements the AccountOAuthAdd interface.
 */
export function instanceOfAccountOAuthAdd(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "oauthCode" in value;

    return isInstance;
}

export function AccountOAuthAddFromJSON(json: any): AccountOAuthAdd {
    return AccountOAuthAddFromJSONTyped(json, false);
}

export function AccountOAuthAddFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountOAuthAdd {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'oauthCode': json['oauthCode'],
    };
}

export function AccountOAuthAddToJSON(value?: AccountOAuthAdd | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'oauthCode': value.oauthCode,
    };
}

