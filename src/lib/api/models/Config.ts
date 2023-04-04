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
import type { AppConfig } from './AppConfig';
import {
    AppConfigFromJSON,
    AppConfigFromJSONTyped,
    AppConfigToJSON,
} from './AppConfig';
import type { CommunityConfig } from './CommunityConfig';
import {
    CommunityConfigFromJSON,
    CommunityConfigFromJSONTyped,
    CommunityConfigToJSON,
} from './CommunityConfig';
import type { ContactConfig } from './ContactConfig';
import {
    ContactConfigFromJSON,
    ContactConfigFromJSONTyped,
    ContactConfigToJSON,
} from './ContactConfig';

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
    name?: string;
    /**
     * 
     * @type {AppConfig}
     * @memberof Config
     */
    app?: AppConfig;
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
     * @type {CommunityConfig}
     * @memberof Config
     */
    community?: CommunityConfig;
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
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'app': !exists(json, 'app') ? undefined : AppConfigFromJSON(json['app']),
        'api': !exists(json, 'api') ? undefined : ApiConfigFromJSON(json['api']),
        'contact': !exists(json, 'contact') ? undefined : ContactConfigFromJSON(json['contact']),
        'community': !exists(json, 'community') ? undefined : CommunityConfigFromJSON(json['community']),
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
        
        'name': value.name,
        'app': AppConfigToJSON(value.app),
        'api': ApiConfigToJSON(value.api),
        'contact': ContactConfigToJSON(value.contact),
        'community': CommunityConfigToJSON(value.community),
    };
}

