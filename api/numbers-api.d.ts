/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 3.0.0
 * Contact: info@fax.plus
 */
import { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { Number } from '../models';
import { NumberList } from '../models';
import { PayloadNumberModification } from '../models';
/**
 * NumbersApi - axios parameter creator
 * @export
 */
export declare const NumbersApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Get information about a single purchased/assigned fax number
     * @summary Get number information
     * @param {string} userId ID of the number owner
     * @param {string} number Fax number to get information about
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getNumber: (userId: string, number: string, options?: any) => Promise<RequestArgs>;
    /**
     * List your purchased/assigned phone numbers. For corporate members all assigned numbers will be returned, while for the corporate admin, all purchased numbers
     * @summary List phone numbers
     * @param {string} userId ID of the user to get numbers for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listNumbers: (userId: string, options?: any) => Promise<RequestArgs>;
    /**
     * Revoke fax number from a corporate member. To revoke your own number use self as a user_id
     * @summary Revoke number
     * @param {string} userId ID of the user to revoke the number from. Number can not be removed from the admin
     * @param {string} number Fax number to remove members from
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    revokeNumber: (userId: string, number: string, options?: any) => Promise<RequestArgs>;
    /**
     * Assign fax number to a corporate member
     * @summary Assign number
     * @param {string} userId ID of the number owner
     * @param {string} number Fax number to update
     * @param {PayloadNumberModification} [payloadNumberModification] Request object for making changes in number object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateNumber: (userId: string, number: string, payloadNumberModification?: PayloadNumberModification, options?: any) => Promise<RequestArgs>;
};
/**
 * NumbersApi - functional programming interface
 * @export
 */
export declare const NumbersApiFp: (configuration?: Configuration) => {
    /**
     * Get information about a single purchased/assigned fax number
     * @summary Get number information
     * @param {NumbersApiGetNumberRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getNumber(requestParameters: NumbersApiGetNumberRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<import("axios").AxiosResponse<any>>>;
    /**
     * List your purchased/assigned phone numbers. For corporate members all assigned numbers will be returned, while for the corporate admin, all purchased numbers
     * @summary List phone numbers
     * @param {NumbersApiListNumbersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listNumbers(requestParameters: NumbersApiListNumbersRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<import("axios").AxiosResponse<any>>>;
    /**
     * Revoke fax number from a corporate member. To revoke your own number use self as a user_id
     * @summary Revoke number
     * @param {NumbersApiRevokeNumberRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    revokeNumber(requestParameters: NumbersApiRevokeNumberRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<import("axios").AxiosResponse<any>>>;
    /**
     * Assign fax number to a corporate member
     * @summary Assign number
     * @param {NumbersApiUpdateNumberRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateNumber(requestParameters: NumbersApiUpdateNumberRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<import("axios").AxiosResponse<any>>>;
};
/**
 * NumbersApi - factory interface
 * @export
 */
export declare const NumbersApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Get information about a single purchased/assigned fax number
     * @summary Get number information
     * @param {NumbersApiGetNumberRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getNumber(requestParameters: NumbersApiGetNumberRequest, options?: any): AxiosPromise<Number>;
    /**
     * List your purchased/assigned phone numbers. For corporate members all assigned numbers will be returned, while for the corporate admin, all purchased numbers
     * @summary List phone numbers
     * @param {NumbersApiListNumbersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listNumbers(requestParameters: NumbersApiListNumbersRequest, options?: any): AxiosPromise<NumberList>;
    /**
     * Revoke fax number from a corporate member. To revoke your own number use self as a user_id
     * @summary Revoke number
     * @param {NumbersApiRevokeNumberRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    revokeNumber(requestParameters: NumbersApiRevokeNumberRequest, options?: any): AxiosPromise<void>;
    /**
     * Assign fax number to a corporate member
     * @summary Assign number
     * @param {NumbersApiUpdateNumberRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateNumber(requestParameters: NumbersApiUpdateNumberRequest, options?: any): AxiosPromise<void>;
};
/**
 * Request parameters for getNumber operation in NumbersApi.
 * @export
 * @interface NumbersApiGetNumberRequest
 */
export interface NumbersApiGetNumberRequest {
    /**
     * ID of the number owner
     * @type {string}
     * @memberof NumbersApiGetNumber
     */
    readonly userId: string;
    /**
     * Fax number to get information about
     * @type {string}
     * @memberof NumbersApiGetNumber
     */
    readonly number: string;
}
/**
 * Request parameters for listNumbers operation in NumbersApi.
 * @export
 * @interface NumbersApiListNumbersRequest
 */
export interface NumbersApiListNumbersRequest {
    /**
     * ID of the user to get numbers for
     * @type {string}
     * @memberof NumbersApiListNumbers
     */
    readonly userId: string;
}
/**
 * Request parameters for revokeNumber operation in NumbersApi.
 * @export
 * @interface NumbersApiRevokeNumberRequest
 */
export interface NumbersApiRevokeNumberRequest {
    /**
     * ID of the user to revoke the number from. Number can not be removed from the admin
     * @type {string}
     * @memberof NumbersApiRevokeNumber
     */
    readonly userId: string;
    /**
     * Fax number to remove members from
     * @type {string}
     * @memberof NumbersApiRevokeNumber
     */
    readonly number: string;
}
/**
 * Request parameters for updateNumber operation in NumbersApi.
 * @export
 * @interface NumbersApiUpdateNumberRequest
 */
export interface NumbersApiUpdateNumberRequest {
    /**
     * ID of the number owner
     * @type {string}
     * @memberof NumbersApiUpdateNumber
     */
    readonly userId: string;
    /**
     * Fax number to update
     * @type {string}
     * @memberof NumbersApiUpdateNumber
     */
    readonly number: string;
    /**
     * Request object for making changes in number object
     * @type {PayloadNumberModification}
     * @memberof NumbersApiUpdateNumber
     */
    readonly payloadNumberModification?: PayloadNumberModification;
}
/**
 * NumbersApi - object-oriented interface
 * @export
 * @class NumbersApi
 * @extends {BaseAPI}
 */
export declare class NumbersApi extends BaseAPI {
    /**
     * Get information about a single purchased/assigned fax number
     * @summary Get number information
     * @param {NumbersApiGetNumberRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NumbersApi
     */
    getNumber(requestParameters: NumbersApiGetNumberRequest, options?: any): Promise<import("axios").AxiosResponse<any>>;
    /**
     * List your purchased/assigned phone numbers. For corporate members all assigned numbers will be returned, while for the corporate admin, all purchased numbers
     * @summary List phone numbers
     * @param {NumbersApiListNumbersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NumbersApi
     */
    listNumbers(requestParameters: NumbersApiListNumbersRequest, options?: any): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Revoke fax number from a corporate member. To revoke your own number use self as a user_id
     * @summary Revoke number
     * @param {NumbersApiRevokeNumberRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NumbersApi
     */
    revokeNumber(requestParameters: NumbersApiRevokeNumberRequest, options?: any): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Assign fax number to a corporate member
     * @summary Assign number
     * @param {NumbersApiUpdateNumberRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NumbersApi
     */
    updateNumber(requestParameters: NumbersApiUpdateNumberRequest, options?: any): Promise<import("axios").AxiosResponse<any>>;
}
