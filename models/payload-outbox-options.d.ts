/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 2.0.0
 * Contact: info@fax.plus
 */
import { RetryOptions } from './retry-options';
/**
 *
 * @export
 * @interface PayloadOutboxOptions
 */
export interface PayloadOutboxOptions {
    /**
     *
     * @type {boolean}
     * @memberof PayloadOutboxOptions
     */
    enhancement?: boolean;
    /**
     *
     * @type {RetryOptions}
     * @memberof PayloadOutboxOptions
     */
    retry?: RetryOptions;
}
