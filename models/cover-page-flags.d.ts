/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 3.0.2
 * Contact: info@fax.plus
 */
/**
 * Allowed flags for the cover page
 * @export
 * @enum {string}
 */
export declare const CoverPageFlags: {
    readonly Urgent: "urgent";
    readonly ForReview: "for_review";
    readonly PleaseReply: "please_reply";
    readonly Confidential: "confidential";
};
export declare type CoverPageFlags = typeof CoverPageFlags[keyof typeof CoverPageFlags];
