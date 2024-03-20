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

