/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 3.0.2
 * Contact: info@fax.plus
 */
import { AccountSettingsSendFax } from './account-settings-send-fax';
/**
 * Account settings
 * @export
 * @interface AccountSettings
 */
export interface AccountSettings {
    /**
     * Account caller id name
     * @type {string}
     * @memberof AccountSettings
     */
    'caller_id_name'?: string;
    /**
     *
     * @type {object}
     * @memberof AccountSettings
     */
    'options'?: object;
    /**
     *
     * @type {AccountSettingsSendFax}
     * @memberof AccountSettings
     */
    'send_fax'?: AccountSettingsSendFax;
    /**
     *
     * @type {boolean}
     * @memberof AccountSettings
     */
    'should_enhance'?: boolean;
}
