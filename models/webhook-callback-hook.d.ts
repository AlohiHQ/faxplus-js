/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 3.0.0
 * Contact: info@fax.plus
 */
/**
 * Hook and event description
 * @export
 * @interface WebhookCallbackHook
 */
export interface WebhookCallbackHook {
    /**
     * Fax ID
     * @type {string}
     * @memberof WebhookCallbackHook
     */
    id?: string;
    /**
     * Event type
     * @type {string}
     * @memberof WebhookCallbackHook
     */
    event?: WebhookCallbackHookEventEnum;
    /**
     * Time of the event. Format: YYYY-MM-DD HH:mm:ss
     * @type {string}
     * @memberof WebhookCallbackHook
     */
    event_time?: string;
    /**
     * Configured URL target for this webhook
     * @type {string}
     * @memberof WebhookCallbackHook
     */
    target?: string;
}
/**
    * @export
    * @enum {string}
    */
export declare enum WebhookCallbackHookEventEnum {
    Sent = "fax_sent",
    Received = "fax_received"
}
