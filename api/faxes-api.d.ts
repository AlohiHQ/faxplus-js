/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 3.0.2
 * Contact: info@fax.plus
 */
import { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { Fax } from '../models';
import { FaxCategory } from '../models';
import { FaxList } from '../models';
import { PayloadFaxModification } from '../models';
/**
 * FaxesApi - axios parameter creator
 * @export
 */
export declare const FaxesApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Delete a specific fax record by providing its id
     * @summary Delete a fax
     * @param {string} userId self or user id of a corporate member
     * @param {string} faxId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteFax: (userId: string, faxId: string, options?: any) => Promise<RequestArgs>;
    /**
     * Get a specific fax record details like duration, pages etc.
     * @summary Get a fax record
     * @param {string} userId self or user id of a corporate member
     * @param {string} faxId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getFax: (userId: string, faxId: string, options?: any) => Promise<RequestArgs>;
    /**
     * Get your own or your subordinate\'s faxes list
     * @summary List fax records
     * @param {string} userId self or user id of a corporate member
     * @param {FaxCategory} [category] Category parameter. Valid values: **inbox**, **sent**, **spam**
     * @param {string} [after] Start date to get records from that date. Format: *YYYY-MM-DD HH:mm:ss*
     * @param {string} [before] End date to get records before that date. Format: *YYYY-MM-DD HH:mm:ss*
     * @param {number} [limit] Limit of fax records you want to get per request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listFaxes: (userId: string, category?: FaxCategory, after?: string, before?: string, limit?: number, options?: any) => Promise<RequestArgs>;
    /**
     * You can modify a fax record\'s comment or mark it as read
     * @summary Modify fax record
     * @param {string} userId self or user id of a corporate member
     * @param {string} faxId
     * @param {PayloadFaxModification} [payloadFaxModification] Request object for making changes in a fax object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateFax: (userId: string, faxId: string, payloadFaxModification?: PayloadFaxModification, options?: any) => Promise<RequestArgs>;
};
/**
 * FaxesApi - functional programming interface
 * @export
 */
export declare const FaxesApiFp: (configuration?: Configuration) => {
    /**
     * Delete a specific fax record by providing its id
     * @summary Delete a fax
     * @param {FaxesApiDeleteFaxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteFax(requestParameters: FaxesApiDeleteFaxRequest, options?: any): Promise<(<T = unknown, R = import("axios").AxiosResponse<T>>(axios?: AxiosInstance, basePath?: string) => Promise<R>)>;
    /**
     * Get a specific fax record details like duration, pages etc.
     * @summary Get a fax record
     * @param {FaxesApiGetFaxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getFax(requestParameters: FaxesApiGetFaxRequest, options?: any): Promise<(<T = unknown, R = import("axios").AxiosResponse<T>>(axios?: AxiosInstance, basePath?: string) => Promise<R>)>;
    /**
     * Get your own or your subordinate\'s faxes list
     * @summary List fax records
     * @param {FaxesApiListFaxesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listFaxes(requestParameters: FaxesApiListFaxesRequest, options?: any): Promise<(<T = unknown, R = import("axios").AxiosResponse<T>>(axios?: AxiosInstance, basePath?: string) => Promise<R>)>;
    /**
     * You can modify a fax record\'s comment or mark it as read
     * @summary Modify fax record
     * @param {FaxesApiUpdateFaxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateFax(requestParameters: FaxesApiUpdateFaxRequest, options?: any): Promise<(<T = unknown, R = import("axios").AxiosResponse<T>>(axios?: AxiosInstance, basePath?: string) => Promise<R>)>;
};
/**
 * FaxesApi - factory interface
 * @export
 */
export declare const FaxesApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Delete a specific fax record by providing its id
     * @summary Delete a fax
     * @param {FaxesApiDeleteFaxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteFax(requestParameters: FaxesApiDeleteFaxRequest, options?: any): AxiosPromise<void>;
    /**
     * Get a specific fax record details like duration, pages etc.
     * @summary Get a fax record
     * @param {FaxesApiGetFaxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getFax(requestParameters: FaxesApiGetFaxRequest, options?: any): AxiosPromise<Fax>;
    /**
     * Get your own or your subordinate\'s faxes list
     * @summary List fax records
     * @param {FaxesApiListFaxesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listFaxes(requestParameters: FaxesApiListFaxesRequest, options?: any): AxiosPromise<FaxList>;
    /**
     * You can modify a fax record\'s comment or mark it as read
     * @summary Modify fax record
     * @param {FaxesApiUpdateFaxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateFax(requestParameters: FaxesApiUpdateFaxRequest, options?: any): AxiosPromise<void>;
};
/**
 * Request parameters for deleteFax operation in FaxesApi.
 * @export
 * @interface FaxesApiDeleteFaxRequest
 */
export interface FaxesApiDeleteFaxRequest {
    /**
     * self or user id of a corporate member
     * @type {string}
     * @memberof FaxesApiDeleteFax
     */
    readonly userId: string;
    /**
     *
     * @type {string}
     * @memberof FaxesApiDeleteFax
     */
    readonly faxId: string;
}
/**
 * Request parameters for getFax operation in FaxesApi.
 * @export
 * @interface FaxesApiGetFaxRequest
 */
export interface FaxesApiGetFaxRequest {
    /**
     * self or user id of a corporate member
     * @type {string}
     * @memberof FaxesApiGetFax
     */
    readonly userId: string;
    /**
     *
     * @type {string}
     * @memberof FaxesApiGetFax
     */
    readonly faxId: string;
}
/**
 * Request parameters for listFaxes operation in FaxesApi.
 * @export
 * @interface FaxesApiListFaxesRequest
 */
export interface FaxesApiListFaxesRequest {
    /**
     * self or user id of a corporate member
     * @type {string}
     * @memberof FaxesApiListFaxes
     */
    readonly userId: string;
    /**
     * Category parameter. Valid values: **inbox**, **sent**, **spam**
     * @type {FaxCategory}
     * @memberof FaxesApiListFaxes
     */
    readonly category?: FaxCategory;
    /**
     * Start date to get records from that date. Format: *YYYY-MM-DD HH:mm:ss*
     * @type {string}
     * @memberof FaxesApiListFaxes
     */
    readonly after?: string;
    /**
     * End date to get records before that date. Format: *YYYY-MM-DD HH:mm:ss*
     * @type {string}
     * @memberof FaxesApiListFaxes
     */
    readonly before?: string;
    /**
     * Limit of fax records you want to get per request
     * @type {number}
     * @memberof FaxesApiListFaxes
     */
    readonly limit?: number;
}
/**
 * Request parameters for updateFax operation in FaxesApi.
 * @export
 * @interface FaxesApiUpdateFaxRequest
 */
export interface FaxesApiUpdateFaxRequest {
    /**
     * self or user id of a corporate member
     * @type {string}
     * @memberof FaxesApiUpdateFax
     */
    readonly userId: string;
    /**
     *
     * @type {string}
     * @memberof FaxesApiUpdateFax
     */
    readonly faxId: string;
    /**
     * Request object for making changes in a fax object
     * @type {PayloadFaxModification}
     * @memberof FaxesApiUpdateFax
     */
    readonly payloadFaxModification?: PayloadFaxModification;
}
/**
 * FaxesApi - object-oriented interface
 * @export
 * @class FaxesApi
 * @extends {BaseAPI}
 */
export declare class FaxesApi extends BaseAPI {
    /**
     * Delete a specific fax record by providing its id
     * @summary Delete a fax
     * @param {FaxesApiDeleteFaxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FaxesApi
     */
    deleteFax(requestParameters: FaxesApiDeleteFaxRequest, options?: any): Promise<import("axios").AxiosResponse<unknown>>;
    /**
     * Get a specific fax record details like duration, pages etc.
     * @summary Get a fax record
     * @param {FaxesApiGetFaxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FaxesApi
     */
    getFax(requestParameters: FaxesApiGetFaxRequest, options?: any): Promise<import("axios").AxiosResponse<unknown>>;
    /**
     * Get your own or your subordinate\'s faxes list
     * @summary List fax records
     * @param {FaxesApiListFaxesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FaxesApi
     */
    listFaxes(requestParameters: FaxesApiListFaxesRequest, options?: any): Promise<import("axios").AxiosResponse<unknown>>;
    /**
     * You can modify a fax record\'s comment or mark it as read
     * @summary Modify fax record
     * @param {FaxesApiUpdateFaxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FaxesApi
     */
    updateFax(requestParameters: FaxesApiUpdateFaxRequest, options?: any): Promise<import("axios").AxiosResponse<unknown>>;
}
