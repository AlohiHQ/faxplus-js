/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 2.0.0
 * Contact: info@fax.plus
 */
/**
 * Outbound fax status
 * @export
 * @enum {string}
 */
export declare enum OutboxStatus {
    Submitted = "submitted",
    Converting = "converting",
    ScheduledForSending = "scheduled_for_sending",
    Sending = "sending"
}
