/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 3.0.2
 * Contact: info@fax.plus
 */
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
