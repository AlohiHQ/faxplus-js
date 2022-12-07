/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 3.0.2
 * Contact: info@fax.plus
 */
/**
 * Fax direction
 * @export
 * @enum {string}
 */
export declare const FaxDirection: {
    readonly Outgoing: "outgoing";
    readonly Incoming: "incoming";
};
export declare type FaxDirection = typeof FaxDirection[keyof typeof FaxDirection];
