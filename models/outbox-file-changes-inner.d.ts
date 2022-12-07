/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 3.0.2
 * Contact: info@fax.plus
 */
import { OutboxFileChangesInnerFilesInner } from './outbox-file-changes-inner-files-inner';
/**
 *
 * @export
 * @interface OutboxFileChangesInner
 */
export interface OutboxFileChangesInner {
    /**
     *
     * @type {string}
     * @memberof OutboxFileChangesInner
     */
    'at'?: string;
    /**
     *
     * @type {Array<OutboxFileChangesInnerFilesInner>}
     * @memberof OutboxFileChangesInner
     */
    'files'?: Array<OutboxFileChangesInnerFilesInner>;
}
