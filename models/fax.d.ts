/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 2.0.0
 * Contact: info@fax.plus
 */
import { FaxCostDetails } from './fax-cost-details';
import { FaxDirection } from './fax-direction';
import { FaxStatus } from './fax-status';
/**
 *
 * @export
 * @interface Fax
 */
export interface Fax {
    /**
     * Free-form comment
     * @type {string}
     * @memberof Fax
     */
    comment: string;
    /**
     * Fax cost in the user currency
     * @type {number}
     * @memberof Fax
     */
    cost?: number;
    /**
     *
     * @type {FaxCostDetails}
     * @memberof Fax
     */
    cost_details: FaxCostDetails;
    /**
     *
     * @type {string}
     * @memberof Fax
     */
    description?: string;
    /**
     *
     * @type {FaxDirection}
     * @memberof Fax
     */
    direction?: FaxDirection;
    /**
     *
     * @type {number}
     * @memberof Fax
     */
    duration?: number;
    /**
     *
     * @type {string}
     * @memberof Fax
     */
    file?: string;
    /**
     * File name
     * @type {string}
     * @memberof Fax
     */
    file_name?: string;
    /**
     * Sender number. Might be a userId for faxes sent or received with free accounts
     * @type {string}
     * @memberof Fax
     */
    from?: string;
    /**
     *
     * @type {string}
     * @memberof Fax
     */
    header?: string;
    /**
     * Fax ID
     * @type {string}
     * @memberof Fax
     */
    id: string;
    /**
     *
     * @type {boolean}
     * @memberof Fax
     */
    is_read?: boolean;
    /**
     * True if the fax is marked as spam
     * @type {boolean}
     * @memberof Fax
     */
    is_spam?: boolean;
    /**
     *
     * @type {string}
     * @memberof Fax
     */
    last_update?: string;
    /**
     * Maximum number of retries
     * @type {number}
     * @memberof Fax
     */
    max_retry?: number;
    /**
     * User ID of the fax owner
     * @type {string}
     * @memberof Fax
     */
    owner_id: string;
    /**
     * Number of pages in the fax
     * @type {number}
     * @memberof Fax
     */
    pages: number;
    /**
     * Delay between two retries
     * @type {number}
     * @memberof Fax
     */
    retry_delay?: number;
    /**
     *
     * @type {string}
     * @memberof Fax
     */
    scheduled_time?: string;
    /**
     *
     * @type {string}
     * @memberof Fax
     */
    start_time?: string;
    /**
     *
     * @type {FaxStatus}
     * @memberof Fax
     */
    status: FaxStatus;
    /**
     * Time when the fax was submitted for sending. For outgoing faxes only
     * @type {string}
     * @memberof Fax
     */
    submit_time?: string;
    /**
     * Fax destination number. Might be a userId for faxes sent or received with free accounts
     * @type {string}
     * @memberof Fax
     */
    to?: string;
}
