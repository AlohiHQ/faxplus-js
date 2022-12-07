/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 3.0.2
 * Contact: info@fax.plus
 */
/**
 * Your account status which could be active, inactive etc
 * @export
 * @enum {string}
 */
export declare const AccountStatus: {
    readonly Active: "active";
    readonly UnverifiedPhone: "unverified_phone";
    readonly Suspended: "suspended";
    readonly Disabled: "disabled";
    readonly Inactive: "inactive";
    readonly Deleted: "deleted";
    readonly CorporateDeleted: "corporate_deleted";
    readonly WaitingForSignup: "waiting_for_signup";
};
export declare type AccountStatus = typeof AccountStatus[keyof typeof AccountStatus];
