/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 3.0.2
 * Contact: info@fax.plus
 */
/**
 * Email attachments settings
 * @export
 * @interface AccountNotificationsEmailSettingsAttachments
 */
export interface AccountNotificationsEmailSettingsAttachments {
    /**
     *
     * @type {boolean}
     * @memberof AccountNotificationsEmailSettingsAttachments
     */
    'confirmation_page'?: boolean;
    /**
     * Set to true if you want to receive new faxes as notification attachments
     * @type {boolean}
     * @memberof AccountNotificationsEmailSettingsAttachments
     */
    'receive_fax': boolean;
    /**
     * Set to true if you want to receive your sent fax as an attachment to the notification
     * @type {boolean}
     * @memberof AccountNotificationsEmailSettingsAttachments
     */
    'send_fax': boolean;
}
