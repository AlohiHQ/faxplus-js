/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 2.0.0
 * Contact: info@fax.plus
 */
/**
 * Company member details
 * @export
 * @interface MemberDetail
 */
export interface MemberDetail {
    /**
     * Quota of member (number of pages member can send per month)
     * @type {number}
     * @memberof MemberDetail
     */
    quota?: number;
    /**
     * Role of member in your company
     * @type {string}
     * @memberof MemberDetail
     */
    role?: string;
}
