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
 * Message sent to server to report a user
 * @export
 * @interface ReportUserRequest
 */
export interface ReportUserRequest {
    /**
     * 
     * @type {string}
     * @memberof ReportUserRequest
     */
    userId: string;
    /**
     * 
     * @type {string}
     * @memberof ReportUserRequest
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof ReportUserRequest
     */
    explenation: string;
}

/**
 * Check if a given object implements the ReportUserRequest interface.
 */
export function instanceOfReportUserRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "userId" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "explenation" in value;

    return isInstance;
}

export function ReportUserRequestFromJSON(json: any): ReportUserRequest {
    return ReportUserRequestFromJSONTyped(json, false);
}

export function ReportUserRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReportUserRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userId': json['userId'],
        'title': json['title'],
        'explenation': json['explenation'],
    };
}

export function ReportUserRequestToJSON(value?: ReportUserRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userId': value.userId,
        'title': value.title,
        'explenation': value.explenation,
    };
}

