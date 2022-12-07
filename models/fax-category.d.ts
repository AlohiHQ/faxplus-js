/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 3.0.2
 * Contact: info@fax.plus
 */
/**
 *
 * @export
 * @enum {string}
 */
export declare const FaxCategory: {
    readonly Inbox: "inbox";
    readonly Sent: "sent";
    readonly Spam: "spam";
};
export declare type FaxCategory = typeof FaxCategory[keyof typeof FaxCategory];
