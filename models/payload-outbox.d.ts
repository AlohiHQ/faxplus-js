/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 3.0.2
 * Contact: info@fax.plus
 */
import { OutboxComment } from './outbox-comment';
import { OutboxCoverPage } from './outbox-cover-page';
import { OutboxOptions } from './outbox-options';
/**
 * Model for creating new outbound fax
 * @export
 * @interface PayloadOutbox
 */
export interface PayloadOutbox {
    /**
     * Number to use for sending the fax
     * @type {string}
     * @memberof PayloadOutbox
     */
    'from': string;
    /**
     * List of fax destination numbers
     * @type {Array<string>}
     * @memberof PayloadOutbox
     */
    'to': Array<string>;
    /**
     * List of file names to send. Files should be uploaded beforehand.
     * @type {Array<string>}
     * @memberof PayloadOutbox
     */
    'files': Array<string>;
    /**
     *
     * @type {OutboxComment}
     * @memberof PayloadOutbox
     */
    'comment'?: OutboxComment;
    /**
     *
     * @type {OutboxOptions}
     * @memberof PayloadOutbox
     */
    'options'?: OutboxOptions;
    /**
     * Date when to send the fax. Format: **YYYY-MM-DD HH:mm:ss +HHMM**
     * @type {string}
     * @memberof PayloadOutbox
     */
    'send_time'?: string;
    /**
     * Return scheduled fax IDs to use for tracking and with webhooks
     * @type {boolean}
     * @memberof PayloadOutbox
     */
    'return_ids'?: boolean;
    /**
     *
     * @type {OutboxCoverPage}
     * @memberof PayloadOutbox
     */
    'cover_page'?: OutboxCoverPage;
}
