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
 * 
 * @export
 * @interface ApiDisabledFeatures
 */
export interface ApiDisabledFeatures {
    /**
     * If true, WebRTC is disabled
     * @type {boolean}
     * @memberof ApiDisabledFeatures
     */
    webRTC?: boolean;
    /**
     * If true, WebSockets are disabled
     * @type {boolean}
     * @memberof ApiDisabledFeatures
     */
    webSockets?: boolean;
    /**
     * List of disabled endpoints, if an endpoint is in this list, it will return a "503 Service Unavailable"
     * @type {Array<string>}
     * @memberof ApiDisabledFeatures
     */
    endpoints?: Array<string>;
}

/**
 * Check if a given object implements the ApiDisabledFeatures interface.
 */
export function instanceOfApiDisabledFeatures(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ApiDisabledFeaturesFromJSON(json: any): ApiDisabledFeatures {
    return ApiDisabledFeaturesFromJSONTyped(json, false);
}

export function ApiDisabledFeaturesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiDisabledFeatures {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'webRTC': !exists(json, 'webRTC') ? undefined : json['webRTC'],
        'webSockets': !exists(json, 'webSockets') ? undefined : json['webSockets'],
        'endpoints': !exists(json, 'endpoints') ? undefined : json['endpoints'],
    };
}

export function ApiDisabledFeaturesToJSON(value?: ApiDisabledFeatures | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'webRTC': value.webRTC,
        'webSockets': value.webSockets,
        'endpoints': value.endpoints,
    };
}

