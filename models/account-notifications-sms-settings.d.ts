/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 3.0.2
 * Contact: info@fax.plus
 */
/**
 * SMS notification settings
 * @export
 * @interface AccountNotificationsSmsSettings
 */
export interface AccountNotificationsSmsSettings {
    /**
     * Set to true if you want to receive notifications when your balance is low
     * @type {boolean}
     * @memberof AccountNotificationsSmsSettings
     */
    'low_credit': boolean;
    /**
     * Set to true if you want to receive notifications about our new features
     * @type {boolean}
     * @memberof AccountNotificationsSmsSettings
     */
    'new_feature': boolean;
    /**
     * List of phone numbers to send SMS notifications to
     * @type {Array<string>}
     * @memberof AccountNotificationsSmsSettings
     */
    'numbers'?: Array<string>;
    /**
     * Set to true if you want to receive notifications about receiving faxes
     * @type {boolean}
     * @memberof AccountNotificationsSmsSettings
     */
    'receive_fax': boolean;
    /**
     * Set to true if you want to receive notifications when your fax is being send
     * @type {boolean}
     * @memberof AccountNotificationsSmsSettings
     */
    'send_fax': boolean;
    /**
     * Set to true if you want to receive new voicemail notifications
     * @type {boolean}
     * @memberof AccountNotificationsSmsSettings
     */
    'voicemail': boolean;
}
