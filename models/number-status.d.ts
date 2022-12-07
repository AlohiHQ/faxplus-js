/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 3.0.2
 * Contact: info@fax.plus
 */
/**
 * Status of your fax number e.g. active, inactive.
 * @export
 * @enum {string}
 */
export declare const NumberStatus: {
    readonly WaitingVerification: "waiting_verification";
    readonly Active: "active";
};
export declare type NumberStatus = typeof NumberStatus[keyof typeof NumberStatus];
