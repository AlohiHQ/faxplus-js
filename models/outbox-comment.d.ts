/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 2.0.0
 * Contact: info@fax.plus
 */
/**
 * Comment and tags to mark the fax
 * @export
 * @interface OutboxComment
 */
export interface OutboxComment {
    /**
     * List of tags to mark the fax
     * @type {Array<string>}
     * @memberof OutboxComment
     */
    tags?: Array<string>;
    /**
     * Free-form text comment
     * @type {string}
     * @memberof OutboxComment
     */
    text?: string;
}
