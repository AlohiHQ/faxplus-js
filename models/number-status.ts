/* tslint:disable */
/* eslint-disable */
/**
 * Fax.Plus REST API
 *
 * OpenAPI spec version: 3.0.3
 * Contact: info@fax.plus
 */


/**
 * Status of your fax number e.g. active, inactive.
 * @export
 * @enum {string}
 */

export const NumberStatus = {
    WaitingVerification: 'waiting_verification',
    Active: 'active'
} as const;

export type NumberStatus = typeof NumberStatus[keyof typeof NumberStatus];



