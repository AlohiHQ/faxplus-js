/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 3.0.2
 * Contact: info@fax.plus
 */
/**
 * Account type which could be corporate_admin, individual, etc
 * @export
 * @enum {string}
 */
export declare const AccountType: {
    readonly CorporateAdmin: "corporate_admin";
    readonly Individual: "individual";
    readonly CorporateMember: "corporate_member";
};
export declare type AccountType = typeof AccountType[keyof typeof AccountType];
