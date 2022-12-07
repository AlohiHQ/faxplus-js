/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 3.0.2
 * Contact: info@fax.plus
 */
import { Outbox } from './outbox';
/**
 * List of the outgoing faxes
 * @export
 * @interface OutboxList
 */
export interface OutboxList {
    /**
     *
     * @type {Array<Outbox>}
     * @memberof OutboxList
     */
    'records': Array<Outbox>;
}
