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
import type { UserNotification } from './UserNotification';
import {
    UserNotificationFromJSON,
    UserNotificationFromJSONTyped,
    UserNotificationToJSON,
} from './UserNotification';

/**
 * Details about the error
 * @export
 * @interface ErrorDetails
 */
export interface ErrorDetails {
    /**
     * Title for developer to understand what went wrong (not user friendly)
     * @type {string}
     * @memberof ErrorDetails
     */
    title?: string;
    /**
     * More detailed description of what this error is about (not user friendly)
     * @type {string}
     * @memberof ErrorDetails
     */
    detail?: string;
    /**
     * 
     * @type {string}
     * @memberof ErrorDetails
     */
    traceId?: string;
    /**
     * Suggestion to developer on how they might be able to midegate this error
     * @type {string}
     * @memberof ErrorDetails
     */
    suggestion?: string | null;
    /**
     * Errors for specific fields in the request
     * @type {{ [key: string]: Array<string>; }}
     * @memberof ErrorDetails
     */
    fields?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {UserNotification}
     * @memberof ErrorDetails
     */
    notification?: UserNotification;
}

/**
 * Check if a given object implements the ErrorDetails interface.
 */
export function instanceOfErrorDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ErrorDetailsFromJSON(json: any): ErrorDetails {
    return ErrorDetailsFromJSONTyped(json, false);
}

export function ErrorDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': !exists(json, 'title') ? undefined : json['title'],
        'detail': !exists(json, 'detail') ? undefined : json['detail'],
        'traceId': !exists(json, 'traceId') ? undefined : json['traceId'],
        'suggestion': !exists(json, 'suggestion') ? undefined : json['suggestion'],
        'fields': !exists(json, 'fields') ? undefined : json['fields'],
        'notification': !exists(json, 'notification') ? undefined : UserNotificationFromJSON(json['notification']),
    };
}

export function ErrorDetailsToJSON(value?: ErrorDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'detail': value.detail,
        'traceId': value.traceId,
        'suggestion': value.suggestion,
        'fields': value.fields,
        'notification': UserNotificationToJSON(value.notification),
    };
}

