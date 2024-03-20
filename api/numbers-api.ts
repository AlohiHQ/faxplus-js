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
import { Number } from '../models';
// @ts-ignore
import { NumberList } from '../models';
// @ts-ignore
import { PayloadNumberModification } from '../models';
import FormData = require("form-data");
/**
 * NumbersApi - axios parameter creator
 * @export
 */
export const NumbersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get information about a single purchased/assigned fax number
         * @summary Get number information
         * @param {string} userId ID of the number owner
         * @param {string} number Fax number to get information about
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNumber: async (userId: string, number: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('getNumber', 'userId', userId)
            // verify required parameter 'number' is not null or undefined
            assertParamExists('getNumber', 'number', number)
            const localVarPath = `/accounts/{user_id}/numbers/{number}`
                .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)))
                .replace(`{${"number"}}`, encodeURIComponent(String(number)));
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
         * List your purchased/assigned phone numbers. For corporate members all assigned numbers will be returned, while for the corporate admin, all purchased numbers
         * @summary List phone numbers
         * @param {string} userId ID of the user to get numbers for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listNumbers: async (userId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('listNumbers', 'userId', userId)
            const localVarPath = `/accounts/{user_id}/numbers`
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Revoke fax number from a corporate member. To revoke your own number use self as a user_id
         * @summary Revoke number
         * @param {string} userId ID of the user to revoke the number from. Number can not be removed from the admin
         * @param {string} number Fax number to remove members from
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        revokeNumber: async (userId: string, number: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('revokeNumber', 'userId', userId)
            // verify required parameter 'number' is not null or undefined
            assertParamExists('revokeNumber', 'number', number)
            const localVarPath = `/accounts/{user_id}/numbers/{number}`
                .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)))
                .replace(`{${"number"}}`, encodeURIComponent(String(number)));
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
         * Assign fax number to a corporate member
         * @summary Assign number
         * @param {string} userId ID of the number owner
         * @param {string} number Fax number to update
         * @param {PayloadNumberModification} [payloadNumberModification] Request object for making changes in number object
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateNumber: async (userId: string, number: string, payloadNumberModification?: PayloadNumberModification, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('updateNumber', 'userId', userId)
            // verify required parameter 'number' is not null or undefined
            assertParamExists('updateNumber', 'number', number)
            const localVarPath = `/accounts/{user_id}/numbers/{number}`
                .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)))
                .replace(`{${"number"}}`, encodeURIComponent(String(number)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(payloadNumberModification, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * NumbersApi - functional programming interface
 * @export
 */
export const NumbersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = NumbersApiAxiosParamCreator(configuration)
    return {
        /**
         * Get information about a single purchased/assigned fax number
         * @summary Get number information
         * @param {NumbersApiGetNumberRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getNumber(requestParameters: NumbersApiGetNumberRequest, options?: any) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getNumber(requestParameters.userId, requestParameters.number, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        }
,
        /**
         * List your purchased/assigned phone numbers. For corporate members all assigned numbers will be returned, while for the corporate admin, all purchased numbers
         * @summary List phone numbers
         * @param {NumbersApiListNumbersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listNumbers(requestParameters: NumbersApiListNumbersRequest, options?: any) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listNumbers(requestParameters.userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        }
,
        /**
         * Revoke fax number from a corporate member. To revoke your own number use self as a user_id
         * @summary Revoke number
         * @param {NumbersApiRevokeNumberRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async revokeNumber(requestParameters: NumbersApiRevokeNumberRequest, options?: any) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.revokeNumber(requestParameters.userId, requestParameters.number, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        }
,
        /**
         * Assign fax number to a corporate member
         * @summary Assign number
         * @param {NumbersApiUpdateNumberRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateNumber(requestParameters: NumbersApiUpdateNumberRequest, options?: any) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateNumber(requestParameters.userId, requestParameters.number, requestParameters.payloadNumberModification, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        }
,
    }
};

/**
 * NumbersApi - factory interface
 * @export
 */
export const NumbersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = NumbersApiFp(configuration)
    return {
        /**
         * Get information about a single purchased/assigned fax number
         * @summary Get number information
         * @param {NumbersApiGetNumberRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */

        getNumber(requestParameters: NumbersApiGetNumberRequest, options?: any): AxiosPromise<Number> {
            return localVarFp.getNumber(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * List your purchased/assigned phone numbers. For corporate members all assigned numbers will be returned, while for the corporate admin, all purchased numbers
         * @summary List phone numbers
         * @param {NumbersApiListNumbersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */

        listNumbers(requestParameters: NumbersApiListNumbersRequest, options?: any): AxiosPromise<NumberList> {
            return localVarFp.listNumbers(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Revoke fax number from a corporate member. To revoke your own number use self as a user_id
         * @summary Revoke number
         * @param {NumbersApiRevokeNumberRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */

        revokeNumber(requestParameters: NumbersApiRevokeNumberRequest, options?: any): AxiosPromise<void> {
            return localVarFp.revokeNumber(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Assign fax number to a corporate member
         * @summary Assign number
         * @param {NumbersApiUpdateNumberRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */

        updateNumber(requestParameters: NumbersApiUpdateNumberRequest, options?: any): AxiosPromise<void> {
            return localVarFp.updateNumber(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
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
    readonly userId: string

    /**
     * Fax number to get information about
     * @type {string}
     * @memberof NumbersApiGetNumber
     */
    readonly number: string
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
    readonly userId: string
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
    readonly userId: string

    /**
     * Fax number to remove members from
     * @type {string}
     * @memberof NumbersApiRevokeNumber
     */
    readonly number: string
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
    readonly userId: string

    /**
     * Fax number to update
     * @type {string}
     * @memberof NumbersApiUpdateNumber
     */
    readonly number: string

    /**
     * Request object for making changes in number object
     * @type {PayloadNumberModification}
     * @memberof NumbersApiUpdateNumber
     */
    readonly payloadNumberModification?: PayloadNumberModification
}

/**
 * NumbersApi - object-oriented interface
 * @export
 * @class NumbersApi
 * @extends {BaseAPI}
 */
export class NumbersApi extends BaseAPI {
    /**
     * Get information about a single purchased/assigned fax number
     * @summary Get number information
     * @param {NumbersApiGetNumberRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NumbersApi
     */
    public getNumber(requestParameters: NumbersApiGetNumberRequest, options?: any) {
        return NumbersApiFp(this.configuration).getNumber(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List your purchased/assigned phone numbers. For corporate members all assigned numbers will be returned, while for the corporate admin, all purchased numbers
     * @summary List phone numbers
     * @param {NumbersApiListNumbersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NumbersApi
     */
    public listNumbers(requestParameters: NumbersApiListNumbersRequest, options?: any) {
        return NumbersApiFp(this.configuration).listNumbers(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Revoke fax number from a corporate member. To revoke your own number use self as a user_id
     * @summary Revoke number
     * @param {NumbersApiRevokeNumberRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NumbersApi
     */
    public revokeNumber(requestParameters: NumbersApiRevokeNumberRequest, options?: any) {
        return NumbersApiFp(this.configuration).revokeNumber(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Assign fax number to a corporate member
     * @summary Assign number
     * @param {NumbersApiUpdateNumberRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NumbersApi
     */
    public updateNumber(requestParameters: NumbersApiUpdateNumberRequest, options?: any) {
        return NumbersApiFp(this.configuration).updateNumber(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
