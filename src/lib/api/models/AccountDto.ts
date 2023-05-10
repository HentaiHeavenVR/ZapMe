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
import type { UserStatus } from './UserStatus';
import {
    UserStatusFromJSON,
    UserStatusFromJSONTyped,
    UserStatusToJSON,
} from './UserStatus';

/**
 * Account object, this can only retrieved for the user you are logged in as
 * @export
 * @interface AccountDto
 */
export interface AccountDto {
    /**
     * 
     * @type {string}
     * @memberof AccountDto
     */
    readonly id: string;
    /**
     * 
     * @type {string}
     * @memberof AccountDto
     */
    readonly username: string;
    /**
     * Obfuscated email of your account
     * @type {string}
     * @memberof AccountDto
     */
    readonly obscuredEmail: string;
    /**
     * 
     * @type {boolean}
     * @memberof AccountDto
     */
    readonly emailVerified: boolean;
    /**
     * 
     * @type {number}
     * @memberof AccountDto
     */
    readonly acceptedPrivacyPolicyVersion: number;
    /**
     * 
     * @type {number}
     * @memberof AccountDto
     */
    readonly acceptedTermsOfServiceVersion: number;
    /**
     * 
     * @type {string}
     * @memberof AccountDto
     */
    readonly profilePictureUrl: string;
    /**
     * 
     * @type {UserStatus}
     * @memberof AccountDto
     */
    readonly status: UserStatus;
    /**
     * 
     * @type {string}
     * @memberof AccountDto
     */
    readonly statusText: string;
    /**
     * Id of friends this account has
     * @type {Array<string>}
     * @memberof AccountDto
     */
    readonly friends: Array<string>;
    /**
     * OAuth2 providers this account is connected to
     * @type {Array<string>}
     * @memberof AccountDto
     */
    readonly oauthConnections: Array<string>;
    /**
     * Date this user was created at
     * @type {Date}
     * @memberof AccountDto
     */
    readonly createdAt: Date;
    /**
     * Last time this user was updated
     * @type {Date}
     * @memberof AccountDto
     */
    readonly updatedAt: Date;
    /**
     * Last time this user was online
     * @type {Date}
     * @memberof AccountDto
     */
    readonly lastOnline: Date;
}

/**
 * Check if a given object implements the AccountDto interface.
 */
export function instanceOfAccountDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "username" in value;
    isInstance = isInstance && "obscuredEmail" in value;
    isInstance = isInstance && "emailVerified" in value;
    isInstance = isInstance && "acceptedPrivacyPolicyVersion" in value;
    isInstance = isInstance && "acceptedTermsOfServiceVersion" in value;
    isInstance = isInstance && "profilePictureUrl" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "statusText" in value;
    isInstance = isInstance && "friends" in value;
    isInstance = isInstance && "oauthConnections" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "updatedAt" in value;
    isInstance = isInstance && "lastOnline" in value;

    return isInstance;
}

export function AccountDtoFromJSON(json: any): AccountDto {
    return AccountDtoFromJSONTyped(json, false);
}

export function AccountDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'username': json['username'],
        'obscuredEmail': json['obscuredEmail'],
        'emailVerified': json['emailVerified'],
        'acceptedPrivacyPolicyVersion': json['acceptedPrivacyPolicyVersion'],
        'acceptedTermsOfServiceVersion': json['acceptedTermsOfServiceVersion'],
        'profilePictureUrl': json['profilePictureUrl'],
        'status': UserStatusFromJSON(json['status']),
        'statusText': json['statusText'],
        'friends': json['friends'],
        'oauthConnections': json['oauthConnections'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
        'lastOnline': (new Date(json['lastOnline'])),
    };
}

export function AccountDtoToJSON(value?: AccountDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
    };
}

