/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 3.0.2
 * Contact: info@fax.plus
 */
import { Webhook } from './webhook';
/**
 * List of webhooks
 * @export
 * @interface WebhookList
 */
export interface WebhookList {
    /**
     *
     * @type {Array<Webhook>}
     * @memberof WebhookList
     */
    'data'?: Array<Webhook>;
}
