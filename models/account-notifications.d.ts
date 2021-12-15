/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 3.0.0
 * Contact: info@fax.plus
 */
import { AccountNotificationsBlacklist } from './account-notifications-blacklist';
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
    black_list?: AccountNotificationsBlacklist;
    /**
     *
     * @type {AccountNotificationsSettings}
     * @memberof AccountNotifications
     */
    settings: AccountNotificationsSettings;
}
