/* tslint:disable */
/* eslint-disable */
/**
 * Fax.Plus REST API
 *
 * OpenAPI spec version: 3.0.3
 * Contact: info@fax.plus
 */

// May contain unused imports in some cases
// @ts-ignore
import { Account } from './account';

/**
 * List of user accounts
 * @export
 * @interface AccountList
 */
export interface AccountList {
    /**
     * 
     * @type {Array<Account>}
     * @memberof AccountList
     */
    'members': Array<Account>;
}

