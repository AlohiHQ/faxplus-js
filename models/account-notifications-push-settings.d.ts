/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 2.0.0
 * Contact: info@fax.plus
 */
/**
 * Push notification settings
 * @export
 * @interface AccountNotificationsPushSettings
 */
export interface AccountNotificationsPushSettings {
    /**
     * Set to true if you want to receive notifications when your balance is low
     * @type {boolean}
     * @memberof AccountNotificationsPushSettings
     */
    low_credit: boolean;
    /**
     * Set to true if you want to receive notifications about our new features
     * @type {boolean}
     * @memberof AccountNotificationsPushSettings
     */
    new_feature: boolean;
    /**
     * Set to true if you want to receive notifications about receiving faxes
     * @type {boolean}
     * @memberof AccountNotificationsPushSettings
     */
    receive_fax: boolean;
    /**
     * Set to true if you want to receive notifications when your fax is being send
     * @type {boolean}
     * @memberof AccountNotificationsPushSettings
     */
    send_fax: boolean;
    /**
     * Set to true if you want to receive new voicemail notifications
     * @type {boolean}
     * @memberof AccountNotificationsPushSettings
     */
    voicemail: boolean;
}
