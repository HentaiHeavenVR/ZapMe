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
import type { SocialEntry } from './SocialEntry';
import {
    SocialEntryFromJSON,
    SocialEntryFromJSONTyped,
    SocialEntryToJSON,
} from './SocialEntry';

/**
 * 
 * @export
 * @interface CommunityConfig
 */
export interface CommunityConfig {
    /**
     * Invite uri to the community discord server
     * @type {string}
     * @memberof CommunityConfig
     */
    discordInviteUri?: string;
    /**
     * Social media links to project founder's accounts
     * @type {Array<SocialEntry>}
     * @memberof CommunityConfig
     */
    socials?: Array<SocialEntry>;
}

/**
 * Check if a given object implements the CommunityConfig interface.
 */
export function instanceOfCommunityConfig(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CommunityConfigFromJSON(json: any): CommunityConfig {
    return CommunityConfigFromJSONTyped(json, false);
}

export function CommunityConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommunityConfig {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'discordInviteUri': !exists(json, 'discord_invite_uri') ? undefined : json['discord_invite_uri'],
        'socials': !exists(json, 'socials') ? undefined : ((json['socials'] as Array<any>).map(SocialEntryFromJSON)),
    };
}

export function CommunityConfigToJSON(value?: CommunityConfig | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'discord_invite_uri': value.discordInviteUri,
        'socials': value.socials === undefined ? undefined : ((value.socials as Array<any>).map(SocialEntryToJSON)),
    };
}
