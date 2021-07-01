/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 2.0.0
 * Contact: info@fax.plus
 */
/**
 * Send fax handle response, will contain Destination-to-ID mapping if the corresponding flag was provided
 * @export
 * @interface SendFaxResponse
 */
export interface SendFaxResponse {
    /**
     * Destination-to-ID mapping
     * @type {{ [key: string]: object; }}
     * @memberof SendFaxResponse
     */
    ids?: {
        [key: string]: object;
    };
}
