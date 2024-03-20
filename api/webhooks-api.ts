/* tslint:disable */
/* eslint-disable */
/**
 * Fax.Plus REST API
 *
 * OpenAPI spec version: 3.0.3
 * Contact: info@fax.plus
 */

import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { Webhook } from '../models';
// @ts-ignore
import { WebhookEventType } from '../models';
// @ts-ignore
import { WebhookId } from '../models';
// @ts-ignore
import { WebhookList } from '../models';
import FormData = require("form-data");
/**
 * WebhooksApi - axios parameter creator
 * @export
 */
export const WebhooksApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Register a new webhook which will be called on a specific event. See the WebhookCallback model
         * @summary Register new webhook
         * @param {Webhook} [webhook] Request to create new webhook
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createWebhook: async (webhook?: Webhook, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/hooks`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["all"], configuration)

            // authentication PAT required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "PAT", ["fax:all:edit"], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(webhook, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a webhook by its ID
         * @summary Delete webhook
         * @param {string} hookId ID of the webhook to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteWebhook: async (hookId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'hookId' is not null or undefined
            assertParamExists('deleteWebhook', 'hookId', hookId)
            const localVarPath = `/hooks/{hook_id}`
                .replace(`{${"hook_id"}}`, encodeURIComponent(String(hookId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["all"], configuration)

            // authentication PAT required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "PAT", ["fax:all:edit"], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of currently registered webhooks for the requested **event**
         * @summary List user webhooks
         * @param {WebhookEventType} event 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWebhooks: async (event: WebhookEventType, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'event' is not null or undefined
            assertParamExists('getWebhooks', 'event', event)
            const localVarPath = `/hooks`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["all"], configuration)

            // authentication PAT required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "PAT", ["fax:all:read"], configuration)

            if (event !== undefined) {
                localVarQueryParameter['event'] = event;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * WebhooksApi - functional programming interface
 * @export
 */
export const WebhooksApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = WebhooksApiAxiosParamCreator(configuration)
    return {
        /**
         * Register a new webhook which will be called on a specific event. See the WebhookCallback model
         * @summary Register new webhook
         * @param {WebhooksApiCreateWebhookRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createWebhook(requestParameters: WebhooksApiCreateWebhookRequest = {}, options?: any) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createWebhook(requestParameters.webhook, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        }
,
        /**
         * Delete a webhook by its ID
         * @summary Delete webhook
         * @param {WebhooksApiDeleteWebhookRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteWebhook(requestParameters: WebhooksApiDeleteWebhookRequest, options?: any) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteWebhook(requestParameters.hookId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        }
,
        /**
         * Returns a list of currently registered webhooks for the requested **event**
         * @summary List user webhooks
         * @param {WebhooksApiGetWebhooksRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getWebhooks(requestParameters: WebhooksApiGetWebhooksRequest, options?: any) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWebhooks(requestParameters.event, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        }
,
    }
};

/**
 * WebhooksApi - factory interface
 * @export
 */
export const WebhooksApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = WebhooksApiFp(configuration)
    return {
        /**
         * Register a new webhook which will be called on a specific event. See the WebhookCallback model
         * @summary Register new webhook
         * @param {WebhooksApiCreateWebhookRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */

        createWebhook(requestParameters: WebhooksApiCreateWebhookRequest = {}, options?: any): AxiosPromise<WebhookId> {
            return localVarFp.createWebhook(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a webhook by its ID
         * @summary Delete webhook
         * @param {WebhooksApiDeleteWebhookRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */

        deleteWebhook(requestParameters: WebhooksApiDeleteWebhookRequest, options?: any): AxiosPromise<void> {
            return localVarFp.deleteWebhook(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of currently registered webhooks for the requested **event**
         * @summary List user webhooks
         * @param {WebhooksApiGetWebhooksRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */

        getWebhooks(requestParameters: WebhooksApiGetWebhooksRequest, options?: any): AxiosPromise<WebhookList> {
            return localVarFp.getWebhooks(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createWebhook operation in WebhooksApi.
 * @export
 * @interface WebhooksApiCreateWebhookRequest
 */
export interface WebhooksApiCreateWebhookRequest {
    /**
     * Request to create new webhook
     * @type {Webhook}
     * @memberof WebhooksApiCreateWebhook
     */
    readonly webhook?: Webhook
}

/**
 * Request parameters for deleteWebhook operation in WebhooksApi.
 * @export
 * @interface WebhooksApiDeleteWebhookRequest
 */
export interface WebhooksApiDeleteWebhookRequest {
    /**
     * ID of the webhook to delete
     * @type {string}
     * @memberof WebhooksApiDeleteWebhook
     */
    readonly hookId: string
}

/**
 * Request parameters for getWebhooks operation in WebhooksApi.
 * @export
 * @interface WebhooksApiGetWebhooksRequest
 */
export interface WebhooksApiGetWebhooksRequest {
    /**
     * 
     * @type {WebhookEventType}
     * @memberof WebhooksApiGetWebhooks
     */
    readonly event: WebhookEventType
}

/**
 * WebhooksApi - object-oriented interface
 * @export
 * @class WebhooksApi
 * @extends {BaseAPI}
 */
export class WebhooksApi extends BaseAPI {
    /**
     * Register a new webhook which will be called on a specific event. See the WebhookCallback model
     * @summary Register new webhook
     * @param {WebhooksApiCreateWebhookRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApi
     */
    public createWebhook(requestParameters: WebhooksApiCreateWebhookRequest = {}, options?: any) {
        return WebhooksApiFp(this.configuration).createWebhook(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete a webhook by its ID
     * @summary Delete webhook
     * @param {WebhooksApiDeleteWebhookRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApi
     */
    public deleteWebhook(requestParameters: WebhooksApiDeleteWebhookRequest, options?: any) {
        return WebhooksApiFp(this.configuration).deleteWebhook(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of currently registered webhooks for the requested **event**
     * @summary List user webhooks
     * @param {WebhooksApiGetWebhooksRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApi
     */
    public getWebhooks(requestParameters: WebhooksApiGetWebhooksRequest, options?: any) {
        return WebhooksApiFp(this.configuration).getWebhooks(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
