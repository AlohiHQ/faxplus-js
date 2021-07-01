/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 2.0.0
 * Contact: info@fax.plus
 */
import { PayloadOutboxComment } from './payload-outbox-comment';
import { PayloadOutboxOptions } from './payload-outbox-options';
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
    from: string;
    /**
     * List of fax destination numbers
     * @type {Array<string>}
     * @memberof PayloadOutbox
     */
    to: Array<string>;
    /**
     * List of file names to send. Files should be uploaded beforehand.
     * @type {Array<string>}
     * @memberof PayloadOutbox
     */
    files: Array<string>;
    /**
     *
     * @type {PayloadOutboxComment}
     * @memberof PayloadOutbox
     */
    comment?: PayloadOutboxComment;
    /**
     *
     * @type {PayloadOutboxOptions}
     * @memberof PayloadOutbox
     */
    options?: PayloadOutboxOptions;
    /**
     * Date when to send the fax. Format: **YYYY-MM-DD HH:mm:ss +HHMM**
     * @type {string}
     * @memberof PayloadOutbox
     */
    send_time?: string;
    /**
     * Return scheduled fax IDs to use for tracking and with webhooks
     * @type {boolean}
     * @memberof PayloadOutbox
     */
    return_ids?: boolean;
}
