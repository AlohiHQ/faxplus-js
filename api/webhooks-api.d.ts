/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 2.0.0
 * Contact: info@fax.plus
 */
import { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { Webhook } from '../models';
import { WebhookEventType } from '../models';
import { WebhookId } from '../models';
import { WebhookList } from '../models';
/**
 * WebhooksApi - axios parameter creator
 * @export
 */
export declare const WebhooksApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Register a new webhook which will be called on a specific event
     * @summary Register new webhook
     * @param {Webhook} [webhook] Request to create new webhook
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createWebhook: (webhook?: Webhook, options?: any) => Promise<RequestArgs>;
    /**
     * Delete a webhook by its ID
     * @summary Delete webhook
     * @param {string} hookId ID of the webhook to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteWebhook: (hookId: string, options?: any) => Promise<RequestArgs>;
    /**
     * Returns a list of currently registered webhooks for the requested **event**
     * @summary List user webhooks
     * @param {WebhookEventType} event
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getWebhooks: (event: WebhookEventType, options?: any) => Promise<RequestArgs>;
};
/**
 * WebhooksApi - functional programming interface
 * @export
 */
export declare const WebhooksApiFp: (configuration?: Configuration) => {
    /**
     * Register a new webhook which will be called on a specific event
     * @summary Register new webhook
     * @param {WebhooksApiCreateWebhookRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createWebhook(requestParameters?: WebhooksApiCreateWebhookRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<import("axios").AxiosResponse<any>>>;
    /**
     * Delete a webhook by its ID
     * @summary Delete webhook
     * @param {WebhooksApiDeleteWebhookRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteWebhook(requestParameters: WebhooksApiDeleteWebhookRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<import("axios").AxiosResponse<any>>>;
    /**
     * Returns a list of currently registered webhooks for the requested **event**
     * @summary List user webhooks
     * @param {WebhooksApiGetWebhooksRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getWebhooks(requestParameters: WebhooksApiGetWebhooksRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<import("axios").AxiosResponse<any>>>;
};
/**
 * WebhooksApi - factory interface
 * @export
 */
export declare const WebhooksApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Register a new webhook which will be called on a specific event
     * @summary Register new webhook
     * @param {WebhooksApiCreateWebhookRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createWebhook(requestParameters?: WebhooksApiCreateWebhookRequest, options?: any): AxiosPromise<WebhookId>;
    /**
     * Delete a webhook by its ID
     * @summary Delete webhook
     * @param {WebhooksApiDeleteWebhookRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteWebhook(requestParameters: WebhooksApiDeleteWebhookRequest, options?: any): AxiosPromise<void>;
    /**
     * Returns a list of currently registered webhooks for the requested **event**
     * @summary List user webhooks
     * @param {WebhooksApiGetWebhooksRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getWebhooks(requestParameters: WebhooksApiGetWebhooksRequest, options?: any): AxiosPromise<WebhookList>;
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
    readonly webhook?: Webhook;
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
    readonly hookId: string;
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
    readonly event: WebhookEventType;
}
/**
 * WebhooksApi - object-oriented interface
 * @export
 * @class WebhooksApi
 * @extends {BaseAPI}
 */
export declare class WebhooksApi extends BaseAPI {
    /**
     * Register a new webhook which will be called on a specific event
     * @summary Register new webhook
     * @param {WebhooksApiCreateWebhookRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApi
     */
    createWebhook(requestParameters?: WebhooksApiCreateWebhookRequest, options?: any): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Delete a webhook by its ID
     * @summary Delete webhook
     * @param {WebhooksApiDeleteWebhookRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApi
     */
    deleteWebhook(requestParameters: WebhooksApiDeleteWebhookRequest, options?: any): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Returns a list of currently registered webhooks for the requested **event**
     * @summary List user webhooks
     * @param {WebhooksApiGetWebhooksRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApi
     */
    getWebhooks(requestParameters: WebhooksApiGetWebhooksRequest, options?: any): Promise<import("axios").AxiosResponse<any>>;
}
