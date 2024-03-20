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
import { FaxStatus } from './fax-status';

/**
 * Callback data, depends on the event type
 * @export
 * @interface WebhookCallbackData
 */
export interface WebhookCallbackData {
    /**
     * Fax session ID. Note that this ID might be different from the one returned by the listFaxes handle, as this ID refers to the faxing session as a whole, with retries included. Both IDs can be used with the API getFile handle
     * @type {string}
     * @memberof WebhookCallbackData
     */
    'id'?: string;
    /**
     * Sender user ID
     * @type {string}
     * @memberof WebhookCallbackData
     */
    'uid'?: string;
    /**
     * Number of pages in the fax
     * @type {number}
     * @memberof WebhookCallbackData
     */
    'pages'?: number;
    /**
     * Sender number. Might be a user ID for faxes sent from free accounts
     * @type {string}
     * @memberof WebhookCallbackData
     */
    'from_number'?: string;
    /**
     * Fax destination number. Might be a user ID for faxes sent from free accounts
     * @type {string}
     * @memberof WebhookCallbackData
     */
    'to_number'?: string;
    /**
     * Time at which faxing session started. Format: YYYY-MM-DD HH:mm:ss
     * @type {string}
     * @memberof WebhookCallbackData
     */
    'start_time'?: string;
    /**
     * File ID
     * @type {string}
     * @memberof WebhookCallbackData
     */
    'file'?: string;
    /**
     * Human-readable file name
     * @type {string}
     * @memberof WebhookCallbackData
     */
    'file_name'?: string;
    /**
     * Fax cost (in pages)
     * @type {number}
     * @memberof WebhookCallbackData
     */
    'cost'?: number;
    /**
     * 
     * @type {FaxStatus}
     * @memberof WebhookCallbackData
     */
    'status'?: FaxStatus;
}



