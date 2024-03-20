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
import { AccountNotificationsEmailSettings } from './account-notifications-email-settings';
// May contain unused imports in some cases
// @ts-ignore
import { AccountNotificationsLanguage } from './account-notifications-language';
// May contain unused imports in some cases
// @ts-ignore
import { AccountNotificationsPushSettings } from './account-notifications-push-settings';
// May contain unused imports in some cases
// @ts-ignore
import { AccountNotificationsSlackSettings } from './account-notifications-slack-settings';
// May contain unused imports in some cases
// @ts-ignore
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
    'email': AccountNotificationsEmailSettings;
    /**
     * 
     * @type {AccountNotificationsLanguage}
     * @memberof AccountNotificationsSettings
     */
    'language'?: AccountNotificationsLanguage;
    /**
     * 
     * @type {AccountNotificationsPushSettings}
     * @memberof AccountNotificationsSettings
     */
    'push_notifications': AccountNotificationsPushSettings;
    /**
     * 
     * @type {AccountNotificationsSlackSettings}
     * @memberof AccountNotificationsSettings
     */
    'slack'?: AccountNotificationsSlackSettings;
    /**
     * 
     * @type {AccountNotificationsSmsSettings}
     * @memberof AccountNotificationsSettings
     */
    'sms': AccountNotificationsSmsSettings;
}



