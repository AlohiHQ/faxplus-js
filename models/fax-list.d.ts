/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 3.0.0
 * Contact: info@fax.plus
 */
import { FaxListData } from './fax-list-data';
/**
 * List of fax data
 * @export
 * @interface FaxList
 */
export interface FaxList {
    /**
     *
     * @type {FaxListData}
     * @memberof FaxList
     */
    data?: FaxListData;
}
