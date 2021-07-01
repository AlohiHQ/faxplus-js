/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 2.0.0
 * Contact: info@fax.plus
 */
/**
 * Your account status which could be active, inactive etc
 * @export
 * @enum {string}
 */
export declare enum AccountStatus {
    Active = "active",
    UnverifiedPhone = "unverified_phone",
    Suspended = "suspended",
    Disabled = "disabled",
    Inactive = "inactive",
    Deleted = "deleted",
    CorporateDeleted = "corporate_deleted",
    WaitingForSignup = "waiting_for_signup"
}
