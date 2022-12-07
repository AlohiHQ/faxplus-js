/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 3.0.2
 * Contact: info@fax.plus
 */
import { RetryOptions } from './retry-options';
/**
 * Additional configuration for sending a fax
 * @export
 * @interface OutboxOptions
 */
export interface OutboxOptions {
    /**
     * Text enhancement. Set to True to optimize fax file for text.
     * @type {boolean}
     * @memberof OutboxOptions
     */
    'enhancement'?: boolean;
    /**
     *
     * @type {RetryOptions}
     * @memberof OutboxOptions
     */
    'retry'?: RetryOptions;
}
