/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 3.0.2
 * Contact: info@fax.plus
 */
import { AccountData } from './account-data';
import { AccountNotifications } from './account-notifications';
import { AccountSettings } from './account-settings';
/**
 * Model for updating user account
 * @export
 * @interface PayloadAccountModification
 */
export interface PayloadAccountModification {
    /**
     *
     * @type {AccountData}
     * @memberof PayloadAccountModification
     */
    'account_data'?: AccountData;
    /**
     * Account email address
     * @type {string}
     * @memberof PayloadAccountModification
     */
    'email'?: string;
    /**
     * Your last name
     * @type {string}
     * @memberof PayloadAccountModification
     */
    'lastname'?: string;
    /**
     * Your first name
     * @type {string}
     * @memberof PayloadAccountModification
     */
    'name'?: string;
    /**
     *
     * @type {AccountNotifications}
     * @memberof PayloadAccountModification
     */
    'notifications'?: AccountNotifications;
    /**
     * Your account phone number
     * @type {string}
     * @memberof PayloadAccountModification
     */
    'phone'?: string;
    /**
     * Profile image path
     * @type {string}
     * @memberof PayloadAccountModification
     */
    'profile_image'?: string;
    /**
     *
     * @type {AccountSettings}
     * @memberof PayloadAccountModification
     */
    'settings'?: AccountSettings;
}
