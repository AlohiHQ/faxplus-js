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
import { CoverPageFlags } from './cover-page-flags';

/**
 * Fax cover page
 * @export
 * @interface FaxCoverPage
 */
export interface FaxCoverPage {
    /**
     * TO field on the cover page
     * @type {string}
     * @memberof FaxCoverPage
     */
    'name_to': string;
    /**
     * FROM field on the cover page
     * @type {string}
     * @memberof FaxCoverPage
     */
    'name_from': string;
    /**
     * SUBJECT field on the cover page
     * @type {string}
     * @memberof FaxCoverPage
     */
    'subject': string;
    /**
     * Cover page flags
     * @type {Array<CoverPageFlags>}
     * @memberof FaxCoverPage
     */
    'flags'?: Array<CoverPageFlags>;
    /**
     * MESSAGE field on the cover page
     * @type {string}
     * @memberof FaxCoverPage
     */
    'message'?: string;
}

