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

