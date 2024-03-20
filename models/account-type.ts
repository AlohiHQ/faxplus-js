/* tslint:disable */
/* eslint-disable */
/**
 * Fax.Plus REST API
 *
 * OpenAPI spec version: 3.0.3
 * Contact: info@fax.plus
 */


/**
 * Account type which could be corporate_admin, individual, etc
 * @export
 * @enum {string}
 */

export const AccountType = {
    CorporateAdmin: 'corporate_admin',
    Individual: 'individual',
    CorporateMember: 'corporate_member'
} as const;

export type AccountType = typeof AccountType[keyof typeof AccountType];



