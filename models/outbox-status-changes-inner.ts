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
import { OutboxStatus } from './outbox-status';

/**
 * 
 * @export
 * @interface OutboxStatusChangesInner
 */
export interface OutboxStatusChangesInner {
    /**
     * Date and time at which status changed. Format: *YYYY-MM-DD HH:mm:ss*
     * @type {string}
     * @memberof OutboxStatusChangesInner
     */
    'at': string;
    /**
     * 
     * @type {OutboxStatus}
     * @memberof OutboxStatusChangesInner
     */
    'status': OutboxStatus;
}



