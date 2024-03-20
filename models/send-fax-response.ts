/* tslint:disable */
/* eslint-disable */
/**
 * Fax.Plus REST API
 *
 * OpenAPI spec version: 3.0.3
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
     * @type {{ [key: string]: any; }}
     * @memberof SendFaxResponse
     */
    'ids'?: { [key: string]: any; };
}

