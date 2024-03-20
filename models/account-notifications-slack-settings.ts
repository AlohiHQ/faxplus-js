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
import { SlackNotificationMode } from './slack-notification-mode';

/**
 * Slack notification settings
 * @export
 * @interface AccountNotificationsSlackSettings
 */
export interface AccountNotificationsSlackSettings {
    /**
     * 
     * @type {SlackNotificationMode}
     * @memberof AccountNotificationsSlackSettings
     */
    'receive_fax': SlackNotificationMode;
    /**
     * 
     * @type {SlackNotificationMode}
     * @memberof AccountNotificationsSlackSettings
     */
    'send_fax': SlackNotificationMode;
    /**
     * Channel to send notifications
     * @type {string}
     * @memberof AccountNotificationsSlackSettings
     */
    'target_channel': string;
}



