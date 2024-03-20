/* tslint:disable */
/* eslint-disable */
/**
 * Fax.Plus REST API
 *
 * OpenAPI spec version: 3.0.3
 * Contact: info@fax.plus
 */


/**
 * Outbound fax status
 * @export
 * @enum {string}
 */

export const OutboxStatus = {
    Submitted: 'submitted',
    Converting: 'converting',
    ScheduledForSending: 'scheduled_for_sending',
    Sending: 'sending'
} as const;

export type OutboxStatus = typeof OutboxStatus[keyof typeof OutboxStatus];



