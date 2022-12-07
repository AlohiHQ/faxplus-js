/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 3.0.2
 * Contact: info@fax.plus
 */
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
