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


import * as runtime from '../runtime';
import type {
  ErrorDetails,
} from '../models';
import {
    ErrorDetailsFromJSON,
    ErrorDetailsToJSON,
} from '../models';

/**
 * WebSocketApi - interface
 * 
 * @export
 * @interface WebSocketApiInterface
 */
export interface WebSocketApiInterface {
    /**
     * 
     * @summary Websocket endpoint for realtime communication, authenticate using JWT, and serialize messages using FlatBuffers
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebSocketApiInterface
     */
    websocketEndpointRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Websocket endpoint for realtime communication, authenticate using JWT, and serialize messages using FlatBuffers
     */
    websocketEndpoint(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

}

/**
 * 
 */
export class WebSocketApi extends runtime.BaseAPI implements WebSocketApiInterface {

    /**
     * Websocket endpoint for realtime communication, authenticate using JWT, and serialize messages using FlatBuffers
     */
    async websocketEndpointRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/ws`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Websocket endpoint for realtime communication, authenticate using JWT, and serialize messages using FlatBuffers
     */
    async websocketEndpoint(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.websocketEndpointRaw(initOverrides);
    }

}
