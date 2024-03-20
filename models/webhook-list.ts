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

