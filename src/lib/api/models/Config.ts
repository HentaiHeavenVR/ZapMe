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
import type { ApiConfig } from './ApiConfig';
import {
    ApiConfigFromJSON,
    ApiConfigFromJSONTyped,
    ApiConfigToJSON,
} from './ApiConfig';
import type { ContactConfig } from './ContactConfig';
import {
    ContactConfigFromJSON,
    ContactConfigFromJSONTyped,
    ContactConfigToJSON,
} from './ContactConfig';
import type { SocialsConfig } from './SocialsConfig';
import {
    SocialsConfigFromJSON,
    SocialsConfigFromJSONTyped,
    SocialsConfigToJSON,
} from './SocialsConfig';

/**
 * 
 * @export
 * @interface Config
 */
export interface Config {
    /**
     * Name of the product, e.g. "ZapMe"
     * @type {string}
     * @memberof Config
     */
    appName?: string;
    /**
     * Version of the product, e.g. "1.0.0"
     * @type {string}
     * @memberof Config
     */
    appVersion?: string;
    /**
     * 
     * @type {ApiConfig}
     * @memberof Config
     */
    api?: ApiConfig;
    /**
     * 
     * @type {ContactConfig}
     * @memberof Config
     */
    contact?: ContactConfig;
    /**
     * 
     * @type {SocialsConfig}
     * @memberof Config
     */
    founderSocials?: SocialsConfig;
}

/**
 * Check if a given object implements the Config interface.
 */
export function instanceOfConfig(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConfigFromJSON(json: any): Config {
    return ConfigFromJSONTyped(json, false);
}

export function ConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): Config {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appName': !exists(json, 'appName') ? undefined : json['appName'],
        'appVersion': !exists(json, 'appVersion') ? undefined : json['appVersion'],
        'api': !exists(json, 'api') ? undefined : ApiConfigFromJSON(json['api']),
        'contact': !exists(json, 'contact') ? undefined : ContactConfigFromJSON(json['contact']),
        'founderSocials': !exists(json, 'founderSocials') ? undefined : SocialsConfigFromJSON(json['founderSocials']),
    };
}

export function ConfigToJSON(value?: Config | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appName': value.appName,
        'appVersion': value.appVersion,
        'api': ApiConfigToJSON(value.api),
        'contact': ContactConfigToJSON(value.contact),
        'founderSocials': SocialsConfigToJSON(value.founderSocials),
    };
}

