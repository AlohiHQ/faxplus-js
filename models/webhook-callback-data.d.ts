/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 2.0.0
 * Contact: info@fax.plus
 */
/**
 * Callback data, depends on the event type
 * @export
 * @interface WebhookCallbackData
 */
export interface WebhookCallbackData {
    /**
     * Fax ID
     * @type {string}
     * @memberof WebhookCallbackData
     */
    id?: string;
    /**
     *
     * @type {number}
     * @memberof WebhookCallbackData
     */
    pages?: number;
}
