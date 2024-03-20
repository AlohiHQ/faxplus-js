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

