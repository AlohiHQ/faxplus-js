/* tslint:disable */
/* eslint-disable */
/**
 * Fax.Plus REST API
 *
 * OpenAPI spec version: 3.0.3
 * Contact: info@fax.plus
 */

// May contain unused imports in some cases
// @ts-ignore
import { WebhookCallbackData } from './webhook-callback-data';
// May contain unused imports in some cases
// @ts-ignore
import { WebhookCallbackHook } from './webhook-callback-hook';

/**
 * Webhook callback example
 * @export
 * @interface WebhookCallback
 */
export interface WebhookCallback {
    /**
     * 
     * @type {WebhookCallbackHook}
     * @memberof WebhookCallback
     */
    'hook'?: WebhookCallbackHook;
    /**
     * 
     * @type {WebhookCallbackData}
     * @memberof WebhookCallback
     */
    'data'?: WebhookCallbackData;
}

