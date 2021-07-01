/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 2.0.0
 * Contact: info@fax.plus
 */
import { WebhookCallbackData } from './webhook-callback-data';
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
    hook?: WebhookCallbackHook;
    /**
     *
     * @type {WebhookCallbackData}
     * @memberof WebhookCallback
     */
    data?: WebhookCallbackData;
}
