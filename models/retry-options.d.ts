/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 2.0.0
 * Contact: info@fax.plus
 */
/**
 * Fax retry settings
 * @export
 * @interface RetryOptions
 */
export interface RetryOptions {
    /**
     * Number of tries to send the fax
     * @type {number}
     * @memberof RetryOptions
     */
    count?: number;
    /**
     * Delay in seconds between two retries
     * @type {number}
     * @memberof RetryOptions
     */
    delay?: number;
}
