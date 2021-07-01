/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 2.0.0
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
    data?: Array<Webhook>;
}
