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
import { AccountData } from './account-data';
// May contain unused imports in some cases
// @ts-ignore
import { AccountNotifications } from './account-notifications';
// May contain unused imports in some cases
// @ts-ignore
import { AccountSettings } from './account-settings';
// May contain unused imports in some cases
// @ts-ignore
import { AccountStatus } from './account-status';
// May contain unused imports in some cases
// @ts-ignore
import { AccountType } from './account-type';

/**
 * User account model
 * @export
 * @interface Account
 */
export interface Account {
    /**
     * 
     * @type {AccountData}
     * @memberof Account
     */
    'account_data'?: AccountData;
    /**
     * 
     * @type {AccountType}
     * @memberof Account
     */
    'account_type': AccountType;
    /**
     * Creation date in UTC. Format: *YYYY-MM-DD HH:mm:ss*
     * @type {string}
     * @memberof Account
     */
    'creation_date': string;
    /**
     * Account email address
     * @type {string}
     * @memberof Account
     */
    'email': string;
    /**
     * The date on which you have changed your password
     * @type {string}
     * @memberof Account
     */
    'last_password_modification_date'?: string;
    /**
     * Your last name
     * @type {string}
     * @memberof Account
     */
    'lastname'?: string;
    /**
     * List of user ids that you are member of.
     * @type {Array<string>}
     * @memberof Account
     */
    'member_of'?: Array<string>;
    /**
     * Your first name
     * @type {string}
     * @memberof Account
     */
    'name'?: string;
    /**
     * 
     * @type {AccountNotifications}
     * @memberof Account
     */
    'notifications'?: AccountNotifications;
    /**
     * Your account phone number
     * @type {string}
     * @memberof Account
     */
    'phone'?: string;
    /**
     * Profile image path
     * @type {string}
     * @memberof Account
     */
    'profile_image'?: string;
    /**
     * 
     * @type {AccountSettings}
     * @memberof Account
     */
    'settings'?: AccountSettings;
    /**
     * 
     * @type {AccountStatus}
     * @memberof Account
     */
    'status': AccountStatus;
    /**
     * User ID of current user
     * @type {string}
     * @memberof Account
     */
    'uid': string;
}



