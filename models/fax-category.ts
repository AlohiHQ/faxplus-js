/* tslint:disable */
/* eslint-disable */
/**
 * Fax.Plus REST API
 *
 * OpenAPI spec version: 3.0.3
 * Contact: info@fax.plus
 */


/**
 * 
 * @export
 * @enum {string}
 */

export const FaxCategory = {
    Inbox: 'inbox',
    Sent: 'sent',
    Spam: 'spam'
} as const;

export type FaxCategory = typeof FaxCategory[keyof typeof FaxCategory];



