/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 3.0.2
 * Contact: info@fax.plus
 */
/**
 * Comment to set for the fax job
 * @export
 * @interface OutboxComment
 */
export interface OutboxComment {
    /**
     *
     * @type {Array<string>}
     * @memberof OutboxComment
     */
    'tags'?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof OutboxComment
     */
    'text'?: string;
}
