/* tslint:disable */
/* eslint-disable */
/**
 * Fax.Plus REST API
 *
 * OpenAPI spec version: 3.0.3
 * Contact: info@fax.plus
 */


/**
 * Allowed flags for the cover page
 * @export
 * @enum {string}
 */

export const CoverPageFlags = {
    Urgent: 'urgent',
    ForReview: 'for_review',
    PleaseReply: 'please_reply',
    Confidential: 'confidential'
} as const;

export type CoverPageFlags = typeof CoverPageFlags[keyof typeof CoverPageFlags];



