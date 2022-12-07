/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 3.0.2
 * Contact: info@fax.plus
 */
/**
 * Outbound fax status
 * @export
 * @enum {string}
 */
export declare const OutboxStatus: {
    readonly Submitted: "submitted";
    readonly Converting: "converting";
    readonly ScheduledForSending: "scheduled_for_sending";
    readonly Sending: "sending";
};
export declare type OutboxStatus = typeof OutboxStatus[keyof typeof OutboxStatus];
