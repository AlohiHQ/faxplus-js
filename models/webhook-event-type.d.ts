/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 3.0.2
 * Contact: info@fax.plus
 */
/**
 * Webhook event type
 * @export
 * @enum {string}
 */
export declare const WebhookEventType: {
    readonly Received: "fax_received";
    readonly Sent: "fax_sent";
};
export declare type WebhookEventType = typeof WebhookEventType[keyof typeof WebhookEventType];
