/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 2.0.0
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
 * ArchivesApi - axios parameter creator
 * @export
 */
export declare const ArchivesApiAxiosParamCreator: (configuration?: Configuration) => {
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
     * Get your own or your subordinate\'s fax archive information
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
 * ArchivesApi - functional programming interface
 * @export
 */
export declare const ArchivesApiFp: (configuration?: Configuration) => {
    /**
     * Delete a specific fax record by providing its id
     * @summary Delete a fax
     * @param {ArchivesApiDeleteFaxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteFax(requestParameters: ArchivesApiDeleteFaxRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<import("axios").AxiosResponse<any>>>;
    /**
     * Get a specific fax record details like duration, pages etc.
     * @summary Get a fax record
     * @param {ArchivesApiGetFaxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getFax(requestParameters: ArchivesApiGetFaxRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<import("axios").AxiosResponse<any>>>;
    /**
     * Get your own or your subordinate\'s fax archive information
     * @summary List fax records
     * @param {ArchivesApiListFaxesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listFaxes(requestParameters: ArchivesApiListFaxesRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<import("axios").AxiosResponse<any>>>;
    /**
     * You can modify a fax record\'s comment or mark it as read
     * @summary Modify fax record
     * @param {ArchivesApiUpdateFaxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateFax(requestParameters: ArchivesApiUpdateFaxRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<import("axios").AxiosResponse<any>>>;
};
/**
 * ArchivesApi - factory interface
 * @export
 */
export declare const ArchivesApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Delete a specific fax record by providing its id
     * @summary Delete a fax
     * @param {ArchivesApiDeleteFaxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteFax(requestParameters: ArchivesApiDeleteFaxRequest, options?: any): AxiosPromise<void>;
    /**
     * Get a specific fax record details like duration, pages etc.
     * @summary Get a fax record
     * @param {ArchivesApiGetFaxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getFax(requestParameters: ArchivesApiGetFaxRequest, options?: any): AxiosPromise<Fax>;
    /**
     * Get your own or your subordinate\'s fax archive information
     * @summary List fax records
     * @param {ArchivesApiListFaxesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listFaxes(requestParameters: ArchivesApiListFaxesRequest, options?: any): AxiosPromise<FaxList>;
    /**
     * You can modify a fax record\'s comment or mark it as read
     * @summary Modify fax record
     * @param {ArchivesApiUpdateFaxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateFax(requestParameters: ArchivesApiUpdateFaxRequest, options?: any): AxiosPromise<void>;
};
/**
 * Request parameters for deleteFax operation in ArchivesApi.
 * @export
 * @interface ArchivesApiDeleteFaxRequest
 */
export interface ArchivesApiDeleteFaxRequest {
    /**
     * self or user id of a corporate member
     * @type {string}
     * @memberof ArchivesApiDeleteFax
     */
    readonly userId: string;
    /**
     *
     * @type {string}
     * @memberof ArchivesApiDeleteFax
     */
    readonly faxId: string;
}
/**
 * Request parameters for getFax operation in ArchivesApi.
 * @export
 * @interface ArchivesApiGetFaxRequest
 */
export interface ArchivesApiGetFaxRequest {
    /**
     * self or user id of a corporate member
     * @type {string}
     * @memberof ArchivesApiGetFax
     */
    readonly userId: string;
    /**
     *
     * @type {string}
     * @memberof ArchivesApiGetFax
     */
    readonly faxId: string;
}
/**
 * Request parameters for listFaxes operation in ArchivesApi.
 * @export
 * @interface ArchivesApiListFaxesRequest
 */
export interface ArchivesApiListFaxesRequest {
    /**
     * self or user id of a corporate member
     * @type {string}
     * @memberof ArchivesApiListFaxes
     */
    readonly userId: string;
    /**
     * Category parameter. Valid values: **inbox**, **sent**, **spam**
     * @type {FaxCategory}
     * @memberof ArchivesApiListFaxes
     */
    readonly category?: FaxCategory;
    /**
     * Start date to get records from that date. Format: *YYYY-MM-DD HH:mm:ss*
     * @type {string}
     * @memberof ArchivesApiListFaxes
     */
    readonly after?: string;
    /**
     * End date to get records before that date. Format: *YYYY-MM-DD HH:mm:ss*
     * @type {string}
     * @memberof ArchivesApiListFaxes
     */
    readonly before?: string;
    /**
     * Limit of fax records you want to get per request
     * @type {number}
     * @memberof ArchivesApiListFaxes
     */
    readonly limit?: number;
}
/**
 * Request parameters for updateFax operation in ArchivesApi.
 * @export
 * @interface ArchivesApiUpdateFaxRequest
 */
export interface ArchivesApiUpdateFaxRequest {
    /**
     * self or user id of a corporate member
     * @type {string}
     * @memberof ArchivesApiUpdateFax
     */
    readonly userId: string;
    /**
     *
     * @type {string}
     * @memberof ArchivesApiUpdateFax
     */
    readonly faxId: string;
    /**
     * Request object for making changes in a fax object
     * @type {PayloadFaxModification}
     * @memberof ArchivesApiUpdateFax
     */
    readonly payloadFaxModification?: PayloadFaxModification;
}
/**
 * ArchivesApi - object-oriented interface
 * @export
 * @class ArchivesApi
 * @extends {BaseAPI}
 */
export declare class ArchivesApi extends BaseAPI {
    /**
     * Delete a specific fax record by providing its id
     * @summary Delete a fax
     * @param {ArchivesApiDeleteFaxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArchivesApi
     */
    deleteFax(requestParameters: ArchivesApiDeleteFaxRequest, options?: any): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Get a specific fax record details like duration, pages etc.
     * @summary Get a fax record
     * @param {ArchivesApiGetFaxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArchivesApi
     */
    getFax(requestParameters: ArchivesApiGetFaxRequest, options?: any): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Get your own or your subordinate\'s fax archive information
     * @summary List fax records
     * @param {ArchivesApiListFaxesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArchivesApi
     */
    listFaxes(requestParameters: ArchivesApiListFaxesRequest, options?: any): Promise<import("axios").AxiosResponse<any>>;
    /**
     * You can modify a fax record\'s comment or mark it as read
     * @summary Modify fax record
     * @param {ArchivesApiUpdateFaxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArchivesApi
     */
    updateFax(requestParameters: ArchivesApiUpdateFaxRequest, options?: any): Promise<import("axios").AxiosResponse<any>>;
}
