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
import { AccountNotificationsBlacklist } from './account-notifications-blacklist';
// May contain unused imports in some cases
// @ts-ignore
import { AccountNotificationsSettings } from './account-notifications-settings';

/**
 * Account notification settings
 * @export
 * @interface AccountNotifications
 */
export interface AccountNotifications {
    /**
     * 
     * @type {AccountNotificationsBlacklist}
     * @memberof AccountNotifications
     */
    'black_list'?: AccountNotificationsBlacklist;
    /**
     * 
     * @type {AccountNotificationsSettings}
     * @memberof AccountNotifications
     */
    'settings': AccountNotificationsSettings;
}

