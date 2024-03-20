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
import { OutboxComment } from './outbox-comment';
// May contain unused imports in some cases
// @ts-ignore
import { OutboxCoverPage } from './outbox-cover-page';
// May contain unused imports in some cases
// @ts-ignore
import { OutboxFileChangesInner } from './outbox-file-changes-inner';
// May contain unused imports in some cases
// @ts-ignore
import { OutboxInitiatedFrom } from './outbox-initiated-from';
// May contain unused imports in some cases
// @ts-ignore
import { OutboxOptions } from './outbox-options';
// May contain unused imports in some cases
// @ts-ignore
import { OutboxStatus } from './outbox-status';
// May contain unused imports in some cases
// @ts-ignore
import { OutboxStatusChangesInner } from './outbox-status-changes-inner';
// May contain unused imports in some cases
// @ts-ignore
import { RetryOptions } from './retry-options';

/**
 * Model for the outbound fax stored in the outbox
 * @export
 * @interface Outbox
 */
export interface Outbox {
    /**
     * 
     * @type {OutboxComment}
     * @memberof Outbox
     */
    'comment'?: OutboxComment;
    /**
     * 
     * @type {string}
     * @memberof Outbox
     */
    'contact_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof Outbox
     */
    'designated_src'?: string;
    /**
     * 
     * @type {object}
     * @memberof Outbox
     */
    'extra_info'?: object;
    /**
     * 
     * @type {Array<OutboxFileChangesInner>}
     * @memberof Outbox
     */
    'file_changes'?: Array<OutboxFileChangesInner>;
    /**
     * Files to send
     * @type {Array<string>}
     * @memberof Outbox
     */
    'files'?: Array<string>;
    /**
     * Fax ID
     * @type {string}
     * @memberof Outbox
     */
    'id': string;
    /**
     * 
     * @type {OutboxInitiatedFrom}
     * @memberof Outbox
     */
    'initiated_from'?: OutboxInitiatedFrom;
    /**
     * IP address from which the send request originated
     * @type {string}
     * @memberof Outbox
     */
    'ip'?: string;
    /**
     * Time and date when the send request status was last updated. Format: *YYYY-MM-DD HH:mm:ss*
     * @type {string}
     * @memberof Outbox
     */
    'last_updated_status_time'?: string;
    /**
     * 
     * @type {OutboxOptions}
     * @memberof Outbox
     */
    'options'?: OutboxOptions;
    /**
     * Number of fax pages
     * @type {number}
     * @memberof Outbox
     */
    'page_count'?: number;
    /**
     * 
     * @type {RetryOptions}
     * @memberof Outbox
     */
    'retry'?: RetryOptions;
    /**
     * 
     * @type {string}
     * @memberof Outbox
     */
    'send_time'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Outbox
     */
    'should_enhance'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Outbox
     */
    'src'?: string;
    /**
     * 
     * @type {OutboxStatus}
     * @memberof Outbox
     */
    'status': OutboxStatus;
    /**
     * 
     * @type {Array<OutboxStatusChangesInner>}
     * @memberof Outbox
     */
    'status_changes'?: Array<OutboxStatusChangesInner>;
    /**
     * Date and time when the fax was submitted for sending
     * @type {string}
     * @memberof Outbox
     */
    'submit_time'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Outbox
     */
    'to'?: Array<string>;
    /**
     * User ID
     * @type {string}
     * @memberof Outbox
     */
    'uid': string;
    /**
     * 
     * @type {OutboxCoverPage}
     * @memberof Outbox
     */
    'cover_page'?: OutboxCoverPage;
}



