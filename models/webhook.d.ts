/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 3.0.2
 * Contact: info@fax.plus
 */
import { WebhookEventType } from './webhook-event-type';
/**
 * Webhook model
 * @export
 * @interface Webhook
 */
export interface Webhook {
    /**
     * Webhook ID
     * @type {string}
     * @memberof Webhook
     */
    'id'?: string;
    /**
     * Webhook target URL
     * @type {string}
     * @memberof Webhook
     */
    'target': string;
    /**
     *
     * @type {WebhookEventType}
     * @memberof Webhook
     */
    'event': WebhookEventType;
}
