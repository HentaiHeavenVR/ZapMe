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
import type { OAuthResultSignInOk } from './OAuthResultSignInOk';
import {
    OAuthResultSignInOkFromJSON,
    OAuthResultSignInOkFromJSONTyped,
    OAuthResultSignInOkToJSON,
} from './OAuthResultSignInOk';
import type { OAuthResultType } from './OAuthResultType';
import {
    OAuthResultTypeFromJSON,
    OAuthResultTypeFromJSONTyped,
    OAuthResultTypeToJSON,
} from './OAuthResultType';
import type { OAuthTicket } from './OAuthTicket';
import {
    OAuthTicketFromJSON,
    OAuthTicketFromJSONTyped,
    OAuthTicketToJSON,
} from './OAuthTicket';

/**
 * 
 * @export
 * @interface OAuthResult
 */
export interface OAuthResult {
    /**
     * 
     * @type {OAuthResultType}
     * @memberof OAuthResult
     */
    resultType: OAuthResultType;
    /**
     * 
     * @type {OAuthResultSignInOk}
     * @memberof OAuthResult
     */
    signInOk?: OAuthResultSignInOk | null;
    /**
     * 
     * @type {OAuthTicket}
     * @memberof OAuthResult
     */
    oAuthTicket?: OAuthTicket | null;
}

/**
 * Check if a given object implements the OAuthResult interface.
 */
export function instanceOfOAuthResult(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "resultType" in value;

    return isInstance;
}

export function OAuthResultFromJSON(json: any): OAuthResult {
    return OAuthResultFromJSONTyped(json, false);
}

export function OAuthResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): OAuthResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'resultType': OAuthResultTypeFromJSON(json['resultType']),
        'signInOk': !exists(json, 'signInOk') ? undefined : OAuthResultSignInOkFromJSON(json['signInOk']),
        'oAuthTicket': !exists(json, 'oAuthTicket') ? undefined : OAuthTicketFromJSON(json['oAuthTicket']),
    };
}

export function OAuthResultToJSON(value?: OAuthResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'resultType': OAuthResultTypeToJSON(value.resultType),
        'signInOk': OAuthResultSignInOkToJSON(value.signInOk),
        'oAuthTicket': OAuthTicketToJSON(value.oAuthTicket),
    };
}
