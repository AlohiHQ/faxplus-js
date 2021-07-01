/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 2.0.0
 * Contact: info@fax.plus
 */
import { FileType } from './file-type';
/**
 *
 * @export
 * @interface AccountData
 */
export interface AccountData {
    /**
     * File name of your company logo
     * @type {string}
     * @memberof AccountData
     */
    company_logo?: string;
    /**
     * Your company name in case you are a corporate admin
     * @type {string}
     * @memberof AccountData
     */
    company_name?: string;
    /**
     *
     * @type {string}
     * @memberof AccountData
     */
    deactivation_reason?: string;
    /**
     *
     * @type {FileType}
     * @memberof AccountData
     */
    default_file_type?: FileType;
    /**
     * Role of the account in the company
     * @type {string}
     * @memberof AccountData
     */
    role?: string;
    /**
     * Save fax CDRs in inbox status
     * @type {boolean}
     * @memberof AccountData
     */
    save_history?: boolean;
}
