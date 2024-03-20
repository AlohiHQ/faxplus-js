/* tslint:disable */
/* eslint-disable */
/**
 * Fax.Plus REST API
 *
 * OpenAPI spec version: 3.0.3
 * Contact: info@fax.plus
 */


/**
 * Webhook event type
 * @export
 * @enum {string}
 */

export const WebhookEventType = {
    Received: 'fax_received',
    Sent: 'fax_sent'
} as const;

export type WebhookEventType = typeof WebhookEventType[keyof typeof WebhookEventType];



