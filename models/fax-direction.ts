/* tslint:disable */
/* eslint-disable */
/**
 * Fax.Plus REST API
 *
 * OpenAPI spec version: 3.0.3
 * Contact: info@fax.plus
 */


/**
 * Fax direction
 * @export
 * @enum {string}
 */

export const FaxDirection = {
    Outgoing: 'outgoing',
    Incoming: 'incoming'
} as const;

export type FaxDirection = typeof FaxDirection[keyof typeof FaxDirection];



