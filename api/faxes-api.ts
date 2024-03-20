/* tslint:disable */
/* eslint-disable */
/**
 * Fax.Plus REST API
 *
 * OpenAPI spec version: 3.0.3
 * Contact: info@fax.plus
 */

import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { Fax } from '../models';
// @ts-ignore
import { FaxCategory } from '../models';
// @ts-ignore
import { FaxList } from '../models';
// @ts-ignore
import { PayloadFaxModification } from '../models';
import FormData = require("form-data");
/**
 * FaxesApi - axios parameter creator
 * @export
 */
export const FaxesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Delete a specific fax record by providing its id
         * @summary Delete a fax
         * @param {string} userId self or user id of a corporate member
         * @param {string} faxId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteFax: async (userId: string, faxId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('deleteFax', 'userId', userId)
            // verify required parameter 'faxId' is not null or undefined
            assertParamExists('deleteFax', 'faxId', faxId)
            const localVarPath = `/accounts/{user_id}/faxes/{fax_id}`
                .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)))
                .replace(`{${"fax_id"}}`, encodeURIComponent(String(faxId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["all"], configuration)

            // authentication PAT required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "PAT", ["fax:all:edit"], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a specific fax record details like duration, pages etc.
         * @summary Get a fax record
         * @param {string} userId self or user id of a corporate member
         * @param {string} faxId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFax: async (userId: string, faxId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('getFax', 'userId', userId)
            // verify required parameter 'faxId' is not null or undefined
            assertParamExists('getFax', 'faxId', faxId)
            const localVarPath = `/accounts/{user_id}/faxes/{fax_id}`
                .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)))
                .replace(`{${"fax_id"}}`, encodeURIComponent(String(faxId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["all"], configuration)

            // authentication PAT required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "PAT", ["fax:all:read"], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
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
        listFaxes: async (userId: string, category?: FaxCategory, after?: string, before?: string, limit?: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('listFaxes', 'userId', userId)
            const localVarPath = `/accounts/{user_id}/faxes`
                .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["all"], configuration)

            // authentication PAT required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "PAT", ["fax:all:read"], configuration)

            if (category !== undefined) {
                localVarQueryParameter['category'] = category;
            }

            if (after !== undefined) {
                localVarQueryParameter['after'] = after;
            }

            if (before !== undefined) {
                localVarQueryParameter['before'] = before;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * You can modify a fax record\'s comment or mark it as read
         * @summary Modify fax record
         * @param {string} userId self or user id of a corporate member
         * @param {string} faxId 
         * @param {PayloadFaxModification} [payloadFaxModification] Request object for making changes in a fax object
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateFax: async (userId: string, faxId: string, payloadFaxModification?: PayloadFaxModification, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('updateFax', 'userId', userId)
            // verify required parameter 'faxId' is not null or undefined
            assertParamExists('updateFax', 'faxId', faxId)
            const localVarPath = `/accounts/{user_id}/faxes/{fax_id}`
                .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)))
                .replace(`{${"fax_id"}}`, encodeURIComponent(String(faxId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["all"], configuration)

            // authentication PAT required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "PAT", ["fax:all:edit"], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(payloadFaxModification, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FaxesApi - functional programming interface
 * @export
 */
export const FaxesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FaxesApiAxiosParamCreator(configuration)
    return {
        /**
         * Delete a specific fax record by providing its id
         * @summary Delete a fax
         * @param {FaxesApiDeleteFaxRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteFax(requestParameters: FaxesApiDeleteFaxRequest, options?: any) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteFax(requestParameters.userId, requestParameters.faxId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        }
,
        /**
         * Get a specific fax record details like duration, pages etc.
         * @summary Get a fax record
         * @param {FaxesApiGetFaxRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFax(requestParameters: FaxesApiGetFaxRequest, options?: any) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFax(requestParameters.userId, requestParameters.faxId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        }
,
        /**
         * Get your own or your subordinate\'s faxes list
         * @summary List fax records
         * @param {FaxesApiListFaxesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listFaxes(requestParameters: FaxesApiListFaxesRequest, options?: any) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listFaxes(requestParameters.userId, requestParameters.category, requestParameters.after, requestParameters.before, requestParameters.limit, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        }
,
        /**
         * You can modify a fax record\'s comment or mark it as read
         * @summary Modify fax record
         * @param {FaxesApiUpdateFaxRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateFax(requestParameters: FaxesApiUpdateFaxRequest, options?: any) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateFax(requestParameters.userId, requestParameters.faxId, requestParameters.payloadFaxModification, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        }
,
    }
};

/**
 * FaxesApi - factory interface
 * @export
 */
export const FaxesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FaxesApiFp(configuration)
    return {
        /**
         * Delete a specific fax record by providing its id
         * @summary Delete a fax
         * @param {FaxesApiDeleteFaxRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */

        deleteFax(requestParameters: FaxesApiDeleteFaxRequest, options?: any): AxiosPromise<void> {
            return localVarFp.deleteFax(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a specific fax record details like duration, pages etc.
         * @summary Get a fax record
         * @param {FaxesApiGetFaxRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */

        getFax(requestParameters: FaxesApiGetFaxRequest, options?: any): AxiosPromise<Fax> {
            return localVarFp.getFax(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get your own or your subordinate\'s faxes list
         * @summary List fax records
         * @param {FaxesApiListFaxesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */

        listFaxes(requestParameters: FaxesApiListFaxesRequest, options?: any): AxiosPromise<FaxList> {
            return localVarFp.listFaxes(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * You can modify a fax record\'s comment or mark it as read
         * @summary Modify fax record
         * @param {FaxesApiUpdateFaxRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */

        updateFax(requestParameters: FaxesApiUpdateFaxRequest, options?: any): AxiosPromise<void> {
            return localVarFp.updateFax(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
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
    readonly userId: string

    /**
     * 
     * @type {string}
     * @memberof FaxesApiDeleteFax
     */
    readonly faxId: string
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
    readonly userId: string

    /**
     * 
     * @type {string}
     * @memberof FaxesApiGetFax
     */
    readonly faxId: string
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
    readonly userId: string

    /**
     * Category parameter. Valid values: **inbox**, **sent**, **spam**
     * @type {FaxCategory}
     * @memberof FaxesApiListFaxes
     */
    readonly category?: FaxCategory

    /**
     * Start date to get records from that date. Format: *YYYY-MM-DD HH:mm:ss*
     * @type {string}
     * @memberof FaxesApiListFaxes
     */
    readonly after?: string

    /**
     * End date to get records before that date. Format: *YYYY-MM-DD HH:mm:ss*
     * @type {string}
     * @memberof FaxesApiListFaxes
     */
    readonly before?: string

    /**
     * Limit of fax records you want to get per request
     * @type {number}
     * @memberof FaxesApiListFaxes
     */
    readonly limit?: number
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
    readonly userId: string

    /**
     * 
     * @type {string}
     * @memberof FaxesApiUpdateFax
     */
    readonly faxId: string

    /**
     * Request object for making changes in a fax object
     * @type {PayloadFaxModification}
     * @memberof FaxesApiUpdateFax
     */
    readonly payloadFaxModification?: PayloadFaxModification
}

/**
 * FaxesApi - object-oriented interface
 * @export
 * @class FaxesApi
 * @extends {BaseAPI}
 */
export class FaxesApi extends BaseAPI {
    /**
     * Delete a specific fax record by providing its id
     * @summary Delete a fax
     * @param {FaxesApiDeleteFaxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FaxesApi
     */
    public deleteFax(requestParameters: FaxesApiDeleteFaxRequest, options?: any) {
        return FaxesApiFp(this.configuration).deleteFax(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a specific fax record details like duration, pages etc.
     * @summary Get a fax record
     * @param {FaxesApiGetFaxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FaxesApi
     */
    public getFax(requestParameters: FaxesApiGetFaxRequest, options?: any) {
        return FaxesApiFp(this.configuration).getFax(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get your own or your subordinate\'s faxes list
     * @summary List fax records
     * @param {FaxesApiListFaxesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FaxesApi
     */
    public listFaxes(requestParameters: FaxesApiListFaxesRequest, options?: any) {
        return FaxesApiFp(this.configuration).listFaxes(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * You can modify a fax record\'s comment or mark it as read
     * @summary Modify fax record
     * @param {FaxesApiUpdateFaxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FaxesApi
     */
    public updateFax(requestParameters: FaxesApiUpdateFaxRequest, options?: any) {
        return FaxesApiFp(this.configuration).updateFax(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
