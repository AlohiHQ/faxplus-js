/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 2.0.0
 * Contact: info@fax.plus
 */
import { NumberStatus } from './number-status';
/**
 *
 * @export
 * @interface Number
 */
export interface Number {
    /**
     * Date and time at which the number was acquired
     * @type {string}
     * @memberof Number
     */
    acquired_date: string;
    /**
     * IDs of the user to whom this number is assigned
     * @type {Array<string>}
     * @memberof Number
     */
    assigned_to: Array<string>;
    /**
     * Number expiration date, might be blank
     * @type {string}
     * @memberof Number
     */
    expiration_date?: string;
    /**
     * Number ID
     * @type {string}
     * @memberof Number
     */
    id: string;
    /**
     * True if number is canceled but not yet deleted
     * @type {boolean}
     * @memberof Number
     */
    is_canceled?: boolean;
    /**
     *
     * @type {Array<object>}
     * @memberof Number
     */
    notifications?: Array<object>;
    /**
     * Fax number
     * @type {string}
     * @memberof Number
     */
    number: string;
    /**
     * Number owner ID
     * @type {string}
     * @memberof Number
     */
    owner_id: string;
    /**
     *
     * @type {NumberStatus}
     * @memberof Number
     */
    status: NumberStatus;
}