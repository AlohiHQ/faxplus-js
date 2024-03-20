/* tslint:disable */
/* eslint-disable */
/**
 * Fax.Plus REST API
 *
 * OpenAPI spec version: 3.0.3
 * Contact: info@fax.plus
 */


/**
 * Your account status which could be active, inactive etc
 * @export
 * @enum {string}
 */

export const AccountStatus = {
    Active: 'active',
    UnverifiedPhone: 'unverified_phone',
    Suspended: 'suspended',
    Disabled: 'disabled',
    Inactive: 'inactive',
    Deleted: 'deleted',
    CorporateDeleted: 'corporate_deleted',
    WaitingForSignup: 'waiting_for_signup'
} as const;

export type AccountStatus = typeof AccountStatus[keyof typeof AccountStatus];



