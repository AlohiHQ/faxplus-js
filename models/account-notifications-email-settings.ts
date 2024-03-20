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
import { AccountNotificationsEmailSettingsAttachments } from './account-notifications-email-settings-attachments';

/**
 * Email notification settings
 * @export
 * @interface AccountNotificationsEmailSettings
 */
export interface AccountNotificationsEmailSettings {
    /**
     * List of email addresses to send notifications to
     * @type {Array<string>}
     * @memberof AccountNotificationsEmailSettings
     */
    'addresses'?: Array<string>;
    /**
     * 
     * @type {AccountNotificationsEmailSettingsAttachments}
     * @memberof AccountNotificationsEmailSettings
     */
    'attachments'?: AccountNotificationsEmailSettingsAttachments;
    /**
     * Set to true if you want to receive notifications when your balance is low
     * @type {boolean}
     * @memberof AccountNotificationsEmailSettings
     */
    'low_credit': boolean;
    /**
     * Set to true if you want to receive notifications about our new features
     * @type {boolean}
     * @memberof AccountNotificationsEmailSettings
     */
    'new_feature': boolean;
    /**
     * Set to true if you want to receive notifications about receiving faxes
     * @type {boolean}
     * @memberof AccountNotificationsEmailSettings
     */
    'receive_fax': boolean;
    /**
     * Set to true if you want to receive notifications when your fax is being send
     * @type {boolean}
     * @memberof AccountNotificationsEmailSettings
     */
    'send_fax': boolean;
    /**
     * Set to true if you want to receive new voicemail notifications
     * @type {boolean}
     * @memberof AccountNotificationsEmailSettings
     */
    'voicemail': boolean;
}

