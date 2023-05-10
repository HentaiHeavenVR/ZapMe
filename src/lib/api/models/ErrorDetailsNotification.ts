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
import type { SeverityLevel } from './SeverityLevel';
import {
    SeverityLevelFromJSON,
    SeverityLevelFromJSONTyped,
    SeverityLevelToJSON,
} from './SeverityLevel';

/**
 * This is a user friendly error message, might help the user understand what went wrong and how to fix it
 * Completely optional, might be null
 * @export
 * @interface ErrorDetailsNotification
 */
export interface ErrorDetailsNotification {
    /**
     * 
     * @type {SeverityLevel}
     * @memberof ErrorDetailsNotification
     */
    severity: SeverityLevel;
    /**
     * Content of the notification, might be HTML
     * @type {string}
     * @memberof ErrorDetailsNotification
     */
    content: string;
}

/**
 * Check if a given object implements the ErrorDetailsNotification interface.
 */
export function instanceOfErrorDetailsNotification(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "severity" in value;
    isInstance = isInstance && "content" in value;

    return isInstance;
}

export function ErrorDetailsNotificationFromJSON(json: any): ErrorDetailsNotification {
    return ErrorDetailsNotificationFromJSONTyped(json, false);
}

export function ErrorDetailsNotificationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorDetailsNotification {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'severity': SeverityLevelFromJSON(json['severity']),
        'content': json['content'],
    };
}

export function ErrorDetailsNotificationToJSON(value?: ErrorDetailsNotification | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'severity': SeverityLevelToJSON(value.severity),
        'content': value.content,
    };
}

