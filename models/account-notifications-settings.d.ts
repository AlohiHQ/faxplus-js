/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 3.0.0
 * Contact: info@fax.plus
 */
import { AccountNotificationsEmailSettings } from './account-notifications-email-settings';
import { AccountNotificationsLanguage } from './account-notifications-language';
import { AccountNotificationsPushSettings } from './account-notifications-push-settings';
import { AccountNotificationsSlackSettings } from './account-notifications-slack-settings';
import { AccountNotificationsSmsSettings } from './account-notifications-sms-settings';
/**
 * Account notification settings
 * @export
 * @interface AccountNotificationsSettings
 */
export interface AccountNotificationsSettings {
    /**
     *
     * @type {AccountNotificationsEmailSettings}
     * @memberof AccountNotificationsSettings
     */
    email: AccountNotificationsEmailSettings;
    /**
     *
     * @type {AccountNotificationsLanguage}
     * @memberof AccountNotificationsSettings
     */
    language?: AccountNotificationsLanguage;
    /**
     *
     * @type {AccountNotificationsPushSettings}
     * @memberof AccountNotificationsSettings
     */
    push_notifications: AccountNotificationsPushSettings;
    /**
     *
     * @type {AccountNotificationsSlackSettings}
     * @memberof AccountNotificationsSettings
     */
    slack?: AccountNotificationsSlackSettings;
    /**
     *
     * @type {AccountNotificationsSmsSettings}
     * @memberof AccountNotificationsSettings
     */
    sms: AccountNotificationsSmsSettings;
}
