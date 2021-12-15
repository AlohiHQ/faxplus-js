/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 3.0.0
 * Contact: info@fax.plus
 */
import { CoverPageFlags } from './cover-page-flags';
/**
 * Fax cover page
 * @export
 * @interface OutboxCoverPage
 */
export interface OutboxCoverPage {
    /**
     * TO field on the cover page
     * @type {string}
     * @memberof OutboxCoverPage
     */
    name_to: string;
    /**
     * FROM field on the cover page
     * @type {string}
     * @memberof OutboxCoverPage
     */
    name_from: string;
    /**
     * SUBJECT field on the cover page
     * @type {string}
     * @memberof OutboxCoverPage
     */
    subject: string;
    /**
     * Cover page flags
     * @type {Array<CoverPageFlags>}
     * @memberof OutboxCoverPage
     */
    flags?: Array<CoverPageFlags>;
    /**
     * MESSAGE field on the cover page
     * @type {string}
     * @memberof OutboxCoverPage
     */
    message?: string;
}
