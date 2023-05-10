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
 * @interface UserReport
 */
export interface UserReport {
    /**
     * 
     * @type {string}
     * @memberof UserReport
     */
    userId: string;
    /**
     * 
     * @type {string}
     * @memberof UserReport
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof UserReport
     */
    explenation: string;
}

/**
 * Check if a given object implements the UserReport interface.
 */
export function instanceOfUserReport(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "userId" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "explenation" in value;

    return isInstance;
}

export function UserReportFromJSON(json: any): UserReport {
    return UserReportFromJSONTyped(json, false);
}

export function UserReportFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserReport {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userId': json['userId'],
        'title': json['title'],
        'explenation': json['explenation'],
    };
}

export function UserReportToJSON(value?: UserReport | null): any {
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

